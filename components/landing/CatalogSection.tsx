"use client";

import React, { FC } from "react";
import { PRODUCTS } from "./catalog/data";
import { useCatalog } from "./catalog/useCatalog";
import { CatalogSidebar } from "./catalog/CatalogSidebar";
import { CatalogGrid } from "./catalog/CatalogGrid";
import { ProductModal } from "./catalog/ProductModal";

const CatalogSection: FC = () => {
  const {
    filters,
    setFilter,
    resetFilters,
    search,
    setSearch,
    selectedProduct,
    setSelectedProduct,
    filteredProducts,
    activeBadges,
  } = useCatalog();

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        * { box-sizing: border-box; }
        select:focus, input:focus { border-color: #0037ff !important; box-shadow: 0 0 0 3px rgba(0,55,255,0.10) !important; outline: none !important; }
        select option { background: #fff; color: #000; }
      `}</style>

      <section
        id="catalog"
        style={{
          background: "#ffffff",
          minHeight: "100vh",
          fontFamily: "'Inter', system-ui, sans-serif",
          color: "#000000",
        }}
      >
        {/* ── Header ── */}
        <div
          style={{
            borderBottom: "1px solid #e4e4e7",
            padding: "40px 40px 28px",
            display: "flex",
            flexDirection: "column",
            gap: 10,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span
              style={{
                fontSize: 10,
                color: "#0037ff",
                fontWeight: 800,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
              }}
            >
              ELECTRO MOTOS / CATÁLOGO
            </span>
            <span style={{ fontSize: 10, color: "#d4d4d8" }}>—</span>
            <span style={{ fontSize: 11, color: "#71717a", fontWeight: 500 }}>
              {PRODUCTS.length} referencias disponibles
            </span>
          </div>

          <h1
            style={{
              margin: 0,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              color: "#000000",
              fontSize: "clamp(3rem, 5vw, 5.5rem)",
            }}
          >
            Repuestos <span style={{ color: "#0037ff" }}>&amp; Accesorios</span>
          </h1>

          <p
            style={{
              margin: 0,
              fontSize: 16,
              color: "#27272a",
              fontWeight: 500,
              maxWidth: 700,
              lineHeight: 1.55,
            }}
          >
            Encuentra los repuestos que necesitas para tu moto. Calidad garantizada, envío inmediato.
          </p>
        </div>

        <div style={{ display: "flex", gap: 0 }}>
          <CatalogSidebar
            filters={filters}
            setFilter={setFilter}
            resetFilters={resetFilters}
            search={search}
            setSearch={setSearch}
            activeBadges={activeBadges}
          />

          <CatalogGrid products={filteredProducts} onProductClick={setSelectedProduct} />
        </div>

        {/* modal */}
        {selectedProduct && (
          <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
        )}
      </section>
    </>
  );
};

export default CatalogSection;