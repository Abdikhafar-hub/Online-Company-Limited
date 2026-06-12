"use client";

import { useEffect, useMemo, useState } from "react";
import { Search } from "lucide-react";
import { ProductCard } from "@/components/product-card";
import {
  DEFAULT_PAGE_SIZE,
  filterCatalogProducts,
  getCatalogBrands,
  getCatalogCategories,
  getCatalogSubcategories,
  paginateProducts,
  sortCatalogProducts,
  type CatalogSort,
} from "@/lib/catalog-service";
import { PRODUCTS } from "@/lib/site-data";

export function CatalogBrowser({
  initialBrand = "",
  initialCategory = "",
  initialQuery = "",
  initialSubcategory = "",
  lockCategory = false,
}: {
  initialBrand?: string;
  initialCategory?: string;
  initialQuery?: string;
  initialSubcategory?: string;
  lockCategory?: boolean;
}) {
  const [q, setQ] = useState(initialQuery);
  const [cat, setCat] = useState(initialCategory);
  const [brand, setBrand] = useState(initialBrand);
  const [subcategory, setSubcategory] = useState(initialSubcategory);
  const [sort, setSort] = useState<CatalogSort>("latest");
  const [page, setPage] = useState(1);

  useEffect(() => {
    setQ(initialQuery);
    setCat(initialCategory);
    setBrand(initialBrand);
    setSubcategory(initialSubcategory);
    setPage(1);
  }, [initialBrand, initialCategory, initialQuery, initialSubcategory]);

  useEffect(() => {
    setPage(1);
  }, [brand, cat, q, sort, subcategory]);

  const brands = useMemo(() => getCatalogBrands(PRODUCTS), []);
  const categories = useMemo(() => getCatalogCategories(PRODUCTS), []);
  const subcategories = useMemo(
    () => getCatalogSubcategories(PRODUCTS, { brand, category: cat }),
    [brand, cat],
  );

  useEffect(() => {
    if (subcategory && !subcategories.includes(subcategory)) {
      setSubcategory("");
    }
  }, [subcategory, subcategories]);

  const filtered = useMemo(
    () =>
      filterCatalogProducts({
        brand,
        category: cat,
        minimumResults: 20,
        query: q,
        subcategory,
      }),
    [brand, cat, q, subcategory],
  );

  const sorted = useMemo(() => sortCatalogProducts(filtered, sort), [filtered, sort]);
  const pagination = useMemo(
    () => paginateProducts(sorted, page, DEFAULT_PAGE_SIZE),
    [page, sorted],
  );

  const hasProducts = pagination.items.length > 0;

  return (
    <>
      <section className="container-page mt-6">
        <div className="grid grid-cols-1 gap-3 rounded-3xl border border-beige-border bg-white p-4 md:grid-cols-2 md:p-6 xl:grid-cols-[1.35fr_1fr_1fr_1fr_1fr]">
          <label className="flex min-w-0 items-center rounded-full border border-beige-border bg-cream px-4 py-2.5 xl:min-w-[14rem]">
            <Search className="h-4 w-4 text-muted-foreground" />
            <input
              value={q}
              onChange={(event) => setQ(event.target.value)}
              placeholder="Search products..."
              className="min-w-0 flex-1 bg-transparent px-3 text-sm outline-none"
            />
          </label>
          <select
            value={cat}
            onChange={(event) => setCat(event.target.value)}
            className="w-full min-w-0 rounded-full border border-beige-border bg-cream px-4 py-2.5 text-sm font-medium"
            disabled={lockCategory}
          >
            <option value="">All categories</option>
            {categories.map((category) => (
              <option key={category.slug} value={category.slug}>
                {category.name}
              </option>
            ))}
          </select>
          <select
            value={brand}
            onChange={(event) => setBrand(event.target.value)}
            className="w-full min-w-0 rounded-full border border-beige-border bg-cream px-4 py-2.5 text-sm font-medium"
          >
            <option value="">All brands</option>
            {brands.map((brandName) => (
              <option key={brandName} value={brandName}>
                {brandName}
              </option>
            ))}
          </select>
          <select
            value={subcategory}
            onChange={(event) => setSubcategory(event.target.value)}
            className="w-full min-w-0 rounded-full border border-beige-border bg-cream px-4 py-2.5 text-sm font-medium"
          >
            <option value="">All subcategories</option>
            {subcategories.map((subcategoryName) => (
              <option key={subcategoryName} value={subcategoryName}>
                {subcategoryName}
              </option>
            ))}
          </select>
          <select
            value={sort}
            onChange={(event) => setSort(event.target.value as CatalogSort)}
            className="w-full min-w-0 rounded-full border border-beige-border bg-cream px-4 py-2.5 text-sm font-medium"
          >
            <option value="latest">Latest</option>
            <option value="price-low">Price Low</option>
            <option value="price-high">Price High</option>
            <option value="name-az">Name A-Z</option>
          </select>
        </div>
      </section>

      <section className="container-page mt-8">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3 text-sm text-muted-foreground">
          <span>
            {hasProducts
              ? `Showing ${pagination.start + 1}-${pagination.end} of ${pagination.totalItems} products`
              : "0 matching products"}
          </span>
          {pagination.totalPages > 1 ? (
            <span>
              Page {pagination.page} of {pagination.totalPages}
            </span>
          ) : null}
        </div>
        {!hasProducts ? (
          <div className="rounded-3xl border border-beige-border bg-white p-12 text-center">
            <p className="font-semibold text-navy">No products match your filters.</p>
            <button
              onClick={() => {
                setQ("");
                setCat(lockCategory ? initialCategory : "");
                setBrand("");
                setSubcategory("");
              }}
              className="mt-3 text-sm font-semibold text-brand-red"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-4 lg:gap-5 xl:grid-cols-4">
            {pagination.items.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        )}

        {pagination.totalPages > 1 ? (
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            <button
              type="button"
              onClick={() => setPage((current) => Math.max(1, current - 1))}
              disabled={pagination.page === 1}
              className="rounded-full border border-beige-border bg-white px-4 py-2 text-sm font-semibold text-navy disabled:cursor-not-allowed disabled:opacity-45"
            >
              Previous
            </button>
            {Array.from({ length: pagination.totalPages }, (_, index) => index + 1)
              .filter(
                (pageNumber) =>
                  pageNumber === 1 ||
                  pageNumber === pagination.totalPages ||
                  Math.abs(pageNumber - pagination.page) <= 1,
              )
              .map((pageNumber, index, visiblePages) => {
                const previous = visiblePages[index - 1];
                const showGap = previous && pageNumber - previous > 1;

                return (
                  <span key={pageNumber} className="inline-flex items-center gap-2">
                    {showGap ? <span className="text-muted-foreground">...</span> : null}
                    <button
                      type="button"
                      onClick={() => setPage(pageNumber)}
                      className={`h-10 min-w-10 rounded-full px-3 text-sm font-semibold ${
                        pageNumber === pagination.page
                          ? "bg-navy text-cream"
                          : "border border-beige-border bg-white text-navy"
                      }`}
                    >
                      {pageNumber}
                    </button>
                  </span>
                );
              })}
            <button
              type="button"
              onClick={() => setPage((current) => Math.min(pagination.totalPages, current + 1))}
              disabled={pagination.page === pagination.totalPages}
              className="rounded-full border border-beige-border bg-white px-4 py-2 text-sm font-semibold text-navy disabled:cursor-not-allowed disabled:opacity-45"
            >
              Next
            </button>
          </div>
        ) : null}
      </section>
    </>
  );
}
