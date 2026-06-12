import type { Metadata } from "next";
import { RemoteImage } from "@/components/remote-image";
import { PageHero, SiteLayout } from "@/components/site-layout";
import { getServiceImage, pageHeroImages } from "@/lib/product-images";
import { SERVICES } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Services",
  description: "Repairs, installation, networking, printer maintenance and bulk supply services.",
};

export default function ServicesPage() {
  return (
    <SiteLayout>
      <PageHero
        kicker="Services"
        title="Professional services for every customer"
        breadcrumb="Home / Services"
        image={pageHeroImages.services}
      >
        We support what we sell — and what you already own. From phone screen replacements to CCTV
        installation and corporate supply, our technicians have you covered.
      </PageHero>
      <section className="container-page mt-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => {
            const image = getServiceImage(service);
            return (
              <div
                key={service.slug}
                className="rounded-3xl border border-beige-border bg-white p-6"
              >
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
        </div>
      </section>
    </SiteLayout>
  );
}
