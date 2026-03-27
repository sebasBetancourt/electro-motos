"use client";

import React, { FC, useRef } from "react";
import Link from "next/link";
import { PRODUCTS } from "./catalog/data";
import { ProductCard } from "./catalog/ProductCard";
import { ProductModal } from "./catalog/ProductModal";
import { useCatalog } from "./catalog/useCatalog";

export const BestSellers: FC = () => {
  const bestSellers = PRODUCTS.filter((p) => p.isBestSeller).slice(0, 10);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { selectedProduct, setSelectedProduct } = useCatalog();

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section className="py-12 bg-zinc-50 font-sans">
      <div className="container mx-auto px-4 lg:px-12 xl:px-20">
        <div className="bg-white rounded-xl shadow-[0_1px_3px_rgba(0,0,0,0.1)] border border-zinc-200 overflow-hidden relative group">
          {/* Header */}
          <div className="flex justify-between items-center p-6 border-b border-zinc-100">
            <h2 className="text-xl md:text-2xl font-extrabold text-[#09090b] tracking-tight uppercase italic">
              Más <span className="text-[#0037ff]">Vendidos</span>
            </h2>
            <Link href="/catalog" className="px-5 py-2 bg-[#0037ff] text-white text-[12px] font-bold uppercase tracking-widest hover:bg-blue-700 transition-colors">
              Ver Catálogo Completo
            </Link>
          </div>

          {/* Carousel Container */}
          <div className="relative p-6 px-12">
            <div
              ref={scrollRef}
              className="flex overflow-x-auto gap-6 no-scrollbar snap-x snap-mandatory"
            >
              {bestSellers.map((product) => (
                <div
                   key={product.id}
                   className="flex-shrink-0 w-[240px] snap-start"
                >
                  <ProductCard product={product} onClick={() => setSelectedProduct(product)} />
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={() => scroll("left")}
              className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl border border-zinc-100 flex items-center justify-center text-[#0037ff] hover:scale-110 transition-transform z-10"
              aria-label="Anterior"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            <button
              onClick={() => scroll("right")}
              className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl border border-zinc-100 flex items-center justify-center text-[#0037ff] hover:scale-110 transition-transform z-10"
              aria-label="Siguiente"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {selectedProduct && (
        <ProductModal 
          product={selectedProduct} 
          onClose={() => setSelectedProduct(null)} 
        />
      )}

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
};
