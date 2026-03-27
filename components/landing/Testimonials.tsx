"use client";

import React, { FC, useRef } from "react";

interface Testimonial {
  name: string;
  text: string;
  stars: number;
  time: string;
}

const REVIEWS: Testimonial[] = [
  {
    name: "Jhon Cruz",
    text: "Excelente servicio y conocimiento. La moto no quería encender por problema eléctrico y encontraron la falla bastante rápido. Recomendados 100%",
    stars: 5,
    time: "Hace 3 años",
  },
  {
    name: "Henry Remolina",
    text: "Excelente servicio llegue a Electromotos donde en poco tiempo me solucionaron una falla por descarga de batería. Yo recomiendo a Electromotos por lo que pude ver tienen experiencia.",
    stars: 5,
    time: "Hace 9 meses",
  },
  {
    name: "Robinson Prada Robles",
    text: "Me gustó cómo realizan el diagnostico, las pruebas, y un servicio agil. Mil gracias.",
    stars: 5,
    time: "Hace 9 meses",
  },
  {
    name: "John Angarita",
    text: "Excelente servicio y profesionalismo.",
    stars: 5,
    time: "Hace 5 años",
  },
  {
    name: "Darío Sánchez",
    text: "Excelente servicio super recomendado.",
    stars: 5,
    time: "Hace 9 meses",
  },
  {
    name: "Alexander Arismendy",
    text: "Excelente servicio.",
    stars: 5,
    time: "Hace 9 meses",
  },
];

export const Testimonials: FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 bg-[#faf9f6] font-sans overflow-hidden">
      <div className="container mx-auto px-4 lg:px-12 xl:px-20 text-center">
        <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-zinc-400 mb-4 block">
          Opiniones
        </span>
        <h2 className="text-4xl md:text-5xl font-extrabold text-zinc-900 mb-10 tracking-tighter italic">
          Lo que nuestros clientes <span className="text-blue-600">tienen para decir</span>
        </h2>
        
        <a 
          href="https://www.google.com/search?q=ELECTROMOTO+TONY+Bucaramanga#lrd=0x8e683f1e1f1e1f1f:0x1f1f1f1f1f1f1f1f,1" 
          target="_blank" 
          className="inline-block bg-[#ffdec2] text-zinc-900 text-[11px] font-black tracking-widest uppercase px-8 py-3 rounded-full hover:bg-[#fcd0ab] transition-colors mb-16"
        >
          Ver opiniones en Google
        </a>

        {/* Carousel */}
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory pt-4 pb-10"
          >
            {REVIEWS.map((review, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-full sm:w-[450px] bg-[#0a192f] p-10 text-left flex flex-col justify-between min-h-[300px] shadow-2xl snap-center"
              >
                <p className="text-zinc-200 text-lg md:text-xl font-medium leading-relaxed mb-12 italic">
                  "{review.text}"
                </p>
                
                <div className="flex justify-between items-center mt-auto">
                  <span className="text-zinc-400 text-[11px] font-black uppercase tracking-widest">
                    {review.name}
                  </span>
                  
                  <div className="flex gap-1 text-[#ff8a00]">
                    {[...Array(review.stars)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Nav Arrows */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={() => scroll("left")}
              className="w-12 h-12 bg-[#0a192f] text-white rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-12 h-12 bg-[#0a192f] text-white rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
};
