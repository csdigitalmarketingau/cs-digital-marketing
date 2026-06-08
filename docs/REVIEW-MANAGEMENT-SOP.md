# Review Management SOP (Internal)

How we deliver the Review Management part of the GBP package: get the client more Google
reviews, steadily and compliantly, and respond to every one. Templates live in the dashboard
(Review Templates) and below.

## Targets
- **Velocity:** a steady ~2-3 new reviews/week. Steady beats spikes (a sudden flood looks
  fake to Google's filters).
- **Responses:** reply to every review, positive and negative. Google has confirmed responding
  helps local ranking, and it builds trust.
- **Recency:** never let the most-recent review go stale (the dashboard flags >60 days).

## Compliance (non-negotiable)
- **Never** offer money, discounts, freebies, or any incentive in exchange for a review.
  Against Google's policy and ACCC guidance on misleading testimonials.
- **Never** buy reviews, write fake ones, or review-gate (only asking happy customers).
- Ask genuinely, after good work. Make it easy. That's the whole game.

## 1. Setup (programme week 4, during GBP phase)
1. **Create the review link.** Use the client's GBP "Ask for reviews" / "Get more reviews"
   short link, or build the direct link from their Place ID
   (`https://search.google.com/local/writereview?placeid=PLACE_ID`).
2. **Store it** on the client record in the dashboard (Client > Google Review Link). One place,
   reused in every request.
3. **Load the templates** (Review Templates > Load Default Templates) and tailor the wording to
   the client's voice if needed.
4. **Brief the client** on the ask: when to do it, that it's two taps, and that we never offer
   anything for a review.

## 2. Asking for reviews (the engine)
Best moment: right after a positive experience, while it's fresh.
- **Channel:** SMS converts best for trades/local; email as a fallback.
- **Cadence:** one ask immediately after the job, one gentle follow-up 3-4 days later if no
  review. Never more than that.
- **Templates:** "Request - SMS (right after the job)", "Request - SMS (gentle follow-up)",
  "Request - email". Swap [Name], [Business], [service], [suburb], [review link].
- **Who asks:** ideally the client/tradesperson in the moment; we provide the wording and the
  link, and chase velocity. (If we run their phone/CRM, we can send on their behalf.)
- The dashboard's fortnightly **Review generation check** task is the safety net: if no new
  review in two weeks, prompt the client.

## 3. Responding to reviews
- **Positive:** thank them, name the service + suburb (helps ranking), keep it human and
  varied. Templates: "Response - positive", "Response - positive (short)".
- **Negative:** stay calm, respond publicly, take the detail offline (phone/email). Never
  argue, never post private info. A good reply to a bad review builds more trust than the
  review costs. Templates: "Response - negative", "Response - negative (can't identify the
  customer)" for vague or suspected-fake one-stars.
- **Suspected fake / policy-violating reviews:** respond politely, then report/flag in the GBP.

## 4. Monitoring
- The Audit Run captures review count, average rating, and most-recent date; detection flags
  **low count (<10)** and **stale recency (>60 days)**.
- Re-check at each follow-up audit. Track the trend up.
- Milestone `reviews-flowing` (week 11) confirms a steady velocity before the 12-week report.

## 5. Optional add-on: "we respond on your behalf"
Offered as part of ongoing maintenance, not the core 12 weeks. If taken:
- Get the client to grant a manager role on the GBP (don't share passwords).
- Agree turnaround (e.g. respond within 2 business days).
- Use the response templates; flag anything serious (legal threat, safety) to the client
  before replying.

## Where this lives in the dashboard
- **Client > Google Review Link** - the per-client link.
- **Review Templates** - request + response templates, editable, copy-to-clipboard.
- **Tasks > Review generation check** - fortnightly velocity safety net.
- **Audit Run review fields + findings** - monitoring and flags.
- **Milestones** - `review-system-setup` (wk4), `reviews-flowing` (wk11).
