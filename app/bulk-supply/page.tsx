import type { Metadata } from "next";
import Link from "next/link";
import { RemoteImage } from "@/components/remote-image";
import { PageHero, SiteLayout } from "@/components/site-layout";
import { bulkSupplyCardImages, pageHeroImages } from "@/lib/product-images";

export const metadata: Metadata = {
  title: "Bulk Supply",
  description: "Wholesale and corporate ICT supply for shops, offices, schools and institutions.",
};

export default function BulkSupplyPage() {
  return (
    <SiteLayout>
      <PageHero
        kicker="Wholesale & Corporate"
        title="Bulk supply you can plan around"
        breadcrumb="Home / Bulk Supply"
        image={pageHeroImages.bulkSupply}
      >
        Reliable stock, transparent pricing and on-time delivery. We supply electronics shops,
        companies, schools, offices, cyber cafes, NGOs and institutions across Kenya.
      </PageHero>
      <section className="container-page mt-8 grid gap-4 md:grid-cols-2">
        {[
          {
            image: bulkSupplyCardImages.resellerSupply,
            t: "Reseller & shop supply",
            d: "Monthly stock of accessories, chargers, earbuds, covers and screen protectors at wholesale rates.",
          },
          {
            image: bulkSupplyCardImages.corporateLaptopSupply,
            t: "Corporate laptop supply",
            d: "HP, Dell, Lenovo and Apple business laptops with imaging, asset tagging and on-site delivery.",
          },
          {
            image: bulkSupplyCardImages.schoolInstitutionSupply,
            t: "School & institutional supply",
            d: "Computer labs, projectors, networking and structured cabling for schools, colleges and NGOs.",
          },
          {
            image: bulkSupplyCardImages.cctvNetworkingProjects,
            t: "CCTV & networking projects",
            d: "End-to-end installation of CCTV, access control and office networking with maintenance contracts.",
          },
        ].map((card) => (
          <div key={card.t} className="rounded-3xl border border-beige-border bg-white p-7">
            <div className="mb-4 relative h-24 overflow-hidden rounded-2xl">
              <RemoteImage
                alt={card.image.alt}
                className="h-full w-full"
                fallbackLabel={card.image.fallbackLabel}
                imageClassName="object-cover"
                sizes="(min-width: 768px) 22rem, 100vw"
                src={card.image.src}
              />
            </div>
            <h3 className="mt-3 text-lg font-bold text-navy">{card.t}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{card.d}</p>
          </div>
        ))}
      </section>
      <section className="container-page mt-10">
        <div className="flex flex-col gap-5 rounded-3xl bg-navy p-8 text-cream md:flex-row md:items-center md:justify-between md:p-12">
          <div>
            <h2 className="text-2xl font-extrabold md:text-3xl">Need a quote for a procurement?</h2>
            <p className="mt-2 max-w-xl text-cream/70">
              Share your list, quantities and timeline. We'll respond with availability and
              competitive pricing.
            </p>
          </div>
          <Link
            href="/quote"
            className="inline-flex rounded-full bg-cream px-6 py-3 font-semibold text-navy"
          >
            Request Bulk Quote
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
