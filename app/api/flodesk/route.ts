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
  try {
    const incoming = (await request.json()) as Record<string, unknown>;

    const verificationToken = String(incoming.verificationToken ?? "").trim();
    const verificationField = String(incoming.verificationField ?? "").trim();
    if (verificationToken || verificationField) {
      if (
        !/^[a-f0-9]{32}$/i.test(verificationToken) ||
        !/^[A-Za-z0-9]+$/.test(verificationField) ||
        incoming.humanConfirmed !== true
      ) {
        return Response.json(
          { status: "error", message: "Please confirm that you are not a robot." },
          { status: 400 },
        );
      }

      const verificationResponse = await fetch(
        `https://form.flodesk.com/forms/6adf7429625c8f6b87440d59/verify/${verificationToken}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams({ [verificationField]: "on" }),
          redirect: "manual",
        },
      );

      if (verificationResponse.status < 200 || verificationResponse.status >= 400) {
        return Response.json(
          { status: "error", message: "Flodesk could not verify the submission." },
          { status: 502 },
        );
      }

      return Response.json({ status: "success" });
    }

    if (String(incoming.confirm_email_address ?? "").trim()) {
      return Response.json({ status: "success" });
    }

    const payload: Record<string, string> = {};
    for (const field of ALLOWED_FIELDS) {
      payload[field] = String(incoming[field] ?? "").trim();
    }

    if (ALLOWED_FIELDS.slice(0, 6).some((field) => !payload[field])) {
      return Response.json(
        { status: "error", message: "Please complete every field." },
        { status: 400 },
      );
    }

    const flodeskResponse = await fetch(FLODESK_SUBMIT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json;charset=UTF-8" },
      body: JSON.stringify(payload),
    });
    const responseText = await flodeskResponse.text();
    let result: { status?: string; message?: string } = {};
    try {
      result = JSON.parse(responseText) as typeof result;
    } catch {
      // A successful upstream response is enough; the browser only needs a
      // stable success shape from this same-origin endpoint.
    }

    if (!flodeskResponse.ok) {
      return Response.json(
        { status: "error", message: result.message ?? "Flodesk rejected the submission." },
        { status: 502 },
      );
    }

    const verification = result as {
      onVerifying?: { content?: string; url?: string };
    };
    if (verification.onVerifying?.content && verification.onVerifying.url) {
      const token = verification.onVerifying.url.match(/\/verify\/([a-f0-9]{32})$/i)?.[1];
      const field = verification.onVerifying.content.match(
        /<div class="fd-form-group" style="">[\s\S]*?name="([A-Za-z0-9]+)"/,
      )?.[1];

      if (!token || !field) {
        return Response.json(
          { status: "error", message: "Flodesk verification could not be prepared." },
          { status: 502 },
        );
      }

      return Response.json({
        status: "verification_required",
        verificationToken: token,
        verificationField: field,
      });
    }

    return Response.json({
      ...result,
      status: "success",
    });
  } catch {
    return Response.json(
      { status: "error", message: "Unable to submit the form." },
      { status: 502 },
    );
  }
}
