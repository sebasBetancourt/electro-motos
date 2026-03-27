import React, { FC } from "react";
import Image from "next/image";
import { Product } from "./types";
import { formatCOP } from "./data";

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

export const ProductCard: FC<ProductCardProps> = ({ product, onClick }) => (
  <div
    onClick={onClick}
    style={{
      background: "#ffffff",
      border: "1px solid #e4e4e7",
      cursor: "pointer",
      display: "flex",
      flexDirection: "column",
      transition: "border-color 0.2s, box-shadow 0.2s, transform 0.2s",
      position: "relative",
      overflow: "hidden",
      borderRadius: 8,
    }}
    onMouseEnter={(e) => {
      (e.currentTarget as HTMLDivElement).style.borderColor = "#0037ff";
      (e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 20px rgba(0,55,255,0.10)";
      (e.currentTarget as HTMLDivElement).style.transform = "translateY(-3px)";
    }}
    onMouseLeave={(e) => {
      (e.currentTarget as HTMLDivElement).style.borderColor = "#e4e4e7";
      (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
      (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
    }}
  >
    {/* Availability ribbon */}
    {!product.available && (
      <div
        style={{
          position: "absolute",
          top: 14,
          right: -26,
          background: "#a1a1aa",
          color: "#fff",
          fontSize: 9,
          fontWeight: 800,
          letterSpacing: "0.1em",
          padding: "4px 32px",
          transform: "rotate(45deg)",
          zIndex: 2,
          textTransform: "uppercase",
        }}
      >
        AGOTADO
      </div>
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
        <span
          style={{
            fontSize: 10,
            fontWeight: 800,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#0037ff",
          }}
        >
          {product.brand}
        </span>
        <span style={{ fontSize: 9, color: "#a1a1aa", fontFamily: "monospace" }}>{product.sku}</span>
      </div>

      <p
        style={{
          margin: 0,
          fontWeight: 800,
          fontSize: 14,
          color: "#000000",
          lineHeight: 1.3,
          letterSpacing: "-0.01em",
        }}
      >
        {product.name}
      </p>

      <p style={{ margin: 0, fontSize: 11, color: "#71717a", fontWeight: 500 }}>{product.category}</p>

      <div
        style={{
          marginTop: "auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingTop: 12,
          borderTop: "1px solid #f4f4f5",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {product.oldPrice && (
            <span style={{ fontSize: 11, color: "#a1a1aa", textDecoration: "line-through" }}>
              {formatCOP(product.oldPrice)}
            </span>
          )}
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <span style={{ fontWeight: 800, fontSize: 16, color: "#000000", letterSpacing: "-0.02em" }}>
              {formatCOP(product.price)}
            </span>
            {product.oldPrice && (
              <span style={{ fontSize: 11, fontWeight: 700, color: "#00a650" }}>
                {Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}% OFF
              </span>
            )}
          </div>
          {product.freeShipping && (
            <span style={{ fontSize: 11, fontWeight: 700, color: "#00a650", marginTop: 2 }}>
              Envío gratis <span style={{ fontWeight: 500, color: "#71717a" }}>nacional</span>
            </span>
          )}
        </div>
        <span
          style={{
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            padding: "4px 10px",
            borderRadius: 99,
            background: product.available ? "#eff6ff" : "#f4f4f5",
            color: product.available ? "#0037ff" : "#a1a1aa",
            border: `1px solid ${product.available ? "#bfdbfe" : "#e4e4e7"}`,
          }}
        >
          {product.available ? "● Disponible" : "○ Agotado"}
        </span>
      </div>
    </div>
  </div>
);
