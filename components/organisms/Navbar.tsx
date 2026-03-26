import Link from "next/link";

export function Navbar() {
  return (
    <nav className="hidden xl:flex items-center gap-10 text-[11px] font-bold text-black tracking-[0.1em]">
      <Link href="#hero" className="hover:text-blue-600 transition-colors">INICIO</Link>
      <Link href="#suscribete" className="hover:text-blue-600 transition-colors">MAS SOBRE NOSOTROS</Link>
      <Link href="#catalog" className="hover:text-blue-600 transition-colors">CATALOGO</Link>
      <Link href="#tecnicos" className="hover:text-blue-600 transition-colors">SERVICIOS</Link>
      <Link href="#empresa" className="hover:text-blue-600 transition-colors">CONTACTANOS</Link>
    </nav>
  );
}
