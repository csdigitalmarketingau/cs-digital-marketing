# Dashboard: Website Building Section (Roadmap)

Planning doc for a new "Website" section in the GBP dashboard
(`E:\Users\Coen\Claude\gbp-dashboard`, FastAPI + SQLite backend, React + Vite frontend).
Specifics to be finalised in a dedicated session. This captures the agreed scope.

## Purpose

Bring client website builds into the dashboard the same way the GBP programme is tracked,
plus manage the blog and reuse website templates to save time and tokens.

## Three components

### 1. Client Website Build Tracker
Mirror the existing 12-week ClientMilestone tracker, but for website builds against
`WEBSITE-BUILD-SOP.md`. Each client gets a build record with checklist items grouped by
the SOP phases:

- Domain & hosting (DNS fixed, deployed, all 3 hosts resolve)
- Architecture (pages built vs planned, 30+ target)
- Content rules pass (Stop-Slop, no em dashes, no placeholders)
- On-page SEO (metadata, headings, alt text per page)
- Schema (which JSON-LD types present)
- Breadcrumbs / nav / footer
- Technical files (sitemap, robots, meta robots)
- Post-launch audit checklist (from SOP §9)

Likely models: `WebsiteBuild` (client_id, domain, status, launch_date) and
`WebsiteBuildTask` (recurring/checklist pattern like ClientTask). Reuse the milestone/task
UI components.

### 2. Blog Content Manager
UI over the MDX blog pipeline (see BLOG-QUEUE.md):

- The seed queue as a managed list (status: queued / drafting / in-review / published)
- Draft storage and the approval gate (approve → commit/push, or open PR)
- After automation lands: trigger the scheduled drafting agent, review its output here
- **Self-learning data:** store per-post performance (Search Console impressions, clicks,
  avg position for the post's target keyword; traffic). Same pattern as the outreach
  NicheInsight / VariantStats analytics already in the dashboard. This data drives
  AI-suggested topics and eventual full automation.

### 3. Website Template Library
5-10 ready-to-go website templates so a new client site starts from a near-complete base
(modify copy only — saves build time and Claude tokens).

- Each template = a variant of the csdigitalmarketing.au Next.js build (this repo is the
  reference). Likely stored as separate starter repos or a templates monorepo, with the
  dashboard cataloguing them (name, niche fit, screenshot, what needs changing).
- A new client build = clone template → swap brand, copy, NAP, area/industry pages → deploy.
- Open question for the build session: how templates are stored (separate repos vs branches
  vs a generator), and how much the dashboard automates the clone-and-customise step.

## Sequencing (proposed)
1. Build Tracker first (most immediately useful, reuses existing milestone/task patterns).
2. Blog Manager next (pairs with blog Phase 5c automation).
3. Template Library last (biggest/most open-ended; depends on having built a few client sites
   to know what to templatise).

## Cross-references
- `WEBSITE-BUILD-SOP.md` — the process the build tracker checks against
- `BLOG-QUEUE.md` — the blog pipeline the blog manager wraps
