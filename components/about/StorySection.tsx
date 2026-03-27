"use client";

import React, { FC } from "react";
import Image from "next/image";

export const StorySection: FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-12 xl:px-20">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2 relative h-[500px] overflow-hidden shadow-2xl">
            <Image 
              src="/about/1.avif" 
              alt="Historia de ElectroMotos" 
              fill 
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
          
          <div className="w-full lg:w-1/2">
            <span className="text-blue-600 font-bold tracking-widest uppercase text-[11px] mb-4 block">
              Nuestra Trayectoria
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-zinc-900 mb-8 tracking-tight italic">
              Más de <span className="text-blue-600">25 años</span> innovando en Santander.
            </h2>
            <div className="space-y-6 text-zinc-600 text-lg leading-relaxed font-normal">
              <p>
                Nuestra trayectoria por mas de 25 años de experiencia no cesa en investigaciones para las respectivas fabricaciones, lo que nos avala con un gran prestigio y reconocimiento a nivel de Santander por nuestro arduo trabajo.
              </p>
              <p>
                Como fabricantes y gracias a los años de experiencia que acompañan nuestra labor, el equipo humano de ELECTROMOTO esta capacitado para dar diagnósticos y solución en fallas eléctricas, mecánicas y electrónicas para motos.
              </p>
              <div className="pt-6 border-t border-zinc-100 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-bold">
                  91
                </div>
                <p className="text-sm font-bold text-zinc-900 uppercase tracking-widest">
                  Empresa Colombiana fundada en 1991.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
