# Feature boundaries

Zivana is organized around a mission, not a chat transcript. Feature modules
define contracts first; persistence, workers, model providers, and external
actions should be added behind these boundaries instead of inside UI
components.

## Current foundations

- `missions/` — the durable unit of work and its lifecycle from objective to
  replanning.
- `intelligence/` — reasoning, opportunity discovery, evaluation, routing,
  memory, skills, verification, learning, and replanning boundaries.
- `execution/` — authorized computer, browser, API, and external-tool actions
  with retries and verification plans.
- `outcomes/` — evidence-backed results and financial impact states.

These are contracts only. No fake missions, model calls, workers, execution
events, revenue, or results are created by the foundation.