export interface Product {
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

export interface Filters {
  category: string;
  brand: string;
  viscosity: string;
  priceMin: number;
  priceMax: number;
}
