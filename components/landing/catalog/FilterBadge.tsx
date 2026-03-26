import React, { FC } from "react";

interface FilterBadgeProps {
  label: string;
  onRemove: () => void;
}

export const FilterBadge: FC<FilterBadgeProps> = ({ label, onRemove }) => (
  <span
    style={{
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      background: "#0037ff",
      color: "#fff",
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: "0.06em",
      textTransform: "uppercase",
      padding: "4px 10px",
      borderRadius: 3,
    }}
  >
    {label}
    <button
      onClick={onRemove}
      style={{
        background: "none",
        border: "none",
        color: "#fff",
        cursor: "pointer",
        fontSize: 14,
        lineHeight: 1,
        padding: 0,
      }}
    >
      ×
    </button>
  </span>
);
