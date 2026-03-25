import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: "#09090b",
};

export const metadata: Metadata = {
  title: "Electromotos | Repuestos y Servicio Técnico para Motocicletas",
  description: "Fábrica de partes eléctricas y electromecánicas para motos en Bucaramanga. Especialistas en diagnóstico eléctrico, inyección electrónica y servicio técnico de alto y bajo cilindraje.",
  keywords: ["repuestos motos", "servicio técnico electromecánico", "inyección electrónica motos", "Bucaramanga motos", "Electromotos", "partes eléctricas motos", "limpieza de inyectores ultrasónica"],
  authors: [{ name: "Electromotos" }],
  creator: "Electromotos",
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: "https://electromotostdk.wixsite.com/bucar",
    title: "Electromotos | Repuestos y Servicio Técnico para Motocicletas",
    description: "Diagnóstico y solución rápida en problemas eléctricos. Contamos con equipos y simuladores de alta definición para motos en Bucaramanga.",
    siteName: "Electromotos",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen bg-zinc-950 text-zinc-50 flex flex-col antialiased selection:bg-red-500 selection:text-white`}>
        {children}
      </body>
    </html>
  );
}
