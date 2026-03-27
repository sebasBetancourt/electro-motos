"use client";

import React, { FC } from "react";
import Image from "next/image";

export const AboutHero: FC = () => {
  return (
    <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-[#0a192f]">
      <Image 
        src="/about/building_front.png" 
        alt="ElectroMotos Tony" 
        fill 
        className="object-cover opacity-40"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a192f]/80"></div>
      
      <div className="relative z-10 text-center px-4">
        <span className="text-blue-500 font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block animate-fade-in">
          Establecidos en Bucaramanga
        </span>
        <h1 className="text-5xl md:text-7xl font-black text-white uppercase italic tracking-tighter mb-4">
          ElectroMoto <span className="text-blue-600">Tony</span>
        </h1>
        <p className="text-zinc-300 text-lg md:text-xl font-medium tracking-wide max-w-2xl mx-auto">
          Soluciones en fallas eléctricas y mecánica desde 1991.
        </p>
      </div>
    </section>
  );
};
