import DOMPurify from "isomorphic-dompurify"

/**
 * Sanitizes HTML content to prevent XSS attacks
 * Use this instead of dangerouslySetInnerHTML when rendering user-generated content
 *
 * @param dirty - The HTML string to sanitize
 * @param options - Optional DOMPurify configuration
 * @returns Sanitized HTML string safe for rendering
 *
 * @example
 * ```tsx
 * <div dangerouslySetInnerHTML={{ __html: sanitizeHTML(userContent) }} />
 * ```
 */
export function sanitizeHTML(
  dirty: string,
  options?: DOMPurify.Config,
): string {
  // Default configuration - allows most formatting but strips dangerous elements
  const defaultConfig: DOMPurify.Config = {
    ALLOWED_TAGS: [
      "p",
      "br",
      "strong",
      "em",
      "u",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "ul",
      "ol",
      "li",
      "a",
      "img",
      "blockquote",
      "code",
      "pre",
      "span",
      "div",
      "table",
      "thead",
      "tbody",
      "tr",
      "th",
      "td",
    ],
    ALLOWED_ATTR: [
      "href",
      "src",
      "alt",
      "title",
      "class",
      "id",
      "target",
      "rel",
    ],
    ALLOW_DATA_ATTR: false,
    ALLOW_UNKNOWN_PROTOCOLS: false,
    ALLOWED_URI_REGEXP:
      /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i,
  }

  const config = { ...defaultConfig, ...options }

  return DOMPurify.sanitize(dirty, config)
}

/**
 * Sanitizes HTML content with stricter rules for user comments/input
 * Removes most HTML tags, keeping only basic formatting
 *
 * @param dirty - The HTML string to sanitize
 * @returns Sanitized HTML string with limited formatting
 */
export function sanitizeUserInput(dirty: string): string {
  return sanitizeHTML(dirty, {
    ALLOWED_TAGS: ["p", "br", "strong", "em", "u"],
    ALLOWED_ATTR: [],
  })
}

/**
 * Strips all HTML tags and returns plain text
 * Use for displaying content where no HTML is needed
 *
 * @param dirty - The HTML string to strip
 * @returns Plain text content
 */
export function stripHTML(dirty: string): string {
  return DOMPurify.sanitize(dirty, {
    ALLOWED_TAGS: [],
    ALLOWED_ATTR: [],
    KEEP_CONTENT: true,
  })
}

/**
 * React hook for sanitizing HTML content
 * Memoizes the result to avoid unnecessary sanitization
 *
 * @example
 * ```tsx
 * function MyComponent({ content }: { content: string }) {
 *   const sanitized = useSanitizedHTML(content)
 *   return <div dangerouslySetInnerHTML={{ __html: sanitized }} />
 * }
 * ```
 */
import { useMemo } from "react"

export function useSanitizedHTML(
  dirty: string,
  options?: DOMPurify.Config,
): string {
  return useMemo(() => sanitizeHTML(dirty, options), [dirty, options])
}
