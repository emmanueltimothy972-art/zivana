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

The project currently contains a public landing page at `/` and a static
workspace shell at `/dashboard`. Authentication, persistence, and product
services are intentionally not connected yet.