"use client";

import React, { FC } from "react";
import Image from "next/image";

export const ContactSection: FC = () => {
  return (
    <section id="contact" className="py-24 bg-white text-zinc-900 font-sans overflow-hidden">
      <div className="container mx-auto px-4 lg:px-12 xl:px-20">
        
        <div className="flex flex-col lg:flex-row gap-16 mb-24">
          {/* Left: Professional Image */}
          <div className="w-full lg:w-1/2 relative h-[500px] lg:h-[600px] overflow-hidden group rounded-2xl shadow-xl">
            <Image 
              src="https://lh3.googleusercontent.com/gps-cs-s/AHVAwerfEus-QMfDoCbvrhXu9wSymKQdR5FLLrb1ZnzlvyoU0gLgsSMBy7bZOKRiiQs1DxMX7ipDWXIUQQdtwixzUGtoCOxuFZbBHJ_iP4gfW_swqTSsKXH909mNoE2QZcBuSC3rh3Wz=s680-w680-h510-rw" 
              alt="Asesoría Profesional ElectroMotos" 
              fill 
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent opacity-60"></div>
          </div>

          {/* Right: Contact Info & Form */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <span className="text-blue-600 font-bold tracking-[0.3em] uppercase text-[10px] mb-4 block">
              / Contáctenos
            </span>
            <h2 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter mb-10 text-[#09090b]">
              Estamos para <span className="text-blue-600">ayudarte</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div>
                <p className="text-blue-600 text-[10px] font-black uppercase tracking-widest mb-1">Teléfono</p>
                <p className="text-xl font-bold">(037) 6331976</p>
              </div>
              <div>
                <p className="text-blue-600 text-[10px] font-black uppercase tracking-widest mb-1">Celulares</p>
                <p className="text-xl font-bold">316 4570 026</p>
                <p className="text-xl font-bold">313 3004 458</p>
              </div>
              <div className="md:col-span-2">
                <p className="text-blue-600 text-[10px] font-black uppercase tracking-widest mb-1">Email</p>
                <p className="text-xl font-bold underline underline-offset-4 decoration-blue-200 hover:decoration-blue-600 transition-all">
                  Electromotosdtk@gmail.com
                </p>
              </div>
            </div>

            {/* Form */}
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative group">
                  <input type="text" placeholder="NOMBRE *" className="w-full bg-transparent border-b border-zinc-200 py-3 text-[11px] font-bold uppercase tracking-widest outline-none focus:border-blue-600 transition-colors placeholder:text-zinc-400 text-zinc-900" required />
                </div>
                <div className="relative group">
                  <input type="email" placeholder="EMAIL *" className="w-full bg-transparent border-b border-zinc-200 py-3 text-[11px] font-bold uppercase tracking-widest outline-none focus:border-blue-600 transition-colors placeholder:text-zinc-400 text-zinc-900" required />
                </div>
                <div className="relative group">
                  <input type="tel" placeholder="TELÉFONO" className="w-full bg-transparent border-b border-zinc-200 py-3 text-[11px] font-bold uppercase tracking-widest outline-none focus:border-blue-600 transition-colors placeholder:text-zinc-400 text-zinc-900" />
                </div>
                <div className="relative group">
                  <input type="text" placeholder="ASUNTO *" className="w-full bg-transparent border-b border-zinc-200 py-3 text-[11px] font-bold uppercase tracking-widest outline-none focus:border-blue-600 transition-colors placeholder:text-zinc-400 text-zinc-900" required />
                </div>
              </div>
              <div className="relative group">
                <textarea placeholder="MENSAJE" rows={3} className="w-full bg-transparent border-b border-zinc-200 py-3 text-[11px] font-bold uppercase tracking-widest outline-none focus:border-blue-600 transition-colors placeholder:text-zinc-400 text-zinc-900 resize-none"></textarea>
              </div>
              
              <button className="w-full md:w-auto border border-blue-600 text-blue-600 text-[11px] font-black tracking-widest uppercase px-12 py-4 hover:bg-blue-600 hover:text-white transition-all hover:scale-[1.02] flex items-center justify-center gap-4">
                Enviar Mensaje
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-zinc-100">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.9880894212513!2d-73.1251717!3d7.121544499999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e683f1e1f1e1f1f%3A0x1f1f1f1f1f1f1f1f!2zQ3JhLiAxOSAjNDktMTMsIEJ1Y2FyYW1hbmdhLCBTYW50YW5kZXIsIENvbG9tYmlh!5e0!3m2!1ses!2sco!4v1711496000000!5m2!1ses!2sco" 
            width="100%" 
            height="500" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          
          <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-6 rounded-xl border border-zinc-100 flex flex-col md:flex-row justify-between items-center gap-6 shadow-xl">
            <div className="text-center md:text-left">
              <p className="text-blue-600 text-[10px] font-black uppercase tracking-widest mb-1">Visítanos</p>
              <p className="text-lg font-bold text-zinc-900">CONCORDIA CRA 19 N° 49-13, Bucaramanga</p>
            </div>
            <div className="flex gap-4">
               {/* Social Icons */}
               <a href="#" className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all text-blue-600">FB</a>
               <a href="#" className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all text-blue-600">IG</a>
               <a href="#" className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all text-blue-600">YT</a>
               <a href="#" className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all text-blue-600">G+</a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
