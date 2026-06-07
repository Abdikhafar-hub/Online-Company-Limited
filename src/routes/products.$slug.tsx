import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { MessageCircle, ShieldCheck, Truck, Check, ArrowLeft } from "lucide-react";
import { SiteLayout } from "@/components/site-layout";
import { ProductCard } from "@/components/product-card";
import { ProductVisual } from "@/components/product-visual";
import { PRODUCTS, buildWhatsAppLink, formatKES } from "@/lib/site-data";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const product = PRODUCTS.find(p => p.slug === params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.product.name} — Online Company Limited` },
      { name: "description", content: loaderData?.product.shortSpec ?? "" },
    ],
  }),
  notFoundComponent: () => (
    <SiteLayout><div className="container-page py-24 text-center"><h1 className="text-2xl font-bold">Product not found</h1><Link to="/products" className="text-brand-red mt-4 inline-block">Back to products</Link></div></SiteLayout>
  ),
  errorComponent: () => <SiteLayout><div className="container-page py-24 text-center">Something went wrong.</div></SiteLayout>,
  component: ProductPage,
});

function ProductPage() {
  const { product } = Route.useLoaderData();
  const related = PRODUCTS.filter(p => p.category === product.category && p.slug !== product.slug).slice(0, 4);
  const wa = buildWhatsAppLink(`Hello Online Company Limited, I'd like to order: ${product.name}. Please confirm availability and final price.`);
  const quoteMsg = buildWhatsAppLink(`Hello, I'd like a quote for: ${product.name}.`);

  return (
    <SiteLayout>
      <section className="container-page pt-8">
        <Link to="/products" className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy-soft mb-4"><ArrowLeft className="h-4 w-4" /> Back to products</Link>
        <div className="bg-white border border-beige-border rounded-3xl p-6 md:p-10 grid lg:grid-cols-2 gap-10">
          <div className="aspect-square max-w-xl">
            <ProductVisual product={product} size="lg" />
          </div>
          <div>
            <p className="kicker">{product.brand} · {product.categoryLabel}</p>
            <h1 className="text-3xl md:text-4xl font-extrabold text-navy mt-2 leading-tight">{product.name}</h1>
            <div className="mt-4 flex items-baseline gap-3">
              {product.requestPrice ? (
                <span className="text-2xl font-bold text-navy">Request Price</span>
              ) : (
                <>
                  <span className="text-3xl font-extrabold text-navy">{formatKES(product.price!)}</span>
                  {product.oldPrice && <span className="text-base text-muted-foreground line-through">{formatKES(product.oldPrice)}</span>}
                </>
              )}
            </div>
            <p className="text-sm text-whatsapp-dark font-semibold mt-2">In stock · Ready to ship countrywide</p>
            <p className="mt-5 text-muted-foreground leading-relaxed">{product.description}</p>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {product.specs.map((s: { label: string; value: string }) => (
                <div key={s.label} className="bg-cream border border-beige-border rounded-xl p-3">
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">{s.label}</div>
                  <div className="text-sm text-navy font-semibold mt-0.5">{s.value}</div>
                </div>
              ))}
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href={wa} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-whatsapp hover:bg-whatsapp-dark text-white px-5 py-3 rounded-full font-semibold">
                <MessageCircle className="h-4 w-4" /> Order on WhatsApp
              </a>
              <a href={quoteMsg} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 border border-navy/20 text-navy px-5 py-3 rounded-full font-semibold">Request Quote</a>
            </div>
            <div className="mt-6 flex gap-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-whatsapp-dark" /> Genuine product</span>
              <span className="flex items-center gap-1.5"><Truck className="h-4 w-4 text-whatsapp-dark" /> Countrywide delivery</span>
              <span className="flex items-center gap-1.5"><Check className="h-4 w-4 text-whatsapp-dark" /> Trade-in welcome</span>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="container-page mt-12">
          <h2 className="text-2xl font-extrabold text-navy mb-5">Related products</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {related.map(p => <ProductCard key={p.slug} product={p} />)}
          </div>
        </section>
      )}
    </SiteLayout>
  );
}