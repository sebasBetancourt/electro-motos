import Link from "next/link";
import Image from "next/image";

// Inline Icons to ensure immediate rendering without external deps
const IconZap = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
);
const IconWrench = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
);
const IconSettings = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>
);
const IconSearch = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
);
const IconActivity = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
);
const IconMapPin = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
);
const IconPhone = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
);
const IconMail = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
);
const IconFacebook = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);
const IconInstagram = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);
const IconYoutube = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M2.5 7.1C2.5 7.1 2.3 5.4 3 4.6 3.8 3.6 4.9 3.6 5.4 3.5 8 3.3 12 3.3 12 3.3s4-.1 6.6.2c.5.1 1.6.1 2.4 1.1.7.8.5 2.5.5 2.5s.2 2 .2 4v1.8c0 2-.2 4-.2 4s-.2 1.7-.9 2.5c-.8 1-1.8 1-2.3 1.1C15 20.7 12 20.7 12 20.7s-4 0-6.6-.2c-.5-.1-1.6-.1-2.4-1.1-.7-.8-.5-2.5-.5-2.5s-.2-2-.2-4V11.1c0-2 .2-4 .2-4z"/><path d="m9.7 14.7 5.8-3.3-5.8-3.3z"/></svg>
);

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-zinc-950/80 backdrop-blur supports-[backdrop-filter]:bg-zinc-950/60 transition-all duration-300">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center">
              <IconZap className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl tracking-tight">Electromotos</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <Link href="#inicio" className="text-zinc-300 hover:text-white hover:underline decoration-red-500 underline-offset-4 transition-all">Inicio</Link>
            <Link href="#empresa" className="text-zinc-300 hover:text-white hover:underline decoration-red-500 underline-offset-4 transition-all">Empresa</Link>
            <Link href="#servicios" className="text-zinc-300 hover:text-white hover:underline decoration-red-500 underline-offset-4 transition-all">Servicios</Link>
            <Link href="#contacto" className="text-zinc-300 hover:text-white hover:underline decoration-red-500 underline-offset-4 transition-all">Contacto</Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section id="inicio" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-zinc-900 via-zinc-950 to-zinc-950 -z-10"></div>
          <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-96 h-96 bg-red-600/20 blur-[120px] rounded-full"></div>
          
          <div className="container mx-auto px-4 flex flex-col items-center text-center">
            <div className="inline-flex items-center rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1 text-sm font-medium text-red-400 mb-8 backdrop-blur-sm shadow-[0_0_15px_rgba(239,68,68,0.3)]">
              <IconActivity className="mr-2 h-4 w-4" />
              Repuestos para todo tipo de motos
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight max-w-4xl mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-400">
              Fábrica de Repuestos y Servicio Técnico
            </h1>
            <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mb-10 leading-relaxed font-light">
              Diagnóstico y solución rápida en problemas eléctricos. Contamos con equipos y simuladores de alta definición para su repuesto.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link href="#servicios" className="inline-flex h-12 px-8 items-center justify-center rounded-md bg-red-600 font-medium text-white shadow-lg shadow-red-600/20 hover:shadow-red-600/40 hover:-translate-y-0.5 hover:bg-red-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 focus:ring-offset-zinc-950">
                Ver Servicios
              </Link>
              <Link href="#contacto" className="inline-flex h-12 px-8 items-center justify-center rounded-md border border-zinc-700 bg-zinc-900 font-medium text-zinc-100 hover:bg-zinc-800 hover:border-zinc-500 hover:text-white transition-all focus:outline-none focus:ring-2 focus:ring-zinc-600 focus:ring-offset-2 focus:ring-offset-zinc-950 hover:-translate-y-0.5">
                Contáctenos
              </Link>
            </div>
          </div>
        </section>

        {/* Empresa Section */}
        <section id="empresa" className="py-24 bg-zinc-900/50">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Nuestra Empresa</h2>
                <p className="text-zinc-400 mb-6 leading-relaxed text-lg font-light">
                  Empresa Colombiana fundada en el año 1991 y radicada en la ciudad de Bucaramanga.
                </p>
                <div className="p-6 rounded-2xl bg-zinc-950/50 border border-zinc-800 shadow-xl backdrop-blur-sm relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <p className="text-zinc-300 italic relative z-10 text-lg">
                    "Nuestra trayectoria avala la más alta calidad en nuestra línea de productos, los cuales están orientados especialmente a la fabricación de repuestos de encendido electrónico y reguladores de voltaje, con óptimos niveles de rendimiento, funcionalidad y seguridad."
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6 relative">
                 <div className="absolute inset-0 bg-red-600/10 blur-[100px] rounded-full"></div>
                 <div className="flex flex-col items-center p-8 bg-zinc-950/80 backdrop-blur rounded-2xl border border-zinc-800/50 text-center relative z-10 transition-transform duration-300 hover:-translate-y-2 hover:border-red-500/30 hover:shadow-[0_10px_30px_rgba(239,68,68,0.1)]">
                   <IconSettings className="w-12 h-12 text-red-500 mb-4" />
                   <h3 className="font-semibold text-xl mb-2">Fabricación</h3>
                   <p className="text-zinc-400 text-sm">Partes eléctricas y electromecánicas</p>
                 </div>
                 <div className="flex flex-col items-center p-8 bg-zinc-950/80 backdrop-blur rounded-2xl border border-zinc-800/50 text-center relative z-10 mt-8 transition-transform duration-300 hover:-translate-y-2 hover:border-red-500/30 hover:shadow-[0_10px_30px_rgba(239,68,68,0.1)]">
                   <IconWrench className="w-12 h-12 text-red-500 mb-4" />
                   <h3 className="font-semibold text-xl mb-2">Servicio Técnico</h3>
                   <p className="text-zinc-400 text-sm">Motos de bajo y alto cilindraje</p>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* Servicios Section */}
        <section id="servicios" className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">Notas Técnicas y Servicios</h2>
              <p className="text-zinc-400 max-w-2xl mx-auto text-lg">Soluciones integrales respaldadas por tecnología de punta y procesos 100% efectivos.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { 
                  icon: IconZap, 
                  title: "Diagnóstico Eléctrico", 
                  desc: "Diagnóstico y solución rápida en problemas eléctricos garantizando confiabilidad."
                },
                { 
                  icon: IconSearch, 
                  title: "Simuladores de Alta Definición", 
                  desc: "Prueba y estado de repuestos con control de calidad y funcionalidad 100% efectiva."
                },
                { 
                  icon: IconActivity, 
                  title: "Análisis Full Inyección", 
                  desc: "Estados de los sensores y evaluación completa del sistema de inyección electrónica."
                },
                { 
                  icon: IconWrench, 
                  title: "Limpieza Ultrasónica", 
                  desc: "Mantenimiento integral y limpieza profunda de (bicos) inyectores mediante ultrasonido."
                },
                { 
                  icon: IconSettings, 
                  title: "Partes Electromecánicas", 
                  desc: "Fábrica especializada en repuestos de alta calidad y rendimiento óptimo."
                },
                { 
                  icon: IconWrench, 
                  title: "Servicio Experto", 
                  desc: "Mano de obra capacitada con más de 30 años en reparaciones avanzadas."
                }
              ].map((item, i) => (
                <div key={i} className="group p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 hover:bg-zinc-800/60 hover:border-zinc-700 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                  <div className="w-14 h-14 rounded-xl bg-red-500/10 flex items-center justify-center mb-6 group-hover:bg-red-500 group-hover:text-white text-red-500 transition-colors duration-300">
                    <item.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 tracking-tight">{item.title}</h3>
                  <p className="text-zinc-400 leading-relaxed font-light">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contacto */}
        <section id="contacto" className="py-24 bg-zinc-900/80 border-t border-zinc-800">
          <div className="container mx-auto px-4 max-w-4xl text-center">
             <div className="mb-12">
               <h2 className="text-4xl font-bold mb-4">Contáctenos</h2>
               <p className="text-zinc-400 max-w-md mx-auto">Visítenos en Bucaramanga o póngase en contacto con nosotros.</p>
             </div>
             
             <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mb-16">
                <div className="flex flex-col items-center p-6 bg-zinc-950/50 rounded-2xl border border-zinc-800/50 transition-colors hover:border-red-500/30">
                  <IconMapPin className="w-8 h-8 text-red-500 mb-4" />
                  <h4 className="font-semibold mb-2">Ubicación</h4>
                  <p className="text-zinc-400 text-sm">Bucaramanga, Colombia</p>
                </div>
                <div className="flex flex-col items-center p-6 bg-zinc-950/50 rounded-2xl border border-zinc-800/50 transition-colors hover:border-red-500/30">
                  <IconPhone className="w-8 h-8 text-red-500 mb-4" />
                  <h4 className="font-semibold mb-2">Teléfono</h4>
                  <p className="text-zinc-400 text-sm">Disponible Próximamente</p>
                </div>
                <div className="flex flex-col items-center p-6 bg-zinc-950/50 rounded-2xl border border-zinc-800/50 transition-colors hover:border-red-500/30">
                  <IconMail className="w-8 h-8 text-red-500 mb-4" />
                  <h4 className="font-semibold mb-2">Email</h4>
                  <p className="text-zinc-400 text-sm">Disponible Próximamente</p>
                </div>
             </div>
             
             <div className="flex justify-center gap-6">
                <a href="https://www.facebook.com/tonymotos.co/" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full bg-zinc-950 border border-zinc-800 text-zinc-400 hover:text-white hover:bg-red-600 hover:border-red-600 transition-all duration-300 hover:scale-110" aria-label="Facebook">
                  <IconFacebook className="w-6 h-6" />
                </a>
                <a href="#" className="p-4 rounded-full bg-zinc-950 border border-zinc-800 text-zinc-400 hover:text-white hover:bg-red-600 hover:border-red-600 transition-all duration-300 hover:scale-110" aria-label="Instagram">
                  <IconInstagram className="w-6 h-6" />
                </a>
                <a href="#" className="p-4 rounded-full bg-zinc-950 border border-zinc-800 text-zinc-400 hover:text-white hover:bg-red-600 hover:border-red-600 transition-all duration-300 hover:scale-110" aria-label="Youtube">
                  <IconYoutube className="w-6 h-6" />
                </a>
             </div>
          </div>
        </section>
      </main>

      <footer className="py-12 border-t border-zinc-800 bg-zinc-950">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <IconZap className="w-5 h-5 text-zinc-600" />
            <span className="font-bold tracking-tight text-zinc-400">Electromotos</span>
          </div>
          <p className="text-zinc-500 text-sm">© 2023 by Electromotos. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
