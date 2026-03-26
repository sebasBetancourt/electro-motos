export function Hero() {
  return (
    <main className="flex-1 relative" id="hero">
      {/* Floating Side Button (left) */}
      <div className="absolute left-0 top-1/4 z-40 hidden md:block">
        <button className="bg-blue-600 text-white font-bold text-[10px] tracking-widest uppercase py-3 px-2 rounded-r-md transition-transform hover:translate-x-1 shadow-lg" style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}>
           Obtén 20% Dcto
        </button>
      </div>

      {/* Hero Section */}
      <section className="relative w-full h-[350px] lg:h-[450px] 2xl:h-[550px] flex flex-col lg:flex-row bg-white overflow-hidden">
        
        {/* Left Text Box (White BG) */}
        <div className="w-full lg:w-[55%] flex flex-col justify-center items-start px-6 lg:px-12 xl:px-20 py-16 lg:py-24 z-10">
           <h1 className="text-[3rem] sm:text-[4rem] md:text-[5rem] lg:text-[3.5rem] 2xl:text-[5.5rem] font-extrabold text-black leading-[1.05] tracking-tighter mb-6">
             <span className="block">CALIDAD ELECTRO</span>
             <span className="block">MOTOS TONY.</span>
           </h1>
           <h2 className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[2.5rem] 2xl:text-[3rem] font-medium text-zinc-800 leading-[1.1] mb-12 tracking-tight">
             DIAGNOSTICO Y SOLUCION RAPIDA<br/>EN FALLAS ELECTRICAS.
           </h2>
           <button className="bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-[13px] md:text-[15px] py-4 md:py-5 px-10 md:px-14 tracking-widest transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_25px_rgba(37,99,235,0.6)]">
             AGENDA AHORA
           </button>
        </div>

        {/* Right Box (Diagonal Tech Blue Container + Product) */}
        <div 
          className="w-full lg:w-[60%] lg:absolute lg:right-0 lg:top-0 h-[550px] lg:h-full relative overflow-hidden bg-[#0a192f] flex justify-center items-center px-4"
          style={{ clipPath: "polygon(0% 0, 100% 0, 100% 100%, 25% 100%)" }}
        >
          {/* Background mimicking futuristic blue tones */}
          <div className="absolute inset-0 z-0 flex justify-center items-center overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900 via-[#0a192f] to-[#020c1b]"></div>
            <div className="absolute w-[150%] h-[4px] bg-cyan-400/40 top-1/4 transform -rotate-12 blur-[4px]"></div>
            <div className="absolute w-[150%] h-[12px] bg-blue-500/30 top-[40%] transform -rotate-12 blur-[10px]"></div>
            <div className="absolute w-[150%] h-[2px] bg-yellow-400/50 bottom-1/4 transform rotate-12 blur-[2px]"></div>
          </div>
          <img className="w-full h-full object-cover" src="https://www.motociclismo.es/uploads/s1/94/62/09/8/muelle-valvula.jpeg" alt="" />

          
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
