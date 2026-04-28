# Auth + Portal Blueprint for GGI Solutions

## Goal

GGI Solutions should become more than a public website.

It should become a secure operating portal where Reno can manage leads, client projects, templates, demos, qualifiers, follow-up systems, messaging worlds, and development products.

## Recommended Auth Stack

Use Supabase Auth because the repo already includes Supabase packages:

```text
@supabase/ssr
@supabase/supabase-js
```

## Public Site

These pages remain public:

```text
/
/services
/qualifier
/custom-qualifiers
/event-pages
/demo-event
/church-follow-up
/contact
```

## Protected Portal

These pages should require login:

```text
/portal
/portal/leads
/portal/projects
/portal/templates
/portal/qualifiers
/portal/follow-up
/portal/messaging-worlds
/portal/development-systems
/portal/settings
```

## First Auth Build

Phase 1 should include:

1. Supabase client utilities
2. Login page
3. Protected portal layout
4. Portal dashboard shell
5. Environment variable setup
6. Middleware or server-side auth guard

## Environment Variables

Needed in Vercel and local `.env.local`:

```text
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

## Portal Dashboard Sections

## Leads

Track website inquiries, qualifier results, and form submissions.

## Projects

Track active client builds:

- websites
- qualifiers
- follow-up systems
- messaging worlds
- development systems

## Templates

Store reusable product templates:

- event page templates
- website templates
- qualifier templates
- follow-up templates
- messaging world templates

## Qualifiers

Manage custom qualifier builds for clients.

## Follow-Up Systems

Track follow-up workflows and client systems.

## Messaging Worlds

Track WhatsApp and Telegram world builds.

## Development Systems

Track Free 2 Grow, PurposePath OS, GrowthPath OS, and LeaderRise OS.

## Recommended First Portal UI

Use a simple internal dashboard first.

Do not overbuild.

The first dashboard should show:

- total leads
- open projects
- pending quotes
- monthly recurring opportunities
- next actions

## Executive Rule

Authentication should protect the business operating system, not block the public sales site.

Public site sells.

Portal operates.

## Final Decision

Build auth into the current Next.js site using Supabase.

Use the portal as the private command center for GGI Solutions.
