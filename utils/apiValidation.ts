import { NextApiRequest, NextApiResponse } from "next"
import { z, ZodSchema } from "zod"

/**
 * Type-safe API handler with automatic validation
 */
export type ValidatedApiHandler<T = any> = (
  req: NextApiRequest,
  res: NextApiResponse,
  validatedData: T,
) => Promise<void> | void

/**
 * Middleware to validate API request body against a Zod schema
 * Automatically returns 400 error if validation fails
 *
 * @param schema - Zod schema to validate request body against
 * @param handler - API handler to execute if validation passes
 *
 * @example
 * ```ts
 * const contactSchema = z.object({
 *   name: z.string().min(1).max(100),
 *   email: z.string().email(),
 *   message: z.string().min(10).max(1000)
 * })
 *
 * export default validateRequest(contactSchema, async (req, res, data) => {
 *   // data is now typed and validated
 *   await sendEmail(data.email, data.message)
 *   res.status(200).json({ success: true })
 * })
 * ```
 */
export function validateRequest<T>(
  schema: ZodSchema<T>,
  handler: ValidatedApiHandler<T>,
) {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      // Validate request body
      const validatedData = schema.parse(req.body)

      // Call the handler with validated data
      return await handler(req, res, validatedData)
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Return validation errors
        return res.status(400).json({
          error: "Validation failed",
          details: error.errors.map((err) => ({
            field: err.path.join("."),
            message: err.message,
          })),
        })
      }

      // Re-throw other errors to be handled by Next.js
      throw error
    }
  }
}

/**
 * Rate limiting middleware (simple in-memory implementation)
 * For production, consider using Redis or a dedicated service like Upstash
 */
const requestCounts = new Map<string, { count: number; resetTime: number }>()

export function rateLimit(
  maxRequests: number = 10,
  windowMs: number = 60000, // 1 minute
) {
  return (req: NextApiRequest, res: NextApiResponse, next: () => void) => {
    const ip =
      req.headers["x-forwarded-for"] || req.socket.remoteAddress || "unknown"
    const key = `${ip}-${req.url}`
    const now = Date.now()

    const record = requestCounts.get(key)

    if (!record || now > record.resetTime) {
      // New window
      requestCounts.set(key, {
        count: 1,
        resetTime: now + windowMs,
      })
      return next()
    }

    if (record.count >= maxRequests) {
      return res.status(429).json({
        error: "Too many requests",
        retryAfter: Math.ceil((record.resetTime - now) / 1000),
      })
    }

    record.count++
    return next()
  }
}

/**
 * Sanitize string input to prevent injection attacks
 */
export function sanitizeString(
  input: string,
  maxLength: number = 1000,
): string {
  return input.trim().slice(0, maxLength).replace(/[<>]/g, "") // Remove basic HTML tags
}

/**
 * Common validation schemas for reuse
 */
export const commonSchemas = {
  email: z.string().email().max(255),
  name: z
    .string()
    .min(1)
    .max(100)
    .regex(/^[a-zA-ZåäöÅÄÖ\s'-]+$/, "Invalid name format"),
  phone: z
    .string()
    .regex(
      /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,9}$/,
      "Invalid phone number",
    ),
  message: z.string().min(10).max(5000),
  url: z.string().url().max(2048),
}

/**
 * Validation schema for newsletter subscription
 */
export const newsletterSchema = z.object({
  email: commonSchemas.email,
  firstName: z.string().min(1).max(50).optional(),
  lastName: z.string().min(1).max(50).optional(),
})

/**
 * Validation schema for contact form
 */
export const contactSchema = z.object({
  firstName: commonSchemas.name,
  lastName: commonSchemas.name,
  email: commonSchemas.email,
  phone: commonSchemas.phone.optional(),
  message: commonSchemas.message,
})

/**
 * Validation schema for contract registration
 */
export const contractSchema = z.object({
  name: commonSchemas.name,
  email: commonSchemas.email,
})
