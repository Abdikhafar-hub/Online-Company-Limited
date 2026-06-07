import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle, CheckCircle2 } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/site-layout";
import { SITE, BRANCHES, buildWhatsAppLink } from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [{ title: "Contact — Online Company Limited" }, { name: "description", content: "Get in touch by phone, email, WhatsApp or visit a branch." }] }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  const wa = buildWhatsAppLink("Hello Online Company Limited, I'd like to get in touch.");
  return (
    <SiteLayout>
      <PageHero kicker="Talk to us" title="Contact Online Company Limited" breadcrumb="Home / Contact">
        Reach us by phone, email or WhatsApp. We respond fast during business hours.
      </PageHero>
      <section className="container-page mt-8 grid lg:grid-cols-[1fr_1.2fr] gap-6">
        <div className="bg-white border border-beige-border rounded-3xl p-7 space-y-5">
          <Info icon={Phone} label="Phone" value={SITE.phone} />
          <Info icon={MessageCircle} label="WhatsApp" value={SITE.phone} href={wa} />
          <Info icon={Mail} label="Email" value={SITE.email} href={`mailto:${SITE.email}`} />
          <Info icon={MapPin} label="Head Office" value={SITE.address} />
          <div>
            <p className="kicker">Branches</p>
            <ul className="mt-2 space-y-1.5 text-sm text-navy">
              {BRANCHES.map(b => <li key={b.slug}>· {b.name} — {b.address}</li>)}
            </ul>
          </div>
          <div className="aspect-[16/9] rounded-2xl bg-cream-deep grid place-items-center text-muted-foreground text-sm border border-beige-border">Map placeholder</div>
        </div>

        <form onSubmit={e => { e.preventDefault(); setSent(true); }} className="bg-white border border-beige-border rounded-3xl p-7">
          {sent ? (
            <div className="text-center py-10">
              <CheckCircle2 className="h-12 w-12 text-whatsapp-dark mx-auto" />
              <h2 className="text-xl font-extrabold text-navy mt-3">Message sent</h2>
              <p className="text-sm text-muted-foreground mt-1">We will get back to you shortly.</p>
            </div>
          ) : (
            <div className="grid gap-3">
              <h2 className="text-xl font-extrabold text-navy">Send us a message</h2>
              <input required placeholder="Full name" className="bg-cream border border-beige-border rounded-full px-4 py-2.5 text-sm outline-none" />
              <input required placeholder="Phone or email" className="bg-cream border border-beige-border rounded-full px-4 py-2.5 text-sm outline-none" />
              <input placeholder="Subject" className="bg-cream border border-beige-border rounded-full px-4 py-2.5 text-sm outline-none" />
              <textarea required rows={6} placeholder="How can we help?" className="bg-cream border border-beige-border rounded-2xl px-4 py-3 text-sm outline-none" />
              <button className="bg-brand-red text-white px-5 py-3 rounded-full font-semibold w-fit">Send message</button>
            </div>
          )}
        </form>
      </section>
    </SiteLayout>
  );
}

function Info({ icon: Icon, label, value, href }: { icon: any; label: string; value: string; href?: string }) {
  const content = (
    <div className="flex items-start gap-3">
      <div className="h-10 w-10 rounded-xl bg-cream-deep text-navy grid place-items-center"><Icon className="h-5 w-5" /></div>
      <div>
        <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">{label}</div>
        <div className="text-navy font-semibold">{value}</div>
      </div>
    </div>
  );
  return href ? <a href={href} target="_blank" rel="noreferrer">{content}</a> : content;
}