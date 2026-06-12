import type { Metadata } from "next";
import { ContactPageClient } from "@/components/pages/contact-page-client";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch by phone, email, WhatsApp or visit a branch.",
};

export default function ContactPage() {
  return <ContactPageClient />;
}
