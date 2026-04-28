# GGI App Starter

## Purpose
GGI App Starter is the default production base for building products created by GGI Hub.

GGI Hub is the brand, studio, and solution company. The individual products built from this repo can be client-specific, white-label, industry-specific, or eventually turned into standalone offers.

This repository should serve as the clean starting point for future builds instead of creating a new app from scratch every time.

## Strategic Role
This is the reusable software base for the GGI product ecosystem.

GGI produces products such as:

- event landing page systems
- church follow-up systems
- leadership pipeline tools
- client dashboards
- intake portals
- AI-assisted workflow tools
- CRM-style portals
- proof-of-concept apps
- MVPs for partners and clients

## Product Architecture

```text
GGI Hub = the parent brand / production studio

Products = reusable solutions produced by GGI

Clients = churches, nonprofits, schools, businesses, ministries, civic groups, and entrepreneurs using those products
```

The goal is not to make every build feel like GGI. The goal is for GGI to produce clean, repeatable products that can be branded for the client or packaged as GGI-powered solutions.

## Build Philosophy

Every product should be:

- reusable
- client-neutral by default
- easy to customize
- easy to deploy
- simple to explain
- built around a real business or ministry problem
- designed so GGI can sell it more than once

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
  templates/
components/
  ui/
  forms/
  dashboard/
  templates/
lib/
  supabase/
  ai/
  utils/
  products/
docs/
  setup.md
  deployment.md
  ggi-design-os.md
```

## Development

```bash
npm install
npm run dev
```

Open http://localhost:3000 to view the app.

## Roadmap
- Add universal template system
- Add Supabase auth pattern
- Add dashboard shell
- Add AI chat module
- Add intake form module
- Add reusable client onboarding flow
- Add deployment instructions
- Add product catalog for GGI-built solutions

## Notes
This repo replaces older generic starter projects and should be treated as the preferred starting point for new GGI Hub product builds.
