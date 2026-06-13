import Link from "next/link";
import { MessageCircle } from "lucide-react";
import type { Product } from "@/lib/site-data";
import { buildWhatsAppLink, formatKES } from "@/lib/site-data";
import { ProductVisual } from "./product-visual";

export function ProductCard({ product }: { product: Product }) {
  const wa = buildWhatsAppLink(product.whatsappInquiryText);
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-beige-border bg-white transition-all hover:-translate-y-1 hover:shadow-[0_24px_50px_-30px_rgba(11,19,43,0.35)] sm:rounded-3xl">
      <div className="p-2 pb-1 sm:p-4 sm:pb-2">
        <div className="relative">
          <span className="absolute top-2 left-2 z-10 rounded-full bg-white/90 px-2 py-1 text-[9px] font-semibold uppercase tracking-[0.14em] text-navy-soft sm:px-2.5 sm:text-[0.7rem] sm:tracking-[0.16em]">
            {product.brand}
          </span>
          <div className="aspect-[4/3.15] sm:aspect-square">
            <ProductVisual product={product} />
          </div>
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-1 px-2.5 pb-2.5 pt-1 sm:gap-2 sm:px-5 sm:pb-5 sm:pt-2">
        <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-brand-red sm:kicker">
          {product.categoryLabel}
        </p>
        <h3 className="line-clamp-2 text-sm font-bold leading-snug text-navy sm:text-lg sm:leading-tight">
          {product.name}
        </h3>
        <p className="text-[10px] font-semibold uppercase tracking-wide text-whatsapp-dark sm:text-xs">
          {product.stockStatus}
        </p>
        <div className="flex flex-wrap items-baseline gap-x-1.5 gap-y-0.5 sm:gap-2">
          {product.requestPrice ? (
            <span className="text-sm font-semibold text-navy sm:text-base">Request Price</span>
          ) : (
            <>
              <span className="text-base font-extrabold text-navy sm:text-xl">
                {formatKES(product.price!)}
              </span>
              {product.oldPrice && (
                <span className="text-[11px] text-muted-foreground line-through sm:text-sm">
                  {formatKES(product.oldPrice)}
                </span>
              )}
            </>
          )}
        </div>
        <p className="line-clamp-2 text-[10px] leading-relaxed text-muted-foreground sm:text-sm">
          {product.shortSpec}
        </p>
        <div className="mt-auto flex items-center justify-between gap-2 border-t border-beige-border pt-2.5 sm:pt-4">
          <Link
            href={`/products/${product.slug}`}
            className="min-w-0 whitespace-nowrap text-xs font-semibold text-navy underline-offset-4 hover:underline sm:text-sm"
          >
            View details
          </Link>
          <a
            href={wa}
            target="_blank"
            rel="noreferrer"
            aria-label={`WhatsApp inquiry for ${product.name}`}
            className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-whatsapp text-white transition-colors hover:bg-whatsapp-dark sm:h-auto sm:w-auto sm:gap-1.5 sm:px-3.5 sm:py-2 sm:text-sm"
          >
            <MessageCircle className="h-4 w-4" />
            <span className="sr-only sm:not-sr-only">WhatsApp</span>
          </a>
        </div>
      </div>
    </article>
  );
}
