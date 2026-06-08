# GBP Package Playbook (Internal)

The week-by-week runbook for delivering the GBP / local SEO package. Internal only.
Pairs with the dashboard (milestone tracker, tasks, citations panel, review templates,
findings engine). Review Management has its own detailed SOP: see REVIEW-MANAGEMENT-SOP.md.

## The offer (what we sold)
- $500/month, a structured **12-week programme** to get the client ranking in the Google
  Map Pack for their target terms, with optional monthly maintenance after.
- Five components: **GBP Optimisation, Local SEO, Citation Building, On-Page SEO,
  Review Management.** Local SEO is the umbrella; the other four are the levers.
- Most clients see movement in 4-6 weeks. No lock-in.

## The timeline (must match the website)
| Phase | Weeks | Focus |
|-------|-------|-------|
| Audit & Benchmark | 1 | Baseline, competitors, target terms |
| GBP Optimisation | 2-4 | Profile, services, review system |
| Website (On-Page) | 5-6 | Titles, schema, NAP, service/area pages |
| Directory Listings | 7-10 | 15+ citations, NAP consistency |
| Review & Report | 11-12 | Velocity check, before/after report |

Keep this in sync with `src/app/services/page.tsx` and the dashboard milestones
(`seed_milestones.py`). If one changes, change all three.

## The NAP standard (set this first, use it everywhere)
Pick ONE canonical version of Name, Address, Phone and use it byte-for-byte on the GBP,
the website, and every citation. Inconsistent NAP dilutes ranking power.
- **Name:** exactly as on the GBP (no keyword stuffing).
- **Address:** one format (abbreviations, suite/unit style, state, postcode).
- **Phone:** one number, same format everywhere.
Record the canonical NAP in the client's notes before any citation work.

---

## Week 1 - Audit & Benchmark
Goal: a clear baseline and a target list.
1. Create the client in the dashboard; init milestones and tasks.
2. Run the baseline **heatmap** (LeadSnap) for the primary term. Save screenshots.
3. Create an **Audit Run**: capture GBP state (categories, services, photos, NAP,
   description, hours, attributes, bookings), review count/rating/recency, indexed pages,
   schema/map/FAQ, ranking positions.
4. Run **detection** in the dashboard and apply the suggested findings.
5. **Competitive analysis:** note the current top 3 for the main term, their review counts,
   service counts, categories (audit_run competitor fields). Flag dodgy listings.
6. Agree the **primary target terms** and the canonical **NAP**.
- Milestones: `benchmark-heatmap`, `competitive-analysis`.
- Definition of done: baseline heatmap saved, audit + findings logged, target terms + NAP set.

## Weeks 2-4 - GBP Optimisation
Goal: a complete, keyword-aligned profile + the review system live.
Work the findings list. In order of impact:
1. **Primary category** correct (strongest single signal). Add all relevant secondary
   categories.
2. **Services list** built from the words customers search (aim for ~30 where genuine).
3. **Business description** (~750 chars) with target terms + location, naturally.
4. **Photos:** load a strong set (aim well past the competitor average; more is better),
   geo-context where sensible.
5. **Attributes, hours, booking link** completed.
6. **Q&A:** seed the questions customers actually ask, with good answers.
7. **First GBP post** published; weekly posting task running (rotate the 8 post types in the
   dashboard, at least weekly).
8. **Review system setup (week 4):** create the client's Google review link, store it on the
   client record (`review_link`), and brief them on asking. Load the review templates. See
   REVIEW-MANAGEMENT-SOP.md.
- Milestones: `gbp-optimized` (wk2), `services-completed` (wk3), `review-system-setup` (wk4).
- Definition of done: profile findings cleared, weekly post cadence live, review link + templates in place.

## Weeks 5-6 - On-Page SEO (Website)
Goal: the site supports the GBP, not fights it. (Full detail: WEBSITE-BUILD-SOP.md.)
1. **Title tags** per page: keyword + location, not spammy.
2. **H1 + heading hierarchy** fixed (one H1, logical order).
3. **Schema:** LocalBusiness, Service, FAQ markup.
4. **NAP** in the footer as crawlable text on every page, matching the canonical NAP.
5. **Google Map embed** on contact (and area pages).
6. **Service + area pages:** a page per core service and key suburb (more specific pages =
   more chances to rank). Internal links between them.
- Milestones: `onpage-basic` (wk5), `onpage-advanced` (wk6).
- Definition of done: detection re-run shows schema/map/NAP/indexing issues cleared.
- Note: if the client has no decent site, this is where a Website Build upsell fits.

## Weeks 7-10 - Citation Building
Goal: consistent listings across 15+ trusted directories.
1. **NAP audit:** find existing listings; document correct / inconsistent / missing
   (citations panel).
2. **Cleanup first:** fix or merge duplicates and wrong listings before building new ones.
3. **Submit at a natural pace, ~3-5 per week.** Use the dashboard's default source list.
   Priority order: core (Google, Bing, Apple) > national directories (Yellow Pages, White
   Pages, Hotfrog, Yelp, True Local/Word of Mouth) > the rest > niche-specific.
4. **Track each** through claimed -> verified, with the profile URL and NAP match flags.
5. **Verify indexing** (monthly `check_indexing` task). End-of-programme final check that
   nothing reverted.
- Milestones: `citations-basic` (wk7), `citations-advanced` (wk10).
- Definition of done: 15+ live, verified, NAP-consistent listings tracked in the dashboard.

## Weeks 11-12 - Review & Report
Goal: prove the movement and set the next step.
1. **Reviews flowing:** confirm a steady velocity (target ~2-3/week) and that responses are
   going out. (`reviews-flowing` milestone.)
2. **Weekly schedule running:** posting, review asks, and monitoring are habitual.
3. **Final heatmap** for the primary term; compare to week 1.
4. **12-week report:** before/after rankings + heatmaps, what was done, where they rank now,
   and the recommended next step (maintenance, more terms, website, etc.).
- Milestones: `reviews-flowing`, `weekly-schedule` (wk11), `12-week-review` (wk12).
- Definition of done: report delivered, maintenance offer made.

---

## What runs throughout (recurring tasks)
- **Weekly GBP post** (rotate 8 types).
- **Review generation check** (fortnightly) - nudge if velocity drops.
- **Heatmap** (follow-up) and **monthly ranking report**.
- **Citation indexing check** (monthly).
- **Competitor watch** - flag fake listings / keyword-stuffed names.

## Definition of done for the whole programme
Profile complete and active; site on-page sorted; 15+ consistent citations; reviews coming in
and being answered; rankings measurably improved vs the week-1 baseline; report delivered.
