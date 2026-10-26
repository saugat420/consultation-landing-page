import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Benefits } from "@/components/Benefits";
import { Process } from "@/components/Process";
import { CTAForm } from "@/components/CTAForm";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ form_error?: string }>;
}) {
  const { form_error } = await searchParams;

  return (
    <main className="min-h-screen overflow-hidden bg-white text-slate-950">
      <Header />
      <Hero />
      <Benefits />
      <Process />
      <CTAForm submissionError={form_error} />
    </main>
  );
}
