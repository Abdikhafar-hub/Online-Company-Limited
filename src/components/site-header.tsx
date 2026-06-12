"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, MessageCircle, Menu, X, Monitor, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { SHOP_NAV } from "@/lib/navigation";
import { CATEGORIES, buildWhatsAppLink } from "@/lib/site-data";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [desktopOpen, setDesktopOpen] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState<string | null>(null);
  const pathname = usePathname();
  const wa = buildWhatsAppLink("Hello Online Company Limited, I'd like to place an order.");

  const isHrefActive = (href: string) => {
    const [path, query = ""] = href.split("?");

    if (query) return false;
    return path === pathname;
  };

  const isGroupActive = (href: string, links: Array<{ label: string; href: string }>) =>
    isHrefActive(href) || links.some((link) => isHrefActive(link.href));

  return (
    <header className="sticky top-0 z-50 border-b border-beige-border bg-cream/95 backdrop-blur">
      <div className="bg-navy text-xs text-cream/90">
        <div className="container-page flex items-center justify-between gap-4 py-2">
          <span>We offer countrywide delivery</span>
          <span className="hidden sm:inline">Genuine Imports · Bulk Supply · Repairs</span>
        </div>
      </div>

      <div className="container-page flex items-center gap-3 py-3 md:gap-6 md:py-4">
        <Link href="/" className="flex min-w-0 shrink items-center gap-2.5 md:shrink-0 md:gap-3">
          <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-navy text-cream md:h-11 md:w-11">
            <Monitor className="h-4.5 w-4.5 md:h-5 md:w-5" />
          </div>
          <div className="min-w-0 leading-tight">
            <div className="truncate text-[13px] font-extrabold tracking-wide text-navy sm:text-[15px]">
              ONLINE COMPANY
            </div>
            <div className="truncate text-[9px] font-semibold tracking-[0.18em] text-muted-foreground sm:text-[10px] sm:tracking-[0.22em]">
              LIMITED · KENYA
            </div>
          </div>
        </Link>

        <form
          action="/products"
          method="get"
          className="hidden flex-1 items-center rounded-full border border-beige-border bg-white py-1.5 pl-2 pr-1.5 shadow-[0_6px_18px_-14px_rgba(11,19,43,0.4)] lg:flex"
        >
          <select
            name="cat"
            className="rounded-l-full border-r border-beige-border bg-transparent py-2 pl-3 pr-2 text-sm font-medium text-navy outline-none"
          >
            <option value="">All Categories</option>
            {CATEGORIES.map((c) => (
              <option key={c.slug} value={c.slug}>
                {c.name}
              </option>
            ))}
          </select>
          <Search className="ml-3 h-4 w-4 text-muted-foreground" />
          <input
            name="q"
            type="search"
            placeholder="Search laptops, phones, CCTV, printers, accessories..."
            className="flex-1 bg-transparent px-3 py-2 text-sm outline-none placeholder:text-muted-foreground"
          />
          <button
            type="submit"
            className="rounded-full bg-brand-red px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            Search
          </button>
        </form>

        <div className="hidden shrink-0 items-center gap-2 md:flex">
          <a
            href={wa}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-whatsapp-dark"
          >
            <MessageCircle className="h-4 w-4" /> Order on WhatsApp
          </a>
          <Link
            href="/quote"
            className="rounded-full border border-navy/20 px-4 py-2.5 text-sm font-semibold text-navy transition-colors hover:bg-navy hover:text-cream"
          >
            Request Quote
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="ml-auto shrink-0 rounded-lg border border-beige-border p-2 lg:hidden"
          aria-label="Menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <nav className="hidden border-t border-beige-border bg-white lg:block">
        <div className="container-page relative overflow-visible">
          <div className="flex flex-wrap items-center gap-1 overflow-visible py-3">
            {SHOP_NAV.map((item) => {
              const active = isGroupActive(item.href, item.links);
              const openMenu = desktopOpen === item.label;

              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setDesktopOpen(item.label)}
                  onMouseLeave={() =>
                    setDesktopOpen((current) => (current === item.label ? null : current))
                  }
                >
                  <button
                    type="button"
                    onClick={() =>
                      setDesktopOpen((current) => (current === item.label ? null : item.label))
                    }
                    className={`inline-flex items-center gap-1 whitespace-nowrap rounded-full px-3.5 py-2 text-sm font-semibold transition-colors ${
                      active
                        ? "bg-cream-deep text-whatsapp-dark"
                        : "text-navy hover:bg-cream-deep hover:text-whatsapp-dark"
                    }`}
                    aria-expanded={openMenu}
                    aria-haspopup="menu"
                  >
                    {item.label}
                    {item.links.length > 0 ? (
                      <ChevronDown
                        className={`h-3.5 w-3.5 transition-transform ${openMenu ? "rotate-180" : ""}`}
                      />
                    ) : null}
                  </button>

                  {item.links.length > 0 && openMenu ? (
                    <div className="absolute left-0 top-full z-50 pt-3">
                      <div className="max-h-[70vh] min-w-[240px] overflow-y-auto rounded-[22px] border border-beige-border bg-white p-3 shadow-[0_24px_60px_-24px_rgba(11,19,43,0.35)]">
                        {item.links.map((link) => (
                          <Link
                            key={`${item.label}-${link.label}-${link.href}`}
                            href={link.href}
                            className={`block rounded-2xl px-4 py-2.5 text-sm transition-colors ${
                              isHrefActive(link.href)
                                ? "bg-cream text-whatsapp-dark"
                                : "text-navy hover:bg-cream hover:text-whatsapp-dark"
                            }`}
                          >
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
      </nav>

      {open ? (
        <div className="fixed inset-0 z-[60] grid h-[100dvh] grid-rows-[auto_auto_minmax(0,1fr)_auto] overflow-hidden bg-cream lg:hidden">
          <div className="shrink-0 border-b border-beige-border bg-navy text-xs text-cream/90">
            <div className="container-page py-2">We offer countrywide delivery</div>
          </div>

          <div className="shrink-0 border-b border-beige-border bg-cream">
            <div className="container-page flex items-center justify-between gap-3 py-3">
              <Link
                href="/"
                onClick={() => {
                  setOpen(false);
                  setMobileOpen(null);
                }}
                className="flex min-w-0 items-center gap-2.5"
              >
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-navy text-cream">
                  <Monitor className="h-4.5 w-4.5" />
                </div>
                <div className="min-w-0 leading-tight">
                  <div className="truncate text-[13px] font-extrabold tracking-wide text-navy">
                    ONLINE COMPANY
                  </div>
                  <div className="truncate text-[9px] font-semibold tracking-[0.18em] text-muted-foreground">
                    LIMITED · KENYA
                  </div>
                </div>
              </Link>
              <button
                type="button"
                onClick={() => {
                  setOpen(false);
                  setMobileOpen(null);
                }}
                className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-beige-border bg-white text-navy"
                aria-label="Close menu"
              >
                <X className="h-4.5 w-4.5" />
              </button>
            </div>
          </div>

          <div className="min-h-0 overflow-y-auto overscroll-contain">
            <div className="container-page py-4">
              <form
                action="/products"
                method="get"
                className="grid gap-2 rounded-2xl border border-beige-border bg-white p-3"
              >
                <select
                  name="cat"
                  className="h-11 w-full rounded-xl border border-beige-border bg-cream px-3 text-sm font-medium text-navy outline-none"
                >
                  <option value="">All Categories</option>
                  {CATEGORIES.map((c) => (
                    <option key={c.slug} value={c.slug}>
                      {c.name}
                    </option>
                  ))}
                </select>
                <div className="grid grid-cols-[1fr_auto] gap-2">
                  <label className="flex min-w-0 items-center rounded-xl border border-beige-border bg-cream px-3">
                    <Search className="h-4 w-4 text-muted-foreground" />
                    <input
                      name="q"
                      type="search"
                      placeholder="Search products..."
                      className="min-w-0 flex-1 bg-transparent px-2.5 py-2.5 text-sm outline-none"
                    />
                  </label>
                  <button
                    type="submit"
                    className="h-11 rounded-xl bg-brand-red px-4 text-sm font-semibold text-white"
                  >
                    Search
                  </button>
                </div>
              </form>

              <div className="mt-4 overflow-hidden rounded-2xl border border-beige-border bg-white">
                {SHOP_NAV.map((item, index) => {
                  const active = isGroupActive(item.href, item.links);
                  const expanded = mobileOpen === item.label;

                  return (
                    <div key={item.label}>
                      <button
                        type="button"
                        onClick={() => setMobileOpen(expanded ? null : item.label)}
                        className={`flex h-12 w-full items-center justify-between px-4 text-left ${
                          active ? "text-whatsapp-dark" : "text-navy"
                        }`}
                        aria-expanded={expanded}
                        aria-controls={`mobile-menu-${item.label}`}
                      >
                        <span className="truncate pr-3 text-sm font-semibold">{item.label}</span>
                        {expanded ? (
                          <ChevronUp className="h-4 w-4 shrink-0" />
                        ) : (
                          <ChevronDown className="h-4 w-4 shrink-0" />
                        )}
                      </button>

                      {expanded ? (
                        <div
                          id={`mobile-menu-${item.label}`}
                          className="border-t border-beige-border bg-cream/55 px-4 py-2"
                        >
                          <div className="grid">
                            {item.links.map((link) => (
                              <Link
                                key={`${item.label}-${link.label}-${link.href}`}
                                href={link.href}
                                onClick={() => {
                                  setOpen(false);
                                  setMobileOpen(null);
                                }}
                                className={`py-2 pl-3 text-sm ${
                                  isHrefActive(link.href)
                                    ? "font-semibold text-whatsapp-dark"
                                    : "text-navy-soft"
                                }`}
                              >
                                {link.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ) : null}

                      {index < SHOP_NAV.length - 1 ? (
                        <div className="mx-4 h-px bg-beige-border" />
                      ) : null}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="shrink-0 border-t border-beige-border bg-cream">
            <div className="container-page grid grid-cols-2 gap-2 py-3">
              <a
                href={wa}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 items-center justify-center rounded-full bg-whatsapp px-3 text-center text-sm font-semibold text-white"
              >
                WhatsApp
              </a>
              <Link
                href="/quote"
                onClick={() => {
                  setOpen(false);
                  setMobileOpen(null);
                }}
                className="inline-flex h-11 items-center justify-center rounded-full border border-navy/20 px-3 text-center text-sm font-semibold text-navy"
              >
                Request Quote
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
