import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import { z } from "zod";
import { SiteLayout, PageHero } from "@/components/site-layout";
import { ProductCard } from "@/components/product-card";
import { CATEGORIES, PRODUCTS } from "@/lib/site-data";

const searchSchema = z.object({
  q: z.string().optional(),
  cat: z.string().optional(),
});

export const Route = createFileRoute("/products")({
  validateSearch: searchSchema,
  head: () => ({
    meta: [
      { title: "Products — Online Company Limited" },
      { name: "description", content: "Browse our catalog of laptops, phones, CCTV, printers, networking and accessories." },
    ],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  const search = Route.useSearch();
  const [q, setQ] = useState(search.q ?? "");
  const [cat, setCat] = useState(search.cat ?? "");
  const [brand, setBrand] = useState("");

  const brands = useMemo(() => Array.from(new Set(PRODUCTS.map(p => p.brand))).sort(), []);

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase();
    return PRODUCTS.filter(p => {
      if (cat && p.category !== cat) return false;
      if (brand && p.brand !== brand) return false;
      if (term && !(`${p.name} ${p.brand} ${p.categoryLabel} ${p.shortSpec}`.toLowerCase().includes(term))) return false;
      return true;
    });
  }, [q, cat, brand]);

  return (
    <SiteLayout>
      <PageHero kicker="Catalog" title="All Products" breadcrumb="Home / Products">
        Explore genuine electronics and ICT equipment from leading global brands.
      </PageHero>

      <section className="container-page mt-6">
        <div className="bg-white border border-beige-border rounded-3xl p-5 md:p-6 grid gap-3 md:grid-cols-[1.5fr_1fr_1fr]">
          <label className="flex items-center bg-cream border border-beige-border rounded-full px-4 py-2.5">
            <Search className="h-4 w-4 text-muted-foreground" />
            <input value={q} onChange={e => setQ(e.target.value)} placeholder="Search products..." className="bg-transparent outline-none px-3 text-sm flex-1" />
          </label>
          <select value={cat} onChange={e => setCat(e.target.value)} className="bg-cream border border-beige-border rounded-full px-4 py-2.5 text-sm font-medium">
            <option value="">All categories</option>
            {CATEGORIES.map(c => <option key={c.slug} value={c.slug}>{c.name}</option>)}
          </select>
          <select value={brand} onChange={e => setBrand(e.target.value)} className="bg-cream border border-beige-border rounded-full px-4 py-2.5 text-sm font-medium">
            <option value="">All brands</option>
            {brands.map(b => <option key={b} value={b}>{b}</option>)}
          </select>
        </div>
      </section>

      <section className="container-page mt-8">
        <div className="text-sm text-muted-foreground mb-4">{filtered.length} matching products</div>
        {filtered.length === 0 ? (
          <div className="bg-white border border-beige-border rounded-3xl p-12 text-center">
            <p className="text-navy font-semibold">No products match your filters.</p>
            <button onClick={() => { setQ(""); setCat(""); setBrand(""); }} className="mt-3 text-sm font-semibold text-brand-red">Clear filters</button>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.map(p => <ProductCard key={p.slug} product={p} />)}
          </div>
        )}
      </section>
    </SiteLayout>
  );
}