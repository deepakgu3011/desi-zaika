import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { MenuSection } from "@/components/MenuSection";
import { WhyUs } from "@/components/WhyUs";
import { AboutSection } from "@/components/AboutSection";
import { CTABanner } from "@/components/CTABanner";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-background flex flex-col font-sans">
      <Navbar />
      <Hero />
      <MenuSection />
      <WhyUs />
      <AboutSection />
      <CTABanner />
      <ContactSection />
      <Footer />
    </main>
  );
}