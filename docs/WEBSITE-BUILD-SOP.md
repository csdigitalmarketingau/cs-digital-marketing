# Local SEO Website Build SOP

This is the standard operating procedure for building (or upgrading) a local-SEO-optimised
website for CS Digital Marketing or a client. It is based on the csdigitalmarketing.au build.
Follow it top to bottom. Every step exists because it affects rankings, conversions, or both.

**Reference implementation:** csdigitalmarketing.au (this repo)
**Stack:** Next.js (App Router) + Tailwind CSS v4, deployed on Vercel, DNS on the registrar.

---

## 0. Pre-Build: Domain & Hosting

Before any content work, confirm the domain actually serves the site.

1. **Buy/confirm the domain** at the registrar (GoDaddy, etc.).
2. **Deploy to Vercel** from the GitHub repo. Confirm the `*.vercel.app` URL works.
3. **Connect the custom domain in Vercel** → Domains. Add BOTH `www` and the apex (no-www).
4. **Fix DNS at the registrar.** This is the step everyone gets wrong:
   - Delete any registrar "Website Builder" A record (this serves a parking/"Launching Soon" page).
   - Delete stale/old A records (e.g. old Vercel IPs).
   - Leave ONLY the records Vercel tells you to set (apex A record → Vercel IP, `www` CNAME → Vercel).
   - **Lesson learned:** a leftover `WebsiteBuilder Site` A record on the apex will keep serving a
     blank parking page even though `www` works. Google then indexes the blank page. Always test the
     bare domain in an incognito window after DNS changes.
5. **Verify all three resolve to the real site:** `apex`, `www`, and `*.vercel.app`.
6. DNS TTL is usually 600s; propagation is minutes, but allow up to a few hours.

---

## 1. Site Architecture (target: 30+ pages)

Google rewards depth and a clear hierarchy. The flat 5-page brochure site does not rank.
Build this structure:

```
Homepage (/)
├── Services hub (/services)
│   ├── /services/gbp-optimisation
│   ├── /services/local-seo
│   ├── /services/citation-building
│   ├── /services/on-page-seo
│   └── /services/review-management
├── Industries hub (/industries)
│   └── /industries/[niche]   ← one per target niche (plumbers, electricians, etc.)
├── Service Areas
│   └── /areas/[city]         ← one per service city, 1,500+ words each
├── Process (/process)
├── About (/about)
├── Contact (/contact)        ← form is a client component; metadata lives in contact/layout.tsx
└── Blog (/blog)              ← topical authority, ongoing
```

**Rules:**
- Every page links to related pages (services ↔ industries ↔ areas). Internal linking distributes ranking authority.
- Service and industry pages each target a distinct keyword cluster.
- Area pages carry unique local content — never copy-paste with the city name swapped.

---

## 2. Page Content Rules (NON-NEGOTIABLE)

Every page's copy must pass these. They were applied site-wide via the Stop-Slop pass.

### Voice
- Direct, plain English, Australian business tone. Write like a tradie explaining it over a beer.
- No marketing-agency template voice.

### Banned words/phrases (search and destroy)
- "systematic", "data-driven", "proven", "professional" (as filler), "comprehensive"
- "trust signals", "reinforces", "social proof", "leverage", "robust", "seamless"
- Throat-clearing: "Here's the thing", "That is exactly what", "The key word is"
- "Not X, it's Y" contrast constructions — state Y directly
- Quotable/pull-quote lines designed to sound clever

### Formatting
- **ZERO em dashes (—).** This is the #1 AI tell. Use a full stop, comma, colon, or restructure.
  Verify with a search for the em-dash character before every commit.
- **No `[suburb]` or `[placeholder]` tokens in visible copy.** Use real suburb names
  (Mandurah, Halls Head, Baldivis, Rockingham, Safety Bay, Falcon, Perth, etc.).
- Vary sentence length. Two-item lists often beat three. Don't end every paragraph with a punchy one-liner.

### Verification
- Run the Stop-Slop skill (or the banned-word grep) across all page files before launch.
- Re-run after any bulk content generation.

---

## 3. On-Page SEO (per page)

Every `page.tsx` must export `metadata`:

```tsx
export const metadata: Metadata = {
  title: "Primary Keyword + Location | Brand",        // ~50-70 chars, keyword-led
  description: "...",                                   // ~150-160 chars, includes CTA
  alternates: { canonical: "https://DOMAIN/route" },   // must match the actual route
};
```

- **H1:** one per page, includes primary keyword + location.
- **Heading hierarchy:** H1 → H2 → H3, no skips. NEVER jump H2 → H4. (Audit caught H4-on-cards; fixed to H3.)
- **Hero images:** descriptive `alt` text, never `alt=""`. e.g. `alt="Aerial view of Mandurah, Western Australia"`.
- **Internal links** in body copy to related service/area/industry pages.

`"use client"` pages (forms) cannot export `metadata`. Put metadata + schema in a sibling
`layout.tsx` (see `contact/layout.tsx`).

---

## 4. Structured Data (JSON-LD Schema)

Schema components live in `src/components/JsonLd.tsx`. Apply per page type:

| Page type | Schema |
|-----------|--------|
| Root layout | `LocalBusinessJsonLd` (ProfessionalService: NAP, geo, areaServed, hours, founder) |
| Services hub | `ServiceJsonLd` + `FAQJsonLd` |
| Service sub-pages | `ServiceJsonLd` |
| Industry sub-pages | `ServiceJsonLd` |
| Area pages | `FAQJsonLd` |
| Contact (layout) | `LocalBusiness` with `ContactPoint` + `OpeningHoursSpecification` |
| Every subpage | `BreadcrumbList` (via the `Breadcrumb` component) |

Validate at https://validator.schema.org/ after launch.

---

## 5. Breadcrumbs

`src/components/Breadcrumb.tsx` renders both the visible nav AND the BreadcrumbList JSON-LD.

- Add to EVERY subpage as the first element in the return (before the hero).
- Trail: `Home > Section > Page`.
- Items with `href` are links; the last item (current page) has no `href`.
- If a section has no index page (e.g. `/areas` doesn't exist), the section label gets NO `href`
  so it renders as plain text instead of a broken link.

```tsx
<Breadcrumb items={[
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "GBP Optimisation" },
]} />
```

---

## 6. Navigation & Footer

### Header (`src/components/Header.tsx`)
- Dropdown menus for sections with sub-pages (Services, Industries, Areas).
- Desktop: hover-open with ~150ms close delay. Mobile: accordion expand/collapse.
- Active-state highlighting on the current page.

### Footer (`src/components/Footer.tsx`)
- Link to EVERY section and sub-page. Footer links aid crawl/indexing.
- Columns: Services, Industries, Service Areas, Company, Contact.
- **Lesson learned:** the audit caught the footer missing the entire Industries section.
  Whenever you add a section, update the footer the same commit.

---

## 7. Technical SEO Files

- **`src/app/sitemap.ts`** — list EVERY route with priority + changeFrequency.
  Update it the same commit you add a page. (Audit specifically cross-checks routes vs sitemap.)
- **`src/app/robots.ts`** — allow all, point to the sitemap.
- **Root layout `metadata.robots`** — explicit `index: true, follow: true` (+ googleBot block).
- **metadataBase** set on the root layout so OG/canonical URLs resolve.

---

## 8. Build, Verify, Deploy

```
# from the project root
npx next build          # MUST pass before pushing — catches JSX/TS errors
git add -A
git commit -m "..."     # end with Co-Authored-By line
git push origin main    # Vercel auto-deploys from main
```

- **Always run `next build` locally before pushing.** A broken build = a failed Vercel deploy
  and the live site keeps serving the previous version silently.
  (Lesson learned: an unescaped `"` inside a double-quoted JS string broke a Vercel build.
  Use single quotes for strings that contain double quotes.)
- After deploy goes green, spot-check the live URL in an incognito window.
- PowerShell here-strings for commit messages: closing `'@` must be at column 0.

---

## 9. Post-Launch Audit Checklist

Run this (codebase + live) before calling a build done. The Phase-4/5 audit checks:

- [ ] Breadcrumbs on every subpage, correct trail, no broken section links
- [ ] Every page has title + description + canonical matching its route
- [ ] Schema present per the table in §4
- [ ] Zero `alt=""` on images
- [ ] Zero em dashes in any page file
- [ ] Heading hierarchy correct (no H4-without-H3, no skips)
- [ ] Sitemap includes every route; no sitemap entry points to a missing route
- [ ] Footer + header link to every section
- [ ] No `[suburb]`/placeholder tokens in visible copy
- [ ] `next build` passes clean
- [ ] Live site serves on apex, www, and vercel.app

---

## 10. Ongoing (post-launch)

- **GBP:** weekly Google Posts with geotagged photos. Build reviews continuously.
- **Citations:** 15+ AU directories, consistent NAP, 3-5 submissions/week.
- **Blog:** ongoing topical-authority posts targeting long-tail "[service] [suburb]" and "how to" queries.
- **Re-audit** rankings monthly; expand industry/area/suburb pages where demand shows.

---

*Last updated: 2026-06-02. Based on the csdigitalmarketing.au build (8 → 24+ pages).*
