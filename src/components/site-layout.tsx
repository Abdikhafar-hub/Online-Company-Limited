import type { ReactNode } from "react";
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

export function PageHero({ kicker, title, breadcrumb, children }: { kicker: string; title: string; breadcrumb?: string; children?: ReactNode }) {
  return (
    <section className="container-page pt-8">
      <div className="bg-white border border-beige-border rounded-3xl p-8 md:p-12 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
        <div className="relative">
          <p className="kicker">{kicker}</p>
          <h1 className="text-3xl md:text-5xl font-extrabold text-navy mt-2 max-w-3xl tracking-tight">{title}</h1>
          {breadcrumb && <p className="text-sm text-muted-foreground mt-3">{breadcrumb}</p>}
          {children && <div className="mt-5 text-muted-foreground max-w-3xl">{children}</div>}
        </div>
      </div>
    </section>
  );
}