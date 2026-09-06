# Zivana

Zivana is a Next.js foundation for an autonomous AI operator: a
mission-centric command surface for turning high-level objectives into
measurable outcomes over time.

## Stack

- Next.js with the App Router
- React and TypeScript
- Tailwind CSS
- ESLint

## Local development

```bash
npm install
npm run dev
```

The development server runs on port `5000`.

## Available checks

```bash
npm run lint
npm run typecheck
npm run build
```

The public landing page is available at `/`. Clerk protects `/dashboard`,
with sign-in and sign-up handled at `/sign-in` and `/sign-up`. The dashboard
is an organization-aware command center with a browser-local mission objective
composer, lifecycle model, and explicit empty states. Persistence, model
routing, workers, real-world execution, and financial measurement are
intentionally not wired yet.

## Product foundation

The core loop is modeled as:

`Objective → Understand → Discover → Evaluate → Plan → Approve → Execute → Verify → Measure → Record → Learn → Replan`

Mission, intelligence, execution, and outcome contracts live under
`features/`. They are boundaries for future server-side systems, not fake
implementations.