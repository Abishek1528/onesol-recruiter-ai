import Hero from "@/components/Hero";
import FlowchartSection from "@/components/FlowchartSection";
import ImpactMetrics from "@/components/ImpactMetrics";
import LogoTicker from "@/components/LogoTicker";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-white min-h-screen text-dark font-sans selection:bg-primary selection:text-white">
      <Navbar />
      <Hero />
      <FlowchartSection />
      <ImpactMetrics />
      <Testimonials />
      <LogoTicker />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}