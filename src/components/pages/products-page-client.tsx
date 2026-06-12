"use client";

import { useMemo } from "react";
import { CatalogBrowser } from "@/components/catalog-browser";
import { PageHero, SiteLayout } from "@/components/site-layout";
import { filterCatalogProducts, getCategoryBySlug } from "@/lib/catalog-service";
import { getProductsHeroImage, pageHeroImages } from "@/lib/product-images";
import { PRODUCTS } from "@/lib/site-data";

export function ProductsPageClient({
  initialBrand = "",
  initialQuery = "",
  initialCategory = "",
  initialSubcategory = "",
}: {
  initialBrand?: string;
  initialQuery?: string;
  initialCategory?: string;
  initialSubcategory?: string;
}) {
  const activeCategory = useMemo(() => getCategoryBySlug(initialCategory), [initialCategory]);
  const heroImage = useMemo(() => {
    const filteredProducts = filterCatalogProducts(
      {
        brand: initialBrand,
        category: initialCategory,
        query: initialQuery,
        subcategory: initialSubcategory,
      },
      PRODUCTS,
    );

    return getProductsHeroImage({
      brand: initialBrand,
      category: initialCategory,
      products: filteredProducts,
      subcategory: initialSubcategory,
    });
  }, [initialBrand, initialCategory, initialQuery, initialSubcategory]);

  const pageTitle = useMemo(() => {
    if (initialBrand && initialSubcategory) return `${initialBrand} ${initialSubcategory}`;
    if (initialSubcategory) return initialSubcategory;
    if (initialBrand && initialQuery) return `${initialBrand} ${initialQuery}`;
    if (initialBrand) return `${initialBrand} Products`;
    if (activeCategory && initialQuery) return `${activeCategory.name} · ${initialQuery}`;
    if (activeCategory) return activeCategory.name;
    if (initialQuery) return `Search Results for "${initialQuery}"`;
    return "All Products";
  }, [activeCategory, initialBrand, initialQuery, initialSubcategory]);

  const pageDescription = useMemo(() => {
    if (initialSubcategory) {
      return `Browse ${initialSubcategory} products currently available in our catalog.`;
    }
    if (initialBrand && initialQuery) {
      return `Browse all ${initialBrand} ${initialQuery} currently available in our catalog.`;
    }
    if (initialBrand)
      return `Browse all ${initialBrand} products currently available in our catalog.`;
    if (activeCategory && initialQuery)
      return `Browse ${initialQuery} under ${activeCategory.name}.`;
    if (activeCategory) return activeCategory.description;
    if (initialQuery) return `Browse products matching ${initialQuery}.`;
    return "Explore genuine electronics and ICT equipment from leading global brands.";
  }, [activeCategory, initialBrand, initialQuery, initialSubcategory]);

  return (
    <SiteLayout>
      <PageHero
        breadcrumb="Home / Products"
        image={heroImage ?? pageHeroImages.products}
        kicker="Catalog"
        title={pageTitle}
      >
        {pageDescription}
      </PageHero>
      <CatalogBrowser
        initialBrand={initialBrand}
        initialCategory={initialCategory}
        initialQuery={initialQuery}
        initialSubcategory={initialSubcategory}
      />
    </SiteLayout>
  );
}
