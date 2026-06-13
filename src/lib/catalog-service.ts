import { CATEGORIES, PRODUCTS, type Product } from "./site-data";

export type CatalogSort = "latest" | "name-az";

export type CatalogFilters = {
  brand?: string;
  category?: string;
  query?: string;
  subcategory?: string;
  minimumResults?: number;
};

export const DEFAULT_PAGE_SIZE = 24;

const normalize = (value = "") => value.trim().toLowerCase();
const labelFromSlug = (value: string) =>
  value
    .split("-")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");

export function getSearchableText(product: Product) {
  return [
    product.name,
    product.brand,
    product.category,
    product.categoryLabel,
    product.subcategory,
    product.shortSpec,
    product.description,
    product.productUrl ?? "",
    product.tags.join(" "),
    ...product.specs.flatMap((spec) => [spec.label, spec.value]),
  ]
    .join(" ")
    .toLowerCase();
}

export function getCatalogBrands(products: Product[] = PRODUCTS) {
  return Array.from(new Set(products.map((product) => product.brand))).sort((a, b) =>
    a.localeCompare(b),
  );
}

export function getCatalogCategories(products: Product[] = PRODUCTS) {
  const names = new Map(CATEGORIES.map((category) => [category.slug, category.name]));

  for (const product of products) {
    if (!names.has(product.category)) {
      names.set(product.category, labelFromSlug(product.category));
    }
  }

  return Array.from(names.entries())
    .map(([slug, name]) => ({
      name,
      slug,
    }))
    .filter((category) => products.some((product) => product.category === category.slug))
    .sort((a, b) => a.name.localeCompare(b.name));
}

export function getCatalogSubcategories(
  products: Product[] = PRODUCTS,
  filters: Pick<CatalogFilters, "brand" | "category"> = {},
) {
  const category = normalize(filters.category);
  const brand = normalize(filters.brand);

  return Array.from(
    new Set(
      products
        .filter((product) => {
          if (category && normalize(product.category) !== category) return false;
          if (brand && normalize(product.brand) !== brand) return false;
          return true;
        })
        .map((product) => product.subcategory)
        .filter(Boolean),
    ),
  ).sort((a, b) => a.localeCompare(b));
}

export function getCategoryBySlug(slug?: string) {
  return CATEGORIES.find((category) => category.slug === slug);
}

export function filterCatalogProducts(
  filters: CatalogFilters = {},
  products: Product[] = PRODUCTS,
) {
  const category = normalize(filters.category);
  const brand = normalize(filters.brand);
  const subcategory = normalize(filters.subcategory);
  const terms = normalize(filters.query).split(/\s+/).filter(Boolean);
  const minimumResults = filters.minimumResults ?? 0;

  const matchesBaseFilters = (product: Product) => {
    if (category && normalize(product.category) !== category) return false;
    if (brand && normalize(product.brand) !== brand) return false;
    if (subcategory && normalize(product.subcategory) !== subcategory) return false;
    return true;
  };

  const baseMatches = products.filter(matchesBaseFilters);

  if (terms.length === 0) {
    return baseMatches;
  }

  const exact = baseMatches.filter((product) => {
    const haystack = getSearchableText(product);
    return terms.every((token) => haystack.includes(token));
  });

  const seen = new Set(exact.map((product) => product.id));
  const related = baseMatches.filter((product) => {
    if (seen.has(product.id)) return false;
    const haystack = getSearchableText(product);
    return terms.some((token) => haystack.includes(token));
  });

  related.forEach((product) => seen.add(product.id));

  const broad = products.filter((product) => {
    if (seen.has(product.id)) return false;
    const haystack = getSearchableText(product);
    if (brand && normalize(product.brand) === brand) return true;
    if (category && normalize(product.category) === category) return true;
    return terms.some((token) => haystack.includes(token));
  });

  if (exact.length >= minimumResults) {
    return exact;
  }

  return [...exact, ...related, ...broad];
}

export function sortCatalogProducts(products: Product[], sort: CatalogSort) {
  const sorted = [...products];

  switch (sort) {
    case "name-az":
      return sorted.sort((a, b) => a.name.localeCompare(b.name));
    case "latest":
    default:
      return sorted.sort((a, b) => {
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
        return a.name.localeCompare(b.name);
      });
  }
}

export function paginateProducts(products: Product[], page: number, pageSize = DEFAULT_PAGE_SIZE) {
  const totalPages = Math.max(1, Math.ceil(products.length / pageSize));
  const safePage = Math.min(Math.max(1, page), totalPages);
  const start = (safePage - 1) * pageSize;

  return {
    end: Math.min(start + pageSize, products.length),
    items: products.slice(start, start + pageSize),
    page: safePage,
    pageSize,
    start,
    totalItems: products.length,
    totalPages,
  };
}
