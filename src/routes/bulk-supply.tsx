import { createFileRoute, Link } from "@tanstack/react-router";
import { Building2, Boxes, GraduationCap, ShieldCheck } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/site-layout";

export const Route = createFileRoute("/bulk-supply")({
  head: () => ({ meta: [{ title: "Bulk Supply — Online Company Limited" }, { name: "description", content: "Wholesale and corporate ICT supply for shops, offices, schools and institutions." }] }),
  component: () => (
    <SiteLayout>
      <PageHero kicker="Wholesale & Corporate" title="Bulk supply you can plan around" breadcrumb="Home / Bulk Supply">
        Reliable stock, transparent pricing and on-time delivery. We supply electronics shops, companies, schools, offices, cyber cafes, NGOs and institutions across Kenya.
      </PageHero>
      <section className="container-page mt-8 grid md:grid-cols-2 gap-4">
        {[
          { icon: Boxes, t: "Reseller & shop supply", d: "Monthly stock of accessories, chargers, earbuds, covers and screen protectors at wholesale rates." },
          { icon: Building2, t: "Corporate laptop supply", d: "HP, Dell, Lenovo and Apple business laptops with imaging, asset tagging and on-site delivery." },
          { icon: GraduationCap, t: "School & institutional supply", d: "Computer labs, projectors, networking and structured cabling for schools, colleges and NGOs." },
          { icon: ShieldCheck, t: "CCTV & networking projects", d: "End-to-end installation of CCTV, access control and office networking with maintenance contracts." },
        ].map(c => (
          <div key={c.t} className="bg-white border border-beige-border rounded-3xl p-7">
            <c.icon className="h-7 w-7 text-brand-red" />
            <h3 className="font-bold text-navy text-lg mt-3">{c.t}</h3>
            <p className="text-sm text-muted-foreground mt-2">{c.d}</p>
          </div>
        ))}
      </section>
      <section className="container-page mt-10">
        <div className="bg-navy text-cream rounded-3xl p-8 md:p-12 flex flex-col md:flex-row gap-5 md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold">Need a quote for a procurement?</h2>
            <p className="text-cream/70 mt-2 max-w-xl">Share your list, quantities and timeline. We'll respond with availability and competitive pricing.</p>
          </div>
          <Link to="/quote" className="inline-flex bg-cream text-navy px-6 py-3 rounded-full font-semibold">Request Bulk Quote</Link>
        </div>
      </section>
    </SiteLayout>
  ),
});