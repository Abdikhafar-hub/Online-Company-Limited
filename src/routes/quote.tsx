import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/site-layout";
import { CATEGORIES } from "@/lib/site-data";

export const Route = createFileRoute("/quote")({
  head: () => ({ meta: [{ title: "Request a Quote — Online Company Limited" }, { name: "description", content: "Get a tailored quote for products, services and bulk supply." }] }),
  component: QuotePage,
});

function QuotePage() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <SiteLayout>
        <section className="container-page py-20">
          <div className="max-w-xl mx-auto bg-white border border-beige-border rounded-3xl p-10 text-center">
            <CheckCircle2 className="h-14 w-14 text-whatsapp-dark mx-auto" />
            <h1 className="text-2xl font-extrabold text-navy mt-4">Quote request received</h1>
            <p className="text-muted-foreground mt-2">Thank you. Our team will be in touch within one working day with availability and pricing.</p>
          </div>
        </section>
      </SiteLayout>
    );
  }

  return (
    <SiteLayout>
      <PageHero kicker="Get a quote" title="Tell us what you need" breadcrumb="Home / Quote">
        Share your requirement and budget. We'll respond with competitive pricing, availability and delivery options.
      </PageHero>
      <section className="container-page mt-8">
        <form
          onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
          className="bg-white border border-beige-border rounded-3xl p-6 md:p-10 grid md:grid-cols-2 gap-4 max-w-4xl mx-auto"
        >
          <Field label="Full name" name="name" required />
          <Field label="Phone number" name="phone" required />
          <Field label="Email" name="email" type="email" />
          <Field label="Location" name="location" />
          <SelectField label="Customer type" name="type" options={["Individual", "Business", "Reseller", "Institution"]} />
          <SelectField label="Category" name="category" options={CATEGORIES.map(c => c.name)} />
          <Field label="Product or service needed" name="product" required />
          <Field label="Quantity" name="quantity" type="number" />
          <Field label="Budget range (KSh)" name="budget" />
          <SelectField label="Urgency" name="urgency" options={["Immediate", "Within 1 week", "Within 1 month", "Planning"]} />
          <div className="md:col-span-2">
            <label className="block text-sm font-semibold text-navy mb-1.5">Message</label>
            <textarea name="message" rows={5} className="w-full bg-cream border border-beige-border rounded-2xl px-4 py-3 text-sm outline-none" placeholder="Share specifications, delivery details and any other notes" />
          </div>
          <div className="md:col-span-2 flex justify-end">
            <button type="submit" className="bg-brand-red hover:opacity-90 text-white px-6 py-3 rounded-full font-semibold">Submit Quote Request</button>
          </div>
        </form>
      </section>
    </SiteLayout>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="block text-sm font-semibold text-navy mb-1.5">{label}{required && <span className="text-brand-red"> *</span>}</label>
      <input name={name} type={type} required={required} className="w-full bg-cream border border-beige-border rounded-full px-4 py-2.5 text-sm outline-none focus:border-brand-red" />
    </div>
  );
}

function SelectField({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <div>
      <label className="block text-sm font-semibold text-navy mb-1.5">{label}</label>
      <select name={name} className="w-full bg-cream border border-beige-border rounded-full px-4 py-2.5 text-sm outline-none focus:border-brand-red">
        <option value="">Select...</option>
        {options.map(o => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  );
}