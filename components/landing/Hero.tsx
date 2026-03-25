import { IconZap } from "../atoms/Icons";

export function Hero() {
  return (
    <main className="flex-1 relative">
      {/* Floating Side Button (left) */}
      <div className="absolute left-0 top-1/4 z-40 hidden md:block">
        <button className="bg-blue-600 text-white font-bold text-[10px] tracking-widest uppercase py-3 px-2 rounded-r-md transition-transform hover:translate-x-1 shadow-lg" style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}>
           Obtén 20% Dcto
        </button>
      </div>

      {/* Hero Section */}
      <section className="relative w-full lg:min-h-[85vh] flex flex-col lg:flex-row bg-white overflow-hidden">
        
        {/* Left Text Box (White BG) */}
        <div className="w-full lg:w-[55%] flex flex-col justify-center items-start px-6 lg:px-12 xl:px-20 py-16 lg:py-24 z-10">
           <h1 className="text-[3rem] sm:text-[4rem] md:text-[5rem] lg:text-[5.5rem] font-extrabold text-black leading-[1.05] tracking-tighter mb-6">
             <span className="block">CALIDAD ELECTRO</span>
             <span className="block">MOTOS TONY.</span>
           </h1>
           <h2 className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] font-medium text-zinc-800 leading-[1.1] mb-12 tracking-tight">
             TU REPUESTO.<br/>TU SEGURIDAD.
           </h2>
           <button className="bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-[13px] md:text-[15px] py-4 md:py-5 px-10 md:px-14 tracking-widest transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_25px_rgba(37,99,235,0.6)]">
             AGENDA HOY
           </button>
        </div>

        {/* Right Box (Diagonal Tech Blue Container + Product) */}
        <div 
          className="w-full lg:w-[60%] lg:absolute lg:right-0 lg:top-0 h-[650px] lg:h-full relative overflow-hidden bg-[#0a192f] flex justify-center items-center px-4"
          style={{ clipPath: "polygon(0% 0, 100% 0, 100% 100%, 25% 100%)" }}
        >
          {/* Background mimicking futuristic blue tones */}
          <div className="absolute inset-0 z-0 flex justify-center items-center overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900 via-[#0a192f] to-[#020c1b]"></div>
            <div className="absolute w-[150%] h-[4px] bg-cyan-400/40 top-1/4 transform -rotate-12 blur-[4px]"></div>
            <div className="absolute w-[150%] h-[12px] bg-blue-500/30 top-[40%] transform -rotate-12 blur-[10px]"></div>
            <div className="absolute w-[150%] h-[2px] bg-yellow-400/50 bottom-1/4 transform rotate-12 blur-[2px]"></div>
          </div>

          {/* This mirrors the coffee bag shape and internal layout mapped to the blue CDI branding */}
          <div className="w-full max-w-[400px] h-[105%] bg-blue-700 rounded-t-[40px] shadow-2xl flex flex-col items-center pt-10 px-6 pb-0 relative overflow-hidden group border-x border-t border-blue-500/50 z-10 translate-x-4 lg:translate-x-12 translate-y-12">
             <div className="absolute inset-0 bg-gradient-to-tr from-black/50 via-transparent to-white/20 pointer-events-none mix-blend-overlay"></div>
             <div className="absolute top-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-400/40 via-transparent to-transparent"></div>

             <p className="text-white/90 text-[11px] font-bold tracking-[0.15em] mb-4 relative z-10">FABRICANDO DESDE 1991</p>
             
             {/* Brand Logo inside the product card */}
             <div className="w-full relative mb-8 mt-2 z-10 flex flex-col items-center justify-center px-4">
               <img src="/2.jpg" alt="Electro Motos Logo" className="w-auto h-40 sm:h-44 object-contain drop-shadow-xl" />
             </div>

             {/* Label area (black box) */}
             <div className="bg-[#111] w-full p-6 text-left flex-1 relative z-10 shadow-2xl flex flex-col justify-between border-t-[6px] border-yellow-400">
                <div>
                  <h4 className="text-white text-[11px] font-bold tracking-[0.1em] mb-3 opacity-90 border-b border-zinc-700 pb-3">CDI RACING ORIGINAL</h4>
                  
                  <p className="text-[10px] text-zinc-400 font-bold mb-1 tracking-[0.1em]">REPUESTO | ALTO CILINDRAJE</p>
                  <h3 className="text-white text-[26px] font-bold leading-[1.1] mb-5">CDI Módulo <br/>Alto Rendimiento</h3>
                  
                  {/* Sub-label badges */}
                  <div className="flex gap-4 mb-4">
                     <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-[7px] text-zinc-300 text-center font-bold">100%<br/>TEST</div>
                     <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-[7px] text-zinc-300 text-center font-bold">OEM<br/>PART</div>
                  </div>
                </div>

                <div className="border-t border-zinc-800 pt-3">
                  <div className="flex justify-between items-center text-[9px] text-white font-bold tracking-widest border-b border-zinc-800 pb-2 mb-2">
                     <div>
                        <span className="opacity-60 block mb-1">NOTAS TÉCNICAS</span>
                        POTENCIA EXTRA, INYECCIÓN MEJORADA, ARRANQUE RÁPIDO
                     </div>
                  </div>
                  
                  <div className="flex justify-between text-[9px] text-white font-bold tracking-widest border-b border-zinc-800 pb-2 mb-2">
                    <div className="w-1/2 border-r border-zinc-800">
                       <span className="opacity-60 block mb-1">COMPATIBILIDAD</span>
                       UNIVERSAL
                    </div>
                    <div className="w-1/2 pl-4">
                       <span className="opacity-60 block mb-1">PROCESO</span>
                       ELECTRÓNICO
                    </div>
                  </div>

                  <div className="flex justify-between items-end text-[8px] text-zinc-500 font-bold tracking-widest mt-2">
                    <p className="leading-relaxed w-[70%]">
                      ELECTROMOTOS COLOMBIA B/MANGA<br/>
                      REPUESTOS GARANTIZADOS POR FÁBRICA<br/>
                      UNIDAD (1 PZA)
                    </p>
                    <div className="flex flex-col items-center">
                      <p className="mb-1 text-white text-[9px]">Garantía</p>
                      <div className="w-6 h-6 rounded-full border border-white/50 flex justify-center items-center text-white text-xs font-bold bg-zinc-900">R</div>
                    </div>
                  </div>
                </div>
             </div>
          </div>
          
          <div className="absolute right-4 top-1/2 z-40 bg-white/10 hover:bg-white/20 backdrop-blur rounded-full p-2 cursor-pointer transition-colors shadow-lg border border-white/20">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </div>
        </div>
      </section>

      {/* Black Ticker Bar below Hero */}
      <div className="w-full bg-black text-white text-[9px] md:text-[11px] font-bold tracking-widest py-3 flex overflow-hidden whitespace-nowrap border-b-2 border-zinc-800">
         <div className="flex gap-4 md:gap-8 justify-center min-w-[200%] md:min-w-fit">
            <span>10% DE DESCUENTO EN CADA COMPRA &nbsp;|&nbsp; NO REQUIERE CÓDIGO</span>
            <span>10% DE DESCUENTO EN CADA COMPRA &nbsp;|&nbsp; NO REQUIERE CÓDIGO</span>
            <span className="hidden md:inline">10% DE DESCUENTO EN CADA COMPRA &nbsp;|&nbsp; NO REQUIERE CÓDIGO</span>
            <span className="hidden lg:inline">10% DE DESCUENTO EN CADA COMPRA &nbsp;|&nbsp; NO REQUIERE CÓDIGO</span>
            <span className="hidden xl:inline">10% DE DESCUENTO EN CADA COMPRA &nbsp;|&nbsp; NO REQUIERE CÓDIGO</span>
         </div>
      </div>
    </main>
  );
}
