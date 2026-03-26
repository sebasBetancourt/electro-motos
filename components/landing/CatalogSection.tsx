"use client";

import React, { FC, useState, useMemo } from "react";
import Image from "next/image";

//─── paleta ───
// Background:   #ffffff
// Title:        #000000  extrabold
// Subtitle:     #27272a  (zinc-800)  medium
// Body text:    #000000
// Accent/CTA:   #0037ff
// Border light: #e4e4e7  (zinc-200)
// Muted text:   #71717a  (zinc-500)
// Surface:      #fafafa  (zinc-50)

// types

interface Product {
  id: number;
  name: string;
  category: string;
  brand: string;
  viscosity: string | null;
  price: number;
  available: boolean;
  image: string;
  description: string;
  characteristics: string[];
  sku: string;
}

interface Filters {
  category: string;
  brand: string;
  viscosity: string;
  priceMin: number;
  priceMax: number;
}

// ─── mock Data ────────────────────────────────────────────────────────────────

const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Disco de Freno Delantero 320mm",
    category: "Discos de freno",
    brand: "Yamaha",
    viscosity: null,
    price: 185000,
    available: true,
    image: "https://motorepuestos.vtexassets.com/arquivos/ids/768783-1200-auto?v=639101313486770000&width=1200&height=auto&aspect=true",
    description: "Disco de freno delantero de alto rendimiento para motos Yamaha. Fabricado en acero inoxidable con tratamiento anticorrosión.",
    characteristics: ["Diámetro: 320mm", "Espesor: 5mm", "Material: Acero inoxidable 420", "Perforaciones ventiladas", "Compatible: YZF-R3, MT-03"],
    sku: "YMH-DFD-320",
  },
  {
    id: 2,
    name: "Kit Clutch Completo",
    category: "Partes de clutch",
    brand: "Honda",
    viscosity: null,
    price: 320000,
    available: true,
    image: "https://motorepuestos.vtexassets.com/arquivos/ids/772757-1200-auto?v=639101358009000000&width=1200&height=auto&aspect=true",
    description: "Kit completo de clutch para motos Honda. Incluye discos de fricción, discos metálicos y resortes.",
    characteristics: ["Incluye 6 discos de fricción", "Incluye 5 discos metálicos", "Incluye 6 resortes", "Compatible: CBR600, CB500"],
    sku: "HND-KCT-001",
  },
  {
    id: 3,
    name: "Aceite Motor 15W40 Mineral",
    category: "Lubricantes",
    brand: "AKT",
    viscosity: "15W40",
    price: 45000,
    available: true,
    image: "https://motorepuestos.vtexassets.com/arquivos/ids/769018-1200-auto?v=639101316742800000&width=1200&height=auto&aspect=true",
    description: "Aceite mineral para motor de 4 tiempos. Formulado especialmente para motos de uso urbano.",
    characteristics: ["Viscosidad: 15W40", "Base mineral", "API: SL/CF", "JASO: MA2", "Contenido: 1 litro"],
    sku: "AKT-ACT-15W40",
  },
  {
    id: 4,
    name: "Switch de Encendido Universal",
    category: "Switch de encendido",
    brand: "Suzuki",
    viscosity: null,
    price: 78000,
    available: false,
    image: "https://motorepuestos.vtexassets.com/arquivos/ids/771425-1200-auto?v=639101343594930000&width=1200&height=auto&aspect=true",
    description: "Switch de encendido universal con llave. Resistente al agua y a vibraciones.",
    characteristics: ["3 posiciones: OFF/ON/ACC", "Resistente al agua IP65", "Material: Aleación de zinc", "Incluye 2 llaves"],
    sku: "SUZ-SWE-UNI",
  },
  {
    id: 5,
    name: "Aceite Transmisión 80W90",
    category: "Lubricantes",
    brand: "Yamaha",
    viscosity: "80W90",
    price: 38000,
    available: true,
    image: "https://motorepuestos.vtexassets.com/arquivos/ids/769082-1200-auto?v=639101317984900000&width=1200&height=auto&aspect=true",
    description: "Aceite para caja de transmisión y diferencial. Protección extrema para engranajes.",
    characteristics: ["Viscosidad: 80W90", "API: GL-5", "Base mineral", "Contenido: 500ml"],
    sku: "YMH-ATR-80W90",
  },
  {
    id: 6,
    name: "Pastillas de Freno Traseras",
    category: "Discos de freno",
    brand: "Honda",
    viscosity: null,
    price: 62000,
    available: true,
    image: "https://motorepuestos.vtexassets.com/arquivos/ids/769936-1200-auto?v=639101326557700000&width=1200&height=auto&aspect=true",
    description: "Pastillas de freno traseras de material semi-metálico para frenos de disco.",
    characteristics: ["Material: Semi-metálico", "Incluye 2 pastillas", "Con sensores de desgaste", "Compatible: CB150, CB190"],
    sku: "HND-PFT-002",
  },
  {
    id: 7,
    name: "Palanca Clutch Ajustable",
    category: "Partes de clutch",
    brand: "AKT",
    viscosity: null,
    price: 52000,
    available: true,
    image: "https://motorepuestos.vtexassets.com/arquivos/ids/769953-1200-auto?v=639101326669430000&width=1200&height=auto&aspect=true",
    description: "Palanca de clutch ajustable con 6 posiciones. Fabricada en aluminio anodizado CNC.",
    characteristics: ["6 posiciones de ajuste", "Aluminio CNC anodizado", "Plegable en impacto", "Universal 22mm"],
    sku: "AKT-PCL-ADJ",
  },
  {
    id: 8,
    name: "Aceite Motor 20W50 Semi-Sintético",
    category: "Lubricantes",
    brand: "Suzuki",
    viscosity: "20W50",
    price: 68000,
    available: false,
    image: "https://motorepuestos.vtexassets.com/arquivos/ids/769042-1200-auto?v=639101316892700000&width=1200&height=auto&aspect=true",
    description: "Aceite semi-sintético de alto rendimiento. Ideal para climas cálidos y motores de alta cilindrada.",
    characteristics: ["Viscosidad: 20W50", "Base semi-sintética", "API: SN/CF", "JASO: MA2", "Contenido: 1 litro"],
    sku: "SUZ-ACT-20W50",
  },
   {
    id: 9,
    name: "Caja Cambios Completa",
    category: "Motor",
    brand: "AKT",
    viscosity: null,
    price: 221975,
    available: false,
    image: "https://motorepuestos.vtexassets.com/arquivos/ids/769608-1200-auto?v=639101322617670000&width=1200&height=auto&aspect=true",
    description: "Caja Cambios Completa Akt 180 Ttr-180 Ttx-Cr5 Genui Set.",
    characteristics: ["Caja Cambios: Semi-completa y Completa", "Base semi-sintética", "API: SN/CF", "JASO: MA2", "Contenido: 1 litro"],
    sku: "GB3008",
  },
   {
    id: 10,
    name: "Kit de Arrastre 15X43",
    category: "Transmision",
    brand: "Todas",
    viscosity: null,
    price: 36255,
    available: true,
    image: "https://motorepuestos.vtexassets.com/arquivos/ids/768019-1200-auto?v=639101216158070000&width=1200&height=auto&aspect=true",
    description: "Kit de Arrastre 15X43 (428h-140) Pulsar 135, 150-160 NS, Discover 125-150 ST Revo Spider KitX3",
    characteristics: ["Duracion: +20k Km", "Base semi-sintética", "API: SN/CF", "JASO: MA2", "Contenido: 1 litro"],
    sku: "YT0047",
  },
];

const CATEGORIES = ["Todos", "Discos de freno", "Partes de clutch", "Lubricantes", "Switch de encendido", "Transmision", "Motor"];
const BRANDS = ["Todas", "Yamaha", "Honda", "Suzuki", "AKT"];
const VISCOSITIES = ["Todas", "15W40", "20W50", "80W90"];
const MAX_PRICE = 400000;

//helper

const formatCOP = (n: number) =>
  new Intl.NumberFormat("es-CO", { style: "currency", currency: "COP", maximumFractionDigits: 0 }).format(n);

//sub-components

const FilterBadge: FC<{ label: string; onRemove: () => void }> = ({ label, onRemove }) => (
  <span style={{
    display: "inline-flex", alignItems: "center", gap: 6,
    background: "#0037ff", color: "#fff", fontSize: 11,
    fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase",
    padding: "4px 10px", borderRadius: 3,
  }}>
    {label}
    <button
      onClick={onRemove}
      style={{ background: "none", border: "none", color: "#fff", cursor: "pointer", fontSize: 14, lineHeight: 1, padding: 0 }}
    >×</button>
  </span>
);

const ProductCard: FC<{ product: Product; onClick: () => void }> = ({ product, onClick }) => (
  <div
    onClick={onClick}
    style={{
      background: "#ffffff",
      border: "1px solid #e4e4e7",
      cursor: "pointer",
      display: "flex", flexDirection: "column",
      transition: "border-color 0.2s, box-shadow 0.2s, transform 0.2s",
      position: "relative",
      overflow: "hidden",
      borderRadius: 8,
    }}
    onMouseEnter={e => {
      (e.currentTarget as HTMLDivElement).style.borderColor = "#0037ff";
      (e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 20px rgba(0,55,255,0.10)";
      (e.currentTarget as HTMLDivElement).style.transform = "translateY(-3px)";
    }}
    onMouseLeave={e => {
      (e.currentTarget as HTMLDivElement).style.borderColor = "#e4e4e7";
      (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
      (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
    }}
  >
    {/* Availability ribbon */}
    {!product.available && (
      <div style={{
        position: "absolute", top: 14, right: -26, background: "#a1a1aa",
        color: "#fff", fontSize: 9, fontWeight: 800, letterSpacing: "0.1em",
        padding: "4px 32px", transform: "rotate(45deg)", zIndex: 2,
        textTransform: "uppercase",
      }}>AGOTADO</div>
    )}

    <div style={{ position: "relative", width: "100%", paddingBottom: "68%", background: "#fafafa" }}>
      <Image
        src={product.image}
        alt={product.name}
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        style={{ objectFit: "cover", opacity: product.available ? 1 : 0.4 }}
      />
    </div>

    <div style={{ padding: "16px", flex: 1, display: "flex", flexDirection: "column", gap: 7 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 8 }}>
        <span style={{
          fontSize: 10, fontWeight: 800, letterSpacing: "0.12em",
          textTransform: "uppercase", color: "#0037ff",
        }}>{product.brand}</span>
        <span style={{ fontSize: 9, color: "#a1a1aa", fontFamily: "monospace" }}>{product.sku}</span>
      </div>

      <p style={{
        margin: 0, fontWeight: 800, fontSize: 14,
        color: "#000000", lineHeight: 1.3, letterSpacing: "-0.01em",
      }}>
        {product.name}
      </p>

      <p style={{ margin: 0, fontSize: 11, color: "#71717a", fontWeight: 500 }}>{product.category}</p>

      <div style={{
        marginTop: "auto", display: "flex", justifyContent: "space-between",
        alignItems: "center", paddingTop: 12, borderTop: "1px solid #f4f4f5",
      }}>
        <span style={{ fontWeight: 800, fontSize: 15, color: "#000000", letterSpacing: "-0.02em" }}>
          {formatCOP(product.price)}
        </span>
        <span style={{
          fontSize: 10, fontWeight: 700, letterSpacing: "0.06em",
          textTransform: "uppercase", padding: "4px 10px", borderRadius: 99,
          background: product.available ? "#eff6ff" : "#f4f4f5",
          color: product.available ? "#0037ff" : "#a1a1aa",
          border: `1px solid ${product.available ? "#bfdbfe" : "#e4e4e7"}`,
        }}>
          {product.available ? "● Disponible" : "○ Agotado"}
        </span>
      </div>
    </div>
  </div>
);

// modal

const ProductModal: FC<{ product: Product; onClose: () => void }> = ({ product, onClose }) => {
  const [qty, setQty] = useState(1);

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed", inset: 0, background: "rgba(0,0,0,0.40)",
        zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center",
        padding: 24, backdropFilter: "blur(4px)",
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          background: "#ffffff",
          border: "1px solid #e4e4e7",
          borderRadius: 12,
          maxWidth: 800, width: "100%", maxHeight: "90vh", overflowY: "auto",
          display: "grid", gridTemplateColumns: "1fr 1fr",
          boxShadow: "0 24px 64px rgba(0,0,0,0.14)",
          animation: "modalIn 0.22s ease-out",
        }}
      >
        {/* Left: Image */}
        <div style={{ position: "relative", minHeight: 340, background: "#fafafa", borderRadius: "12px 0 0 12px", overflow: "hidden" }}>
          <Image src={product.image} alt={product.name} fill style={{ objectFit: "cover" }} />
          <div style={{
            position: "absolute", bottom: 0, left: 0, right: 0,
            background: "linear-gradient(transparent, rgba(0,0,0,0.45))",
            padding: "28px 16px 14px",
          }}>
            <span style={{
              fontSize: 10, fontWeight: 800, letterSpacing: "0.15em",
              textTransform: "uppercase", color: "#ffffff",
              background: "#0037ff", padding: "4px 10px", borderRadius: 3,
            }}>{product.brand} · {product.sku}</span>
          </div>
        </div>

        {/* Right: Info */}
        <div style={{ padding: 32, display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 8 }}>
            <h2 style={{
              margin: 0, fontWeight: 800, fontSize: 22,
              color: "#000000", lineHeight: 1.15, letterSpacing: "-0.025em",
            }}>{product.name}</h2>
            <button onClick={onClose} style={{
              background: "none", border: "1px solid #e4e4e7", color: "#71717a",
              cursor: "pointer", width: 30, height: 30, fontSize: 18, borderRadius: 6,
              display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
              transition: "border-color 0.15s",
            }}>×</button>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{
              fontSize: 10, fontWeight: 700, padding: "5px 12px", borderRadius: 99,
              background: product.available ? "#eff6ff" : "#f4f4f5",
              color: product.available ? "#0037ff" : "#a1a1aa",
              border: `1px solid ${product.available ? "#bfdbfe" : "#e4e4e7"}`,
              textTransform: "uppercase", letterSpacing: "0.08em",
            }}>
              {product.available ? "● Disponible" : "○ No disponible"}
            </span>
            <span style={{ fontSize: 11, color: "#71717a", fontWeight: 500 }}>{product.category}</span>
          </div>

          <p style={{ margin: 0, fontSize: 13, color: "#27272a", fontWeight: 500, lineHeight: 1.65 }}>
            {product.description}
          </p>

          <div>
            <p style={{
              margin: "0 0 10px", fontSize: 10, fontWeight: 800,
              letterSpacing: "0.15em", textTransform: "uppercase", color: "#0037ff",
            }}>
              Características
            </p>
            <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 4 }}>
              {product.characteristics.map((c, i) => (
                <li key={i} style={{
                  fontSize: 12, color: "#27272a", fontWeight: 500,
                  padding: "7px 12px", background: "#fafafa",
                  borderLeft: "2px solid #0037ff", borderRadius: "0 4px 4px 0",
                }}>{c}</li>
              ))}
            </ul>
          </div>

          <div style={{ borderTop: "1px solid #f4f4f5", paddingTop: 20, display: "flex", flexDirection: "column", gap: 14 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontWeight: 800, fontSize: 26, color: "#000000", letterSpacing: "-0.03em" }}>
                {formatCOP(product.price)}
              </span>
              {/* Quantity selector */}
              <div style={{ display: "flex", alignItems: "center", border: "1px solid #e4e4e7", borderRadius: 6, overflow: "hidden" }}>
                <button
                  onClick={() => setQty(q => Math.max(1, q - 1))}
                  style={{
                    background: "#fafafa", border: "none", color: "#000", width: 36, height: 38,
                    cursor: "pointer", fontSize: 16, fontWeight: 700, transition: "background 0.15s",
                  }}
                  onMouseEnter={e => (e.currentTarget as HTMLButtonElement).style.background = "#f0f0f0"}
                  onMouseLeave={e => (e.currentTarget as HTMLButtonElement).style.background = "#fafafa"}
                >−</button>
                <span style={{
                  width: 44, textAlign: "center", color: "#000", fontWeight: 800,
                  fontSize: 14, lineHeight: "38px",
                  borderLeft: "1px solid #e4e4e7", borderRight: "1px solid #e4e4e7",
                }}>{qty}</span>
                <button
                  onClick={() => setQty(q => q + 1)}
                  style={{
                    background: "#fafafa", border: "none", color: "#000", width: 36, height: 38,
                    cursor: "pointer", fontSize: 16, fontWeight: 700, transition: "background 0.15s",
                  }}
                  onMouseEnter={e => (e.currentTarget as HTMLButtonElement).style.background = "#f0f0f0"}
                  onMouseLeave={e => (e.currentTarget as HTMLButtonElement).style.background = "#fafafa"}
                >+</button>
              </div>
            </div>

            <button
              disabled={!product.available}
              style={{
                background: product.available ? "#0037ff" : "#f4f4f5",
                color: product.available ? "#ffffff" : "#a1a1aa",
                border: "none", padding: "14px 20px", borderRadius: 7,
                fontSize: 13, fontWeight: 800, letterSpacing: "0.05em",
                textTransform: "uppercase", cursor: product.available ? "pointer" : "not-allowed",
                transition: "background 0.2s, transform 0.1s",
              }}
              onMouseEnter={e => { if (product.available) (e.currentTarget as HTMLButtonElement).style.background = "#0025cc"; }}
              onMouseLeave={e => { if (product.available) (e.currentTarget as HTMLButtonElement).style.background = "#0037ff"; }}
              onMouseDown={e => { if (product.available) (e.currentTarget as HTMLButtonElement).style.transform = "scale(0.98)"; }}
              onMouseUp={e => { if (product.available) (e.currentTarget as HTMLButtonElement).style.transform = "scale(1)"; }}
            >
              {product.available ? `Comprar ahora · ${formatCOP(product.price * qty)}` : "Producto agotado"}
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes modalIn {
          from { opacity: 0; transform: scale(0.96) translateY(14px); }
          to   { opacity: 1; transform: scale(1)    translateY(0); }
        }
      `}</style>
    </div>
  );
};

// main component

const CatalogSection: FC = () => {
  const [filters, setFilters] = useState<Filters>({
    category: "Todos",
    brand: "Todas",
    viscosity: "Todas",
    priceMin: 0,
    priceMax: MAX_PRICE,
  });
  const [selected, setSelected] = useState<Product | null>(null);
  const [search, setSearch] = useState("");

  const setFilter = <K extends keyof Filters>(key: K, val: Filters[K]) =>
    setFilters(f => ({ ...f, [key]: val }));

  const filtered = useMemo(() => {
    return PRODUCTS.filter(p => {
      if (filters.category !== "Todos" && p.category !== filters.category) return false;
      if (filters.brand !== "Todas" && p.brand !== filters.brand) return false;
      if (filters.viscosity !== "Todas" && p.viscosity !== filters.viscosity) return false;
      if (p.price < filters.priceMin || p.price > filters.priceMax) return false;
      if (search && !p.name.toLowerCase().includes(search.toLowerCase()) && !p.brand.toLowerCase().includes(search.toLowerCase())) return false;
      return true;
    });
  }, [filters, search]);

  const activeBadges: { label: string; clear: () => void }[] = [
    ...(filters.category !== "Todos" ? [{ label: filters.category, clear: () => setFilter("category", "Todos") }] : []),
    ...(filters.brand !== "Todas" ? [{ label: filters.brand, clear: () => setFilter("brand", "Todas") }] : []),
    ...(filters.viscosity !== "Todas" ? [{ label: filters.viscosity, clear: () => setFilter("viscosity", "Todas") }] : []),
    ...(filters.priceMax < MAX_PRICE ? [{ label: `Max ${formatCOP(filters.priceMax)}`, clear: () => setFilter("priceMax", MAX_PRICE) }] : []),
  ];

  const inputStyle: React.CSSProperties = {
    background: "#ffffff", border: "1px solid #e4e4e7", color: "#000000",
    padding: "9px 12px", fontSize: 13, width: "100%", cursor: "pointer",
    appearance: "none", outline: "none", borderRadius: 6, fontWeight: 500,
    transition: "border-color 0.15s",
  };

  const labelStyle: React.CSSProperties = {
    display: "block", marginBottom: 6, fontSize: 10, color: "#71717a",
    letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 700,
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        * { box-sizing: border-box; }
        select:focus, input:focus { border-color: #0037ff !important; box-shadow: 0 0 0 3px rgba(0,55,255,0.10) !important; outline: none !important; }
        select option { background: #fff; color: #000; }
      `}</style>

      <section style={{
        background: "#ffffff", minHeight: "100vh",
        fontFamily: "'Inter', system-ui, sans-serif", color: "#000000",
      }}>
        {/* ── Header ── */}
        <div style={{
          borderBottom: "1px solid #e4e4e7",
          padding: "40px 40px 28px",
          display: "flex", flexDirection: "column", gap: 10,
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{
              fontSize: 10, color: "#0037ff", fontWeight: 800,
              letterSpacing: "0.2em", textTransform: "uppercase",
            }}>
              ELECTRO MOTOS / CATÁLOGO
            </span>
            <span style={{ fontSize: 10, color: "#d4d4d8" }}>—</span>
            <span style={{ fontSize: 11, color: "#71717a", fontWeight: 500 }}>
              {PRODUCTS.length} referencias disponibles
            </span>
          </div>

          {/* Main title: matches project config */}
          <h1 style={{
            margin: 0,
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            color: "#000000",
            fontSize: "clamp(3rem, 5vw, 5.5rem)",
          }}>
            Repuestos{" "}
            <span style={{ color: "#0037ff" }}>&amp; Accesorios</span>
          </h1>

          {/* Subtitle: zinc-800 medium */}
          <p style={{
            margin: 0, fontSize: 16, color: "#27272a",
            fontWeight: 500, maxWidth: 700, lineHeight: 1.55,
          }}>
            Encuentra los repuestos que necesitas para tu moto. Calidad garantizada, envío inmediato.
          </p>
        </div>

        <div style={{ display: "flex", gap: 0 }}>
          {/* ── Sidebar ── */}
          <aside style={{
            width: 256, flexShrink: 0, borderRight: "1px solid #e4e4e7",
            padding: "28px 20px", display: "flex", flexDirection: "column", gap: 26,
            position: "sticky", top: 0, alignSelf: "flex-start", height: "100vh", overflowY: "auto",
          }}>
            <div>
              {/* Sidebar title: bold black */}
              <p style={{
                margin: "0 0 14px", fontSize: 13, fontWeight: 800,
                letterSpacing: "-0.01em", color: "#000000",
              }}>
                Filtros
              </p>
              {activeBadges.length > 0 && (
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {activeBadges.map((b, i) => (
                    <FilterBadge key={i} label={b.label} onRemove={b.clear} />
                  ))}
                </div>
              )}
            </div>

            {/* Search */}
            <div>
              <label style={labelStyle}>Buscar</label>
              <input
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Nombre o marca..."
                style={inputStyle}
              />
            </div>

            {/* Category */}
            <div>
              <label style={labelStyle}>Subcategoría</label>
              <select value={filters.category} onChange={e => setFilter("category", e.target.value)} style={inputStyle}>
                {CATEGORIES.map(c => <option key={c}>{c}</option>)}
              </select>
            </div>

            {/* Brand */}
            <div>
              <label style={labelStyle}>Marca</label>
              <select value={filters.brand} onChange={e => setFilter("brand", e.target.value)} style={inputStyle}>
                {BRANDS.map(b => <option key={b}>{b}</option>)}
              </select>
            </div>

            {/* Viscosity */}
            <div>
              <label style={labelStyle}>Viscosidad</label>
              <select value={filters.viscosity} onChange={e => setFilter("viscosity", e.target.value)} style={inputStyle}>
                {VISCOSITIES.map(v => <option key={v}>{v}</option>)}
              </select>
            </div>

            {/* Price slider */}
            <div>
              <label style={labelStyle}>Precio máximo</label>
              <input
                type="range"
                min={0} max={MAX_PRICE} step={5000}
                value={filters.priceMax}
                onChange={e => setFilter("priceMax", Number(e.target.value))}
                style={{ width: "100%", accentColor: "#0037ff", cursor: "pointer" }}
              />
              <div style={{ display: "flex", justifyContent: "space-between", marginTop: 6 }}>
                <span style={{ fontSize: 11, color: "#a1a1aa", fontWeight: 500 }}>$0</span>
                <span style={{ fontSize: 11, color: "#0037ff", fontWeight: 800 }}>{formatCOP(filters.priceMax)}</span>
              </div>
            </div>

            {/* Reset */}
            {activeBadges.length > 0 && (
              <button
                onClick={() => {
                  setFilters({ category: "Todos", brand: "Todas", viscosity: "Todas", priceMin: 0, priceMax: MAX_PRICE });
                  setSearch("");
                }}
                style={{
                  background: "none", border: "1px solid #e4e4e7", color: "#71717a",
                  padding: "9px 12px", cursor: "pointer", fontSize: 11,
                  fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase",
                  borderRadius: 6, transition: "border-color 0.15s, color 0.15s",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLButtonElement).style.borderColor = "#0037ff";
                  (e.currentTarget as HTMLButtonElement).style.color = "#0037ff";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLButtonElement).style.borderColor = "#e4e4e7";
                  (e.currentTarget as HTMLButtonElement).style.color = "#71717a";
                }}
              >
                Limpiar filtros
              </button>
            )}
          </aside>

          {/* Product Grid*/}
          <main style={{ flex: 1, padding: "28px 32px" }}>
            <div style={{ marginBottom: 20 }}>
              <span style={{ fontSize: 13, color: "#71717a", fontWeight: 500 }}>
                <span style={{ color: "#000000", fontWeight: 800 }}>{filtered.length}</span> productos encontrados
              </span>
            </div>

            {filtered.length === 0 ? (
              <div style={{ textAlign: "center", padding: "80px 20px" }}>
                <p style={{ fontSize: 15, fontWeight: 800, color: "#000000", marginBottom: 8 }}>Sin resultados</p>
                <p style={{ fontSize: 13, color: "#71717a", fontWeight: 500 }}>Intenta ajustar los filtros de búsqueda.</p>
              </div>
            ) : (
              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
                gap: 18,
              }}>
                {filtered.map(p => (
                  <ProductCard key={p.id} product={p} onClick={() => setSelected(p)} />
                ))}
              </div>
            )}
          </main>
        </div>

        {/* modal */}
        {selected && <ProductModal product={selected} onClose={() => setSelected(null)} />}
      </section>
    </>
  );
};

export default CatalogSection;