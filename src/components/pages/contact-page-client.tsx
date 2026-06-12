"use client";

import type { ComponentType } from "react";
import { useState } from "react";
import { CheckCircle2, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { PageHero, SiteLayout } from "@/components/site-layout";
import { BRANCHES, SITE, buildWhatsAppLink } from "@/lib/site-data";

export function ContactPageClient() {
  const [sent, setSent] = useState(false);
  const wa = buildWhatsAppLink("Hello Online Company Limited, I'd like to get in touch.");

  return (
    <SiteLayout>
      <PageHero
        kicker="Talk to us"
        title="Contact Online Company Limited"
        breadcrumb="Home / Contact"
      >
        Reach us by phone, email or WhatsApp. We respond fast during business hours.
      </PageHero>
      <section className="container-page mt-8 grid gap-6 lg:grid-cols-[1fr_1.2fr]">
        <div className="space-y-5 rounded-3xl border border-beige-border bg-white p-7">
          <Info icon={Phone} label="Phone" value={SITE.phone} />
          <Info icon={MessageCircle} label="WhatsApp" value={SITE.phone} href={wa} />
          <Info icon={Mail} label="Email" value={SITE.email} href={`mailto:${SITE.email}`} />
          <Info icon={MapPin} label="Head Office" value={SITE.address} />
          <div>
            <p className="kicker">Branches</p>
            <ul className="mt-2 space-y-1.5 text-sm text-navy">
              {BRANCHES.map((b) => (
                <li key={b.slug}>
                  · {b.name} — {b.address}
                </li>
              ))}
            </ul>
          </div>
          <div className="aspect-[16/9] grid place-items-center rounded-2xl border border-beige-border bg-cream-deep text-sm text-muted-foreground">
            Map placeholder
          </div>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="rounded-3xl border border-beige-border bg-white p-7"
        >
          {sent ? (
            <div className="py-10 text-center">
              <CheckCircle2 className="mx-auto h-12 w-12 text-whatsapp-dark" />
              <h2 className="mt-3 text-xl font-extrabold text-navy">Message sent</h2>
              <p className="mt-1 text-sm text-muted-foreground">We will get back to you shortly.</p>
            </div>
          ) : (
            <div className="grid gap-3">
              <h2 className="text-xl font-extrabold text-navy">Send us a message</h2>
              <input
                required
                placeholder="Full name"
                className="rounded-full border border-beige-border bg-cream px-4 py-2.5 text-sm outline-none"
              />
              <input
                required
                placeholder="Phone or email"
                className="rounded-full border border-beige-border bg-cream px-4 py-2.5 text-sm outline-none"
              />
              <input
                placeholder="Subject"
                className="rounded-full border border-beige-border bg-cream px-4 py-2.5 text-sm outline-none"
              />
              <textarea
                required
                rows={6}
                placeholder="How can we help?"
                className="rounded-2xl border border-beige-border bg-cream px-4 py-3 text-sm outline-none"
              />
              <button className="w-fit rounded-full bg-brand-red px-5 py-3 font-semibold text-white">
                Send message
              </button>
            </div>
          )}
        </form>
      </section>
    </SiteLayout>
  );
}

function Info({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-start gap-3">
      <div className="grid h-10 w-10 place-items-center rounded-xl bg-cream-deep text-navy">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          {label}
        </div>
        <div className="font-semibold text-navy">{value}</div>
      </div>
    </div>
  );

  return href ? (
    <a href={href} target="_blank" rel="noreferrer">
      {content}
    </a>
  ) : (
    content
  );
}
