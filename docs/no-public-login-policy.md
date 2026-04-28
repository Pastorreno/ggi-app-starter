# No Public Login Policy for GGI Solutions

## Decision

Public visitors, prospects, businesses, churches, nonprofits, and clients should not need to create an account or log in to use the GGI Solutions website.

The public site must stay frictionless.

## Public Visitors Should Be Able To

- view services
- use the Solution Finder
- request a quote
- submit an inquiry
- view website packages
- view custom qualifier demo
- contact GGI Solutions

without logging in.

## Auth Is For Internal/Admin Use Only

Authentication may be added later for:

- Reno/admin dashboard
- internal lead management
- project management
- template management
- private client portals only when needed

But auth should not block the public sales funnel.

## Correct Architecture

```text
Public Website = no login required
Admin Portal = login required
Optional Client Portal = login only if a client project requires it
```

## Public Routes

These should remain public:

```text
/
/services
/qualifier
/custom-qualifiers
/contact
/event-pages
/demo-event
/church-follow-up
```

## Protected Routes Later

Only these should require auth if built:

```text
/admin
/portal
/portal/leads
/portal/projects
/portal/templates
/portal/settings
```

## Lead Capture Rule

Use public forms first.

Leads should submit information without logging in.

Recommended first lead capture:

```text
Google Form or public contact form
```

Later upgrade:

```text
Supabase database + admin-only dashboard
```

## Executive Rule

Do not add login friction to the buyer journey.

People should be able to inquire in less than two minutes.

## Final Decision

GGI Solutions should launch as a public sales website with no public login requirement.

Auth is optional and internal only.
