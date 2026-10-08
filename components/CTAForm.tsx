"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { CheckCircle2, Loader2, LockKeyhole } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type Field = "fullName" | "email" | "phone" | "businessName" | "url";
type Errors = Partial<Record<Field, string>>;

function value(form: FormData, field: Field) {
  return String(form.get(field) ?? "").trim();
}

function validate(form: FormData): Errors {
  const errors: Errors = {};
  if (!value(form, "fullName")) errors.fullName = "Please enter your full name.";
  const email = value(form, "email");
  if (!email) errors.email = "Please enter your active email address.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = "Enter a valid email address.";
  if (!value(form, "phone")) errors.phone = "Please enter your WhatsApp number.";
  if (!value(form, "businessName")) errors.businessName = "Please enter your business name.";
  const url = value(form, "url");
  if (url) {
    try {
      const parsed = new URL(url);
      if (!/^https?:$/.test(parsed.protocol)) throw new Error("Invalid protocol");
    } catch {
      errors.url = "Enter a complete URL, such as https://facebook.com/yourbusiness.";
    }
  }
  return errors;
}

const fieldClass = "h-12 rounded-xl border-slate-300 bg-white px-4 text-base text-slate-950 shadow-none placeholder:text-slate-400 focus-visible:border-blue-600 focus-visible:ring-4 focus-visible:ring-blue-100";

export function CTAForm() {
  const router = useRouter();
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting) return;
    const form = new FormData(event.currentTarget);
    const nextErrors = validate(form);
    setErrors(nextErrors);
    const firstError = Object.keys(nextErrors)[0] as Field | undefined;
    if (firstError) {
      requestAnimationFrame(() => document.getElementById(firstError)?.focus());
      return;
    }
    setSubmitting(true);
    window.setTimeout(() => router.push("/thank-you"), 700);
  }

  return (
    <section id="consultation-form" className="form-section scroll-mt-4 px-5 py-16 sm:px-6 sm:py-24" aria-labelledby="form-title">
      <div className="mx-auto grid max-w-6xl items-start gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
        <div className="lg:sticky lg:top-8">
          <p className="eyebrow">Your free consultation</p>
          <h2 id="form-title" className="text-balance text-3xl font-bold tracking-[-0.035em] text-slate-950 sm:text-4xl">Book Your Free Consultation</h2>
          <p className="mt-4 max-w-lg text-base leading-7 text-slate-600">Share a few details about your business so the conversation can focus on your current challenges and opportunities.</p>
          <ul className="mt-7 space-y-3" aria-label="Consultation includes">
            <li className="supporting-point"><CheckCircle2 aria-hidden="true" />One-to-One Consultation</li>
            <li className="supporting-point"><CheckCircle2 aria-hidden="true" />Customized Strategy for Your Business</li>
          </ul>
          <p className="mt-7 flex items-center gap-2 text-sm text-slate-500"><LockKeyhole aria-hidden="true" className="h-4 w-4" />We respect your privacy. No spam.</p>
        </div>

        <form className="form-card" onSubmit={handleSubmit} noValidate>
          <div className="grid gap-5 sm:grid-cols-2">
            <FieldGroup label="Full Name" name="fullName" error={errors.fullName}>
              <Input id="fullName" name="fullName" autoComplete="name" placeholder="Enter your full name" aria-invalid={!!errors.fullName} aria-describedby={errors.fullName ? "fullName-error" : undefined} className={fieldClass} />
            </FieldGroup>
            <FieldGroup label="Active Email" name="email" error={errors.email}>
              <Input id="email" name="email" type="email" inputMode="email" autoComplete="email" placeholder="Enter your email address" aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-error" : undefined} className={fieldClass} />
            </FieldGroup>
            <FieldGroup label="WhatsApp Number" name="phone" error={errors.phone}>
              <Input id="phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="Enter your WhatsApp number" aria-invalid={!!errors.phone} aria-describedby={errors.phone ? "phone-error" : undefined} className={fieldClass} />
            </FieldGroup>
            <FieldGroup label="Business Name" name="businessName" error={errors.businessName}>
              <Input id="businessName" name="businessName" autoComplete="organization" placeholder="Enter your business name" aria-invalid={!!errors.businessName} aria-describedby={errors.businessName ? "businessName-error" : undefined} className={fieldClass} />
            </FieldGroup>
          </div>
          <div className="mt-5">
            <FieldGroup label="Website or Facebook URL" name="url" error={errors.url} optional>
              <Input id="url" name="url" type="url" inputMode="url" autoComplete="url" placeholder="https://" aria-invalid={!!errors.url} aria-describedby={errors.url ? "url-error" : undefined} className={fieldClass} />
            </FieldGroup>
          </div>
          <div className="mt-5">
            <label htmlFor="message" className="field-label">Anything You Want to Say <span>Optional</span></label>
            <Textarea id="message" name="message" placeholder="Tell us about your business or marketing challenges" className="mt-2 min-h-28 resize-y rounded-xl border-slate-300 bg-white px-4 py-3 text-base text-slate-950 shadow-none placeholder:text-slate-400 focus-visible:border-blue-600 focus-visible:ring-4 focus-visible:ring-blue-100" />
          </div>
          <Button type="submit" disabled={submitting} className="mt-7 h-13 w-full rounded-xl bg-blue-600 px-5 text-base font-bold text-white shadow-[0_14px_30px_rgba(37,99,235,0.22)] hover:bg-blue-700 focus-visible:ring-4 focus-visible:ring-blue-200 disabled:opacity-70">
            {submitting ? <><Loader2 aria-hidden="true" className="h-5 w-5 animate-spin" />Submitting…</> : <>Book My Free Consultation</>}
          </Button>
          <p className="mt-4 text-center text-sm leading-6 text-slate-500">Demo form: your details will not be sent or saved.</p>
        </form>
      </div>
    </section>
  );
}

function FieldGroup({ label, name, error, optional, children }: { label: string; name: Field; error?: string; optional?: boolean; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={name} className="field-label">{label}{optional && <span>Optional</span>}</label>
      <div className="mt-2">{children}</div>
      {error && <p id={`${name}-error`} role="alert" className="mt-2 text-sm font-medium text-red-600">{error}</p>}
    </div>
  );
}
