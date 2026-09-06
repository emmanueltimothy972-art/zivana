---
name: Clerk and Next compatibility
description: Version-specific auth boundaries and external key requirements for this Next.js foundation.
---

Use Clerk Core 3-compatible client state (`useAuth`) for public signed-in/signed-out actions, and keep route protection in server-rendered pages while `proxy.ts` only establishes Clerk request context. Next 16 uses `proxy.ts` rather than `middleware.ts`.

**Why:** The installed Clerk and Next versions removed older wrapper APIs and deprecated matcher-based middleware checks; the browser SDK also requires the publishable and secret keys to come from the same Clerk instance.

**How to apply:** Preserve the current boundary when extending auth, and verify the externally managed Clerk key pair before diagnosing a browser auth mount as an application bug.