import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin, MessageCircle, Sparkles } from "lucide-react";
import { ProductCard } from "@/components/product-card";
import { RemoteImage } from "@/components/remote-image";
import { SiteLayout } from "@/components/site-layout";
import { getCategoryImage, getServiceImage, marketingImages } from "@/lib/product-images";
import { BRANCHES, CATEGORIES, PRODUCTS, SERVICES, buildWhatsAppLink } from "@/lib/site-data";

export const metadata: Metadata = {
  title: {
    absolute: "Online Company Limited — Genuine Electronics & ICT Supply in Kenya",
  },
  description:
    "Laptops, phones, CCTV, printers, networking and accessories. Retail, wholesale, repairs and bulk supply across Kenya.",
  openGraph: {
    title: "Online Company Limited — Electronics & ICT Supply",
    description:
      "Genuine imported electronics, repairs and bulk supply for businesses, schools and resellers across Kenya.",
  },
};

export default function HomePage() {
  const laptops = PRODUCTS.filter((p) => p.category === "computers-laptops").slice(0, 4);
  const phones = PRODUCTS.filter((p) => p.category === "phones-tablets").slice(0, 4);
  const accessories = PRODUCTS.filter((p) => p.category === "mobile-accessories").slice(0, 4);
  const gaming = PRODUCTS.filter((p) => p.category === "gaming").slice(0, 4);
  const storage = PRODUCTS.filter((p) => p.category === "storage-components").slice(0, 4);
  const wa = buildWhatsAppLink("Hello Online Company Limited, I'd like to make an inquiry.");

  const benefitCards = [
    {
      kicker: "Trust",
      title: "Genuine Imported Products",
      sub: "Authentic stock with warranty",
      image: marketingImages.genuineProducts,
    },
    {
      kicker: "Logistics",
      title: "Countrywide Delivery",
      sub: "Door to door, every county",
      image: marketingImages.countrywideDelivery,
    },
    {
      kicker: "Scale",
      title: "Wholesale & Retail Supply",
      sub: "From one piece to bulk orders",
      image: marketingImages.wholesaleRetail,
    },
    {
      kicker: "Service",
      title: "Expert Repair Services",
      sub: "Board-level technicians on staff",
      image: marketingImages.expertRepairs,
    },
  ];

  const categoryCards = CATEGORIES.map((category) => ({
    category,
    image: getCategoryImage(category.slug),
  }));

  const serviceCards = SERVICES.slice(0, 6).map((service) => ({
    service,
    image: getServiceImage(service),
  }));

  return (
    <SiteLayout>
      <section className="container-page pt-6">
        <div className="grid gap-5 lg:grid-cols-3">
          <div className="relative flex min-h-[420px] flex-col justify-end overflow-hidden rounded-[28px] bg-gradient-to-br from-[oklch(0.22_0.04_260)] to-[oklch(0.1_0.03_260)] p-8 md:p-12 lg:col-span-2">
            <RemoteImage
              alt={marketingImages.homeHeroSecondary.alt}
              className="absolute inset-0"
              fallbackLabel={marketingImages.homeHeroSecondary.fallbackLabel}
              imageClassName="object-cover object-center"
              priority
              sizes="(min-width: 1024px) 64vw, 100vw"
              src={marketingImages.homeHeroSecondary.src}
            />
            <div className="absolute inset-0 grid-bg opacity-10" />
            <div className="relative max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cream/70">
                Online Company Limited
              </p>
              <h1 className="mt-3 text-4xl font-extrabold leading-tight text-cream md:text-5xl">
                Genuine Electronics, ICT Equipment &amp; Accessories
              </h1>
              <p className="mt-4 max-w-md text-cream/80">
                Supplying laptops, phones, CCTV systems, printers, networking equipment, repair
                services and bulk stock across Kenya.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 rounded-full bg-cream px-5 py-3 font-semibold text-navy transition hover:bg-white"
                >
                  Explore Products <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/quote"
                  className="inline-flex items-center gap-2 rounded-full border border-cream/30 bg-white/10 px-5 py-3 font-semibold text-cream transition hover:bg-white/20"
                >
                  Request Bulk Quote
                </Link>
              </div>
            </div>
          </div>
          <div className="grid gap-5">
            <div className="relative flex min-h-[200px] flex-col justify-end overflow-hidden rounded-[28px] bg-gradient-to-br from-[oklch(0.28_0.04_260)] to-[oklch(0.14_0.03_260)] p-7 text-cream">
              <RemoteImage
                alt={marketingImages.homeBulkCard.alt}
                className="absolute inset-0"
                fallbackLabel={marketingImages.homeBulkCard.fallbackLabel}
                imageClassName="object-cover"
                sizes="(min-width: 1024px) 28vw, 100vw"
                src={marketingImages.homeBulkCard.src}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/70 to-navy/30" />
              <div className="relative z-10">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cream/70">
                  Corporate &amp; Bulk Supply
                </p>
                <p className="mt-1 text-lg font-bold leading-snug">
                  Reliable stock for shops, offices, schools and institutions.
                </p>
              </div>
            </div>
            <div className="relative flex min-h-[200px] flex-col justify-end overflow-hidden rounded-[28px] bg-gradient-to-br from-[oklch(0.55_0.18_30)] to-[oklch(0.32_0.16_30)] p-7 text-cream">
              <RemoteImage
                alt={marketingImages.homeRepairsCard.alt}
                className="absolute inset-0"
                fallbackLabel={marketingImages.homeRepairsCard.fallbackLabel}
                imageClassName="object-cover"
                sizes="(min-width: 1024px) 28vw, 100vw"
                src={marketingImages.homeRepairsCard.src}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-red/90 via-brand-red/65 to-brand-red/20" />
              <div className="relative z-10">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cream/80">
                  Repair &amp; Maintenance
                </p>
                <p className="mt-1 text-lg font-bold leading-snug">
                  Phone, laptop, computer, printer and CCTV support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-page mt-8">
        <div className="overflow-hidden rounded-[26px] border border-beige-border bg-[oklch(0.95_0.03_60)]">
          {benefitCards.map((item) => (
            <div
              key={item.title}
              className="flex items-center gap-3 px-4 py-4 not-last:border-b not-last:border-beige-border sm:px-5 lg:grid lg:grid-cols-[1fr_1fr_1fr_1fr] lg:gap-0 lg:px-0 lg:py-0 lg:not-last:border-b-0 lg:not-last:border-r lg:not-last:border-beige-border"
            >
              <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-xl lg:mx-auto lg:h-12 lg:w-12">
                <RemoteImage
                  alt={item.image.alt}
                  className="h-full w-full"
                  fallbackLabel={item.image.fallbackLabel}
                  imageClassName="object-cover"
                  sizes="48px"
                  src={item.image.src}
                />
              </div>
              <div className="min-w-0 flex-1 lg:col-span-2 lg:px-5 lg:py-5">
                <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-brand-red">
                  {item.kicker}
                </p>
                <h3 className="mt-1 text-sm font-bold leading-tight text-navy lg:text-base">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs text-muted-foreground">{item.sub}</p>
              </div>
              <div className="shrink-0 text-navy/40 lg:pr-5">
                <ArrowRight className="h-4 w-4" />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page mt-14">
        <SectionHeader kicker="Browse the catalog" title="Curated Categories" />
        <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {categoryCards.map(({ category, image }) => (
            <Link
              key={category.slug}
              href={`/category/${category.slug}`}
              className="group flex items-stretch gap-5 rounded-3xl border border-beige-border bg-white p-5 transition-transform hover:-translate-y-0.5"
            >
              <div className="relative w-28 shrink-0 overflow-hidden rounded-2xl bg-beige">
                <RemoteImage
                  alt={image.alt}
                  className="h-full w-full"
                  fallbackLabel={image.fallbackLabel}
                  imageClassName="object-cover"
                  sizes="112px"
                  src={image.src}
                />
              </div>
              <div className="flex-1">
                <p className="kicker">Curated Category</p>
                <h3 className="text-lg font-bold text-navy">{category.name}</h3>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {category.chips.slice(0, 4).map((chip) => (
                    <span
                      key={chip}
                      className="rounded-full bg-cream-deep px-2.5 py-1 text-[11px] font-semibold text-navy-soft"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
                <span className="mt-3 inline-flex text-sm font-semibold text-navy underline-offset-4 group-hover:underline">
                  Shop {category.name.split(" ")[0]} <ArrowRight className="ml-1 h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="container-page mt-16">
        <div className="grid items-center gap-10 rounded-3xl border border-beige-border bg-white p-8 md:p-12 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="kicker">About the company</p>
            <h2 className="mt-2 text-3xl font-extrabold leading-tight text-navy md:text-4xl">
              More Than an Electronics Shop
            </h2>
            <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
              Online Company Limited is a trusted ICT and electronics supply company serving
              individuals, businesses, institutions and resellers across Kenya. We source genuine
              products, import from abroad, supply in bulk, support retail customers, and provide
              professional repair and maintenance services.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-full bg-navy px-5 py-3 font-semibold text-cream"
              >
                Read our story
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-full border border-navy/20 px-5 py-3 font-semibold text-navy"
              >
                See projects
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { n: "1,000+", l: "Products supplied" },
              { n: String(BRANCHES.length), l: "Branches across Kenya" },
              { n: "Retail", l: "& Wholesale ready" },
              { n: "B2B", l: "Corporate supply" },
            ].map((stat) => (
              <div key={stat.l} className="rounded-2xl border border-beige-border bg-cream p-5">
                <div className="text-2xl font-extrabold text-navy">{stat.n}</div>
                <div className="mt-1 text-xs font-medium text-muted-foreground">{stat.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProductSection
        title="Featured Laptops"
        kicker="Hand-picked machines"
        link="/category/computers-laptops"
        items={laptops}
      />
      <ProductSection
        title="Latest Phones"
        kicker="Fresh smartphone arrivals"
        link="/category/phones-tablets"
        items={phones}
      />
      <ProductSection
        title="Mobile Accessories"
        kicker="Mobile accessories"
        link="/products?cat=mobile-accessories"
        items={accessories}
      />
      <ProductSection
        title="Gaming"
        kicker="Consoles, games and gear"
        link="/products?cat=gaming"
        items={gaming}
      />
      <ProductSection
        title="Storage Devices"
        kicker="Drives, cards and hubs"
        link="/products?cat=storage-components"
        items={storage}
      />

      <section className="container-page mt-16">
        <SectionHeader
          kicker="What we do"
          title="Services & Support"
          link={{ href: "/services", label: "All services" }}
        />
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {serviceCards.map(({ service, image }) => (
            <div key={service.slug} className="rounded-2xl border border-beige-border bg-white p-6">
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
              <h3 className="font-bold text-navy">{service.name}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page mt-16">
        <div className="relative overflow-hidden rounded-3xl bg-navy p-8 text-cream md:p-12">
          <Sparkles className="absolute right-6 top-6 h-32 w-32 text-cream/10" />
          <div className="relative grid items-center gap-10 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cream/70">
                Wholesale & Corporate
              </p>
              <h2 className="mt-2 text-3xl font-extrabold md:text-4xl">
                Bulk Supply for Shops, Offices &amp; Institutions
              </h2>
              <p className="mt-4 max-w-xl text-cream/80">
                We supply electronics shops, companies, schools, offices, cyber cafes, NGOs and
                institutions with genuine stock and reliable ICT equipment.
              </p>
              <Link
                href="/quote"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-cream px-5 py-3 font-semibold text-navy"
              >
                Request Bulk Quote <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="relative overflow-hidden rounded-2xl border border-cream/15 bg-cream/10 p-4">
              <RemoteImage
                alt={marketingImages.wholesaleShowcase.alt}
                className="absolute inset-0"
                fallbackLabel={marketingImages.wholesaleShowcase.fallbackLabel}
                imageClassName="object-cover"
                sizes="(min-width: 1024px) 32vw, 100vw"
                src={marketingImages.wholesaleShowcase.src}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/70 to-transparent" />
              <div className="relative grid gap-3 sm:grid-cols-2">
                {[
                  "Wholesale accessories supply",
                  "Corporate laptop supply",
                  "School &amp; office ICT supply",
                  "CCTV &amp; networking projects",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-cream/15 bg-cream/10 p-4 text-sm font-medium"
                    dangerouslySetInnerHTML={{ __html: item }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-page mt-16">
        <SectionHeader
          kicker="Visit us"
          title="Our Branches"
          link={{ href: "/branches", label: "All locations" }}
        />
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {BRANCHES.slice(0, 6).map((branch) => (
            <div key={branch.slug} className="rounded-2xl border border-beige-border bg-white p-6">
              <div className="flex items-start gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-cream-deep text-navy">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-navy">{branch.name}</h3>
                  <p className="mt-0.5 text-sm text-muted-foreground">{branch.address}</p>
                  <p className="mt-2 text-sm font-medium text-navy-soft">{branch.phone}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page mt-16">
        <div className="flex flex-col gap-6 rounded-3xl border border-beige-border bg-[oklch(0.95_0.04_60)] p-8 md:flex-row md:items-center md:justify-between md:p-12">
          <div>
            <p className="kicker">Ready when you are</p>
            <h2 className="mt-2 text-2xl font-extrabold text-navy md:text-3xl">
              Need genuine electronics, repairs or bulk supply?
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/quote" className="rounded-full bg-navy px-5 py-3 font-semibold text-cream">
              Request Quote
            </Link>
            <a
              href={wa}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-5 py-3 font-semibold text-white"
            >
              <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function SectionHeader({
  kicker,
  title,
  link,
}: {
  kicker: string;
  title: string;
  link?: { href: string; label: string };
}) {
  return (
    <div className="flex items-end justify-between gap-4">
      <div>
        <p className="kicker">{kicker}</p>
        <h2 className="mt-1.5 text-2xl font-extrabold tracking-tight text-navy md:text-3xl">
          {title}
        </h2>
      </div>
      {link ? (
        <Link
          href={link.href}
          className="hidden items-center gap-1.5 rounded-full border border-navy/20 px-4 py-2 text-sm font-semibold text-navy hover:bg-navy hover:text-cream sm:inline-flex"
        >
          {link.label} <ArrowRight className="h-4 w-4" />
        </Link>
      ) : null}
    </div>
  );
}

function ProductSection({
  title,
  kicker,
  link,
  items,
}: {
  title: string;
  kicker: string;
  link: string;
  items: typeof PRODUCTS;
}) {
  return (
    <section className="container-page mt-16">
      <SectionHeader kicker={kicker} title={title} link={{ href: link, label: "Open shop" }} />
      <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-4 lg:gap-5">
        {items.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </section>
  );
}
