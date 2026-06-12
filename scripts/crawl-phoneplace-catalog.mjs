import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const BASE_URL = "https://www.phoneplacekenya.com";
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const OUTPUT_FILE = path.join(ROOT, "src/data/products.ts");
const RAW_OUTPUT_FILE = path.join(ROOT, "data/phoneplace-products.raw.json");

const MAX_PAGES = Number(process.env.PHONEPLACE_MAX_PAGES ?? 140);
const MAX_PRODUCTS = Number(process.env.PHONEPLACE_MAX_PRODUCTS ?? 1200);
const MIN_PRODUCTS = Number(process.env.PHONEPLACE_MIN_PRODUCTS ?? 500);
const ENRICH_LIMIT = Number(process.env.PHONEPLACE_ENRICH_LIMIT ?? 0);
const DELAY_MS = Number(process.env.PHONEPLACE_DELAY_MS ?? 250);
const COOKIE = process.env.PHONEPLACE_COOKIE ?? "";

const START_PATHS = [
  "/product_cat-sitemap.xml",
  "/product-category/smartphones/iphone/",
  "/product-category/smartphones/samsung/",
  "/product-category/smartphones/infinix-phones/",
  "/product-category/smartphones/tecno-phones/",
  "/product-category/smartphones/xiaomi-phones/",
  "/product-category/smartphones/oppo-phones/",
  "/product-category/smartphones/google-pixel-phones/",
  "/product-category/smartphones/oneplus-phones/",
  "/product-category/smartphones/nothing-phones/",
  "/product-category/tablets/galaxy-tablet/",
  "/product-category/tablets/apple-ipad/",
  "/product-category/audio/",
  "/product-category/audio/speakers/",
  "/product-category/audio/buds/",
  "/product-category/mobile-phone-accessories/smartwatches/",
  "/product-category/mobile-phone-accessories/chargers/",
  "/product-category/mobile-phone-accessories/powerbank/",
  "/product-category/storage-devices/",
  "/product-category/laptops/macbooks/",
];

const brandHints = [
  "Apple",
  "Samsung",
  "Tecno",
  "Infinix",
  "Xiaomi",
  "Redmi",
  "Poco",
  "Oppo",
  "Google",
  "OnePlus",
  "Nothing",
  "Huawei",
  "Honor",
  "Nokia",
  "Motorola",
  "Lenovo",
  "HP",
  "Dell",
  "Asus",
  "Acer",
  "MSI",
  "JBL",
  "Anker",
  "Oraimo",
  "Sony",
  "Epson",
  "Canon",
  "Brother",
  "TP-Link",
  "MikroTik",
  "Ubiquiti",
  "Hikvision",
  "Dahua",
  "Imou",
  "reMarkable",
  "Realme",
  "Vivo",
  "Itel",
  "HMD",
  "Green Lion",
  "JBQ",
];

const iconByCategory = {
  "cctv-security": "cctv",
  "computer-accessories": "keyboard",
  "computers-laptops": "laptop",
  "mobile-accessories": "headphones",
  networking: "router",
  "phones-tablets": "phone",
  "printers-office": "printer",
  "storage-components": "ssd",
};

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function absoluteUrl(value) {
  return new URL(value, BASE_URL).toString();
}

function cleanPhoneplaceUrl(value) {
  return value
    .split("](")[0]
    .split("#")[0]
    .replace(/[)\]]+$/g, "");
}

function readerUrl(url) {
  return `https://r.jina.ai/http://r.jina.ai/http://${url}`;
}

function decodeEntities(value = "") {
  return value
    .replace(/&#8211;/g, "-")
    .replace(/&#8217;/g, "'")
    .replace(/&#038;/g, "&")
    .replace(/&amp;/g, "&")
    .replace(/&nbsp;/g, " ")
    .replace(/&quot;/g, '"')
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)))
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function isChallenge(text) {
  return (
    text.includes("Title: Just a moment") ||
    text.includes("Performing security verification") ||
    text.includes("Checking your browser") ||
    text.includes("challenges.cloudflare.com") ||
    text.includes("cf-chl")
  );
}

function parsePrice(value = "") {
  const prices = Array.from(value.matchAll(/KSh\s*([\d,]+)/gi))
    .map((match) => Number(match[1].replace(/,/g, "")))
    .filter((price) => Number.isFinite(price) && price > 0);

  if (prices.length === 0) return {};

  return {
    oldPrice: prices.length > 1 ? prices[0] : undefined,
    price: prices.at(-1),
  };
}

function inferBrand(name, context = "") {
  const brandFromPath = context.match(/product-brand\/([^/"')\s]+)/i)?.[1];

  if (brandFromPath) {
    return brandFromPath
      .split("-")
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join(" ");
  }

  const haystack = `${name} ${context}`.toLowerCase();
  return brandHints.find((brand) => haystack.includes(brand.toLowerCase())) ?? "Generic";
}

function categoryLabelFromUrl(url) {
  const parts = new URL(url).pathname.split("/").filter(Boolean);
  const slug = parts.at(-1) ?? "";
  return decodeEntities(
    slug
      .replace(/-/g, " ")
      .replace(/\b\w/g, (letter) => letter.toUpperCase())
      .replace(/\bIphone\b/g, "iPhone")
      .replace(/\bIpad\b/g, "iPad"),
  );
}

function mapCategory(url, name) {
  const haystack = `${url} ${name}`.toLowerCase();

  if (/laptop|macbook|imac|surface|desktop|computer/.test(haystack)) {
    return "computers-laptops";
  }
  if (/keyboard|mouse|webcam|laptop-bag|dock|cooling/.test(haystack)) {
    return "computer-accessories";
  }
  if (
    /accessor|charger|powerbank|buds|airpods|speaker|headphone|watch|pencil|cover|protector|audio/.test(
      haystack,
    )
  ) {
    return "mobile-accessories";
  }
  if (/tablet|ipad/.test(haystack)) {
    return "phones-tablets";
  }
  if (
    /smartphone|phone|iphone|samsung|tecno|infinix|oppo|xiaomi|pixel|oneplus|nothing/.test(haystack)
  ) {
    return "phones-tablets";
  }
  if (/storage|ssd|hard-drive|memory-card|flash-drive|usb/.test(haystack)) {
    return "storage-components";
  }
  if (/printer|scanner|receipt|barcode/.test(haystack)) {
    return "printers-office";
  }
  if (/router|switch|access-point|modem|network/.test(haystack)) {
    return "networking";
  }
  if (/cctv|camera|dvr|nvr|surveillance/.test(haystack)) {
    return "cctv-security";
  }

  return "phones-tablets";
}

async function fetchText(url) {
  const attempts = [readerUrl(url), url];
  let lastError = "";

  for (const target of attempts) {
    try {
      const response = await fetch(target, {
        headers: {
          accept: "text/markdown,text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
          "accept-language": "en-US,en;q=0.9",
          cookie: COOKIE,
          "user-agent":
            "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0 Safari/537.36",
        },
        redirect: "follow",
      });
      const text = await response.text();

      if (response.ok && !isChallenge(text)) {
        return text;
      }

      lastError = `${response.status} challenged`;
    } catch (error) {
      lastError = error instanceof Error ? error.message : String(error);
    }
  }

  throw new Error(`${lastError || "blocked"} for ${url}`);
}

function extractLinks(text, kind) {
  const escapedKind = kind.replace("/", "\\/");
  const linkRegex = new RegExp(
    `https://www\\.phoneplacekenya\\.com/${escapedKind}/[^)\\s"']+`,
    "gi",
  );

  return Array.from(
    new Set(Array.from(text.matchAll(linkRegex)).map((match) => cleanPhoneplaceUrl(match[0]))),
  );
}

function extractMarkdownListingProducts(text, sourceUrl) {
  const products = [];
  const seen = new Set();
  const imagePattern = String.raw`https:\/\/www\.phoneplacekenya\.com\/wp-content\/uploads\/[^)\s]+?\.(?:jpg|jpeg|png|webp)`;
  const productPattern = String.raw`https:\/\/www\.phoneplacekenya\.com\/product\/[^)\s"]+`;
  const imageCardRegex = new RegExp(
    String.raw`\[!\[Image [^\]]*\]\((${imagePattern})\)(?:!\[Image [^\]]*\]\(${imagePattern}\))*\]\((${productPattern})[^)]*\)([\s\S]*?)(?=\n(?:\*\s+)?\[!\[Image \d+[:\]]|###\s+Country Wide Delivery|######|$)`,
    "gi",
  );

  for (const match of text.matchAll(imageCardRegex)) {
    const [, imageUrl, productUrl, block] = match;
    const headingName = block.match(/###\s+\[([^\]]+)\]\([^)]+\)/i)?.[1] ?? "";
    const productLinks = Array.from(
      block.matchAll(/\[([^\]]+)\]\((https:\/\/www\.phoneplacekenya\.com\/product\/[^)\s"]+)/gi),
    );
    const matchingLink = productLinks.find((link) => cleanPhoneplaceUrl(link[2]) === productUrl);
    const name = decodeEntities(headingName || matchingLink?.[1] || "");
    const priceLine = block
      .split("\n")
      .map((line) => line.trim())
      .find((line) => /KSh/i.test(line));

    if (!seen.has(productUrl) && name && !name.includes("Phone Place")) {
      products.push(
        buildProductFromListing(productUrl, name, imageUrl, priceLine ?? block, sourceUrl),
      );
      seen.add(productUrl);
    }
  }

  return products;
}

function extractDescription(text, name) {
  const content = text.split("Markdown Content:").at(1) ?? text;
  const paragraph = content
    .split("\n")
    .map((line) => line.trim())
    .find(
      (line) =>
        line.length > 80 &&
        !line.startsWith("#") &&
        !line.startsWith("*") &&
        !line.startsWith("[") &&
        !line.includes("We offer Countrywide Delivery"),
    );

  return paragraph ?? `${name} available in Kenya from Phone Place Kenya catalog.`;
}

function extractSpecs(text) {
  const specs = [];

  for (const match of text.matchAll(/^\*\s+([^:\n]{2,40}):\s*(.{2,120})$/gim)) {
    specs.push({
      label: decodeEntities(match[1]),
      value: decodeEntities(match[2]),
    });

    if (specs.length >= 8) break;
  }

  return specs;
}

function buildProductFromListing(productUrl, name, imageUrl, priceText, sourceUrl) {
  const brand = inferBrand(name, priceText);
  const category = mapCategory(sourceUrl, name);
  const categoryLabel = categoryLabelFromUrl(sourceUrl);
  const { oldPrice, price } = parsePrice(priceText);
  const slug = slugify(name);

  return {
    brand,
    category,
    categoryLabel,
    description: `${name} listed on Phone Place Kenya with real product imagery and Kenyan market pricing where available.`,
    featured: false,
    icon: iconByCategory[category] ?? "phone",
    id: `phoneplace-${slug}`,
    imageUrl,
    name,
    oldPrice,
    price,
    productUrl,
    requestPrice: !price,
    shortSpec: `${brand} · ${categoryLabel} · Phone Place Kenya catalog item`,
    slug,
    specs: [
      { label: "Brand", value: brand },
      { label: "Category", value: categoryLabel },
      { label: "Source", value: "Phone Place Kenya" },
    ],
    stockStatus: /sold out|out of stock/i.test(priceText) ? "Limited Stock" : "In Stock",
    subcategory: categoryLabel,
    tags: [brand, categoryLabel, category, name, slug]
      .filter(Boolean)
      .map((tag) => tag.toLowerCase()),
    tone: "navy",
    whatsappInquiryText: `Hello Online Company Limited, I'm interested in ${name}. Please confirm availability, warranty and final price.`,
  };
}

async function enrichProduct(product) {
  const text = await fetchText(product.productUrl);
  const title = decodeEntities(text.match(/^Title:\s*(.+)$/im)?.[1] ?? product.name);
  const specs = extractSpecs(text);
  const { oldPrice, price } = parsePrice(text);

  return {
    ...product,
    brand: inferBrand(title, text),
    description: extractDescription(text, title),
    name: title,
    oldPrice: oldPrice ?? product.oldPrice,
    price: price ?? product.price,
    requestPrice: !(price ?? product.price),
    shortSpec:
      specs.length > 0
        ? specs
            .map((spec) => `${spec.label}: ${spec.value}`)
            .slice(0, 3)
            .join(" · ")
        : product.shortSpec,
    specs: specs.length > 0 ? specs : product.specs,
    whatsappInquiryText: `Hello Online Company Limited, I'm interested in ${title}. Please confirm availability, warranty and final price.`,
  };
}

function serializeProducts(products) {
  const cleaned = products.map(({ productUrl, ...product }) => product);

  return `import type { Product } from "@/lib/catalog-products";

export const PHONEPLACE_PRODUCTS: Product[] = ${JSON.stringify(cleaned, null, 2)};
`;
}

async function crawl() {
  const queue = START_PATHS.map((pathName) => absoluteUrl(pathName));
  const seenPages = new Set();
  const productsByUrl = new Map();
  const blockedPages = [];

  while (queue.length > 0 && seenPages.size < MAX_PAGES && productsByUrl.size < MAX_PRODUCTS) {
    const pageUrl = queue.shift();
    if (!pageUrl || seenPages.has(pageUrl)) continue;

    seenPages.add(pageUrl);
    console.log(`Page ${seenPages.size}: ${pageUrl}`);

    try {
      const text = await fetchText(pageUrl);
      const pageProducts = extractMarkdownListingProducts(text, pageUrl);

      for (const product of pageProducts) {
        if (!productsByUrl.has(product.productUrl)) {
          productsByUrl.set(product.productUrl, product);
        }
      }

      const categoryLinks = extractLinks(text, "product-category");
      const paginationLinks = Array.from(
        new Set(
          (text.match(/https:\/\/www\.phoneplacekenya\.com\/[^)\s"']+\/page\/\d+\//gi) ?? []).map(
            cleanPhoneplaceUrl,
          ),
        ),
      );

      for (const link of [...categoryLinks, ...paginationLinks]) {
        if (!seenPages.has(link) && queue.length + seenPages.size < MAX_PAGES) {
          queue.push(link);
        }
      }
    } catch (error) {
      blockedPages.push({
        pageUrl,
        reason: error instanceof Error ? error.message : String(error),
      });
      console.warn(`  Skipped: ${blockedPages.at(-1)?.reason}`);
    }

    await sleep(DELAY_MS);
  }

  let products = Array.from(productsByUrl.values()).slice(0, MAX_PRODUCTS);

  if (ENRICH_LIMIT > 0) {
    const enriched = [];

    for (const [index, product] of products.entries()) {
      if (index >= ENRICH_LIMIT) {
        enriched.push(product);
        continue;
      }

      try {
        console.log(
          `Enrich ${index + 1}/${Math.min(ENRICH_LIMIT, products.length)}: ${product.name}`,
        );
        enriched.push(await enrichProduct(product));
      } catch {
        enriched.push(product);
      }

      await sleep(DELAY_MS);
    }

    products = enriched;
  }

  await mkdir(path.dirname(RAW_OUTPUT_FILE), { recursive: true });
  await writeFile(
    RAW_OUTPUT_FILE,
    JSON.stringify(
      {
        blockedPages,
        extractedAt: new Date().toISOString(),
        products,
      },
      null,
      2,
    ),
  );

  if (products.length < MIN_PRODUCTS) {
    throw new Error(
      `Extracted ${products.length} real products, below PHONEPLACE_MIN_PRODUCTS=${MIN_PRODUCTS}. ` +
        `Raw partial data was saved to ${RAW_OUTPUT_FILE}; app catalog was not overwritten.`,
    );
  }

  await writeFile(OUTPUT_FILE, serializeProducts(products));
  console.log(`Wrote ${products.length} products to ${OUTPUT_FILE}`);
}

crawl().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});
