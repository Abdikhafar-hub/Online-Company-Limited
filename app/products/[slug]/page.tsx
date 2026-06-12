import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Check, MessageCircle, ShieldCheck, Truck } from "lucide-react";
import { notFound } from "next/navigation";
import { ProductCard } from "@/components/product-card";
import { ProductVisual } from "@/components/product-visual";
import { SiteLayout } from "@/components/site-layout";
import { PRODUCTS, buildWhatsAppLink, formatKES } from "@/lib/site-data";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = PRODUCTS.find((item) => item.slug === slug);

  if (!product) {
    return {
      title: "Product not found",
    };
  }

  return {
    title: product.name,
    description: product.shortSpec,
  };
}

export function generateStaticParams() {
  return PRODUCTS.map((product) => ({ slug: product.slug }));
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = PRODUCTS.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  const related = PRODUCTS.filter(
    (item) => item.category === product.category && item.slug !== product.slug,
  ).slice(0, 4);
  const wa = buildWhatsAppLink(product.whatsappInquiryText);
  const quoteMsg = buildWhatsAppLink(`Hello, I'd like a quote for: ${product.name}.`);

  return (
    <SiteLayout>
      <section className="container-page pt-8">
        <Link
          href="/products"
          className="mb-4 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-soft"
        >
          <ArrowLeft className="h-4 w-4" /> Back to products
        </Link>
        <div className="grid gap-10 rounded-3xl border border-beige-border bg-white p-6 md:p-10 lg:grid-cols-2">
          <div className="aspect-square max-w-xl">
            <ProductVisual product={product} size="lg" />
          </div>
          <div>
            <p className="kicker">
              {product.brand} · {product.categoryLabel}
            </p>
            <h1 className="mt-2 text-3xl font-extrabold leading-tight text-navy md:text-4xl">
              {product.name}
            </h1>
            <div className="mt-4 flex items-baseline gap-3">
              {product.requestPrice ? (
                <span className="text-2xl font-bold text-navy">Request Price</span>
              ) : (
                <>
                  <span className="text-3xl font-extrabold text-navy">
                    {formatKES(product.price!)}
                  </span>
                  {product.oldPrice ? (
                    <span className="text-base text-muted-foreground line-through">
                      {formatKES(product.oldPrice)}
                    </span>
                  ) : null}
                </>
              )}
            </div>
            <p className="mt-2 text-sm font-semibold text-whatsapp-dark">
              {product.stockStatus} · Ready to ship countrywide
            </p>
            <p className="mt-5 leading-relaxed text-muted-foreground">{product.description}</p>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {product.specs.map((spec) => (
                <div
                  key={spec.label}
                  className="rounded-xl border border-beige-border bg-cream p-3"
                >
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                    {spec.label}
                  </div>
                  <div className="mt-0.5 text-sm font-semibold text-navy">{spec.value}</div>
                </div>
              ))}
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={wa}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-5 py-3 font-semibold text-white hover:bg-whatsapp-dark"
              >
                <MessageCircle className="h-4 w-4" /> Order on WhatsApp
              </a>
              <a
                href={quoteMsg}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-navy/20 px-5 py-3 font-semibold text-navy"
              >
                Request Quote
              </a>
            </div>
            <div className="mt-6 flex gap-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-whatsapp-dark" /> Genuine product
              </span>
              <span className="flex items-center gap-1.5">
                <Truck className="h-4 w-4 text-whatsapp-dark" /> Countrywide delivery
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="h-4 w-4 text-whatsapp-dark" /> Trade-in welcome
              </span>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 ? (
        <section className="container-page mt-12">
          <h2 className="mb-5 text-2xl font-extrabold text-navy">Related products</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((item) => (
              <ProductCard key={item.slug} product={item} />
            ))}
          </div>
        </section>
      ) : null}
    </SiteLayout>
  );
}
