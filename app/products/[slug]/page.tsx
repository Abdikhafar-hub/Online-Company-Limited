import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Check, ShieldCheck, Truck } from "lucide-react";
import { notFound } from "next/navigation";
import { ProductInquiryActions } from "@/components/product-inquiry-actions";
import { ProductCard } from "@/components/product-card";
import { ProductVisual } from "@/components/product-visual";
import { SiteLayout } from "@/components/site-layout";
import {
  PRICE_ON_REQUEST_LABEL,
  getProductDisplayDescription,
  getProductDisplaySpecs,
} from "@/lib/product-display";
import { PRODUCTS } from "@/lib/site-data";

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
    description: getProductDisplayDescription(product),
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
  const description = getProductDisplayDescription(product);
  const specs = getProductDisplaySpecs(product);

  return (
    <SiteLayout>
      <section className="container-page pt-8">
        <Link
          href="/products"
          className="mb-4 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-soft"
        >
          <ArrowLeft className="h-4 w-4" /> Back to products
        </Link>
        <div className="grid gap-6 rounded-3xl border border-beige-border bg-white p-4 sm:p-6 md:p-10 lg:grid-cols-2 lg:gap-10">
          <div className="aspect-square w-full max-w-xl">
            <ProductVisual product={product} size="lg" />
          </div>
          <div>
            <p className="kicker">
              {product.brand} · {product.categoryLabel}
            </p>
            <h1 className="mt-2 text-3xl font-extrabold leading-tight text-navy md:text-4xl">
              {product.name}
            </h1>
            <div className="mt-4 rounded-3xl border border-beige-border bg-cream p-4 sm:p-5">
              <p className="text-2xl font-extrabold text-navy sm:text-3xl">
                {PRICE_ON_REQUEST_LABEL}
              </p>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                Reach out for the latest quote, availability, warranty and delivery options.
              </p>
              <ProductInquiryActions
                className="mt-4"
                productName={product.name}
                whatsappMessage={product.whatsappInquiryText}
              />
            </div>
            <p className="mt-2 text-sm font-semibold text-whatsapp-dark">
              {product.stockStatus} · Ready to ship countrywide
            </p>
            <p className="mt-5 leading-relaxed text-muted-foreground">{description}</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {specs.map((spec) => (
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
            <div className="mt-6 flex flex-wrap gap-3 text-xs text-muted-foreground sm:gap-4">
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
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-4 lg:gap-5">
            {related.map((item) => (
              <ProductCard key={item.slug} product={item} />
            ))}
          </div>
        </section>
      ) : null}
    </SiteLayout>
  );
}
