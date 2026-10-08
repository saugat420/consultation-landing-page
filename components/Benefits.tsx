import { Check } from "lucide-react";

const benefits = [
  "Identify what's not working in your current digital marketing.",
  "Discover opportunities to attract more qualified customers online.",
  "Find ways to improve your Facebook, Instagram, and website marketing.",
  "Understand how to turn more inquiries into sales through better follow-up.",
  "Get a customized 30-day action plan with clear next steps for your business.",
];

export function Benefits() {
  return (
    <section className="section-shell" aria-labelledby="benefits-title">
      <div className="mx-auto max-w-6xl">
        <div className="section-heading">
          <p className="eyebrow">A clearer path forward</p>
          <h2 id="benefits-title">How You Benefit From This Consultation</h2>
        </div>
        <ul className="benefit-grid">
          {benefits.map((benefit, index) => (
            <li className={index === benefits.length - 1 ? "benefit-card benefit-card-wide" : "benefit-card"} key={benefit}>
              <span className="icon-tile" aria-hidden="true"><Check className="h-5 w-5" strokeWidth={2.5} /></span>
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
