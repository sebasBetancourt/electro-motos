"use client";

import React from "react";
import { ContactSection } from "@/components/landing/ContactSection";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="pt-32 pb-20"> {/* More padding for visibility */}
         <ContactSection />
      </div>
    </main>
  );
}
