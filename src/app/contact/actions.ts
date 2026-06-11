"use server";

type LeadInput = {
  name: string;
  email: string;
  phone?: string;
  business?: string;
  message?: string;
};

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

/**
 * Handle a contact / free-audit submission:
 *  1. Store the lead in Supabase (the pipeline's source of truth — the dashboard
 *     syncs new rows into the lead pipeline).
 *  2. Email Coen a notification and send the prospect an auto-reply.
 *
 * Supabase storage is best-effort: if it hiccups, the email still goes out so a
 * lead is never lost. The email send is what determines success for the user.
 */
export async function submitLead(
  data: LeadInput
): Promise<{ ok: boolean; error?: string }> {
  const name = (data.name || "").trim().slice(0, 200);
  const email = (data.email || "").trim().slice(0, 200);
  const phone = (data.phone || "").trim().slice(0, 50);
  const business = (data.business || "").trim().slice(0, 200);
  const message = (data.message || "").trim().slice(0, 5000);

  if (!name || !email || !EMAIL_RE.test(email)) {
    return { ok: false, error: "invalid" };
  }

  // 1. Store in Supabase (best-effort)
  const url = process.env.SUPABASE_URL;
  const anon = process.env.SUPABASE_ANON_KEY;
  if (url && anon) {
    try {
      const res = await fetch(`${url}/rest/v1/website_leads`, {
        method: "POST",
        headers: {
          apikey: anon,
          Authorization: `Bearer ${anon}`,
          "Content-Type": "application/json",
          Prefer: "return=minimal",
        },
        body: JSON.stringify({
          name,
          email,
          phone: phone || null,
          business: business || null,
          message: message || null,
          source: "website",
        }),
      });
      // fetch only throws on network failure; a 401/RLS/missing-column rejection
      // returns a non-2xx that would otherwise silently drop the lead.
      if (!res.ok) {
        console.error("Supabase lead insert rejected:", res.status, await res.text());
      }
    } catch (err) {
      console.error("Supabase lead insert failed:", err);
    }
  }

  // 2. Notify Coen + auto-reply to the prospect
  try {
    const res = await fetch(
      "https://formsubmit.co/ajax/coen@csdigitalmarketing.au",
      {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          business,
          message,
          _subject: `Free GBP Audit Request - ${business || name}`,
          _template: "table",
          _autoresponse:
            "Thanks for reaching out to CS Digital Marketing. We've got your details and will get back to you within 24 hours. Cheers, Coen",
        }),
      }
    );
    if (!res.ok) return { ok: false, error: "send_failed" };
  } catch {
    return { ok: false, error: "send_failed" };
  }

  return { ok: true };
}
