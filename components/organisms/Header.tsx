import Link from "next/link";
import { Navbar } from "./Navbar";
import { IconSearch, IconCart, IconFacebook, IconInstagram, IconYoutube } from "../atoms/Icons";

const logoImg = "/2.jpg";

export function Header() {
  return (
    <>
      {/* Top Promo Banner */}
      <div className="bg-blue-600 text-white text-sm md:text-[10px] font-mono text-center py-1 uppercase tracking-wide">
        PROMOCIÓN Y AHORRE 10% EN CADA REPUESTO
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 w-full bg-white border-b border-zinc-200">
        <div className="container mx-auto px-4 lg:px-1 h-[88px] flex items-center justify-between">
          
          {/* Logo (Left) */}
          <Link href="/" className="flex items-center shrink-0">
            <img src={logoImg} alt="Electro Motos Tony" className="w-auto h-24 sm:h-20 object-contain drop-shadow-sm rounded-full" />
          </Link>

          {/* Center Nav */}
          <Navbar />

          {/* Right Actions */}
          <div className="flex items-center gap-6">
            <Link href="#quiz" className="hidden lg:flex border border-blue-600 text-blue-600 text-[11px] font-bold py-2.5 px-6 hover:bg-blue-50 transition-colors tracking-widest uppercase">
              AGENDA UNA CITA
            </Link>
            <div className="flex items-center gap-4 text-black">
              <button className="hover:text-blue-600 transition-colors"><IconSearch className="w-5 h-5"/></button>
              <button className="hover:text-blue-600 transition-colors"><IconCart className="w-5 h-5"/></button>
              <button className="hover:text-blue-600 transition-colors"><IconFacebook className="w-5 h-5"/></button>
              <button className="hover:text-blue-600 transition-colors"><IconInstagram className="w-5 h-5"/></button>
              <button className="hover:text-blue-600 transition-colors"><IconYoutube className="w-5 h-5"/></button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
