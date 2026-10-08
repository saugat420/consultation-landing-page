import Link from "next/link";
import type { Metadata } from "next";
import { Check } from "lucide-react";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "Thank You | Digital Saugat",
  description: "Demo confirmation for the Digital Saugat consultation form.",
};

export default function ThankYouPage() {
  return (
    <main className="thank-you-shell min-h-screen bg-white text-slate-950">
      <Header />
      <section className="flex min-h-[calc(100vh-76px)] items-center px-5 py-14 sm:px-6 sm:py-20">
        <div className="thank-you-card mx-auto w-full max-w-2xl text-center">
          <div className="confirmation-icon mx-auto" aria-hidden="true"><Check className="h-9 w-9" strokeWidth={2.5} /></div>
          <p className="eyebrow mt-7">Demo submission complete</p>
          <h1 className="mt-2 text-4xl font-bold tracking-[-0.04em] sm:text-5xl">Thank You!</h1>
          <h2 className="mt-4 text-xl font-semibold text-slate-800 sm:text-2xl">Your Consultation Request Has Been Received.</h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-600">Your form is complete. This is a demo submission, so your details have not been sent or saved.</p>
          <div className="mt-7 rounded-2xl border border-blue-100 bg-blue-50 px-5 py-4 text-left sm:px-6">
            <p className="font-semibold text-slate-900">Next steps</p>
            <p className="mt-1 text-sm leading-6 text-slate-600">Once the live booking system is connected, you&apos;ll receive instructions for the next step.</p>
          </div>
          <Link href="/" className="mt-8 inline-flex min-h-11 items-center justify-center rounded-xl px-4 text-sm font-semibold text-blue-700 underline decoration-blue-300 underline-offset-4 hover:text-blue-800 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-200">Return to the consultation page</Link>
        </div>
      </section>
    </main>
  );
}
