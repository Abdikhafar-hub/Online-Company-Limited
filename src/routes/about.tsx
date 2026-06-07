import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck, Truck, Boxes, Users, Building2, Wrench } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/site-layout";
import { BRANCHES } from "@/lib/site-data";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [{ title: "About — Online Company Limited" }, { name: "description", content: "Trusted electronics, ICT supply, repair and bulk distribution across Kenya." }] }),
  component: () => (
    <SiteLayout>
      <PageHero kicker="Who we are" title="A trusted ICT & electronics supply company in Kenya" breadcrumb="Home / About">
        Online Company Limited serves individuals, businesses, institutions and resellers with genuine devices, accessories, repairs and bulk supply.
      </PageHero>

      <section className="container-page mt-10 grid lg:grid-cols-2 gap-6">
        <div className="bg-white border border-beige-border rounded-3xl p-8">
          <p className="kicker">Our story</p>
          <h2 className="text-2xl font-extrabold text-navy mt-2">Built around trust, scale and service</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">From a single shop on Luthuli Avenue we have grown into a multi-branch network supplying ICT equipment to schools, offices, NGOs and traders across the country. We import directly, stock genuine inventory, and stand behind every device we sell.</p>
        </div>
        <div className="bg-white border border-beige-border rounded-3xl p-8">
          <p className="kicker">What we supply</p>
          <ul className="mt-3 grid grid-cols-2 gap-2 text-sm text-navy">
            {["Laptops & desktops","Smartphones & tablets","CCTV systems","Printers & copiers","Networking gear","Components","Mobile accessories","Office equipment"].map(x => <li key={x} className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-whatsapp-dark" /> {x}</li>)}
          </ul>
        </div>
      </section>

      <section className="container-page mt-10">
        <div className="bg-white border border-beige-border rounded-3xl p-8">
          <p className="kicker">Who we serve</p>
          <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              {icon: Users, t:"Individuals & families"},
              {icon: Building2, t:"Corporates & SMEs"},
              {icon: Building2, t:"Schools & institutions"},
              {icon: Boxes, t:"Resellers & shops"},
              {icon: Wrench, t:"Cyber cafes & NGOs"},
              {icon: Truck, t:"Security businesses"},
            ].map(i => (
              <div key={i.t} className="border border-beige-border rounded-2xl p-5 flex items-center gap-3">
                <i.icon className="h-5 w-5 text-brand-red" />
                <span className="font-semibold text-navy">{i.t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page mt-10">
        <div className="bg-navy text-cream rounded-3xl p-8 md:p-12">
          <p className="text-xs tracking-[0.22em] uppercase text-cream/70 font-semibold">Branch presence</p>
          <h2 className="text-2xl md:text-3xl font-extrabold mt-2">Multiple branches across Kenya</h2>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {BRANCHES.map(b => (
              <div key={b.slug} className="bg-cream/10 border border-cream/15 rounded-2xl p-5">
                <div className="font-semibold">{b.name}</div>
                <div className="text-sm text-cream/70 mt-1">{b.address}</div>
              </div>
            ))}
          </div>
          <Link to="/branches" className="inline-flex mt-6 bg-cream text-navy px-5 py-3 rounded-full font-semibold">All locations</Link>
        </div>
      </section>
    </SiteLayout>
  ),
});