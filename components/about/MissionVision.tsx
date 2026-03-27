"use client";

import React, { FC } from "react";

export const MissionVision: FC = () => {
  return (
    <section className="py-24 bg-zinc-50">
      <div className="container mx-auto px-4 lg:px-12 xl:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Mision */}
          <div className="bg-white p-12 rounded-3xl shadow-sm border border-zinc-100 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 rounded-bl-full transition-all duration-500 group-hover:w-40 group-hover:h-40"></div>
            <h3 className="text-3xl font-black text-zinc-900 mb-6 uppercase tracking-tighter italic">
              Nuestra <span className="text-blue-600">Misión</span>
            </h3>
            <p className="text-zinc-600 text-lg leading-relaxed font-medium relative z-10">
              Somos una empresa dedicada a la producción de repuestos eléctricos y electrónicos para motocicletas, trabajamos dando solución de fallas en los mismos en las áreas de mecánica, electricidad, electrónica, full inyección, con un reconocimiento a nivel de Santander por nuestra excelente calidad, servicio y cumplimiento.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-[#0a192f] p-12 rounded-3xl shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full transition-all duration-500 group-hover:w-40 group-hover:h-40"></div>
            <h3 className="text-3xl font-black text-white mb-6 uppercase tracking-tighter italic">
              Nuestra <span className="text-blue-500">Visión</span>
            </h3>
            <p className="text-zinc-300 text-lg leading-relaxed font-medium relative z-10">
              Ser lideres en la producción, distribución, solución e investigación de fallas eléctricas y electrónicas con la implementación de nuevas tecnologías para seguir cumpliendo con las expectativas y necesidades de nuestros clientes con un gran stock de mercancía en todas las marcas y modelos y cilindraje.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
