import { ClipboardPenLine, MessagesSquare, Route } from "lucide-react";

const steps = [
  { number: "01", title: "Book Your Free Consultation", description: "Fill out the form with your business details.", icon: ClipboardPenLine },
  { number: "02", title: "Let's Analyze Your Business", description: "We'll discuss your business, current marketing challenges, and growth opportunities.", icon: MessagesSquare },
  { number: "03", title: "Get Your Customized Growth Plan", description: "Walk away with a practical 30-day digital marketing action plan for your business.", icon: Route },
];

export function Process() {
  return (
    <section className="section-shell bg-slate-50" aria-labelledby="process-title">
      <div className="mx-auto max-w-6xl">
        <div className="section-heading">
          <p className="eyebrow">Three simple steps</p>
          <h2 id="process-title">How Does the Free Consultation Work?</h2>
        </div>
        <ol className="process-grid">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <li className="process-card" key={step.number}>
                <div className="flex items-start justify-between gap-4">
                  <span className="process-icon" aria-hidden="true"><Icon className="h-6 w-6" /></span>
                  <span className="step-number">{step.number}</span>
                </div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
