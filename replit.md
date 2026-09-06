# Zivana development notes

## Run the app

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

The Replit workflow serves the app on port `5000`. The production commands
are `npm run build` and `npm run start`.

## Checks

Run the foundation checks before opening a pull request:

```bash
npm run typecheck
npm run lint
npm run build
```

The project contains a public operator landing page at `/`, Clerk sign-in and
sign-up routes, and an organization-aware protected command center at
`/dashboard`. The UI is mission-centric and intentionally honest: objective
capture is browser-local only, while persistence, model routing, workers,
execution, and financial measurement are not connected yet.

The mission lifecycle and future subsystem contracts are documented under
`features/`. Keep authentication and organization authorization server-side,
and keep future external actions behind explicit approval and verification
boundaries.