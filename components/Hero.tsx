import { CheckCircle2 } from "lucide-react";

export function Hero() {
  return (
    <section className="hero-glow relative border-b border-blue-100 px-5 py-10 sm:px-6 sm:py-20 lg:py-24">
      <div className="relative mx-auto max-w-5xl text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-3.5 py-2 text-sm font-semibold text-blue-700 shadow-sm sm:mb-6">
          <CheckCircle2 aria-hidden="true" className="h-4 w-4" />
          Free one-to-one consultation
        </div>
        <h1 className="mx-auto max-w-4xl text-balance text-[2rem] font-bold leading-[1.07] tracking-[-0.045em] text-slate-950 sm:text-5xl sm:leading-[1.08] lg:text-[4rem]">
          Struggling to Get Customers Online? Get a <span className="text-blue-600">Free 30-Day Digital Marketing Plan</span> for Your Business.
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-pretty text-lg leading-7 text-slate-600 sm:mt-6 sm:text-xl sm:leading-8">
          Discover what&apos;s holding back your online growth and get a customized action plan to attract more qualified customers.
        </p>
        <p className="mx-auto mt-3 max-w-2xl text-base leading-6 text-slate-600 sm:mt-4 sm:leading-7">
          Running a small or medium business but struggling to generate consistent customers online? Book a free one-to-one consultation to find out what&apos;s not working and what you can improve over the next 30 days.
        </p>
        <a className="primary-cta mt-6 sm:mt-8" href="#consultation-form">
          Book My Free Consultation
        </a>
      </div>
    </section>
  );
}
