"use client";

import React, { FC } from "react";
import Image from "next/image";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  className?: string;
  isLarge?: boolean;
}

const ServiceCard: FC<ServiceCardProps> = ({ title, description, image, className = "", isLarge = false }) => (
  <div className={`relative overflow-hidden rounded-xl shadow-lg group cursor-pointer ${className} ${isLarge ? 'h-[320px]' : 'h-[280px]'}`}>
    {/* Background Image */}
    <Image 
      src={image} 
      alt={title} 
      fill 
      className="object-cover transition-transform duration-700 group-hover:scale-110"
      sizes={isLarge ? "(max-width: 1024px) 100vw, 50vw" : "(max-width: 1024px) 100vw, 33vw"}
    />
    
    {/* Overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-300 group-hover:from-black/95"></div>
    
    {/* Content */}
    <div className="absolute inset-0 p-6 flex flex-col justify-end">
      <h3 className="text-white font-extrabold text-lg lg:text-xl mb-2 leading-tight uppercase tracking-tight">
        {title}
      </h3>
      <p className="text-zinc-300 text-sm lg:text-md line-clamp-3 font-medium leading-relaxed">
        {description}
      </p>
      
      {/* Visual Accent */}
      <div className="w-12 h-1 bg-blue-600 mt-4 transition-all duration-300 group-hover:w-20"></div>
    </div>
  </div>
);

export const ServicesSection: FC = () => {
  return (
    <section className="py-16 bg-zinc-50 font-sans">
      <div className="container mx-auto px-4 lg:px-12 xl:px-20">
        
        {/* Row 1: Specialized Services (3 Cards) */}
        <div className="mb-10">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-2xl md:text-3xl font-black text-zinc-900 uppercase tracking-tighter italic">
              Beneficios en <span className="text-blue-600">Servicio</span>
            </h2>
            <div className="flex-1 h-px bg-zinc-200"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard 
              title="Diagnóstico Eléctrico"
              description="Diagnóstico y solución rápida en problemas eléctricos con precisión milimétrica."
              image="/services/diagnostic.png"
            />
            <ServiceCard 
              title="Equipos & Simuladores"
              description="Contamos con equipos y simuladores de alta definición para garantizar la prueba y estado real de su repuesto."
              image="/services/simulator.png"
            />
            <ServiceCard 
              title="Inyección & Sensores"
              description="Análisis del sistema full inyección, estados de sensores y limpieza ultrasónica de inyectores (bicos)."
              image="/services/ultrasonic.png"
            />
          </div>
        </div>

        {/* Row 2: Factory & Technical Service (2 Cards) */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-2xl md:text-3xl font-black text-zinc-900 uppercase tracking-tighter italic">
              Nuestra <span className="text-blue-600">Empresa</span>
            </h2>
            <div className="flex-1 h-px bg-zinc-200"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ServiceCard 
              isLarge
              title="Fábrica de Repuestos"
              description="Fábrica de partes eléctricas y electromecánicas para motocicletas. Control de calidad 100% efectivo aplicado en producción."
              image="/services/factory.png"
            />
            <ServiceCard 
              isLarge
              title="Servicio Técnico Especializado"
              description="Mantenimiento electromecánico de toda clase de motos en bajo y alto cilindraje con estándares de fábrica."
              image="/services/service.png"
            />
          </div>
        </div>

      </div>
    </section>
  );
};
