import type { Metadata } from "next";
import { MessageCircle } from "lucide-react";
import { RemoteImage } from "@/components/remote-image";
import { PageHero, SiteLayout } from "@/components/site-layout";
import { getServiceImage, pageHeroImages } from "@/lib/product-images";
import { SERVICES, buildWhatsAppLink } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Repairs",
  description: "Phone, laptop, tablet, printer and CCTV repair and maintenance services.",
};

export default function RepairsPage() {
  const repairServices = SERVICES.filter(
    (service) =>
      service.name.toLowerCase().includes("repair") ||
      service.name.toLowerCase().includes("replacement") ||
      service.name.toLowerCase().includes("troubleshooting"),
  );
  const wa = buildWhatsAppLink("Hello, I need a repair service. Here are the details:");

  return (
    <SiteLayout>
      <PageHero
        breadcrumb="Home / Repairs"
        image={pageHeroImages.repairs}
        kicker="Repairs"
        title="Device repair done right"
      >
        We diagnose, repair and refurbish phones, laptops, tablets, printers and CCTV systems.
        Board-level expertise, genuine parts, and dependable support.
      </PageHero>
      <section className="container-page mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {repairServices.map((service) => {
          const image = getServiceImage(service);
          return (
            <div key={service.slug} className="rounded-3xl border border-beige-border bg-white p-6">
              <div className="mb-4 relative h-24 overflow-hidden rounded-2xl">
                <RemoteImage
                  alt={image.alt}
                  className="h-full w-full"
                  fallbackLabel={image.fallbackLabel}
                  imageClassName="object-cover"
                  sizes="(min-width: 1024px) 20rem, 100vw"
                  src={image.src}
                />
              </div>
              <h3 className="text-lg font-bold text-navy">{service.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{service.description}</p>
            </div>
          );
        })}
      </section>
      <section className="container-page mt-10">
        <div className="flex flex-col gap-5 rounded-3xl bg-navy p-8 text-cream md:flex-row md:items-center md:justify-between md:p-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cream/70">
              Common issues
            </p>
            <h2 className="mt-1 text-2xl font-extrabold">
              Cracked screen, slow laptop, dead battery or charging fault?
            </h2>
            <p className="mt-2 max-w-xl text-sm text-cream/70">
              Send us a message describing the device, model, fault and your location. We'll respond
              with a diagnostic plan and quote.
            </p>
          </div>
          <a
            href={wa}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-5 py-3 font-semibold"
          >
            <MessageCircle className="h-4 w-4" /> Request repair
          </a>
        </div>
      </section>
    </SiteLayout>
  );
}
