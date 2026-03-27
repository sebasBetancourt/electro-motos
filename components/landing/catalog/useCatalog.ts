import { useState, useMemo } from "react";
import { Product, Filters } from "./types";
import { PRODUCTS, MAX_PRICE } from "./data";

export const useCatalog = () => {
  const [filters, setFilters] = useState<Filters>({
    category: "Todos",
    brand: "Todas",
    viscosity: "Todas",
    priceMin: 0,
    priceMax: MAX_PRICE,
  });
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [search, setSearch] = useState("");

  const setFilter = <K extends keyof Filters>(key: K, val: Filters[K]) =>
    setFilters((f) => ({ ...f, [key]: val }));

  const resetFilters = () => {
    setFilters({
      category: "Todos",
      brand: "Todas",
      viscosity: "Todas",
      priceMin: 0,
      priceMax: MAX_PRICE,
    });
    setSearch("");
  };

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      if (filters.category !== "Todos" && p.category !== filters.category) return false;
      if (filters.brand !== "Todas" && p.brand !== filters.brand) return false;
      if (filters.viscosity !== "Todas" && p.viscosity !== filters.viscosity) return false;
      if (p.price < filters.priceMin || p.price > filters.priceMax) return false;
      if (
        search &&
        !p.name.toLowerCase().includes(search.toLowerCase()) &&
        !p.brand.toLowerCase().includes(search.toLowerCase())
      )
        return false;
      return true;
    });
  }, [filters, search]);

  const activeBadges = useMemo(() => {
    const badges: { label: string; clear: () => void }[] = [];
    if (filters.category !== "Todos")
      badges.push({ label: filters.category, clear: () => setFilter("category", "Todos") });
    if (filters.brand !== "Todas")
      badges.push({ label: filters.brand, clear: () => setFilter("brand", "Todas") });
    if (filters.viscosity !== "Todas")
      badges.push({ label: filters.viscosity, clear: () => setFilter("viscosity", "Todas") });
    if (filters.priceMax < MAX_PRICE)
      badges.push({ label: `Max ${filters.priceMax}`, clear: () => setFilter("priceMax", MAX_PRICE) });
    return badges;
  }, [filters]);

  return {
    filters,
    setFilter,
    resetFilters,
    search,
    setSearch,
    selectedProduct,
    setSelectedProduct,
    filteredProducts,
    activeBadges,
  };
};
