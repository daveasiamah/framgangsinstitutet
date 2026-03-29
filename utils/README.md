# Security Utilities

This directory contains security utilities for the framgångsinstitutet UI application.

## Files

### `sanitize.ts`

HTML sanitization utilities to prevent XSS attacks.

**Functions:**

- `sanitizeHTML(dirty, options?)` - Sanitize HTML with configurable rules
- `sanitizeUserInput(dirty)` - Strict sanitization for user content
- `stripHTML(dirty)` - Remove all HTML tags
- `useSanitizedHTML(dirty, options?)` - React hook for memoized sanitization

**Example:**

```typescript
import { sanitizeHTML, useSanitizedHTML } from '@/utils/sanitize'

// In a component
const MyComponent = ({ content }) => {
  const safe = useSanitizedHTML(content)
  return <div dangerouslySetInnerHTML={{ __html: safe }} />
}
```

### `apiValidation.ts`

API validation middleware using Zod for type-safe request validation.

**Functions:**

- `validateRequest(schema, handler)` - Middleware for automatic validation
- `rateLimit(maxRequests, windowMs)` - Simple rate limiting
- `sanitizeString(input, maxLength)` - String sanitization

**Schemas:**

- `commonSchemas.email` - Email validation
- `commonSchemas.name` - Name validation
- `commonSchemas.phone` - Phone number validation
- `commonSchemas.message` - Message validation
- `newsletterSchema` - Newsletter subscription
- `contactSchema` - Contact form
- `contractSchema` - Contract registration

**Example:**

```typescript
import { validateRequest, contactSchema } from "@/utils/apiValidation"

export default validateRequest(contactSchema, async (req, res, data) => {
  // data is type-safe and validated
  const { email, firstName, lastName, message } = data

  // Your logic here
  res.status(200).json({ success: true })
})
```

## Dependencies

- `isomorphic-dompurify` - HTML sanitization
- `zod` - Schema validation

## Security Best Practices

1. **Always sanitize user-generated HTML** before rendering
2. **Validate all API inputs** using Zod schemas
3. **Use httpOnly cookies** for sensitive tokens (not localStorage)
4. **Implement rate limiting** on public APIs
5. **Keep dependencies updated** for security patches

## Related Documentation

- [SECURITY_AUDIT_2026.md](../SECURITY_AUDIT_2026.md) - Full security audit
- [SECURITY_IMPROVEMENTS.md](../SECURITY_IMPROVEMENTS.md) - Implementation guide
- [SECURITY_FIXES_SUMMARY.md](../SECURITY_FIXES_SUMMARY.md) - Summary of fixes
