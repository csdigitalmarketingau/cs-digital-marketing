# Blog Content Queue & Automation Roadmap

How the blog works, the backlog of posts to write, and the path to automation.

## How the blog is built (Phase 5a — DONE)

- Posts live as `.mdx` files in `src/content/blog/`.
- Each file exports a `metadata` object (frontmatter): `title`, `description`, `excerpt`, `date` (ISO), `keyword` (primary target), `author`.
- The body starts at **H2** (the page renders the H1 from `metadata.title`).
- Routing, the `/blog` index, the sitemap, and BlogPosting schema are all automatic. Drop a new `.mdx` file in the folder and it appears everywhere.
- **Copy rules:** follow `WEBSITE-BUILD-SOP.md` §2. No em dashes. No banned buzzwords. Real suburb names. Plain English. Run Stop-Slop before publishing.

## Workflow (Phase 5b — current: manual approval)

1. Pick the next title from the queue below.
2. Draft the post as an `.mdx` file following the copy rules.
3. Coen reviews and approves.
4. Commit + push. Vercel deploys.

## Automation roadmap (Phase 5c — later)

The goal is a self-learning, eventually-automated pipeline. Build it in stages so quality is proven before removing the human gate:

1. **Scheduled drafting (semi-auto):** a scheduled Claude agent picks the next queued title, drafts the post following the SOP, runs Stop-Slop, and opens it as a draft/PR. Coen approves. (Keeps the human gate.)
2. **Performance feedback (self-learning input):** track each post's performance after publish — Search Console impressions/clicks/position for its target keyword, plus traffic. Store against the post's `keyword` and `slug`. This is the data the learning loop needs (mirrors the outreach NicheInsight/VariantStats pattern in the GBP dashboard).
3. **AI-suggested topics:** once we have performance data, the agent proposes new topics from keyword gaps and what is already ranking, instead of working a fixed queue.
4. **Full auto-publish:** only after draft quality is consistently approved without edits. Agent writes, self-checks against the SOP, publishes directly.

Decisions already made: MDX-in-repo storage, manual approval now (automate later), seed queue now (AI-suggested later). Both the blog manager and a build tracker will live in the dashboard's new Website section (specifics TBD — see DASHBOARD-WEBSITE-SECTION.md).

---

## Seed Queue

Ordered roughly by priority. Each targets a specific search intent. Keyword in brackets.

### Informational / how-to (top of funnel, high volume)
1. ~~How to Optimise Your Google Business Profile in 2026~~ ✅ PUBLISHED
2. ~~What Is the Google Map Pack and How Do You Rank in It?~~ ✅ PUBLISHED
3. How to Get More Google Reviews (Without Breaking Google's Rules) [how to get more google reviews]
4. How to Rank Higher on Google Maps for Your Business [how to rank higher on google maps]
5. Why Isn't My Business Showing Up on Google Maps? [business not showing on google maps]
6. Google Business Profile Categories: How to Pick the Right One [google business profile categories]
7. How Many Photos Should You Have on Your Google Business Profile? [google business profile photos]
8. What Are Local Citations and Why Do They Matter? [what are local citations]
9. How Long Does Local SEO Take to Work? [how long does local seo take]
10. NAP Consistency: Why Your Business Details Must Match Everywhere [nap consistency local seo]

### Local / location guides (geo-targeted)
11. Local SEO in Mandurah: A Guide for Business Owners [local seo mandurah]
12. How Rockingham and Baldivis Businesses Can Win on Google [local seo rockingham]
13. Getting Found on Google in Perth: What Local Businesses Need to Know [local seo perth]
14. The Best Business Directories for Western Australian Businesses [australian business directories]

### Industry-specific (matches the /industries pages)
15. Local SEO for Tradies: Why Your Mates' Referrals Aren't Enough [local seo for tradies]
16. How Plumbers Can Get More Calls from Google [plumber marketing google]
17. Google Business Profile Tips for Cafes and Restaurants [restaurant google business profile]
18. Why Every Electrician Needs an Optimised Google Profile [electrician local seo]

### Comparison / decision (bottom of funnel, high intent)
19. Local SEO vs Google Ads: Which Is Better for Local Businesses? [local seo vs google ads]
20. Do You Need a Website if You Have a Google Business Profile? [website vs google business profile]
21. DIY Local SEO vs Hiring an Agency: An Honest Comparison [diy local seo vs agency]
22. How Much Does Local SEO Cost in Australia? [local seo cost australia]

### Mistakes / problems (high engagement)
23. 7 Google Business Profile Mistakes That Are Costing You Customers [google business profile mistakes]
24. Why Your Competitor Outranks You on Google (And How to Fix It) [competitor outranks me google]
25. Is Buying Google Reviews Worth the Risk? (No, Here's Why) [buying google reviews]

---

*Add new ideas to the bottom. Mark published items with ✅ and strike through.*
