import { createFileRoute, Link } from "@tanstack/react-router";
import { Cctv, ShieldCheck, Home, Building2 } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/site-layout";
import { ProductCard } from "@/components/product-card";
import { PRODUCTS, buildWhatsAppLink } from "@/lib/site-data";

export const Route = createFileRoute("/cctv-security")({
  head: () => ({ meta: [{ title: "CCTV & Security — Online Company Limited" }, { name: "description", content: "CCTV cameras, IP systems, installation and maintenance for homes and businesses." }] }),
  component: () => {
    const cctv = PRODUCTS.filter(p => p.category === "cctv-security");
    const wa = buildWhatsAppLink("Hello, I'd like to request a CCTV site survey.");
    return (
      <SiteLayout>
        <PageHero kicker="Security & Surveillance" title="CCTV systems, IP cameras & installation" breadcrumb="Home / CCTV & Security">
          We supply, install and maintain CCTV and IP camera systems for homes, businesses and institutions across Kenya.
        </PageHero>
        <section className="container-page mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {icon: Cctv, t: "CCTV Cameras", d: "2MP to 8MP analog and IP cameras"},
            {icon: ShieldCheck, t: "DVR / NVR Systems", d: "4, 8 and 16 channel kits"},
            {icon: Home, t: "Home Surveillance", d: "Wi-Fi cameras and home kits"},
            {icon: Building2, t: "Business Surveillance", d: "Multi-site monitoring and access control"},
          ].map(c => (
            <div key={c.t} className="bg-white border border-beige-border rounded-2xl p-5">
              <c.icon className="h-6 w-6 text-brand-red" />
              <h3 className="font-bold text-navy mt-2">{c.t}</h3>
              <p className="text-xs text-muted-foreground mt-1">{c.d}</p>
            </div>
          ))}
        </section>
        <section className="container-page mt-10">
          <h2 className="text-2xl font-extrabold text-navy mb-5">Featured CCTV products</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {cctv.map(p => <ProductCard key={p.slug} product={p} />)}
          </div>
        </section>
        <section className="container-page mt-10">
          <div className="bg-navy text-cream rounded-3xl p-8 md:p-10 flex flex-col md:flex-row gap-5 md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl font-extrabold">Plan a CCTV installation</h2>
              <p className="text-cream/70 mt-2 max-w-xl">Book a free site survey. We'll design a system around your floor plan, budget and storage needs.</p>
            </div>
            <a href={wa} target="_blank" rel="noreferrer" className="bg-whatsapp text-white px-5 py-3 rounded-full font-semibold">Request site survey</a>
          </div>
        </section>
      </SiteLayout>
    );
  },
});