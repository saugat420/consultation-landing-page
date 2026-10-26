const FLODESK_SUBMIT_URL =
  "https://form.flodesk.com/forms/6adf7429625c8f6b87440d59/submit";

const ALLOWED_FIELDS = [
  "firstName",
  "email",
  "fields.whatsappNumber",
  "fields.businessName",
  "fields.websiteOrFacebookLink",
  "fields.anythingYouWantToSay",
  "confirm_email_address",
] as const;

export async function POST(request: Request) {
  const incoming = await request.formData();
  const honeypot = String(incoming.get("confirm_email_address") ?? "").trim();

  // Quietly accept bot submissions without sending them to Flodesk.
  if (honeypot) return Response.redirect(new URL("/thank-you", request.url), 303);

  const payload = new URLSearchParams();
  for (const field of ALLOWED_FIELDS) {
    payload.set(field, String(incoming.get(field) ?? "").trim());
  }

  const requiredFields = ALLOWED_FIELDS.slice(0, 6);
  if (requiredFields.some((field) => !payload.get(field))) {
    return Response.redirect(
      new URL("/?form_error=missing#consultation-form", request.url),
      303,
    );
  }

  try {
    const flodeskResponse = await fetch(FLODESK_SUBMIT_URL, {
      method: "POST",
      headers: { "content-type": "application/x-www-form-urlencoded" },
      body: payload,
      redirect: "manual",
    });

    if (flodeskResponse.status >= 200 && flodeskResponse.status < 400) {
      return Response.redirect(new URL("/thank-you", request.url), 303);
    }
  } catch {
    // The visitor is returned to the form below so their details are not lost silently.
  }

  return Response.redirect(
    new URL("/?form_error=submission#consultation-form", request.url),
    303,
  );
}
