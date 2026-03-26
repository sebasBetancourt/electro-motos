import React, { FC, useState } from "react";
import Image from "next/image";
import { Product } from "./types";
import { formatCOP } from "./data";

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

export const ProductModal: FC<ProductModalProps> = ({ product, onClose }) => {
  const [qty, setQty] = useState(1);

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.40)",
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
        backdropFilter: "blur(4px)",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "#ffffff",
          border: "1px solid #e4e4e7",
          borderRadius: 12,
          maxWidth: 800,
          width: "100%",
          maxHeight: "90vh",
          overflowY: "auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          boxShadow: "0 24px 64px rgba(0,0,0,0.14)",
          animation: "modalIn 0.22s ease-out",
        }}
      >
        {/* Left: Image */}
        <div
          style={{
            position: "relative",
            minHeight: 340,
            background: "#fafafa",
            borderRadius: "12px 0 0 12px",
            overflow: "hidden",
          }}
        >
          <Image src={product.image} alt={product.name} fill style={{ objectFit: "cover" }} />
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              background: "linear-gradient(transparent, rgba(0,0,0,0.45))",
              padding: "28px 16px 14px",
            }}
          >
            <span
              style={{
                fontSize: 10,
                fontWeight: 800,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#ffffff",
                background: "#0037ff",
                padding: "4px 10px",
                borderRadius: 3,
              }}
            >
              {product.brand} · {product.sku}
            </span>
          </div>
        </div>

        {/* Right: Info */}
        <div style={{ padding: 32, display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 8 }}>
            <h2
              style={{
                margin: 0,
                fontWeight: 800,
                fontSize: 22,
                color: "#000000",
                lineHeight: 1.15,
                letterSpacing: "-0.025em",
              }}
            >
              {product.name}
            </h2>
            <button
              onClick={onClose}
              style={{
                background: "none",
                border: "1px solid #e4e4e7",
                color: "#71717a",
                cursor: "pointer",
                width: 30,
                height: 30,
                fontSize: 18,
                borderRadius: 6,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                transition: "border-color 0.15s",
              }}
            >
              ×
            </button>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span
              style={{
                fontSize: 10,
                fontWeight: 700,
                padding: "5px 12px",
                borderRadius: 99,
                background: product.available ? "#eff6ff" : "#f4f4f5",
                color: product.available ? "#0037ff" : "#a1a1aa",
                border: `1px solid ${product.available ? "#bfdbfe" : "#e4e4e7"}`,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
              }}
            >
              {product.available ? "● Disponible" : "○ No disponible"}
            </span>
            <span style={{ fontSize: 11, color: "#71717a", fontWeight: 500 }}>{product.category}</span>
          </div>

          <p style={{ margin: 0, fontSize: 13, color: "#27272a", fontWeight: 500, lineHeight: 1.65 }}>
            {product.description}
          </p>

          <div>
            <p
              style={{
                margin: "0 0 10px",
                fontSize: 10,
                fontWeight: 800,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#0037ff",
              }}
            >
              Características
            </p>
            <ul
              style={{
                margin: 0,
                padding: 0,
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: 4,
              }}
            >
              {product.characteristics.map((c, i) => (
                <li
                  key={i}
                  style={{
                    fontSize: 12,
                    color: "#27272a",
                    fontWeight: 500,
                    padding: "7px 12px",
                    background: "#fafafa",
                    borderLeft: "2px solid #0037ff",
                    borderRadius: "0 4px 4px 0",
                  }}
                >
                  {c}
                </li>
              ))}
            </ul>
          </div>

          <div
            style={{
              borderTop: "1px solid #f4f4f5",
              paddingTop: 20,
              display: "flex",
              flexDirection: "column",
              gap: 14,
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontWeight: 800, fontSize: 26, color: "#000000", letterSpacing: "-0.03em" }}>
                {formatCOP(product.price)}
              </span>
              {/* Quantity selector */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  border: "1px solid #e4e4e7",
                  borderRadius: 6,
                  overflow: "hidden",
                }}
              >
                <button
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  style={{
                    background: "#fafafa",
                    border: "none",
                    color: "#000",
                    width: 36,
                    height: 38,
                    cursor: "pointer",
                    fontSize: 16,
                    fontWeight: 700,
                    transition: "background 0.15s",
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "#f0f0f0")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "#fafafa")}
                >
                  −
                </button>
                <span
                  style={{
                    width: 44,
                    textAlign: "center",
                    color: "#000",
                    fontWeight: 800,
                    fontSize: 14,
                    lineHeight: "38px",
                    borderLeft: "1px solid #e4e4e7",
                    borderRight: "1px solid #e4e4e7",
                  }}
                >
                  {qty}
                </span>
                <button
                  onClick={() => setQty((q) => q + 1)}
                  style={{
                    background: "#fafafa",
                    border: "none",
                    color: "#000",
                    width: 36,
                    height: 38,
                    cursor: "pointer",
                    fontSize: 16,
                    fontWeight: 700,
                    transition: "background 0.15s",
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "#f0f0f0")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "#fafafa")}
                >
                  +
                </button>
              </div>
            </div>

            <button
              disabled={!product.available}
              style={{
                background: product.available ? "#0037ff" : "#f4f4f5",
                color: product.available ? "#ffffff" : "#a1a1aa",
                border: "none",
                padding: "14px 20px",
                borderRadius: 7,
                fontSize: 13,
                fontWeight: 800,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                cursor: product.available ? "pointer" : "not-allowed",
                transition: "background 0.2s, transform 0.1s",
              }}
              onMouseEnter={(e) => {
                if (product.available) (e.currentTarget as HTMLButtonElement).style.background = "#0025cc";
              }}
              onMouseLeave={(e) => {
                if (product.available) (e.currentTarget as HTMLButtonElement).style.background = "#0037ff";
              }}
              onMouseDown={(e) => {
                if (product.available) (e.currentTarget as HTMLButtonElement).style.transform = "scale(0.98)";
              }}
              onMouseUp={(e) => {
                if (product.available) (e.currentTarget as HTMLButtonElement).style.transform = "scale(1)";
              }}
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
