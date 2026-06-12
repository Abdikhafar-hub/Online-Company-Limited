import type { Metadata } from "next";
import { MapPin, MessageCircle, Phone } from "lucide-react";
import { PageHero, SiteLayout } from "@/components/site-layout";
import { BRANCHES, buildWhatsAppLink } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Branches",
  description: "Our branches across Kenya.",
};

export default function BranchesPage() {
  return (
    <SiteLayout>
      <PageHero kicker="Visit us" title="Find a branch near you" breadcrumb="Home / Branches">
        Walk into any of our branches across Kenya — or order and have your device delivered to your
        door.
      </PageHero>
      <section className="container-page mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {BRANCHES.map((branch) => (
          <div key={branch.slug} className="rounded-3xl border border-beige-border bg-white p-6">
            <div className="flex items-start gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-cream-deep text-navy">
                <MapPin className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-navy">{branch.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{branch.address}</p>
                <p className="mt-3 flex items-center gap-1.5 text-sm font-medium text-navy-soft">
                  <Phone className="h-4 w-4" /> {branch.phone}
                </p>
                <a
                  href={buildWhatsAppLink(`Hello, I'd like to visit the ${branch.name}.`)}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-whatsapp px-3.5 py-2 text-sm font-semibold text-white"
                >
                  <MessageCircle className="h-4 w-4" /> Chat branch
                </a>
              </div>
            </div>
          </div>
        ))}
      </section>
    </SiteLayout>
  );
}
