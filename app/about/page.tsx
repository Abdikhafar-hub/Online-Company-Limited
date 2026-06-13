import type { Metadata } from "next";
import { RemoteImage } from "@/components/remote-image";
import { SiteLayout } from "@/components/site-layout";
import { BRANCHES } from "@/lib/site-data";
import { categoryImages, marketingImages } from "@/lib/product-images";

export const metadata: Metadata = {
  title: "About",
  description: "Trusted electronics, ICT supply, repair and bulk distribution across Kenya.",
};

const valuePoints = [
  {
    label: "Our Motto",
    text: "Serve clients with genuine products, honest advice and dependable after-sales support.",
  },
  {
    label: "Our Vision",
    text: "To be Kenya's most trusted electronics, ICT and accessories supply company.",
  },
  {
    label: "Our Mission",
    text: "To provide original devices, responsive service and reliable supply for retail and institutional buyers.",
  },
  {
    label: "Our Goal",
    text: "Sustained growth through trust, customer care and consistent stock availability.",
  },
];

const statItems = [
  { value: "100,000+", label: "Happy Clients" },
  { value: "2,000+", label: "Reviews" },
  { value: `${BRANCHES.length}+`, label: "Locations" },
];

export default function AboutPage() {
  return (
    <SiteLayout>
      <section className="border-y border-beige-border bg-[oklch(0.94_0.008_75)]">
        <div className="container-page flex items-center justify-between gap-4 py-5">
          <h1 className="text-2xl font-extrabold text-black md:text-4xl">About</h1>
          <p className="text-sm text-muted-foreground">Home / About</p>
        </div>
      </section>

      <section className="container-page py-6 md:py-10">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs uppercase tracking-[0.08em] text-black">WHAT WE REALLY DO?</p>
          <h2 className="mt-3 max-w-3xl text-[2.1rem] font-extrabold leading-[0.96] tracking-tight text-black md:text-6xl">
            Online Company Limited is Kenya&apos;s trusted independent electronics and ICT supplier.
          </h2>
          <div className="mt-5 max-w-4xl space-y-5 text-base leading-8 text-[#7a7a7a] md:text-lg md:leading-9">
            <p>
              We are known for supplying genuine smartphones, laptops, accessories, networking gear
              and office devices backed by practical support and reliable delivery.
            </p>
            <p>
              Over the years we have grown into a dependable source for individuals, resellers,
              schools, offices and institutions that want real stock, responsive service and long
              term value.
            </p>
          </div>
        </div>
      </section>

      <section className="container-page pb-6 md:pb-12">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-[8px] bg-white">
          <div className="relative aspect-[4/2.7] min-h-[220px]">
            <RemoteImage
              alt={marketingImages.homeBulkCard.alt}
              className="absolute inset-0"
              fallbackLabel="About Online Company Limited"
              imageClassName="object-cover object-center"
              sizes="(min-width: 1024px) 960px, 100vw"
              src={marketingImages.homeBulkCard.src}
            />
          </div>
        </div>
      </section>

      <section className="container-page pb-8 md:pb-12">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-[10px]">
          <div className="relative min-h-[300px] overflow-hidden rounded-[10px] px-5 py-10 text-white md:px-10 md:py-14">
            <RemoteImage
              alt={categoryImages["phones-tablets"].alt}
              className="absolute inset-0"
              fallbackLabel="Established in 2016"
              imageClassName="object-cover object-center"
              sizes="(min-width: 1024px) 960px, 100vw"
              src={categoryImages["phones-tablets"].src}
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(36,9,6,0.78),rgba(7,11,18,0.82))]" />
            <div className="relative mx-auto max-w-3xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.08em] md:text-sm md:tracking-[0.02em]">
                ESTABLISHED IN 2016
              </p>
              <h2 className="mt-4 text-3xl font-extrabold leading-[1] md:text-6xl">
                We Help Everyone Enjoy Amazing Products
              </h2>
              <div className="mt-8 grid grid-cols-3 gap-4 md:mt-10 md:gap-7">
                {statItems.map((item) => (
                  <div key={item.label}>
                    <div className="text-2xl font-extrabold md:text-5xl">{item.value}</div>
                    <div className="mt-1 text-sm text-white/92 md:text-2xl">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-page pb-12">
        <div className="mx-auto max-w-4xl space-y-10 text-[#7a7a7a]">
          <SectionBlock title="Our Story:">
            The story of Online Company Limited is one of steady growth built on trust, supply
            consistency and customer support. We started with a simple mission: make genuine
            electronics easier to access for buyers who care about quality, warranty and service.
          </SectionBlock>

          <SectionBlock title="Customer focus:">
            We work to understand what each client needs before recommending products. Whether the
            order is for a single phone, a laptop for school, office accessories or a bulk supply
            request, we aim to match the right product to the right use case.
          </SectionBlock>

          <section>
            <h2 className="text-[2.1rem] font-extrabold leading-none text-black md:text-5xl">
              Our Values:
            </h2>
            <ul className="mt-5 list-disc space-y-3 pl-5 text-base leading-8 md:text-lg md:leading-9">
              {valuePoints.map((item) => (
                <li key={item.label}>
                  <span className="font-bold text-[#8a8a8a]">{item.label}:</span> {item.text}
                </li>
              ))}
            </ul>
          </section>

          <SectionBlock title="Excellence:">
            We believe in doing things properly, from stock selection to customer communication.
            That means maintaining quality standards, sourcing credible products and supporting
            clients with practical after-sales help when they need it.
          </SectionBlock>

          <SectionBlock title="Integrity:">
            We value honesty in communication, product representation and service. The trust clients
            place in us is the reason we keep improving our processes, our catalog depth and our
            support experience.
          </SectionBlock>
        </div>
      </section>
    </SiteLayout>
  );
}

function SectionBlock({ title, children }: { title: string; children: string }) {
  return (
    <section>
      <h2 className="text-[2.1rem] font-extrabold leading-none text-black md:text-5xl">{title}</h2>
      <p className="mt-4 text-base leading-8 md:mt-5 md:text-lg md:leading-9">{children}</p>
    </section>
  );
}
