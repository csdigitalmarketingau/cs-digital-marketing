# Cold Email Infrastructure SOP (Internal)

How to set up CSDM cold-email sending so it lands in inboxes (including Outlook/Microsoft)
without burning the main domain. Stack: **separate sending domain + Instantly managed
inboxes**.

## The two rules that matter most
1. **Never cold-send from your real domain** (`csdigitalmarketing.au`). Cold volume damages
   sender reputation; you can't risk the domain you use for real client email and your GBP.
2. **Warm up before you send.** A brand-new domain that suddenly sends cold = spam. Instantly's
   warmup builds reputation over ~2-3 weeks so Microsoft/Google start trusting you.

## Why this fixes the Outlook problem
Outlook spammed you because the sending domain had no reputation and likely incomplete
SPF/DKIM/DMARC. Instantly managed inboxes ship pre-authenticated and auto-warmed on a
dedicated domain, which is exactly what Microsoft's filter wants to see.

## Setup steps
1. **Sending domain: `csdigitalmarketing.com.au`** (secured). Separate TLD from the real
   `.au` site, so reputation is isolated, but still clearly the CSDM brand. **Set a 301
   redirect** from it to `csdigitalmarketing.au` so any visitor lands on the real site. Do
   NOT point it at a second website - it exists only for sending + the redirect.
2. **Google Workspace on the sending domain.** Sign up for Google Workspace (Business
   Starter, ~AUD $9/mailbox/mo) on `csdigitalmarketing.com.au`. **Start with 1 inbox:**
   `coen@csdigitalmarketing.com.au`. One inbox at ~20/day covers the current target; 2-3
   inboxes per domain is the safe ceiling to add later if you need more volume or redundancy.
   Google has strong cold deliverability.
3. **Authenticate the domain (required before sending anything):**
   - **MX** records pointing to Google (provided during Workspace setup). These coexist with
     the 301 web redirect - mail and web are separate DNS layers.
   - **SPF** (TXT): `v=spf1 include:_spf.google.com ~all`
   - **DKIM**: turn on in Google Admin (Apps > Gmail > Authenticate email) and add the TXT it
     gives you.
   - **DMARC** (TXT at `_dmarc`): start with `v=DMARC1; p=none; rua=mailto:you@...`
4. **New Instantly workspace for CSDM**, fully separate from the Stewart & Co. workspace (the
   contractor has access to that one). Connect the 3 inboxes via **Google OAuth** (Add account
   > Google).
5. **Turn on warmup** for each inbox (enable read emulation). Leave it ~**2-3 weeks** and do
   not launch a campaign until the **health score is above ~90%**. Keep warmup running
   permanently after launch (it should stay ~20-30% of daily volume).
6. **Set DMARC on the real domain too** (`csdigitalmarketing.au`) - protects your brand from
   spoofing even though you don't cold-send from it.

## Volume (ramp, don't jump)
- **One inbox at ~20/day over 5 days = ~100/week**, which hits the KPI target at a safe rate.
  No need for more inboxes yet.
- Ramp in: ~10-15/day the first week of live sending, up to ~20-25/day. A single Google
  mailbox shouldn't push much past ~30/day for cold.
- Only go live once the warmup health score is above ~90%.
- Add a second inbox (or a second domain) only when you genuinely need more volume or redundancy.

## Deliverability hygiene (non-negotiable)
- **Plain text**, no images, no signatures full of links. One soft CTA.
- **Personalise** the first line; use spintax to vary wording across sends.
- **Turn OFF open tracking** (the tracking pixel uses a shared domain that can hurt placement;
  judge by replies, not opens anyway).
- **Verify the list** before sending (Instantly's built-in verification). Keep **bounce rate
  under ~3%** - high bounces tank reputation fast.
- Avoid spam-trigger words ("free", "guarantee", "$$$", ALL CAPS, lots of "!").

## Campaign structure
- Use the seeded **CSDM Cold Outreach** sequence (4 steps over ~12 days; step 1 has A/B/C
  variants). Most replies come from steps 2-4, so always run the full sequence.
- A/B test subject lines (short, lowercase, curiosity or local hook).
- One campaign per niche so the dashboard's niche analytics stay clean.

## Until the infra is live
- **Stop cold-emailing from the real domain.** The 75 manual sends are likely hurting it.
- Lean on **cold calls** (your strongest channel right now) while warmup runs.
- You can still send *warm* / reply emails from the real domain - that's normal business mail.

## Wiring back to the dashboard
- Track sends/replies as KPIs (Outreach > KPIs).
- Log replies as leads/activities so niche + reply-sentiment analytics build up.
- When ready, the Instantly integration layer in the dashboard can connect this workspace.

## Rough cost
Domain ~$15/yr + Instantly inboxes (a few $/inbox/mo) + your Instantly plan. Small against one
$500/mo client.
