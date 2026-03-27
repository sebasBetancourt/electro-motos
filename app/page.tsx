import { Hero } from "@/components/landing/Hero";
import { ServicesSection } from "@/components/landing/ServicesSection";
import { BestSellers } from "@/components/landing/BestSellers";
import { Testimonials } from "@/components/landing/Testimonials";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-white">
      <Hero />
      <ServicesSection />
      <BestSellers />
      <Testimonials />
    </div>
  );
}
