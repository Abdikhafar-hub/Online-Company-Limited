import Link from "next/link";
import type { Product } from "@/lib/site-data";
import { PRICE_ON_REQUEST_LABEL, getProductDisplayShortSpec } from "@/lib/product-display";
import { ProductInquiryActions } from "./product-inquiry-actions";
import { ProductVisual } from "./product-visual";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-beige-border bg-white transition-all hover:-translate-y-1 hover:shadow-[0_24px_50px_-30px_rgba(11,19,43,0.35)] sm:h-full sm:rounded-3xl">
      <Link href={`/products/${product.slug}`} className="block p-2 pb-1 sm:p-4 sm:pb-2">
        <div className="relative">
          <span className="absolute top-2 left-2 z-10 rounded-full bg-white/90 px-2 py-1 text-[9px] font-semibold uppercase tracking-[0.14em] text-navy-soft sm:px-2.5 sm:text-[0.7rem] sm:tracking-[0.16em]">
            {product.brand}
          </span>
          <div className="aspect-[4/3.15] sm:aspect-square">
            <ProductVisual product={product} />
          </div>
        </div>
      </Link>
      <div className="flex flex-1 flex-col gap-1 px-2.5 pb-2.5 pt-1 sm:gap-2 sm:px-5 sm:pb-5 sm:pt-2">
        <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-brand-red sm:kicker">
          {product.categoryLabel}
        </p>
        <Link href={`/products/${product.slug}`} className="focus-visible:outline-none">
          <h3 className="line-clamp-2 text-sm font-bold leading-snug text-navy sm:text-lg sm:leading-tight">
            {product.name}
          </h3>
        </Link>
        <p className="text-[10px] font-semibold uppercase tracking-wide text-whatsapp-dark sm:text-xs">
          {product.stockStatus}
        </p>
        <p className="line-clamp-1 text-[10px] leading-relaxed text-muted-foreground sm:line-clamp-2 sm:text-sm">
          {getProductDisplayShortSpec(product)}
        </p>
        <div className="mt-2 rounded-xl border border-beige-border bg-cream px-2 py-2 sm:mt-auto sm:rounded-2xl sm:px-3 sm:py-3">
          <p className="text-xs font-extrabold text-navy sm:text-sm">{PRICE_ON_REQUEST_LABEL}</p>
          <ProductInquiryActions
            className="mt-1.5"
            compact
            productName={product.name}
            whatsappMessage={product.whatsappInquiryText}
          />
        </div>
      </div>
    </article>
  );
}
