"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { PageHero, SiteLayout } from "@/components/site-layout";
import { CATEGORIES } from "@/lib/site-data";

export function QuotePageClient() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <SiteLayout>
        <section className="container-page py-20">
          <div className="mx-auto max-w-xl rounded-3xl border border-beige-border bg-white p-10 text-center">
            <CheckCircle2 className="mx-auto h-14 w-14 text-whatsapp-dark" />
            <h1 className="mt-4 text-2xl font-extrabold text-navy">Quote request received</h1>
            <p className="mt-2 text-muted-foreground">
              Thank you. Our team will be in touch within one working day with availability and
              quote details.
            </p>
          </div>
        </section>
      </SiteLayout>
    );
  }

  return (
    <SiteLayout>
      <PageHero kicker="Get a quote" title="Tell us what you need" breadcrumb="Home / Quote">
        Share your requirement and budget. We'll respond with quote options, availability and
        delivery details.
      </PageHero>
      <section className="container-page mt-8">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
          className="mx-auto grid max-w-4xl gap-4 rounded-3xl border border-beige-border bg-white p-6 md:grid-cols-2 md:p-10"
        >
          <Field label="Full name" name="name" required />
          <Field label="Phone number" name="phone" required />
          <Field label="Email" name="email" type="email" />
          <Field label="Location" name="location" />
          <SelectField
            label="Customer type"
            name="type"
            options={["Individual", "Business", "Reseller", "Institution"]}
          />
          <SelectField label="Category" name="category" options={CATEGORIES.map((c) => c.name)} />
          <Field label="Product or service needed" name="product" required />
          <Field label="Quantity" name="quantity" type="number" />
          <Field label="Budget range" name="budget" />
          <SelectField
            label="Urgency"
            name="urgency"
            options={["Immediate", "Within 1 week", "Within 1 month", "Planning"]}
          />
          <div className="md:col-span-2">
            <label className="mb-1.5 block text-sm font-semibold text-navy">Message</label>
            <textarea
              name="message"
              rows={5}
              className="w-full rounded-2xl border border-beige-border bg-cream px-4 py-3 text-sm outline-none"
              placeholder="Share specifications, delivery details and any other notes"
            />
          </div>
          <div className="flex justify-end md:col-span-2">
            <button
              type="submit"
              className="rounded-full bg-brand-red px-6 py-3 font-semibold text-white hover:opacity-90"
            >
              Submit Quote Request
            </button>
          </div>
        </form>
      </section>
    </SiteLayout>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-semibold text-navy">
        {label}
        {required && <span className="text-brand-red"> *</span>}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full rounded-full border border-beige-border bg-cream px-4 py-2.5 text-sm outline-none focus:border-brand-red"
      />
    </div>
  );
}

function SelectField({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-semibold text-navy">{label}</label>
      <select
        name={name}
        className="w-full rounded-full border border-beige-border bg-cream px-4 py-2.5 text-sm outline-none focus:border-brand-red"
      >
        <option value="">Select...</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
