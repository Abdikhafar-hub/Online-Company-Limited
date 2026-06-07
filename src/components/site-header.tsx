import { Link } from "@tanstack/react-router";
import { Search, MessageCircle, Menu, X, Monitor } from "lucide-react";
import { useState } from "react";
import { SITE, CATEGORIES, buildWhatsAppLink } from "@/lib/site-data";

const NAV = [
  { to: "/category/computers-laptops", label: "Computers & Laptops" },
  { to: "/category/phones-tablets", label: "Phones & Tablets" },
  { to: "/category/computer-accessories", label: "Accessories" },
  { to: "/category/cctv-security", label: "CCTV & Security" },
  { to: "/category/printers-office", label: "Printers" },
  { to: "/category/networking", label: "Networking" },
  { to: "/repairs", label: "Repairs" },
  { to: "/bulk-supply", label: "Bulk Supply" },
  { to: "/branches", label: "Branches" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const wa = buildWhatsAppLink("Hello Online Company Limited, I'd like to place an order.");

  return (
    <header className="sticky top-0 z-50 bg-cream/95 backdrop-blur border-b border-beige-border">
      {/* Top announcement bar */}
      <div className="bg-navy text-cream/90 text-xs">
        <div className="container-page py-2 flex items-center justify-between gap-4">
          <span>We offer countrywide delivery</span>
          <span className="hidden sm:inline">Genuine Imports · Bulk Supply · Repairs</span>
        </div>
      </div>

      {/* Main header */}
      <div className="container-page py-4 flex items-center gap-6">
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <div className="h-11 w-11 rounded-xl bg-navy text-cream grid place-items-center">
            <Monitor className="h-5 w-5" />
          </div>
          <div className="leading-tight">
            <div className="text-[15px] font-extrabold tracking-wide text-navy">ONLINE COMPANY</div>
            <div className="text-[10px] font-semibold tracking-[0.22em] text-muted-foreground">LIMITED · KENYA</div>
          </div>
        </Link>

        {/* Search */}
        <form
          action="/products"
          method="get"
          className="hidden lg:flex flex-1 items-center bg-white border border-beige-border rounded-full pl-2 pr-1.5 py-1.5 shadow-[0_6px_18px_-14px_rgba(11,19,43,0.4)]"
        >
          <select name="cat" className="bg-transparent text-sm font-medium text-navy pl-3 pr-2 py-2 outline-none border-r border-beige-border rounded-l-full">
            <option value="">All Categories</option>
            {CATEGORIES.map((c) => <option key={c.slug} value={c.slug}>{c.name}</option>)}
          </select>
          <Search className="h-4 w-4 text-muted-foreground ml-3" />
          <input
            name="q"
            type="search"
            placeholder="Search laptops, phones, CCTV, printers, accessories..."
            className="flex-1 bg-transparent px-3 py-2 text-sm outline-none placeholder:text-muted-foreground"
          />
          <button type="submit" className="bg-brand-red hover:opacity-90 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-opacity">
            Search
          </button>
        </form>

        <div className="hidden md:flex items-center gap-2 shrink-0">
          <a href={wa} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-whatsapp hover:bg-whatsapp-dark text-white text-sm font-semibold px-4 py-2.5 rounded-full transition-colors">
            <MessageCircle className="h-4 w-4" /> Order on WhatsApp
          </a>
          <Link to="/quote" className="text-sm font-semibold border border-navy/20 text-navy px-4 py-2.5 rounded-full hover:bg-navy hover:text-cream transition-colors">
            Request Quote
          </Link>
        </div>

        <button onClick={() => setOpen(!open)} className="lg:hidden ml-auto p-2 rounded-lg border border-beige-border" aria-label="Menu">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Nav bar */}
      <nav className="hidden lg:block border-t border-beige-border">
        <div className="container-page py-3 flex items-center gap-1 overflow-x-auto">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm font-semibold text-navy px-3.5 py-2 rounded-full hover:bg-cream-deep whitespace-nowrap"
              activeProps={{ className: "text-sm font-semibold text-brand-red px-3.5 py-2 rounded-full bg-cream-deep whitespace-nowrap" }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-beige-border bg-cream">
          <div className="container-page py-3 space-y-2">
            <form action="/products" method="get" className="flex items-center bg-white border border-beige-border rounded-full pl-3 pr-1 py-1">
              <Search className="h-4 w-4 text-muted-foreground" />
              <input name="q" type="search" placeholder="Search products..." className="flex-1 bg-transparent px-3 py-2 text-sm outline-none" />
              <button type="submit" className="bg-brand-red text-white text-sm font-semibold px-4 py-2 rounded-full">Go</button>
            </form>
            <div className="grid grid-cols-2 gap-1">
              {NAV.map((item) => (
                <Link key={item.to} to={item.to} onClick={() => setOpen(false)} className="text-sm font-semibold text-navy py-2 px-3 rounded-lg hover:bg-cream-deep">
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="flex gap-2 pt-2">
              <a href={wa} className="flex-1 text-center bg-whatsapp text-white text-sm font-semibold px-4 py-2.5 rounded-full">WhatsApp</a>
              <Link to="/quote" onClick={() => setOpen(false)} className="flex-1 text-center border border-navy/20 text-navy text-sm font-semibold px-4 py-2.5 rounded-full">Quote</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}