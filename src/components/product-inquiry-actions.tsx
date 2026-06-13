import { MessageCircle, Phone } from "lucide-react";
import { buildWhatsAppLink, SITE } from "@/lib/site-data";
import { buildPhoneLink } from "@/lib/product-display";

export function ProductInquiryActions({
  className = "",
  compact = false,
  productName,
  whatsappMessage,
}: {
  className?: string;
  compact?: boolean;
  productName: string;
  whatsappMessage: string;
}) {
  const whatsappLink = buildWhatsAppLink(whatsappMessage);
  const callLink = buildPhoneLink(SITE.phone);
  const buttonClassName = compact
    ? "inline-flex min-h-8 w-full items-center justify-center gap-1 rounded-full px-2 py-1.5 text-[9px] font-semibold leading-none transition-colors"
    : "inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-colors";

  return (
    <div
      className={`grid gap-1.5 ${compact ? "grid-cols-2" : "sm:grid-cols-2"} ${className}`.trim()}
    >
      <a
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        aria-label={`WhatsApp inquiry about ${productName}`}
        className={`${buttonClassName} bg-whatsapp text-white hover:bg-whatsapp-dark`}
      >
        <MessageCircle className={compact ? "h-3.5 w-3.5 shrink-0" : "h-4 w-4"} />
        <span>{compact ? "WhatsApp" : "WhatsApp Inquiry"}</span>
      </a>
      <a
        href={callLink}
        aria-label={`Call to inquire about ${productName}`}
        className={`${buttonClassName} border border-navy/15 bg-white text-navy hover:bg-cream`}
      >
        <Phone className={compact ? "h-3.5 w-3.5 shrink-0" : "h-4 w-4"} />
        <span>{compact ? "Call" : "Call to Inquire"}</span>
      </a>
    </div>
  );
}
