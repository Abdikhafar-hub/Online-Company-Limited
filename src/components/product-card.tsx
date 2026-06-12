import Link from "next/link";
import { MessageCircle } from "lucide-react";
import type { Product } from "@/lib/site-data";
import { buildWhatsAppLink, formatKES } from "@/lib/site-data";
import { ProductVisual } from "./product-visual";

export function ProductCard({ product }: { product: Product }) {
  const wa = buildWhatsAppLink(product.whatsappInquiryText);
  return (
    <article className="group bg-white rounded-3xl border border-beige-border overflow-hidden flex flex-col transition-all hover:-translate-y-1 hover:shadow-[0_24px_50px_-30px_rgba(11,19,43,0.35)]">
      <div className="p-4 pb-2">
        <div className="relative">
          <span className="absolute z-10 top-2 left-2 text-[0.7rem] tracking-[0.16em] uppercase font-semibold bg-white/85 text-navy-soft px-2.5 py-1 rounded-full">
            {product.brand}
          </span>
          <div className="aspect-square">
            <ProductVisual product={product} />
          </div>
        </div>
      </div>
      <div className="px-5 pb-5 pt-2 flex flex-col gap-2 flex-1">
        <p className="kicker">{product.categoryLabel}</p>
        <h3 className="text-lg font-bold leading-tight text-navy">{product.name}</h3>
        <p className="text-xs font-semibold uppercase tracking-wide text-whatsapp-dark">
          {product.stockStatus}
        </p>
        <div className="flex items-baseline gap-2">
          {product.requestPrice ? (
            <span className="text-base font-semibold text-navy">Request Price</span>
          ) : (
            <>
              <span className="text-xl font-extrabold text-navy">{formatKES(product.price!)}</span>
              {product.oldPrice && (
                <span className="text-sm text-muted-foreground line-through">
                  {formatKES(product.oldPrice)}
                </span>
              )}
            </>
          )}
        </div>
        <p className="text-sm text-muted-foreground line-clamp-2">{product.shortSpec}</p>
        <div className="mt-auto pt-4 flex items-center justify-between border-t border-beige-border">
          <Link
            href={`/products/${product.slug}`}
            className="text-sm font-semibold text-navy underline-offset-4 hover:underline"
          >
            View details
          </Link>
          <a
            href={wa}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-whatsapp hover:bg-whatsapp-dark text-white text-sm font-semibold transition-colors"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </a>
        </div>
      </div>
    </article>
  );
}
