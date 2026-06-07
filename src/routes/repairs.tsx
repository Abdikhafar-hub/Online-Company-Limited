import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/site-layout";
import { SERVICES, buildWhatsAppLink } from "@/lib/site-data";

export const Route = createFileRoute("/repairs")({
  head: () => ({ meta: [{ title: "Repairs — Online Company Limited" }, { name: "description", content: "Phone, laptop, tablet, printer and CCTV repair and maintenance services." }] }),
  component: RepairsPage,
});

function RepairsPage() {
  const repair = SERVICES.filter(s => s.name.toLowerCase().includes("repair") || s.name.toLowerCase().includes("replacement") || s.name.toLowerCase().includes("troubleshooting"));
  const wa = buildWhatsAppLink("Hello, I need a repair service. Here are the details:");
  return (
    <SiteLayout>
      <PageHero kicker="Repairs" title="Device repair done right" breadcrumb="Home / Repairs">
        We diagnose, repair and refurbish phones, laptops, tablets, printers and CCTV systems. Board-level expertise, genuine parts, and honest pricing.
      </PageHero>
      <section className="container-page mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {repair.map(s => (
          <div key={s.slug} className="bg-white border border-beige-border rounded-3xl p-6">
            <h3 className="text-lg font-bold text-navy">{s.name}</h3>
            <p className="text-sm text-muted-foreground mt-2">{s.description}</p>
          </div>
        ))}
      </section>
      <section className="container-page mt-10">
        <div className="bg-navy text-cream rounded-3xl p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
          <div>
            <p className="text-xs tracking-[0.22em] uppercase text-cream/70 font-semibold">Common issues</p>
            <h2 className="text-2xl font-extrabold mt-1">Cracked screen, slow laptop, dead battery or charging fault?</h2>
            <p className="text-cream/70 text-sm mt-2 max-w-xl">Send us a message describing the device, model, fault and your location. We'll respond with a diagnostic plan and quote.</p>
          </div>
          <a href={wa} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-whatsapp px-5 py-3 rounded-full font-semibold"><MessageCircle className="h-4 w-4" /> Request repair</a>
        </div>
      </section>
    </SiteLayout>
  );
}