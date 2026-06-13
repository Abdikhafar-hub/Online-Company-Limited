import type { Product } from "./site-data";

export const PRICE_ON_REQUEST_LABEL = "Price on request";

const PRICE_REFERENCE_PATTERN = /\bprice(?:\s+in\s+kenya)?\b/i;
const CURRENCY_PATTERN = /\b(?:ksh|kes)\.?\s*[\d,]+/i;

const containsPriceReference = (value: string) =>
  PRICE_REFERENCE_PATTERN.test(value) || CURRENCY_PATTERN.test(value);

const normalizeSpacing = (value: string) =>
  value
    .replace(/\s{2,}/g, " ")
    .replace(/\s+([,.;:!?])/g, "$1")
    .trim();

function stripPriceFragments(value: string) {
  return normalizeSpacing(
    value
      .replace(/\bPrice in Kenya\s*:\s*(?:KSh|KES|Ksh\.?)\s*[\d,]+/gi, "")
      .replace(/\bprice in Kenya is\s*(?:KSh|KES|Ksh\.?)\s*[\d,]+\.?/gi, "")
      .replace(/\b(?:KSh|KES|Ksh\.?)\s*[\d,]+/gi, "")
      .replace(/\s*·\s*·\s*/g, " · ")
      .replace(/^·\s*|\s*·$/g, ""),
  );
}

function sanitizeProductCopy(value: string) {
  const bulletSegments = value
    .split("·")
    .map((segment) => segment.trim())
    .filter(Boolean);

  if (bulletSegments.length > 1) {
    const filteredSegments = bulletSegments.filter((segment) => !containsPriceReference(segment));

    if (filteredSegments.length > 0) {
      return stripPriceFragments(filteredSegments.join(" · "));
    }
  }

  const sentences = value
    .split(/(?<=[.!?])\s+/)
    .map((sentence) => sentence.trim())
    .filter(Boolean);

  if (sentences.length > 1) {
    const filteredSentences = sentences.filter((sentence) => !containsPriceReference(sentence));

    if (filteredSentences.length > 0) {
      return stripPriceFragments(filteredSentences.join(" "));
    }
  }

  return stripPriceFragments(value);
}

export function getProductDisplayShortSpec(product: Product) {
  return (
    sanitizeProductCopy(product.shortSpec) ||
    "Contact us for the latest specs and delivery details."
  );
}

export function getProductDisplayDescription(product: Product) {
  return (
    sanitizeProductCopy(product.description) ||
    "Reach out to confirm the latest availability, warranty coverage and delivery options."
  );
}

export function getProductDisplaySpecs(product: Product) {
  return product.specs
    .filter((spec) => !containsPriceReference(spec.label) && !containsPriceReference(spec.value))
    .map((spec) => ({
      ...spec,
      value: sanitizeProductCopy(spec.value),
    }))
    .filter((spec) => spec.value);
}

export function buildPhoneLink(phone: string) {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}
