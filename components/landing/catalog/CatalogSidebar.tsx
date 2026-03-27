import React, { FC } from "react";
import { Filters } from "./types";
import { CATEGORIES, BRANDS, VISCOSITIES, MAX_PRICE, formatCOP } from "./data";
import { FilterBadge } from "./FilterBadge";

interface CatalogSidebarProps {
  filters: Filters;
  setFilter: <K extends keyof Filters>(key: K, val: Filters[K]) => void;
  resetFilters: () => void;
  search: string;
  setSearch: (val: string) => void;
  activeBadges: { label: string; clear: () => void }[];
}

const inputStyle: React.CSSProperties = {
  background: "#ffffff",
  border: "1px solid #e4e4e7",
  color: "#000000",
  padding: "9px 12px",
  fontSize: 13,
  width: "100%",
  cursor: "pointer",
  appearance: "none",
  outline: "none",
  borderRadius: 6,
  fontWeight: 500,
  transition: "border-color 0.15s",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  marginBottom: 6,
  fontSize: 10,
  color: "#71717a",
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  fontWeight: 700,
};

export const CatalogSidebar: FC<CatalogSidebarProps> = ({
  filters,
  setFilter,
  resetFilters,
  search,
  setSearch,
  activeBadges,
}) => {
  return (
    <aside
      style={{
        width: 256,
        flexShrink: 0,
        borderRight: "1px solid #e4e4e7",
        padding: "28px 20px",
        display: "flex",
        flexDirection: "column",
        gap: 26,
        position: "sticky",
        top: 0,
        alignSelf: "flex-start",
        height: "100vh",
        overflowY: "auto",
      }}
    >
      <div>
        <p
          style={{
            margin: "0 0 14px",
            fontSize: 13,
            fontWeight: 800,
            letterSpacing: "-0.01em",
            color: "#000000",
          }}
        >
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
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Nombre o marca..."
          style={inputStyle}
        />
      </div>

      {/* Category */}
      <div>
        <label style={labelStyle}>Subcategoría</label>
        <select
          value={filters.category}
          onChange={(e) => setFilter("category", e.target.value)}
          style={inputStyle}
        >
          {CATEGORIES.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>
      </div>

      {/* Brand */}
      <div>
        <label style={labelStyle}>Marca</label>
        <select value={filters.brand} onChange={(e) => setFilter("brand", e.target.value)} style={inputStyle}>
          {BRANDS.map((b) => (
            <option key={b}>{b}</option>
          ))}
        </select>
      </div>

      {/* Viscosity */}
      <div>
        <label style={labelStyle}>Viscosidad</label>
        <select
          value={filters.viscosity}
          onChange={(e) => setFilter("viscosity", e.target.value)}
          style={inputStyle}
        >
          {VISCOSITIES.map((v) => (
            <option key={v}>{v}</option>
          ))}
        </select>
      </div>

      {/* Price slider */}
      <div>
        <label style={labelStyle}>Precio máximo</label>
        <input
          type="range"
          min={0}
          max={MAX_PRICE}
          step={5000}
          value={filters.priceMax}
          onChange={(e) => setFilter("priceMax", Number(e.target.value))}
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
          onClick={resetFilters}
          style={{
            background: "none",
            border: "1px solid #e4e4e7",
            color: "#71717a",
            padding: "9px 12px",
            cursor: "pointer",
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            borderRadius: 6,
            transition: "border-color 0.15s, color 0.15s",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.borderColor = "#0037ff";
            (e.currentTarget as HTMLButtonElement).style.color = "#0037ff";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.borderColor = "#e4e4e7";
            (e.currentTarget as HTMLButtonElement).style.color = "#71717a";
          }}
        >
          Limpiar filtros
        </button>
      )}
    </aside>
  );
};
