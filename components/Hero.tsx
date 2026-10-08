import { Check, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="hero-section px-5 py-10 sm:px-6 sm:py-16 lg:py-20">
      <div className="hero-layout mx-auto max-w-6xl">
        <div className="hero-copy">
          <div className="offer-pill">
            <Sparkles aria-hidden="true" className="h-4 w-4" />
            Free one-to-one consultation
          </div>
          <h1>Struggling to Get Customers Online?</h1>
          <h2 className="hero-offer-heading">Get a Free 30-Day Digital Marketing Plan for Your Business.</h2>
          <p className="hero-description">
            Running a small or medium business but struggling to generate consistent customers online? Book a free one-to-one consultation to find out what&apos;s not working and what you can improve over the next 30 days.
          </p>
          <a className="primary-cta" href="#consultation-form">Book My Free Consultation</a>
        </div>

        <aside className="plan-card" aria-label="Your free 30-day plan includes">
          <div className="plan-card-topline">Your customized growth plan</div>
          <div className="plan-number">30</div>
          <div className="plan-label">Day digital marketing plan</div>
          <ul>
            <li><Check aria-hidden="true" />Marketing review</li>
            <li><Check aria-hidden="true" />Customer opportunities</li>
            <li><Check aria-hidden="true" />Clear next steps</li>
          </ul>
        </aside>
      </div>
    </section>
  );
}
