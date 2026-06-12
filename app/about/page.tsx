import type { Metadata } from "next";
import Link from "next/link";
import { Boxes, Building2, ShieldCheck, Truck, Users, Wrench } from "lucide-react";
import { PageHero, SiteLayout } from "@/components/site-layout";
import { BRANCHES } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "About",
  description: "Trusted electronics, ICT supply, repair and bulk distribution across Kenya.",
};

export default function AboutPage() {
  return (
    <SiteLayout>
      <PageHero
        kicker="Who we are"
        title="A trusted ICT & electronics supply company in Kenya"
        breadcrumb="Home / About"
      >
        Online Company Limited serves individuals, businesses, institutions and resellers with
        genuine devices, accessories, repairs and bulk supply.
      </PageHero>

      <section className="container-page mt-10 grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-beige-border bg-white p-8">
          <p className="kicker">Our story</p>
          <h2 className="mt-2 text-2xl font-extrabold text-navy">
            Built around trust, scale and service
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            From a single shop on Luthuli Avenue we have grown into a multi-branch network supplying
            ICT equipment to schools, offices, NGOs and traders across the country. We import
            directly, stock genuine inventory, and stand behind every device we sell.
          </p>
        </div>
        <div className="rounded-3xl border border-beige-border bg-white p-8">
          <p className="kicker">What we supply</p>
          <ul className="mt-3 grid grid-cols-2 gap-2 text-sm text-navy">
            {[
              "Laptops & desktops",
              "Smartphones & tablets",
              "CCTV systems",
              "Printers & copiers",
              "Networking gear",
              "Components",
              "Mobile accessories",
              "Office equipment",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-whatsapp-dark" /> {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container-page mt-10">
        <div className="rounded-3xl border border-beige-border bg-white p-8">
          <p className="kicker">Who we serve</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Users, t: "Individuals & families" },
              { icon: Building2, t: "Corporates & SMEs" },
              { icon: Building2, t: "Schools & institutions" },
              { icon: Boxes, t: "Resellers & shops" },
              { icon: Wrench, t: "Cyber cafes & NGOs" },
              { icon: Truck, t: "Security businesses" },
            ].map((item) => (
              <div
                key={item.t}
                className="flex items-center gap-3 rounded-2xl border border-beige-border p-5"
              >
                <item.icon className="h-5 w-5 text-brand-red" />
                <span className="font-semibold text-navy">{item.t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page mt-10">
        <div className="rounded-3xl bg-navy p-8 text-cream md:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cream/70">
            Branch presence
          </p>
          <h2 className="mt-2 text-2xl font-extrabold md:text-3xl">
            Multiple branches across Kenya
          </h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {BRANCHES.map((branch) => (
              <div key={branch.slug} className="rounded-2xl border border-cream/15 bg-cream/10 p-5">
                <div className="font-semibold">{branch.name}</div>
                <div className="mt-1 text-sm text-cream/70">{branch.address}</div>
              </div>
            ))}
          </div>
          <Link
            href="/branches"
            className="mt-6 inline-flex rounded-full bg-cream px-5 py-3 font-semibold text-navy"
          >
            All locations
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
