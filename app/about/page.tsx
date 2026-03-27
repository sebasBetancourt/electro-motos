import React from "react";
import { AboutHero } from "@/components/about/AboutHero";
import { StorySection } from "@/components/about/StorySection";
import { MissionVision } from "@/components/about/MissionVision";
import { QualitySection } from "@/components/about/QualitySection";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <AboutHero />
      <StorySection />
      <MissionVision />
      <QualitySection />
    </main>
  );
}
