import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { SiteLayout } from "@/components/site-layout";
import { ProductCard } from "@/components/product-card";
import { CATEGORIES, PRODUCTS } from "@/lib/site-data";

export const Route = createFileRoute("/category/$slug")({
  loader: ({ params }) => {
    const category = CATEGORIES.find(c => c.slug === params.slug);
    if (!category) throw notFound();
    return { category };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.category.name} — Online Company Limited` },
      { name: "description", content: loaderData?.category.description ?? "" },
    ],
  }),
  notFoundComponent: () => <SiteLayout><div className="container-page py-24 text-center"><h1 className="text-2xl font-bold">Category not found</h1></div></SiteLayout>,
  errorComponent: () => <SiteLayout><div className="container-page py-24 text-center">Something went wrong.</div></SiteLayout>,
  component: CategoryPage,
});

function CategoryPage() {
  const { category } = Route.useLoaderData();
  const products = PRODUCTS.filter(p => p.category === category.slug);

  return (
    <SiteLayout>
      <section className="container-page pt-8">
        <div className="bg-white border border-beige-border rounded-3xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
          <div className="relative max-w-3xl">
            <p className="kicker">Category Page</p>
            <h1 className="text-3xl md:text-5xl font-extrabold text-navy mt-2">{category.name}</h1>
            <p className="text-sm text-muted-foreground mt-3">{category.name}</p>
            <p className="mt-5 text-muted-foreground leading-relaxed">{category.description}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {category.chips.map((c: string) => (
                <span key={c} className="text-xs font-semibold bg-cream-deep text-navy-soft px-3 py-1.5 rounded-full">{c}</span>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/products" className="inline-flex items-center gap-1.5 text-sm font-semibold border border-navy/20 px-4 py-2 rounded-full"><ArrowLeft className="h-4 w-4" /> Back to shop</Link>
              <span className="inline-flex items-center text-sm font-semibold bg-cream-deep px-4 py-2 rounded-full">{products.length} matching products</span>
            </div>
          </div>
        </div>
      </section>

      <section className="container-page mt-8">
        {products.length === 0 ? (
          <div className="bg-white border border-beige-border rounded-3xl p-12 text-center text-muted-foreground">More products coming to this category soon.</div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {products.map(p => <ProductCard key={p.slug} product={p} />)}
          </div>
        )}
      </section>
    </SiteLayout>
  );
}