import Link from "next/link";
import { IconFacebook, IconInstagram, IconYoutube } from "../atoms/Icons";

const logoImg = "/2.jpg";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#e5e7eb] border-t border-zinc-300 font-sans">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 min-h-[250px]">
          
          {/* Column 1: Contact */}
          <div className="p-8 lg:p-10 flex flex-col gap-4 border-b md:border-b-0 md:border-r border-zinc-300">
            <h3 className="text-[13px] font-bold text-zinc-800 tracking-wider uppercase">Contacto</h3>
            <div className="flex flex-col gap-2 text-[12px] text-zinc-600 font-medium leading-relaxed">
              <p>Concordia CRA 19 N° 49-13</p>
              <p>Bucaramanga, Santander</p>
              <p>Tel: (037) 6331976</p>
              <p>Cel: 316 457 0026</p>
              <Link href="mailto:electromotosdtk@gmail.com" className="hover:text-blue-600 transition-colors">
                electromotosdtk@gmail.com
              </Link>
            </div>
            <Link href="/privacidad" className="mt-auto text-[11px] text-zinc-500 hover:text-blue-600 transition-colors uppercase tracking-widest font-bold">
              Política de Privacidad
            </Link>
          </div>

          {/* Column 2: Empresa / Shortcuts */}
          <div className="p-8 lg:p-10 flex flex-col gap-4 border-b md:border-b-0 lg:border-r border-zinc-300">
            <h3 className="text-[13px] font-bold text-zinc-800 tracking-wider uppercase">Acceso Rápido</h3>
            <nav className="flex flex-col gap-3 text-[12px] text-zinc-600 font-medium uppercase tracking-tight">
              <Link href="/#hero" className="hover:text-blue-600 transition-colors">Inicio</Link>
              <Link href="/catalog" className="hover:text-blue-600 transition-colors">Catálogo de Repuestos</Link>
              <Link href="/#tecnicos" className="hover:text-blue-600 transition-colors">Servicio Técnico</Link>
              <Link href="/#empresa" className="hover:text-blue-600 transition-colors">Sobre Nosotros</Link>
            </nav>
            <Link href="/login" className="mt-auto text-[11px] text-zinc-500 hover:text-blue-600 transition-colors uppercase tracking-widest font-bold">
              Acceso Empleados
            </Link>
          </div>

          {/* Column 3: Social */}
          <div className="p-8 lg:p-10 flex flex-col gap-4 border-b md:border-b-0 md:border-r border-zinc-300">
            <h3 className="text-[13px] font-bold text-zinc-800 tracking-wider uppercase">Siguenos</h3>
            <div className="flex flex-col gap-4 text-[12px] text-zinc-600 font-medium">
              <Link href="https://instagram.com" className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                <IconInstagram className="w-4 h-4" /> Instagram
              </Link>
              <Link href="https://facebook.com" className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                <IconFacebook className="w-4 h-4" /> Facebook
              </Link>
              <Link href="https://youtube.com" className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                <IconYoutube className="w-4 h-4" /> YouTube
              </Link>
            </div>
          </div>

          {/* Column 4: Logo & Copy */}
          <div className="p-8 lg:p-10 flex flex-col items-start gap-6">
            <div className="flex items-center gap-3">
              <img src={logoImg} alt="Electro Motos Tony" className="w-14 h-14 object-contain rounded-full border border-black/10" />
              <div className="flex flex-col">
                <span className="text-zinc-900 font-bold text-sm tracking-tighter uppercase leading-none">ElectroMotos</span>
                <span className="text-blue-600 font-black text-lg tracking-tighter uppercase leading-none">Tony</span>
              </div>
            </div>
            
            <div className="mt-auto flex flex-col gap-1">
              <p className="text-[10px] text-zinc-500 font-bold tracking-widest uppercase">
                © {currentYear} ElectroMotos Tony
              </p>
              <p className="text-[9px] text-zinc-400 font-medium italic">
                Calidad y Garantía desde 1991
              </p>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
