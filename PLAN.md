> **SUPERSEDED / HISTORICAL (2026-06-11).** This early plan is kept for context only. Do NOT execute Phase 6 as written: it conflicts with current compliance rules.
> - **No `/results` case-study page** — social proof lives on the homepage (no dedicated Results page).
> - **No `AggregateRating` / Review schema** anywhere on our own site — Google bans self-serving review rich snippets (manual-action risk).
> - **No "Data-Driven Results" badge** — "data-driven" is a banned phrase in the WEBSITE-BUILD-SOP voice rules.
> Current source of truth: the SOPs in `docs/` and `client-site-template/docs/CLIENT-SEO-LAUNCH-CHECKLIST.md`.

# CSDM SEO Ranking Plan

## Current Position
- 8 pages live, ranking #4 for "google business profile optimisation mandurah" after 7 days
- Not on page 1 for "local seo mandurah"
- Competitors above us (Bauer Digital, Nomad Designs, JOG Design) have 30-100+ pages, blogs, deeper content
- Site is Next.js 16 App Router + Tailwind CSS v4, deployed on Vercel

## Target Architecture (30+ pages)

```
Homepage (/)
├── Services Hub (/services) — existing, becomes parent
│   ├── /services/gbp-optimisation — NEW (1,500-2,000 words)
│   ├── /services/local-seo — NEW (1,500-2,000 words)
│   ├── /services/citation-building — NEW (1,500-2,000 words)
│   ├── /services/on-page-seo — NEW (1,500-2,000 words)
│   └── /services/review-management — NEW (1,500-2,000 words)
├── Process (/process) — existing
├── About (/about) — existing
├── Contact (/contact) — existing
├── Results (/results) — exists as placeholder, needs real content
├── Areas
│   ├── /areas/mandurah — existing, expand to 1,500+ words
│   ├── /areas/rockingham — existing, expand to 1,500+ words
│   └── /areas/perth — existing, expand to 1,500+ words
├── Industries — NEW section
│   ├── /industries/plumbers — NEW (1,500-2,000 words)
│   ├── /industries/electricians — NEW
│   ├── /industries/cleaners — NEW
│   ├── /industries/landscapers — NEW
│   └── /industries/builders — NEW
└── Blog (/blog) — NEW section
    ├── /blog/how-to-optimise-google-business-profile — NEW
    ├── /blog/what-is-google-map-pack — NEW
    ├── /blog/local-seo-mandurah-guide — NEW
    ├── /blog/australian-business-directories — NEW
    └── /blog/why-reviews-matter-local-seo — NEW
```

Total: 8 existing + 15 new = 23 pages (expandable to 30+ with more blog posts)

---

## Phase 1: Service-Specific Pages (HIGHEST IMPACT)

**Why first:** Competitors ranking above us have dedicated service pages. This creates the hierarchical architecture both guides prescribe (Homepage → Category → Service). Each page targets different keyword clusters and adds depth Google rewards.

### Pages to Create

#### 1a. `/services/gbp-optimisation/page.tsx` (~1,800 words)
- **Title:** "Google Business Profile Optimisation | Setup, Manage & Rank Higher"
- **H1:** "Google Business Profile Optimisation for Local Businesses"
- **Keywords:** google business profile optimisation, GBP setup, google my business optimisation
- **Content:** What GBP is, why it matters, what we optimise (categories, services, attributes, photos, posts, Q&A), the 99-service trick from Guide 1, how completeness drives rankings
- **Schema:** Service schema (serviceType: "Google Business Profile Optimisation")
- **Internal links:** → /services (parent), /process, /contact, /areas/*

#### 1b. `/services/local-seo/page.tsx` (~1,800 words)
- **Title:** "Local SEO Services Mandurah, Rockingham & Perth | Rank in Google Maps"
- **H1:** "Local SEO Services for Mandurah, Rockingham & Perth Businesses"
- **Keywords:** local seo mandurah, local seo services perth, local seo agency
- **Content:** What local SEO is, the 3 pillars (GBP + On-Page + Citations), how the map pack works, who it's for, our 12-week approach
- **Schema:** Service schema
- **Internal links:** → /services/gbp-optimisation, /services/citation-building, /services/on-page-seo, /areas/*
- **NOTE:** This page directly targets "local seo mandurah" — the keyword we're currently missing page 1 for

#### 1c. `/services/citation-building/page.tsx` (~1,800 words)
- **Title:** "Citation Building Australia | 15+ Business Directories That Matter"
- **H1:** "Citation Building for Australian Local Businesses"
- **Keywords:** citation building, australian business directories, local citations
- **Content:** What citations are, why consistency matters, which 15+ AU directories we use, priority order (Bing, Apple, Yelp, Foursquare per Guide 1), how we verify NAP consistency
- **Schema:** Service schema
- **Internal links:** → /services, /blog/australian-business-directories

#### 1d. `/services/on-page-seo/page.tsx` (~1,800 words)
- **Title:** "On-Page SEO for Local Businesses | Title Tags, Schema & Content"
- **H1:** "On-Page SEO That Helps Local Businesses Rank"
- **Keywords:** on-page seo local business, local seo website optimisation, title tags local seo
- **Content:** Title tag formula from Guide 1 (~200 chars), H1 optimisation, schema markup, NAP in footer, Google Maps embed, internal linking strategy, service page architecture from Guide 2
- **Schema:** Service schema

#### 1e. `/services/review-management/page.tsx` (~1,500 words)
- **Title:** "Google Review Management | Get More Reviews & Rank Higher"
- **H1:** "Google Review Management for Local Businesses"
- **Keywords:** google review management, get more google reviews, review strategy local seo
- **Content:** Why reviews matter for map pack, how to ask for reviews, response strategy, review velocity, how we help clients build reviews
- **Schema:** Service schema

### Implementation Pattern
Each page follows the existing area page structure:
- Copy from `src/app/areas/mandurah/page.tsx` as base template
- Metadata export with title, description, canonical
- Hero section with service-specific badge text
- Long-form content sections using `max-w-4xl mx-auto px-6`
- Proper H1 → H2 → H3 hierarchy
- CTA section at bottom linking to /contact
- Internal links to related service pages and area pages

### Update /services/page.tsx
Add a "Our Services" grid section linking to all 5 sub-pages with cards. This creates the parent→child hierarchy Google follows.

### Update sitemap.ts
Add all 5 new service URLs with priority 0.85, changeFrequency "monthly".

### Verification
- [ ] All 5 pages render at their URLs
- [ ] Each has unique metadata (title, description, canonical)
- [ ] H1 → H2 → H3 hierarchy is correct (no skips)
- [ ] Internal links work in both directions (parent↔child)
- [ ] Sitemap includes new URLs
- [ ] `next build` succeeds

---

## Phase 2: Industry/Niche Landing Pages (HIGH IMPACT)

**Why second:** These target "[service] + [location]" keywords that prospective clients actually search. Per Guide 2, the architecture should go Homepage → Category → Niche-specific pages.

### Pages to Create

#### 2a. `/industries/plumbers/page.tsx` (~1,500 words)
- **Title:** "GBP Optimisation for Plumbers | Mandurah, Rockingham & Perth"
- **H1:** "Google Business Profile Optimisation for Plumbers"
- **Keywords:** plumber mandurah google, plumber local seo, gbp optimisation plumber
- **Content:** Why plumbers need local SEO, common GBP mistakes plumbers make, what a ranked GBP looks like for a plumber, our 12-week programme tailored to trades

#### 2b. `/industries/electricians/page.tsx` (~1,500 words)
- Same structure, tailored to electricians

#### 2c. `/industries/cleaners/page.tsx` (~1,500 words)
- Same structure, tailored to cleaning businesses

#### 2d. `/industries/landscapers/page.tsx` (~1,500 words)
- Same structure, tailored to landscaping businesses

#### 2e. `/industries/builders/page.tsx` (~1,500 words)
- Same structure, tailored to builders/construction (Guide 2 notes construction as a high-response niche)

### Shared Components
Create `src/components/IndustryPage.tsx` — a reusable template component that accepts:
- `industry: string` (display name)
- `slug: string`
- `description: string`
- `painPoints: string[]` (industry-specific GBP problems)
- `keywords: string[]`

This avoids thin duplicate content — each page should have genuinely unique paragraphs about that industry's specific challenges.

### Navigation Update
Add "Industries" section to Header nav (dropdown or new link) and Footer "Quick Links".

### Update sitemap.ts
Add all 5 industry URLs with priority 0.75.

### Verification
- [ ] All 5 pages render
- [ ] Each has unique, industry-specific content (not just find-replace)
- [ ] Internal links to /services/* and /areas/*
- [ ] Navigation updated
- [ ] Sitemap updated

---

## Phase 3: Area Page Expansion (HIGH IMPACT)

**Why third:** Current area pages are 700-900 words. Guides say 1,500-2,500. Competitors' Mandurah pages are deeper. These are our geo-targeting money pages.

### Changes to Each Area Page

#### 3a. Mandurah (`src/app/areas/mandurah/page.tsx`) → expand to 1,800+ words
Add:
- Local market context (Mandurah's growing economy, population stats, business landscape)
- Specific problems Mandurah businesses face with local search
- Suburb-specific service descriptions (not just a grid of names)
- Mention of Peel region, Halls Head, Falcon, Greenfields with context
- "Why Mandurah businesses choose us" section
- Google Maps embed for Mandurah
- FAQ section with FAQJsonLd schema (3-4 Mandurah-specific questions)
- LocalBusiness schema with areaServed: Mandurah specifically

#### 3b. Rockingham — same expansion pattern, Rockingham-specific content
- Mention Baldivis growth corridor, Safety Bay, Warnbro
- Different FAQ questions

#### 3c. Perth — same expansion pattern, Perth-specific content
- Mention Perth metro competitive landscape
- Different business challenges vs regional areas

### Technical Fixes on All Area Pages
- Fix heading hierarchy: Change H4 → H3 for service items
- Add descriptive alt text to hero image: `alt="Aerial view of [Area], Western Australia"`
- Add per-page LocalBusiness schema component
- Add breadcrumb navigation component (see Phase 4)

### Verification
- [ ] Each area page is 1,800+ words (check with word count)
- [ ] H1 → H2 → H3 hierarchy (no H4 used)
- [ ] Hero image has descriptive alt text
- [ ] FAQ schema renders in page source
- [ ] Unique content per page (not copy-paste with city name swapped)

---

## Phase 4: Technical SEO Fixes (MEDIUM IMPACT — but compounds everything above)

**Why fourth:** These fixes apply site-wide and amplify the ranking power of all existing and new pages.

### 4a. Breadcrumb Component + BreadcrumbList Schema

Create `src/components/Breadcrumb.tsx`:
- Takes `items: { label: string; href?: string }[]`
- Renders `<nav aria-label="breadcrumb">` with ordered list
- Includes BreadcrumbList JSON-LD schema
- Styled with Tailwind (text-sm, text-gray-500, separators)

Add to every subpage:
- `/services` → Home > Services
- `/services/gbp-optimisation` → Home > Services > GBP Optimisation
- `/areas/mandurah` → Home > Service Areas > Mandurah
- `/industries/plumbers` → Home > Industries > Plumbers
- `/blog/[slug]` → Home > Blog > [Post Title]
- etc.

### 4b. Hero Image Alt Text

Update ALL pages that use `mandurah-aerial.jpg`:
- Homepage: `alt="Aerial view of Mandurah waterways, Western Australia"`
- Services: `alt="Mandurah coastal aerial view"`
- Process: `alt="Aerial view of Mandurah, Western Australia"`
- About: `alt="Mandurah waterfront aerial view"`
- Contact: `alt="Mandurah aerial view, Western Australia"`
- Area pages: `alt="Aerial view of [Area], Western Australia"`

### 4c. Service Schema on Services Page

Add to `/services/page.tsx`:
```json
{
  "@type": "Service",
  "serviceType": "Google Business Profile Optimisation",
  "provider": { "@id": "https://csdigitalmarketing.au/#business" },
  "areaServed": [...],
  "description": "12-week programme..."
}
```

### 4d. About Page Heading Fix

Change value card titles from `<div>` to `<h3>` tags:
- "Full Transparency" → `<h3>`
- "Measurable Results" → `<h3>`
- "No Lock-in Contracts" → `<h3>`
- "One Thing, Done Well" → `<h3>`

### 4e. ContactPoint Schema on Contact Page

Add schema with telephone, email, contactType, areaServed, availableLanguage.

### 4f. Meta Robots Tag

Add to root layout metadata:
```typescript
robots: {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
  },
},
```

### Verification
- [ ] Breadcrumbs visible on all subpages
- [ ] BreadcrumbList schema in page source on all subpages
- [ ] All hero images have descriptive alt text
- [ ] Service schema validates at schema.org validator
- [ ] About page H3 tags render correctly
- [ ] ContactPoint schema in contact page source
- [ ] Meta robots tag present in HTML head

---

## Phase 5: Blog Infrastructure + First Posts (MEDIUM-HIGH IMPACT)

**Why fifth:** Blog builds topical authority over time. Bauer Digital ranks #1 partly because they publish SEO content. This is a medium-term play but the infrastructure needs to go in now.

### 5a. Blog Infrastructure

Since there's no MDX library installed, two options:
- **Option A (simple):** JSX-based blog pages (same as existing pages, just under /blog/)
- **Option B (scalable):** Install @next/mdx for markdown blog posts

Recommend **Option A** for now — keeps it simple, no new dependencies. Can migrate to MDX later.

Create:
- `src/app/blog/page.tsx` — Blog index page listing all posts
- `src/app/blog/layout.tsx` — Blog layout with sidebar (recent posts, categories)
- Individual post pages under `src/app/blog/[slug]/page.tsx`

### 5b. First 5 Blog Posts

#### Post 1: `/blog/how-to-optimise-google-business-profile/page.tsx` (~2,000 words)
- **Title:** "How to Optimise Your Google Business Profile in 2026 (Complete Guide)"
- **H1:** "How to Optimise Your Google Business Profile in 2026"
- **Target:** "how to optimise google business profile" (informational, high volume)
- **Content:** Step-by-step guide covering everything from Guide 1 — categories, services (up to 99!), description, photos, posts, reviews, attributes

#### Post 2: `/blog/what-is-google-map-pack/page.tsx` (~1,500 words)
- **Title:** "What Is the Google Map Pack? (And How to Rank in It)"
- **Target:** "what is google map pack", "how to rank in google maps"
- **Content:** Explain the map pack, 3 ranking factors, why it matters for local businesses

#### Post 3: `/blog/local-seo-mandurah-guide/page.tsx` (~2,000 words)
- **Title:** "Local SEO in Mandurah: The Complete Guide for Business Owners"
- **Target:** "local seo mandurah" (the keyword we're missing!)
- **Content:** Mandurah-specific local SEO advice, local competition landscape, step-by-step for Mandurah businesses

#### Post 4: `/blog/australian-business-directories/page.tsx` (~1,500 words)
- **Title:** "15+ Australian Business Directories Every Local Business Should Be Listed On"
- **Target:** "australian business directories", "citation building australia"
- **Content:** List and describe each directory we use, why they matter, how to claim

#### Post 5: `/blog/why-reviews-matter-local-seo/page.tsx` (~1,200 words)
- **Title:** "Why Google Reviews Matter for Local SEO (And How to Get More)"
- **Target:** "google reviews local seo", "how to get more google reviews"
- **Content:** Review impact on rankings, how to ask, response strategy

### 5c. Blog Navigation

Add "Blog" to Header nav and Footer links.
Update sitemap.ts with all blog URLs (priority 0.6, changeFrequency "weekly").

### Verification
- [ ] /blog index page lists all posts
- [ ] Each post renders with proper metadata
- [ ] Blog nav link works in header and footer
- [ ] Sitemap includes blog URLs
- [ ] Internal links from blog posts to service pages and vice versa

---

## Phase 6: Trust & Conversion (MEDIUM IMPACT)

**Why sixth:** This doesn't directly impact rankings but affects click-through and conversion rates once people land on the site.

### 6a. Case Study: Gathered by Shanda

Replace the placeholder Results page with a real case study:
- `/results/page.tsx` → redesign with:
  - Before/after audit scores
  - Timeline of work completed (weeks 1-6)
  - Specific improvements (13 findings → resolved, 6 citations claimed, 7 new pages built)
  - Client testimonial (need to get a quote from Shanda)
  - Metrics: findings fixed, citations claimed, pages built
- **Do NOT include dashboard screenshots** (user explicitly said this)

### 6b. Testimonials Component

Create `src/components/Testimonials.tsx`:
- Display client quotes with name, business name, location
- Add to homepage and results page
- Include AggregateRating schema when 3+ testimonials collected

### 6c. Trust Badges Section

Add to homepage below the hero or above the CTA:
- "Based in Mandurah" badge
- "12-Week Programme" badge
- "No Lock-in Contracts" badge
- "Data-Driven Results" badge

### Verification
- [ ] Results page shows real case study data
- [ ] No dashboard screenshots visible
- [ ] Testimonials component renders correctly
- [ ] Trust badges visible on homepage

---

## Phase 7: Ongoing Content & Maintenance (LONG-TERM)

These are recurring tasks, not one-off implementations:

### 7a. Weekly Blog Posts
- Target 1-2 posts per week
- Focus on long-tail keywords: "[niche] + [location]" and "how to" queries
- Each post should link to relevant service pages

### 7b. Update Sitemap Automatically
Consider switching from static sitemap.ts to a dynamic one that discovers all routes.

### 7c. Monitor Rankings
- Track positions for target keywords weekly
- Adjust content based on what's working

### 7d. Expand Industry Pages
Add more niches as you identify demand:
- HVAC / Air conditioning
- Dentists
- Real estate agents
- Cafes / Restaurants
- Mechanics

### 7e. Expand Area Pages
Add suburb-specific pages if warranted:
- `/areas/mandurah/halls-head`
- `/areas/rockingham/baldivis`
- `/areas/perth/fremantle`

---

## Implementation Order Summary

| Phase | Pages | Est. Words | Impact |
|-------|-------|-----------|--------|
| 1. Service pages | +5 new | ~8,500 | 🔴 Highest — fills architectural gap |
| 2. Industry pages | +5 new | ~7,500 | 🔴 High — targets buyer keywords |
| 3. Area expansion | 3 expanded | +2,700 | 🟡 High — deepens geo targeting |
| 4. Technical fixes | All pages | — | 🟡 Medium — amplifies everything |
| 5. Blog + posts | +6 new (index + 5 posts) | ~8,200 | 🟡 Medium-High — topical authority |
| 6. Trust/conversion | 1 redesigned + components | ~1,500 | 🟢 Medium — conversion rate |
| 7. Ongoing | Recurring | Ongoing | 🟢 Long-term compounding |

**Total new content: ~28,400 words across 20+ new pages**
**Final page count: 28+ pages (approaching the 30+ target)**

---

## Files to Create/Modify Summary

### New Files
```
src/app/services/gbp-optimisation/page.tsx
src/app/services/local-seo/page.tsx
src/app/services/citation-building/page.tsx
src/app/services/on-page-seo/page.tsx
src/app/services/review-management/page.tsx
src/app/industries/page.tsx (index)
src/app/industries/plumbers/page.tsx
src/app/industries/electricians/page.tsx
src/app/industries/cleaners/page.tsx
src/app/industries/landscapers/page.tsx
src/app/industries/builders/page.tsx
src/app/blog/page.tsx (index)
src/app/blog/how-to-optimise-google-business-profile/page.tsx
src/app/blog/what-is-google-map-pack/page.tsx
src/app/blog/local-seo-mandurah-guide/page.tsx
src/app/blog/australian-business-directories/page.tsx
src/app/blog/why-reviews-matter-local-seo/page.tsx
src/components/Breadcrumb.tsx
src/components/Testimonials.tsx
```

### Modified Files
```
src/app/services/page.tsx — add links to sub-service pages
src/app/areas/mandurah/page.tsx — expand content, fix H4→H3, add schema
src/app/areas/rockingham/page.tsx — expand content, fix H4→H3, add schema
src/app/areas/perth/page.tsx — expand content, fix H4→H3, add schema
src/app/about/page.tsx — fix heading hierarchy (div→H3)
src/app/results/page.tsx — replace placeholder with case study
src/app/page.tsx — add trust badges, testimonials section
src/app/layout.tsx — add meta robots
src/app/sitemap.ts — add all new URLs
src/components/Header.tsx — add Blog, Industries nav items
src/components/Footer.tsx — add Blog, Industries links
src/components/JsonLd.tsx — add Service schema, BreadcrumbList schema exports
All pages with mandurah-aerial.jpg — add descriptive alt text
```
