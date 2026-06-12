import type { Metadata } from "next";
import { RemoteImage } from "@/components/remote-image";
import { PageHero, SiteLayout } from "@/components/site-layout";
import { ProductCard } from "@/components/product-card";
import { cctvFeatureImages, pageHeroImages } from "@/lib/product-images";
import { PRODUCTS, buildWhatsAppLink } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "CCTV & Security",
  description: "CCTV cameras, IP systems, installation and maintenance for homes and businesses.",
};

export default function CctvSecurityPage() {
  const cctv = PRODUCTS.filter((p) => p.category === "cctv-security");
  const wa = buildWhatsAppLink("Hello, I'd like to request a CCTV site survey.");

  return (
    <SiteLayout>
      <PageHero
        kicker="Security & Surveillance"
        title="CCTV systems, IP cameras & installation"
        breadcrumb="Home / CCTV & Security"
        image={pageHeroImages.cctvSecurity}
      >
        We supply, install and maintain CCTV and IP camera systems for homes, businesses and
        institutions across Kenya.
      </PageHero>
      <section className="container-page mt-8 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-4">
        {[
          {
            image: cctvFeatureImages.cameras,
            t: "CCTV Cameras",
            d: "2MP to 8MP analog and IP cameras",
          },
          {
            image: cctvFeatureImages.systems,
            t: "DVR / NVR Systems",
            d: "4, 8 and 16 channel kits",
          },
          {
            image: cctvFeatureImages.homeSurveillance,
            t: "Home Surveillance",
            d: "Wi-Fi cameras and home kits",
          },
          {
            image: cctvFeatureImages.businessSurveillance,
            t: "Business Surveillance",
            d: "Multi-site monitoring and access control",
          },
        ].map((card) => (
          <div key={card.t} className="rounded-2xl border border-beige-border bg-white p-5">
            <div className="mb-3 relative h-20 overflow-hidden rounded-xl">
              <RemoteImage
                alt={card.image.alt}
                className="h-full w-full"
                fallbackLabel={card.image.fallbackLabel}
                imageClassName="object-cover"
                sizes="(min-width: 1024px) 16rem, 100vw"
                src={card.image.src}
              />
            </div>
            <h3 className="mt-2 font-bold text-navy">{card.t}</h3>
            <p className="mt-1 text-xs text-muted-foreground">{card.d}</p>
          </div>
        ))}
      </section>
      <section className="container-page mt-10">
        <h2 className="mb-5 text-2xl font-extrabold text-navy">Featured CCTV products</h2>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-4 lg:gap-5">
          {cctv.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>
      <section className="container-page mt-10">
        <div className="flex flex-col gap-5 rounded-3xl bg-navy p-8 text-cream md:flex-row md:items-center md:justify-between md:p-10">
          <div>
            <h2 className="text-2xl font-extrabold">Plan a CCTV installation</h2>
            <p className="mt-2 max-w-xl text-cream/70">
              Book a free site survey. We'll design a system around your floor plan, budget and
              storage needs.
            </p>
          </div>
          <a
            href={wa}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-whatsapp px-5 py-3 font-semibold text-white"
          >
            Request site survey
          </a>
        </div>
      </section>
    </SiteLayout>
  );
}
