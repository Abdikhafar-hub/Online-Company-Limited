import type { ReactNode } from "react";
import { RemoteImage } from "./remote-image";
import { SiteHeader } from "./site-header";
import { SiteFooter } from "./site-footer";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col overflow-x-clip bg-cream">
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
  image?: { src: string | string[]; alt: string; fallbackLabel: string };
  children?: ReactNode;
}) {
  return (
    <section className="container-page pt-8">
      <div className="relative overflow-hidden rounded-3xl border border-beige-border bg-white p-5 sm:p-8 md:p-12">
        {image ? (
          <>
            <RemoteImage
              alt={image.alt}
              className="absolute inset-0"
              fallbackLabel={image.fallbackLabel}
              imageClassName="object-cover object-center"
              sizes="100vw"
              src={image.src}
            />
          </>
        ) : null}
        <div className="absolute inset-0 pointer-events-none grid-bg opacity-40" />
        <div className="relative">
          <div>
            <p className="kicker">{kicker}</p>
            <h1 className="mt-2 max-w-3xl text-3xl font-extrabold tracking-tight text-navy md:text-5xl">
              {title}
            </h1>
            {breadcrumb && <p className="text-sm text-muted-foreground mt-3">{breadcrumb}</p>}
            {children && <div className="mt-5 text-muted-foreground max-w-3xl">{children}</div>}
          </div>
        </div>
      </div>
    </section>
  );
}
