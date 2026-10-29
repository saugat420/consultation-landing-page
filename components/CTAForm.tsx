"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { CheckCircle2, Loader2, LockKeyhole } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const FLODESK_FORM_ID = "6adf7429625c8f6b87440d59";
const FLODESK_ROOT_CLASS = `ff-${FLODESK_FORM_ID}`;
const FLODESK_SUBMIT_URL = `https://form.flodesk.com/forms/${FLODESK_FORM_ID}/submit`;
const fieldClass =
  "h-12 rounded-xl border-zinc-300 bg-white px-4 text-base text-zinc-950 shadow-none placeholder:text-zinc-400 focus-visible:border-amber-500 focus-visible:ring-4 focus-visible:ring-amber-100";

export function CTAForm() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting) return;

    setSubmitting(true);
    setSubmitError("");
    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(
      [...formData.entries()].map(([key, value]) => [key, String(value).trim()]),
    );

    try {
      const response = await fetch(FLODESK_SUBMIT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json;charset=UTF-8" },
        body: JSON.stringify(payload),
      });
      const result = (await response.json()) as { status?: string };

      if (!response.ok || result.status !== "success") {
        throw new Error("Flodesk rejected the submission.");
      }

      router.push("/thank-you");
    } catch {
      setSubmitError("We couldn't send your request. Please try again.");
      setSubmitting(false);
    }
  }

  return (
    <>
      <section id="consultation-form" className="form-section scroll-mt-4 px-5 py-16 sm:px-6 sm:py-24" aria-labelledby="form-title">
        <div className="mx-auto grid max-w-6xl items-start gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
          <div className="lg:sticky lg:top-8">
            <p className="eyebrow">Your free consultation</p>
            <h2 id="form-title" className="text-balance text-3xl font-bold tracking-[-0.035em] text-white sm:text-4xl">Book Your Free Consultation</h2>
            <p className="mt-4 max-w-lg text-base leading-7 text-zinc-300">Share a few details about your business so the conversation can focus on your current challenges and opportunities.</p>
            <ul className="mt-7 space-y-3" aria-label="Consultation includes">
              <li className="supporting-point"><CheckCircle2 aria-hidden="true" />One-to-One Consultation</li>
              <li className="supporting-point"><CheckCircle2 aria-hidden="true" />Customized Strategy for Your Business</li>
            </ul>
            <p className="mt-7 flex items-center gap-2 text-sm text-zinc-400"><LockKeyhole aria-hidden="true" className="h-4 w-4" />We respect your privacy. No spam.</p>
          </div>

          <div
            className={`${FLODESK_ROOT_CLASS} contents`}
            data-ff-el="root"
            data-ff-version="3"
            data-ff-type="inline"
            data-ff-name="inlineNoImage"
            data-ff-stage="default"
          >
            <form
              className={`form-card ${FLODESK_ROOT_CLASS}__form`}
              action={FLODESK_SUBMIT_URL}
              method="post"
              onSubmit={handleSubmit}
              data-ff-el="form"
            >
              {submitError && (
                <p role="alert" className="mb-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
                  {submitError}
                </p>
              )}
              <div className={`${FLODESK_ROOT_CLASS}__content fd-form-content`} data-ff-el="content">
                <div className={`${FLODESK_ROOT_CLASS}__fields`} data-ff-el="fields">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <FieldGroup label="Full Name" name="firstName">
                      <Input id="firstName" name="firstName" type="text" maxLength={255} autoComplete="name" placeholder="Enter your full name" className={`${FLODESK_ROOT_CLASS}__control fd-form-control ${fieldClass}`} data-ff-tab="firstName::email" required />
                    </FieldGroup>
                    <FieldGroup label="Active Email" name="email">
                      <Input id="email" name="email" type="email" maxLength={255} inputMode="email" autoComplete="email" placeholder="Enter your email address" className={`${FLODESK_ROOT_CLASS}__control fd-form-control ${fieldClass}`} data-ff-tab="email:firstName:fields.whatsappNumber" required />
                    </FieldGroup>
                    <FieldGroup label="WhatsApp Number" name="whatsappNumber">
                      <Input id="whatsappNumber" name="fields.whatsappNumber" type="tel" maxLength={255} inputMode="tel" autoComplete="tel" placeholder="Enter your WhatsApp number" className={`${FLODESK_ROOT_CLASS}__control fd-form-control ${fieldClass}`} data-ff-tab="fields.whatsappNumber:email:fields.businessName" required />
                    </FieldGroup>
                    <FieldGroup label="Business Name" name="businessName">
                      <Input id="businessName" name="fields.businessName" type="text" maxLength={255} autoComplete="organization" placeholder="Enter your business name" className={`${FLODESK_ROOT_CLASS}__control fd-form-control ${fieldClass}`} data-ff-tab="fields.businessName:fields.whatsappNumber:fields.websiteOrFacebookLink" required />
                    </FieldGroup>
                  </div>
                  <div className="mt-5">
                    <FieldGroup label="Website or Facebook URL" name="websiteOrFacebookLink">
                      <Input id="websiteOrFacebookLink" name="fields.websiteOrFacebookLink" type="url" maxLength={255} inputMode="url" autoComplete="url" placeholder="https://" className={`${FLODESK_ROOT_CLASS}__control fd-form-control ${fieldClass}`} data-ff-tab="fields.websiteOrFacebookLink:fields.businessName:fields.anythingYouWantToSay" required />
                    </FieldGroup>
                  </div>
                  <div className="mt-5">
                    <label htmlFor="anythingYouWantToSay" className="field-label">Anything You Want to Say</label>
                    <Textarea id="anythingYouWantToSay" name="fields.anythingYouWantToSay" maxLength={255} placeholder="Tell us about your business or marketing challenges" className={`${FLODESK_ROOT_CLASS}__control fd-form-control mt-2 min-h-28 resize-y rounded-xl border-zinc-300 bg-white px-4 py-3 text-base text-zinc-950 shadow-none placeholder:text-zinc-400 focus-visible:border-amber-500 focus-visible:ring-4 focus-visible:ring-amber-100`} data-ff-tab="fields.anythingYouWantToSay:fields.websiteOrFacebookLink:submit" required />
                  </div>
                  <input type="text" maxLength={255} name="confirm_email_address" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
                </div>

                <div className={`${FLODESK_ROOT_CLASS}__footer`} data-ff-el="footer">
                  <Button type="submit" disabled={submitting} data-ff-el="submit" data-ff-tab="submit" className={`${FLODESK_ROOT_CLASS}__button fd-btn mt-7 h-13 w-full rounded-xl bg-[#ffc400] px-5 text-base font-extrabold text-black shadow-[0_14px_30px_rgba(255,196,0,0.22)] hover:bg-[#ffd433] focus-visible:ring-4 focus-visible:ring-amber-200 disabled:opacity-70`}>
                    {submitting ? <><Loader2 aria-hidden="true" className="h-5 w-5 animate-spin" />Submitting…</> : <>Book My Free Consultation</>}
                  </Button>
                </div>
                <p className="mt-4 text-center text-sm leading-6 text-zinc-500">Your details are securely submitted through Flodesk.</p>
              </div>
              <div data-ff-el="success" className={`${FLODESK_ROOT_CLASS}__success fd-form-success hidden`} aria-live="polite">Your request has been received.</div>
              <div data-ff-el="error" className={`${FLODESK_ROOT_CLASS}__error fd-form-error mt-4 text-sm font-medium text-red-600`} role="alert" />
            </form>
          </div>
        </div>
      </section>

    </>
  );
}

function FieldGroup({ label, name, children }: { label: string; name: string; children: React.ReactNode }) {
  return (
    <div className={`${FLODESK_ROOT_CLASS}__field fd-form-group`}>
      <label htmlFor={name} className={`${FLODESK_ROOT_CLASS}__label field-label`}>{label}</label>
      <div className="mt-2">{children}</div>
    </div>
  );
}
