# Final Launch Stack Decision for GGI Solutions

## Goal

Get GGI Solutions live quickly, professionally, and without overbuilding.

## Available Tools

Reno has access to:

- GitHub
- Vercel-style Next.js deployment path
- Replit
- Hostinger
- Google products
- Google AI Studio

## Executive Recommendation

Use this stack:

```text
Website code: GitHub repo
Hosting/deployment: Vercel
Domain: Hostinger
Business operations: Google Workspace / Google Forms / Google Sheets
AI prototyping: Google AI Studio
```

## Why Vercel Should Host the Website

The current GGI Solutions site is built with Next.js.

Vercel is the cleanest and easiest production host for Next.js sites.

Use Vercel because:

- it connects directly to GitHub
- every push can auto-deploy
- it is built for Next.js
- it gives preview deployments
- it is easier than manually uploading code to Hostinger
- it will scale as the site grows
- it supports future API routes and AI features

## What Hostinger Should Be Used For

Use Hostinger for the domain if the domain is already purchased there.

Hostinger should handle:

- domain purchase
- DNS settings
- domain forwarding/connection to Vercel
- possible business email if Google Workspace is not used

Do not use Hostinger as the main app host for this Next.js build unless there is a specific reason.

## What Replit Should Be Used For

Use Replit for experiments, prototypes, quick scripts, and demos.

Replit is useful for:

- testing ideas
- quick bots
- temporary APIs
- small automation scripts
- learning and experimenting

Do not use Replit as the primary host for the company website if the site is already in GitHub and designed for Vercel.

## What Google Should Be Used For

Use Google for the business layer:

- Google Workspace for email
- Google Forms for project inquiries
- Google Sheets for lead tracking
- Google Drive for client files
- Google Calendar for booking
- Google AI Studio for Gemini qualifier logic and AI experiments
- Google Analytics and Search Console for traffic tracking

## Simple Launch Plan

## Step 1: Deploy Website to Vercel

Connect the GitHub repo:

```text
Pastorreno/ggi-app-starter
```

Deploy the site.

## Step 2: Connect Domain from Hostinger

Buy or use a domain such as:

```text
ggisolutions.com
getggisolutions.com
buildwithggi.com
```

Point the domain DNS to Vercel.

## Step 3: Create Google Inquiry Form

Create:

```text
GGI Solutions Project Inquiry
```

Add fields:

```text
Name
Email
Phone
Organization
Organization Type
What do you need help with?
Budget range
Timeline
Project details
```

Connect it to Google Sheets.

## Step 4: Link Form to Site

Until the site has a custom backend, use the Google Form link on the contact page and CTA buttons.

## Step 5: Add Analytics

Add:

- Google Analytics
- Google Search Console

## Step 6: Launch Publicly

Post the launch announcement and start taking inquiries.

## Tool Decision Table

| Need | Best Tool |
| --- | --- |
| Public website hosting | Vercel |
| Code storage | GitHub |
| Domain | Hostinger |
| Business email | Google Workspace |
| Lead forms | Google Forms first |
| Lead tracking | Google Sheets |
| Client files | Google Drive |
| AI qualifier prototyping | Google AI Studio |
| Experiments/scripts | Replit |

## Final CEO Rule

Do not rebuild the website in Replit, Hostinger builder, or Google AI Studio.

Use the site already built in GitHub.

Deploy it with Vercel.

Use Hostinger for domain.

Use Google for business operations.

That is the cleanest path to launch.
