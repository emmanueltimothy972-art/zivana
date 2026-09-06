# Server boundaries

Server-only application logic, mission persistence, background jobs, workers,
and browser/computer automation integrations should be added here as those
capabilities are implemented. Keep external services behind small, explicit
interfaces.

Future server boundaries should enforce organization tenancy and support
long-running mission execution independently of the user's browser. Real-world
actions require approvals, retries, audit evidence, and verification; do not
simulate those concerns in the UI.