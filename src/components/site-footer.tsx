import Link from "next/link";
import { MessageCircle, Phone, Mail, MapPin, Monitor } from "lucide-react";
import { SITE, CATEGORIES, BRANCHES, buildWhatsAppLink } from "@/lib/site-data";

export function SiteFooter() {
  const wa = buildWhatsAppLink(
    "Hello Online Company Limited, I'd like to ask about your products.",
  );
  return (
    <footer className="bg-navy text-cream/85 mt-24">
      <div className="container-page py-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-10 w-10 rounded-xl bg-cream text-navy grid place-items-center">
              <Monitor className="h-5 w-5" />
            </div>
            <div className="leading-tight">
              <div className="text-[15px] font-extrabold tracking-wide text-cream">
                ONLINE COMPANY
              </div>
              <div className="text-[10px] font-semibold tracking-[0.22em] text-cream/60">
                LIMITED · KENYA
              </div>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-cream/70">
            {SITE.tagline}. Trusted by individuals, businesses, schools and resellers across Kenya.
          </p>
          <a
            href={wa}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex items-center gap-2 bg-whatsapp hover:bg-whatsapp-dark text-white text-sm font-semibold px-4 py-2.5 rounded-full"
          >
            <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
          </a>
        </div>

        <div>
          <h4 className="text-cream font-bold mb-4 text-sm tracking-wide uppercase">Categories</h4>
          <ul className="space-y-2 text-sm">
            {CATEGORIES.slice(0, 8).map((c) => (
              <li key={c.slug}>
                <Link href={`/category/${c.slug}`} className="hover:text-cream">
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-cream font-bold mb-4 text-sm tracking-wide uppercase">Company</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/about" className="hover:text-cream">
                About
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-cream">
                Services
              </Link>
            </li>
            <li>
              <Link href="/repairs" className="hover:text-cream">
                Repairs
              </Link>
            </li>
            <li>
              <Link href="/bulk-supply" className="hover:text-cream">
                Bulk Supply
              </Link>
            </li>
            <li>
              <Link href="/cctv-security" className="hover:text-cream">
                CCTV & Security
              </Link>
            </li>
            <li>
              <Link href="/projects" className="hover:text-cream">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/quote" className="hover:text-cream">
                Request a Quote
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-cream font-bold mb-4 text-sm tracking-wide uppercase">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-0.5 shrink-0" /> {SITE.address}
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4" /> {SITE.phone}
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4" /> {SITE.email}
            </li>
          </ul>
          <h4 className="text-cream font-bold mb-3 mt-6 text-sm tracking-wide uppercase">
            Branches
          </h4>
          <ul className="space-y-1.5 text-sm text-cream/70">
            {BRANCHES.slice(0, 5).map((b) => (
              <li key={b.slug}>{b.name}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <div className="container-page py-5 flex flex-wrap items-center justify-between gap-3 text-xs text-cream/60">
          <span>
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </span>
          <span>Built for genuine electronics buyers across Kenya.</span>
        </div>
      </div>
    </footer>
  );
}
