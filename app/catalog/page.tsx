import CatalogSection from "@/components/landing/CatalogSection";

export const metadata = {
  title: "Catálogo | Electro Motos Tony",
  description: "Explora nuestro catálogo de repuestos y accesorios para motos.",
};

export default function CatalogPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white pb-60">
      <CatalogSection />
    </div>
  );
}
