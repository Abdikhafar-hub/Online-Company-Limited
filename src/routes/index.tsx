import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Truck, ShieldCheck, Boxes, Wrench, MessageCircle, MapPin, Sparkles, Cpu } from "lucide-react";
import { SiteLayout } from "@/components/site-layout";
import { ProductCard } from "@/components/product-card";
import { CATEGORIES, PRODUCTS, BRANCHES, SERVICES, SITE, buildWhatsAppLink } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Online Company Limited — Genuine Electronics & ICT Supply in Kenya" },
      { name: "description", content: "Laptops, phones, CCTV, printers, networking and accessories. Retail, wholesale, repairs and bulk supply across Kenya." },
      { property: "og:title", content: "Online Company Limited — Electronics & ICT Supply" },
      { property: "og:description", content: "Genuine imported electronics, repairs and bulk supply for businesses, schools and resellers across Kenya." },
    ],
  }),
  component: Index,
});

function Index() {
  const featured = PRODUCTS.filter(p => p.featured);
  const laptops = PRODUCTS.filter(p => p.category === "computers-laptops").slice(0, 4);
  const phones = PRODUCTS.filter(p => p.category === "phones-tablets").slice(0, 4);
  const cctv = PRODUCTS.filter(p => p.category === "cctv-security").slice(0, 4);
  const printers = PRODUCTS.filter(p => p.category === "printers-office").slice(0, 4);
  const networking = PRODUCTS.filter(p => p.category === "networking").slice(0, 4);
  const wa = buildWhatsAppLink("Hello Online Company Limited, I'd like to make an inquiry.");

  return (
    <SiteLayout>
      {/* HERO */}
      <section className="container-page pt-6">
        <div className="grid lg:grid-cols-3 gap-5">
          {/* Main hero */}
          <div className="lg:col-span-2 relative rounded-[28px] overflow-hidden bg-gradient-to-br from-[oklch(0.22_0.04_260)] to-[oklch(0.1_0.03_260)] text-cream p-8 md:p-12 min-h-[420px] flex flex-col justify-end">
            <div className="absolute inset-0 grid-bg opacity-15" />
            <div className="absolute right-[-40px] top-1/2 -translate-y-1/2 opacity-90 hidden md:flex gap-4">
              <div className="h-72 w-44 rounded-3xl bg-gradient-to-br from-[oklch(0.45_0.06_50)] to-[oklch(0.25_0.05_40)] rotate-6 shadow-2xl" />
              <div className="h-72 w-44 rounded-3xl bg-gradient-to-br from-[oklch(0.32_0.05_260)] to-[oklch(0.15_0.04_260)] -rotate-3 shadow-2xl" />
            </div>
            <div className="relative max-w-xl">
              <p className="text-xs tracking-[0.22em] uppercase text-cream/70 font-semibold">Online Company Limited</p>
              <h1 className="text-4xl md:text-5xl font-extrabold mt-3 leading-tight">Genuine Electronics, ICT Equipment &amp; Accessories</h1>
              <p className="mt-4 text-cream/80 max-w-md">Supplying laptops, phones, CCTV systems, printers, networking equipment, repair services and bulk stock across Kenya.</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link to="/products" className="inline-flex items-center gap-2 bg-cream text-navy px-5 py-3 rounded-full font-semibold hover:bg-white">Explore Products <ArrowRight className="h-4 w-4" /></Link>
                <Link to="/quote" className="inline-flex items-center gap-2 border border-cream/30 px-5 py-3 rounded-full font-semibold hover:bg-cream/10">Request Bulk Quote</Link>
              </div>
            </div>
          </div>
          {/* Side stack */}
          <div className="grid gap-5">
            <div className="relative rounded-[28px] overflow-hidden bg-gradient-to-br from-[oklch(0.28_0.04_260)] to-[oklch(0.14_0.03_260)] text-cream p-7 min-h-[200px] flex flex-col justify-end">
              <Boxes className="absolute right-4 top-4 h-24 w-24 text-cream/15" />
              <p className="text-[11px] tracking-[0.22em] uppercase text-cream/70 font-semibold">Corporate &amp; Bulk Supply</p>
              <p className="font-bold text-lg leading-snug mt-1">Reliable stock for shops, offices, schools and institutions.</p>
            </div>
            <div className="relative rounded-[28px] overflow-hidden bg-gradient-to-br from-[oklch(0.55_0.18_30)] to-[oklch(0.32_0.16_30)] text-cream p-7 min-h-[200px] flex flex-col justify-end">
              <Wrench className="absolute right-4 top-4 h-24 w-24 text-cream/15" />
              <p className="text-[11px] tracking-[0.22em] uppercase text-cream/80 font-semibold">Repair &amp; Maintenance</p>
              <p className="font-bold text-lg leading-snug mt-1">Phone, laptop, computer, printer and CCTV support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PROMO STRIP */}
      <section className="container-page mt-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { kicker: "Trust", title: "Genuine Imported Products", sub: "Authentic stock with warranty", icon: ShieldCheck },
            { kicker: "Logistics", title: "Countrywide Delivery", sub: "Door to door, every county", icon: Truck },
            { kicker: "Scale", title: "Wholesale & Retail Supply", sub: "From one piece to bulk orders", icon: Boxes },
            { kicker: "Service", title: "Expert Repair Services", sub: "Board-level technicians on staff", icon: Wrench },
          ].map(item => (
            <div key={item.title} className="bg-[oklch(0.95_0.03_60)] border border-beige-border rounded-2xl p-5">
              <div className="flex items-start justify-between">
                <div>
                  <p className="kicker">{item.kicker}</p>
                  <h3 className="font-bold text-navy mt-1 leading-tight">{item.title}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{item.sub}</p>
                </div>
                <item.icon className="h-6 w-6 text-brand-red shrink-0" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CATEGORY GRID */}
      <section className="container-page mt-14">
        <SectionHeader kicker="Browse the catalog" title="Curated Categories" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
          {CATEGORIES.map((c) => (
            <Link key={c.slug} to="/category/$slug" params={{ slug: c.slug }} className="group bg-white border border-beige-border rounded-3xl p-5 flex gap-5 items-stretch hover:-translate-y-0.5 transition-transform">
              <div className="w-28 shrink-0 rounded-2xl bg-beige grid place-items-center">
                <Cpu className="h-10 w-10 text-navy-soft" strokeWidth={1.4} />
              </div>
              <div className="flex-1">
                <p className="kicker">Curated Category</p>
                <h3 className="text-lg font-bold text-navy">{c.name}</h3>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {c.chips.slice(0, 4).map(chip => (
                    <span key={chip} className="text-[11px] font-semibold bg-cream-deep text-navy-soft px-2.5 py-1 rounded-full">{chip}</span>
                  ))}
                </div>
                <span className="inline-flex mt-3 text-sm font-semibold text-navy underline-offset-4 group-hover:underline">Shop {c.name.split(" ")[0]} <ArrowRight className="h-4 w-4 ml-1" /></span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* COMPANY CREDIBILITY */}
      <section className="container-page mt-16">
        <div className="bg-white border border-beige-border rounded-3xl p-8 md:p-12 grid lg:grid-cols-[1.2fr_1fr] gap-10 items-center">
          <div>
            <p className="kicker">About the company</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy mt-2 leading-tight">More Than an Electronics Shop</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed max-w-xl">
              Online Company Limited is a trusted ICT and electronics supply company serving individuals, businesses, institutions and resellers across Kenya. We source genuine products, import from abroad, supply in bulk, support retail customers, and provide professional repair and maintenance services.
            </p>
            <div className="mt-6 flex gap-3 flex-wrap">
              <Link to="/about" className="inline-flex items-center gap-2 bg-navy text-cream px-5 py-3 rounded-full font-semibold">Read our story</Link>
              <Link to="/projects" className="inline-flex items-center gap-2 border border-navy/20 text-navy px-5 py-3 rounded-full font-semibold">See projects</Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { n: "1,000+", l: "Products supplied" },
              { n: BRANCHES.length + "", l: "Branches across Kenya" },
              { n: "Retail", l: "& Wholesale ready" },
              { n: "B2B", l: "Corporate supply" },
            ].map(s => (
              <div key={s.l} className="bg-cream border border-beige-border rounded-2xl p-5">
                <div className="text-2xl font-extrabold text-navy">{s.n}</div>
                <div className="text-xs text-muted-foreground mt-1 font-medium">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED SECTIONS */}
      <ProductSection title="Featured Laptops" kicker="Hand-picked machines" link="/category/computers-laptops" items={laptops} />
      <ProductSection title="Latest Phones" kicker="Fresh smartphone arrivals" link="/category/phones-tablets" items={phones} />
      <ProductSection title="CCTV & Security" kicker="Protect what matters" link="/category/cctv-security" items={cctv} />
      <ProductSection title="Printers & Office Equipment" kicker="Built for the office" link="/category/printers-office" items={printers} />
      <ProductSection title="Networking Equipment" kicker="Connect with confidence" link="/category/networking" items={networking} />

      {/* SERVICES */}
      <section className="container-page mt-16">
        <SectionHeader kicker="What we do" title="Services & Support" link={{ to: "/services", label: "All services" }} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          {SERVICES.slice(0, 6).map(s => (
            <div key={s.slug} className="bg-white border border-beige-border rounded-2xl p-6">
              <div className="h-10 w-10 rounded-xl bg-cream-deep text-brand-red grid place-items-center mb-3"><Wrench className="h-5 w-5" /></div>
              <h3 className="font-bold text-navy">{s.name}</h3>
              <p className="text-sm text-muted-foreground mt-1.5">{s.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BULK SUPPLY */}
      <section className="container-page mt-16">
        <div className="bg-navy text-cream rounded-3xl p-8 md:p-12 relative overflow-hidden">
          <Sparkles className="absolute right-6 top-6 h-32 w-32 text-cream/10" />
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10 items-center relative">
            <div>
              <p className="text-xs tracking-[0.22em] uppercase text-cream/70 font-semibold">Wholesale & Corporate</p>
              <h2 className="text-3xl md:text-4xl font-extrabold mt-2">Bulk Supply for Shops, Offices &amp; Institutions</h2>
              <p className="mt-4 text-cream/80 max-w-xl">We supply electronics shops, companies, schools, offices, cyber cafes, NGOs and institutions with genuine stock and reliable ICT equipment.</p>
              <Link to="/quote" className="inline-flex items-center gap-2 mt-6 bg-cream text-navy px-5 py-3 rounded-full font-semibold">Request Bulk Quote <ArrowRight className="h-4 w-4" /></Link>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                "Wholesale accessories supply",
                "Corporate laptop supply",
                "School &amp; office ICT supply",
                "CCTV &amp; networking projects",
              ].map(t => (
                <div key={t} className="bg-cream/10 border border-cream/15 rounded-xl p-4 text-sm font-medium" dangerouslySetInnerHTML={{ __html: t }} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BRANCHES */}
      <section className="container-page mt-16">
        <SectionHeader kicker="Visit us" title="Our Branches" link={{ to: "/branches", label: "All locations" }} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          {BRANCHES.slice(0, 6).map(b => (
            <div key={b.slug} className="bg-white border border-beige-border rounded-2xl p-6">
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-xl bg-cream-deep text-navy grid place-items-center"><MapPin className="h-5 w-5" /></div>
                <div>
                  <h3 className="font-bold text-navy">{b.name}</h3>
                  <p className="text-sm text-muted-foreground mt-0.5">{b.address}</p>
                  <p className="text-sm text-navy-soft mt-2 font-medium">{b.phone}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="container-page mt-16">
        <div className="bg-[oklch(0.95_0.04_60)] border border-beige-border rounded-3xl p-8 md:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <p className="kicker">Ready when you are</p>
            <h2 className="text-2xl md:text-3xl font-extrabold text-navy mt-2">Need genuine electronics, repairs or bulk supply?</h2>
          </div>
          <div className="flex gap-3 flex-wrap">
            <Link to="/quote" className="bg-navy text-cream px-5 py-3 rounded-full font-semibold">Request Quote</Link>
            <a href={wa} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-whatsapp text-white px-5 py-3 rounded-full font-semibold"><MessageCircle className="h-4 w-4" /> Chat on WhatsApp</a>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function SectionHeader({ kicker, title, link }: { kicker: string; title: string; link?: { to: string; label: string } }) {
  return (
    <div className="flex items-end justify-between gap-4">
      <div>
        <p className="kicker">{kicker}</p>
        <h2 className="text-2xl md:text-3xl font-extrabold text-navy mt-1.5 tracking-tight">{title}</h2>
      </div>
      {link && (
        <Link to={link.to as any} className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-navy border border-navy/20 rounded-full px-4 py-2 hover:bg-navy hover:text-cream">
          {link.label} <ArrowRight className="h-4 w-4" />
        </Link>
      )}
    </div>
  );
}

function ProductSection({ title, kicker, link, items }: { title: string; kicker: string; link: string; items: typeof PRODUCTS }) {
  return (
    <section className="container-page mt-16">
      <div className="bg-white border border-beige-border rounded-3xl p-6 md:p-8">
        <div className="flex items-end justify-between gap-4 mb-6">
          <div>
            <p className="kicker">{kicker}</p>
            <h2 className="text-2xl md:text-3xl font-extrabold text-navy mt-1.5">{title}</h2>
          </div>
          <Link to={link as any} className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold border border-navy/15 rounded-full px-4 py-2">Open shop <ArrowRight className="h-4 w-4" /></Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map(p => <ProductCard key={p.slug} product={p} />)}
        </div>
      </div>
    </section>
  );
}
