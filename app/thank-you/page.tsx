import type { Metadata } from "next";
import { Check, MessageCircle } from "lucide-react";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "Thank You | Digital Saugat",
  description: "Demo confirmation for the Digital Saugat consultation form.",
};

export default function ThankYouPage() {
  return (
    <main className="thank-you-shell min-h-screen bg-white text-zinc-950">
      <Header />
      <section className="flex min-h-[calc(100vh-76px)] items-center px-5 py-14 sm:px-6 sm:py-20">
        <div className="thank-you-card mx-auto w-full max-w-2xl text-center">
          <div className="confirmation-icon mx-auto" aria-hidden="true"><Check className="h-9 w-9" strokeWidth={2.5} /></div>
          <h1 className="mt-2 text-4xl font-bold tracking-[-0.04em] sm:text-5xl">Thank You!</h1>
          <h2 className="mt-4 text-xl font-semibold text-zinc-800 sm:text-2xl">Your Consultation Request Has Been Received.</h2>

          <div className="video-section">
            <p className="eyebrow">Before you go</p>
            <h2>Watch This Video</h2>
            <p>Watch this short video to understand what happens next and how to prepare for your consultation.</p>
            <div className="video-frame">
              <iframe
                src="https://www.youtube.com/embed/1baI5Achry0?rel=0"
                title="What happens next after your consultation request"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>

          <div className="whatsapp-card">
            <span className="whatsapp-icon" aria-hidden="true"><MessageCircle /></span>
            <h2>Connect With Me on WhatsApp</h2>
            <p>Have a question about your consultation or want to discuss your business goals? Send me a message directly on WhatsApp.</p>
            <a href="https://wa.me/9779812345678" target="_blank" rel="noopener noreferrer" className="whatsapp-button" aria-label="Connect with me on WhatsApp at +977 9812345678">
              <MessageCircle aria-hidden="true" />
              Connect With Me on WhatsApp
            </a>
            <p className="whatsapp-number">+977 9812345678</p>
          </div>
        </div>
      </section>
    </main>
  );
}
