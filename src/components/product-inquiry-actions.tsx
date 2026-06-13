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
    ? "inline-flex w-full items-center justify-center gap-2 rounded-full px-3 py-2.5 text-xs font-semibold transition-colors sm:text-sm"
    : "inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-colors";

  return (
    <div className={`grid gap-2 sm:grid-cols-2 ${className}`.trim()}>
      <a
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        aria-label={`Inquire via WhatsApp about ${productName}`}
        className={`${buttonClassName} bg-whatsapp text-white hover:bg-whatsapp-dark`}
      >
        <MessageCircle className={compact ? "h-4 w-4" : "h-4 w-4"} />
        <span>Inquire via WhatsApp</span>
      </a>
      <a
        href={callLink}
        aria-label={`Call to inquire about ${productName}`}
        className={`${buttonClassName} border border-navy/15 bg-white text-navy hover:bg-cream`}
      >
        <Phone className={compact ? "h-4 w-4" : "h-4 w-4"} />
        <span>Call to Inquire</span>
      </a>
    </div>
  );
}
