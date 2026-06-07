import { createFileRoute } from "@tanstack/react-router";
import { Wrench } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/site-layout";
import { SERVICES } from "@/lib/site-data";

export const Route = createFileRoute("/services")({
  head: () => ({ meta: [{ title: "Services — Online Company Limited" }, { name: "description", content: "Repairs, installation, networking, printer maintenance and bulk supply services." }] }),
  component: () => (
    <SiteLayout>
      <PageHero kicker="Services" title="Professional services for every customer" breadcrumb="Home / Services">
        We support what we sell — and what you already own. From phone screen replacements to CCTV installation and corporate supply, our technicians have you covered.
      </PageHero>
      <section className="container-page mt-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SERVICES.map(s => (
            <div key={s.slug} className="bg-white border border-beige-border rounded-3xl p-6">
              <div className="h-10 w-10 rounded-xl bg-cream-deep text-brand-red grid place-items-center mb-3"><Wrench className="h-5 w-5" /></div>
              <h3 className="text-lg font-bold text-navy">{s.name}</h3>
              <p className="text-sm text-muted-foreground mt-2">{s.description}</p>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  ),
});