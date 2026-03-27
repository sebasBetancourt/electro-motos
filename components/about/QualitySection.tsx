"use client";

import React, { FC } from "react";
import Image from "next/image";

export const QualitySection: FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 lg:px-12 xl:px-20">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
          <div className="w-full lg:w-1/2 relative h-[500px]">
             {/* Decorative element */}
             <div className="absolute -top-8 -right-8 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl"></div>
             
             <Image 
              src="/about/precision.png" 
              alt="Calidad ElectroMotos" 
              fill 
              className="object-cover rounded-2xl shadow-2xl relative z-10"
            />
          </div>
          
          <div className="w-full lg:w-1/2">
            <span className="text-blue-600 font-bold tracking-widest uppercase text-[11px] mb-4 block">
              Calidad & Garantía
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-zinc-900 mb-8 tracking-tight italic">
              Fabricación con <span className="text-blue-600">estándares superiores</span>.
            </h2>
            <div className="space-y-6 text-zinc-600 text-lg leading-relaxed font-medium mb-10">
              <p>
                Nuestra trayectoria avala mas alta calidad en nuestra linea de productos, los cuales están orientados especialmente a la fabricación de repuestos de encendido electrónico y reguladores de voltaje.
              </p>
              <p>
                Cada componente está diseñado para ofrecer óptimos niveles de rendimiento, funcionalidad y seguridad en todas las marcas y modelos.
              </p>
            </div>
            
            <div className="bg-[#0a192f] p-8 rounded-2xl relative">
              <span className="text-blue-400 text-5xl font-serif absolute top-4 left-4 opacity-20">"</span>
              <p className="text-white text-xl font-black italic uppercase tracking-tight text-center relative z-10">
                LA GARANTÍA NO ES DURACIÓN ES UN RESPALDO.
              </p>
              <p className="text-blue-500 text-[10px] font-bold tracking-[0.3em] uppercase text-center mt-4">
                Trabajos garantizados por 1 año
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
