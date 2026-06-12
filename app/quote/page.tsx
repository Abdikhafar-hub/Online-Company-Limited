import type { Metadata } from "next";
import { QuotePageClient } from "@/components/pages/quote-page-client";

export const metadata: Metadata = {
  title: "Request a Quote",
  description: "Get a tailored quote for products, services and bulk supply.",
};

export default function QuotePage() {
  return <QuotePageClient />;
}
