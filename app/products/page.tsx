import type { Metadata } from "next";
import { ProductsPageClient } from "@/components/pages/products-page-client";

export const metadata: Metadata = {
  title: "Products",
  description: "Browse our catalog of laptops, phones, CCTV, printers, networking and accessories.",
};

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; cat?: string; brand?: string; sub?: string }>;
}) {
  const resolvedSearchParams = await searchParams;

  return (
    <ProductsPageClient
      initialBrand={resolvedSearchParams.brand ?? ""}
      initialQuery={resolvedSearchParams.q ?? ""}
      initialCategory={resolvedSearchParams.cat ?? ""}
      initialSubcategory={resolvedSearchParams.sub ?? ""}
    />
  );
}
