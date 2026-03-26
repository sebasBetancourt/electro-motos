import React, { FC } from "react";
import { Product } from "./types";
import { ProductCard } from "./ProductCard";

interface CatalogGridProps {
  products: Product[];
  onProductClick: (product: Product) => void;
}

export const CatalogGrid: FC<CatalogGridProps> = ({ products, onProductClick }) => {
  return (
    <main style={{ flex: 1, padding: "28px 32px" }}>
      <div style={{ marginBottom: 20 }}>
        <span style={{ fontSize: 13, color: "#71717a", fontWeight: 500 }}>
          <span style={{ color: "#000000", fontWeight: 800 }}>{products.length}</span> productos encontrados
        </span>
      </div>

      {products.length === 0 ? (
        <div style={{ textAlign: "center", padding: "80px 20px" }}>
          <p style={{ fontSize: 15, fontWeight: 800, color: "#000000", marginBottom: 8 }}>Sin resultados</p>
          <p style={{ fontSize: 13, color: "#71717a", fontWeight: 500 }}>
            Intenta ajustar los filtros de búsqueda.
          </p>
        </div>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
            gap: 18,
          }}
        >
          {products.map((p) => (
            <ProductCard key={p.id} product={p} onClick={() => onProductClick(p)} />
          ))}
        </div>
      )}
    </main>
  );
};
