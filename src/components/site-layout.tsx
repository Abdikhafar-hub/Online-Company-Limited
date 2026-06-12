import type { ReactNode } from "react";
import { RemoteImage } from "./remote-image";
import { SiteHeader } from "./site-header";
import { SiteFooter } from "./site-footer";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-cream">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}

export function PageHero({
  image,
  kicker,
  title,
  breadcrumb,
  children,
}: {
  kicker: string;
  title: string;
  breadcrumb?: string;
  image?: { src: string; alt: string; fallbackLabel: string };
  children?: ReactNode;
}) {
  return (
    <section className="container-page pt-8">
      <div className="bg-white border border-beige-border rounded-3xl p-8 md:p-12 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
        <div
          className={`relative ${image ? "grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center" : ""}`}
        >
          <div>
            <p className="kicker">{kicker}</p>
            <h1 className="text-3xl md:text-5xl font-extrabold text-navy mt-2 max-w-3xl tracking-tight">
              {title}
            </h1>
            {breadcrumb && <p className="text-sm text-muted-foreground mt-3">{breadcrumb}</p>}
            {children && <div className="mt-5 text-muted-foreground max-w-3xl">{children}</div>}
          </div>
          {image ? (
            <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] border border-beige-border/70">
              <RemoteImage
                alt={image.alt}
                className="h-full w-full"
                fallbackLabel={image.fallbackLabel}
                imageClassName="object-cover"
                sizes="(min-width: 1024px) 32vw, 100vw"
                src={image.src}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-navy/25 via-transparent to-transparent" />
              </RemoteImage>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
