# GGI App Starter

## Purpose
GGI App Starter is the default foundation for building GGI Hub applications, client portals, dashboards, AI tools, and proof-of-concept products.

This repository should serve as the clean starting point for future builds instead of creating a new app from scratch every time.

## Strategic Role
This is the reusable software base for GGI Hub.

Use it for:

- AI consulting demos
- Client dashboards
- Church systems
- Intake forms
- CRM-style portals
- Supabase-backed apps
- MVPs and prototypes

## Core Stack
- Next.js
- React
- TypeScript
- Tailwind CSS
- Supabase

## Recommended App Modules
Future builds can reuse this structure:

```text
app/
  dashboard/
  intake/
  auth/
  api/
components/
  ui/
  forms/
  dashboard/
lib/
  supabase/
  ai/
  utils/
docs/
  setup.md
  deployment.md
```

## Development

```bash
npm install
npm run dev
```

Open http://localhost:3000 to view the app.

## Roadmap
- Add Supabase auth pattern
- Add dashboard shell
- Add AI chat module
- Add intake form module
- Add reusable client onboarding flow
- Add deployment instructions

## Notes
This repo replaces older generic starter projects and should be treated as the preferred starting point for new GGI Hub builds.
