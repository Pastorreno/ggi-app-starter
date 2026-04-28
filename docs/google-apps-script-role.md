# Google Apps Script Role in GGI Solutions

## Decision

Google Apps Script should be included in the GGI Solutions operating stack, but it should not host the public website.

Apps Script is best used as automation glue between Google Forms, Google Sheets, Gmail, Calendar, Telegram, and client workflows.

## Correct Role

```text
Vercel = public website
GitHub = code
Hostinger = domain
Google Forms = simple intake
Google Sheets = lead/project database
Google Apps Script = automation layer
Telegram = instant lead alerts
Google AI Studio/Gemini = AI logic and summaries
```

## Best Use Cases

### 1. Website Inquiry Routing

When someone submits a Google Form:

- save response to Google Sheets
- email Reno
- send Telegram alert
- tag lead type
- create follow-up date

### 2. Lead Tracker Automation

Apps Script can:

- timestamp leads
- assign status
- flag urgent leads
- create follow-up reminders
- send daily lead digest

### 3. Client Intake Automation

For website/event clients:

- create client folder in Google Drive
- generate intake doc
- log project in Google Sheets
- send confirmation email

### 4. Telegram Notifications

Apps Script can call the Telegram Bot API and send Reno new lead details instantly.

### 5. Reporting

Apps Script can create weekly summaries from Sheets:

- new leads
- open projects
- overdue follow-ups
- quotes pending

## First Recommended Apps Script Build

Build this first:

```text
Google Form → Google Sheet → Apps Script → Telegram alert + email confirmation
```

This is simple, useful, and aligned with launch.

## Why This Works

Apps Script fits Reno because the business already uses Google products.

It gives GGI Solutions automation power without needing a full custom backend on day one.

## What Not To Do

Do not use Apps Script to replace the public Next.js site.

Do not overbuild workflows before leads are coming in.

Use it for simple automation that helps Reno respond faster.

## Final Recommendation

Yes, include Google Apps Script.

Use it first for lead routing, Telegram alerts, Google Sheets updates, email confirmations, and project intake automation.
