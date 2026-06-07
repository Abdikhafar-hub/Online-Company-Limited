import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, MessageCircle } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/site-layout";
import { BRANCHES, buildWhatsAppLink } from "@/lib/site-data";

export const Route = createFileRoute("/branches")({
  head: () => ({ meta: [{ title: "Branches — Online Company Limited" }, { name: "description", content: "Our branches across Kenya." }] }),
  component: () => (
    <SiteLayout>
      <PageHero kicker="Visit us" title="Find a branch near you" breadcrumb="Home / Branches">
        Walk into any of our branches across Kenya — or order and have your device delivered to your door.
      </PageHero>
      <section className="container-page mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {BRANCHES.map(b => (
          <div key={b.slug} className="bg-white border border-beige-border rounded-3xl p-6">
            <div className="flex items-start gap-3">
              <div className="h-11 w-11 rounded-xl bg-cream-deep text-navy grid place-items-center"><MapPin className="h-5 w-5" /></div>
              <div className="flex-1">
                <h3 className="font-bold text-navy">{b.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{b.address}</p>
                <p className="text-sm text-navy-soft mt-3 font-medium flex items-center gap-1.5"><Phone className="h-4 w-4" /> {b.phone}</p>
                <a href={buildWhatsAppLink(`Hello, I'd like to visit the ${b.name}.`)} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold bg-whatsapp text-white px-3.5 py-2 rounded-full">
                  <MessageCircle className="h-4 w-4" /> Chat branch
                </a>
              </div>
            </div>
          </div>
        ))}
      </section>
    </SiteLayout>
  ),
});