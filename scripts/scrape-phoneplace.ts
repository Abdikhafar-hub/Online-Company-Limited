import { existsSync } from "node:fs";
import { mkdir, writeFile } from "node:fs/promises";
import { execFileSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

type StoreImage = {
  src?: string;
  thumbnail?: string;
  alt?: string;
  name?: string;
};

type StoreCategory = {
  id: number;
  name: string;
  slug: string;
  parent?: number;
  count?: number;
  permalink?: string;
};

type StoreProduct = {
  id: number;
  name: string;
  slug: string;
  permalink: string;
  short_description?: string;
  description?: string;
  on_sale?: boolean;
  prices?: {
    price?: string;
    regular_price?: string;
    sale_price?: string;
    price_range?: {
      min_amount?: string;
      max_amount?: string;
    } | null;
  };
  images?: StoreImage[];
  categories?: StoreCategory[];
  brands?: { name: string; slug: string }[];
  tags?: { name: string; slug: string }[];
  attributes?: Array<{ name?: string; terms?: string[] }>;
  is_in_stock?: boolean;
  is_on_backorder?: boolean;
  stock_availability?: { text?: string };
};

type GeneratedProduct = {
  id: string;
  slug: string;
  name: string;
  brand: string;
  category: string;
  subcategory: string;
  categoryLabel: string;
  price?: number;
  oldPrice?: number;
  requestPrice?: boolean;
  shortSpec: string;
  description: string;
  specs: { label: string; value: string }[];
  imageUrl: string;
  galleryImages?: string[];
  productUrl?: string;
  availability?: string;
  sourceCategorySlug?: string;
  stockStatus: "In Stock" | "Limited Stock" | "Pre-Order";
  whatsappInquiryText: string;
  tags: string[];
  featured?: boolean;
  icon:
    | "laptop"
    | "phone"
    | "tablet"
    | "cctv"
    | "printer"
    | "router"
    | "ssd"
    | "headphones"
    | "keyboard"
    | "mouse"
    | "speaker"
    | "battery"
    | "monitor"
    | "watch";
  tone: "navy" | "graphite" | "sand" | "olive" | "rose" | "steel" | "ink";
};

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const DATA_FILE = path.join(ROOT, "data/products.generated.ts");
const RAW_FILE = path.join(ROOT, "data/products.generated.raw.json");
const BASE_URL = "https://www.phoneplacekenya.com";
const API_BASE = `${BASE_URL}/wp-json/wc/store/v1`;
const PAGE_SIZE = 100;
const PYTHON = path.join(ROOT, ".venv-scrape/bin/python");
const PYTHON_HELPER = `
import json
import sys
from curl_cffi import requests

url = sys.argv[1]
response = requests.get(
    url,
    impersonate="chrome124",
    timeout=90,
    headers={
        "accept": "application/json,text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "accept-language": "en-US,en;q=0.9",
    },
)
print(json.dumps({
    "status": response.status_code,
    "url": response.url,
    "headers": dict(response.headers),
    "text": response.text,
}))
`;

const tones: GeneratedProduct["tone"][] = [
  "navy",
  "graphite",
  "sand",
  "olive",
  "rose",
  "steel",
  "ink",
];

const brandHints = [
  "Samsung",
  "Apple",
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
  "Realme",
  "Vivo",
  "Itel",
  "HMD",
  "Blackview",
  "ZTE",
  "Sony",
  "JBL",
  "Oraimo",
  "Anker",
  "Amaya",
  "Baseus",
  "UGREEN",
  "Green Lion",
  "Porodo",
  "Amazfit",
  "Lenovo",
  "HP",
  "Dell",
  "Asus",
  "Acer",
  "MSI",
  "Microsoft",
  "reMarkable",
  "Nintendo",
  "PlayStation",
  "Logitech",
  "SanDisk",
  "Kingston",
  "Seagate",
  "Western Digital",
  "WD",
  "Toshiba",
  "GoPro",
  "DJI",
  "Zhiyun",
  "Jmary",
  "JBQ",
  "CMF",
  "Belkin",
  "Sony Xperia",
];

function run(command: string, args: string[]) {
  execFileSync(command, args, {
    cwd: ROOT,
    stdio: "inherit",
  });
}

function ensurePythonHelper() {
  if (!existsSync(PYTHON)) {
    run("python3", ["-m", "venv", ".venv-scrape"]);
  }

  try {
    execFileSync(PYTHON, ["-c", "import curl_cffi"], { stdio: "pipe" });
  } catch {
    run(PYTHON, ["-m", "pip", "install", "curl_cffi"]);
  }
}

function fetchWithBrowser(url: string) {
  const output = execFileSync(PYTHON, ["-c", PYTHON_HELPER, url], {
    cwd: ROOT,
    encoding: "utf8",
    maxBuffer: 160 * 1024 * 1024,
  });
  const payload = JSON.parse(output) as {
    status: number;
    url: string;
    headers: Record<string, string>;
    text: string;
  };

  if (payload.status < 200 || payload.status >= 300) {
    throw new Error(`Phone Place returned ${payload.status} for ${url}`);
  }

  if (
    payload.text.includes("Performing security verification") ||
    payload.text.includes("Just a moment...")
  ) {
    throw new Error(`Cloudflare verification page returned for ${url}`);
  }

  return payload;
}

function decodeHtml(value = "") {
  return value
    .replace(/&#8211;/g, "-")
    .replace(/&#8212;/g, "-")
    .replace(/&#8217;/g, "'")
    .replace(/&#038;/g, "&")
    .replace(/&amp;/g, "&")
    .replace(/&nbsp;/g, " ")
    .replace(/&quot;/g, '"')
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)))
    .replace(/\s+/g, " ")
    .trim();
}

function stripHtml(value = "") {
  return decodeHtml(
    value
      .replace(/<br\s*\/?>/gi, "\n")
      .replace(/<\/(li|p|tr|div|h2|h3)>/gi, "\n")
      .replace(/<[^>]+>/g, " "),
  );
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function priceNumber(value?: string) {
  const parsed = Number(value ?? "0");
  return Number.isFinite(parsed) && parsed > 0 ? parsed : undefined;
}

function primaryCategory(product: StoreProduct) {
  const categories = product.categories ?? [];

  return (
    categories.find((category) => category.name !== "Uncategorized") ??
    categories[0] ?? {
      id: 0,
      name: "Products",
      slug: "products",
    }
  );
}

function mapCatalogCategory(category: StoreCategory, product: StoreProduct) {
  const haystack = `${category.name} ${category.slug} ${product.name}`.toLowerCase();

  if (/macbook|laptop|imac|surface|mac-studio|lenovo/.test(haystack)) return "computers-laptops";
  if (/flash|hard-drive|memory-card|usb-hub|storage/.test(haystack)) return "storage-components";
  if (/gaming|ps5|ps4|nintendo|console|controller|vr-headset|simulator/.test(haystack)) {
    return "gaming";
  }
  if (/camera|drone|gimbal|ring-light|tripod/.test(haystack)) return "content-creator-kit";
  if (/tablet|ipad|remarkable|elimutab|modio|amazon/.test(haystack)) return "phones-tablets";
  if (
    /phone|iphone|smartphone|pixel|galaxy|tecno|infinix|xiaomi|oppo|oneplus|nothing|vivo|itel|hmd|redmi|realme|poco|foldable|honor|blackview|zte|xperia|nokia|huawei|motorola/.test(
      haystack,
    )
  ) {
    return "phones-tablets";
  }
  if (
    /accessor|powerbank|charger|watch|band|airpods|buds|headphone|speaker|soundbar|microphone|cover|protector|smart-glasses|keyboard|media-streamer/.test(
      haystack,
    )
  ) {
    return "mobile-accessories";
  }

  return "mobile-accessories";
}

function inferBrand(product: StoreProduct, category: StoreCategory) {
  const apiBrand = product.brands?.find((brand) => brand.name)?.name;
  if (apiBrand) return apiBrand;

  const categoryBrand = category.name
    .replace(/\s+(Phones|Phone|Accessories|Tablets|Watch|Watches)$/i, "")
    .trim();

  if (
    /(Apple|Samsung|Tecno|Infinix|Xiaomi|Oppo|OnePlus|Nothing|Vivo|Itel|HMD|Redmi|Realme|Poco|Honor|Blackview|ZTE|Nokia|Huawei|Motorola|Lenovo)$/i.test(
      categoryBrand,
    )
  ) {
    return categoryBrand;
  }

  const name = product.name.toLowerCase();
  if (name.includes("iphone") || name.includes("ipad") || name.includes("macbook")) return "Apple";
  if (name.includes("galaxy")) return "Samsung";
  if (name.includes("pixel")) return "Google";
  if (name.includes("playstation") || name.includes("ps5") || name.includes("ps4")) return "Sony";
  if (name.includes("cmf")) return "Nothing";

  const hint = brandHints.find((brand) => name.includes(brand.toLowerCase()));
  if (hint === "Sony Xperia") return "Sony";
  if (hint) return hint;

  return decodeHtml(product.name).split(/\s+/)[0] ?? "Generic";
}

function iconForProduct(category: string, subcategory: string): GeneratedProduct["icon"] {
  const text = `${category} ${subcategory}`.toLowerCase();

  if (/laptop|macbook|surface/.test(text)) return "laptop";
  if (/tablet|ipad|remarkable/.test(text)) return "tablet";
  if (/watch|band/.test(text)) return "watch";
  if (/powerbank|charger/.test(text)) return "battery";
  if (/speaker|soundbar/.test(text)) return "speaker";
  if (/buds|headphone|airpods/.test(text)) return "headphones";
  if (/storage|flash|hard|memory|usb/.test(text)) return "ssd";
  if (/gaming|console/.test(text)) return "monitor";
  if (/camera|drone|gimbal/.test(text)) return "cctv";
  return "phone";
}

function extractSpecs(product: StoreProduct) {
  const specs: { label: string; value: string }[] = [];
  const html = `${product.short_description ?? ""}\n${product.description ?? ""}`;

  for (const li of html.matchAll(/<li[^>]*>([\s\S]*?)<\/li>/gi)) {
    const text = stripHtml(li[1]);
    const [label, ...rest] = text.split(":");
    const value = rest.join(":").trim();
    if (label && value && label.length <= 48) {
      specs.push({ label: label.replace(/\*+/g, "").trim(), value });
    }
    if (specs.length >= 8) break;
  }

  if (specs.length < 4) {
    for (const row of html.matchAll(
      /<tr[^>]*>\s*<td[^>]*>([\s\S]*?)<\/td>\s*<td[^>]*>([\s\S]*?)<\/td>/gi,
    )) {
      const label = stripHtml(row[1]);
      const value = stripHtml(row[2]);
      if (label && value && label.length <= 48) {
        specs.push({ label, value });
      }
      if (specs.length >= 8) break;
    }
  }

  for (const attribute of product.attributes ?? []) {
    if (attribute.name && attribute.terms?.length && specs.length < 8) {
      specs.push({ label: stripHtml(attribute.name), value: attribute.terms.join(", ") });
    }
  }

  return specs.slice(0, 8);
}

function buildDescription(product: StoreProduct) {
  const shortText = stripHtml(product.short_description ?? "");
  const descriptionText = stripHtml(product.description ?? "");
  const text = shortText || descriptionText || `${product.name} from Phone Place Kenya.`;

  return text.slice(0, 360);
}

function buildShortSpec(specs: { label: string; value: string }[], description: string) {
  if (specs.length > 0) {
    return specs
      .slice(0, 4)
      .map((spec) => `${spec.label}: ${spec.value}`)
      .join(" · ")
      .slice(0, 220);
  }

  return description.slice(0, 180);
}

function normalizeImageUrl(url?: string) {
  if (!url) return "";
  return url.replace(/-\d+x\d+(?=\.(?:jpg|jpeg|png|webp)$)/i, "");
}

function toGeneratedProduct(product: StoreProduct, index: number): GeneratedProduct | null {
  const category = primaryCategory(product);
  const images = (product.images ?? [])
    .map((image) => normalizeImageUrl(image.src || image.thumbnail))
    .filter((image): image is string => Boolean(image));
  const uniqueImages = Array.from(new Set(images));

  if (!uniqueImages[0]) {
    return null;
  }

  const catalogCategory = mapCatalogCategory(category, product);
  const brand = inferBrand(product, category);
  const specs = extractSpecs(product);
  const description = buildDescription(product);
  const price = priceNumber(product.prices?.price_range?.min_amount ?? product.prices?.price);
  const regularPrice = priceNumber(product.prices?.regular_price);
  const oldPrice = regularPrice && price && regularPrice > price ? regularPrice : undefined;
  const availability = stripHtml(product.stock_availability?.text ?? "");
  const stockStatus: GeneratedProduct["stockStatus"] = product.is_on_backorder
    ? "Pre-Order"
    : product.is_in_stock
      ? "In Stock"
      : "Limited Stock";

  return {
    id: `phoneplace-${product.id}`,
    slug: product.slug || slugify(product.name),
    name: decodeHtml(product.name),
    brand,
    category: catalogCategory,
    subcategory: decodeHtml(category.name),
    categoryLabel: decodeHtml(category.name),
    price,
    oldPrice,
    requestPrice: !price,
    shortSpec: buildShortSpec(specs, description),
    description,
    specs:
      specs.length > 0
        ? specs
        : [
            { label: "Brand", value: brand },
            { label: "Category", value: decodeHtml(category.name) },
          ],
    imageUrl: uniqueImages[0],
    galleryImages: uniqueImages,
    productUrl: product.permalink,
    availability,
    sourceCategorySlug: category.slug,
    stockStatus,
    whatsappInquiryText: `Hello Online Company Limited, I'm interested in ${decodeHtml(product.name)} from your catalog. Please confirm availability, warranty and final price.`,
    tags: Array.from(
      new Set(
        [
          brand,
          product.name,
          category.name,
          category.slug,
          catalogCategory,
          ...(product.tags ?? []).map((tag) => tag.name),
        ]
          .filter(Boolean)
          .map((tag) => String(tag).toLowerCase()),
      ),
    ),
    featured: index < 12,
    icon: iconForProduct(catalogCategory, category.name),
    tone: tones[index % tones.length],
  };
}

function serialize(products: GeneratedProduct[], categories: StoreCategory[]) {
  return `import type { Product } from "../src/lib/catalog-products";

export const GENERATED_AT = ${JSON.stringify(new Date().toISOString())};
export const PHONEPLACE_SOURCE = "https://www.phoneplacekenya.com/";
export const PHONEPLACE_CATEGORY_COUNT = ${JSON.stringify(categories.length)};

export const GENERATED_PRODUCTS: Product[] = ${JSON.stringify(products, null, 2)};
`;
}

async function main() {
  ensurePythonHelper();
  await mkdir(path.join(ROOT, "data"), { recursive: true });

  console.log("Crawling Phone Place Kenya homepage...");
  fetchWithBrowser(BASE_URL);

  console.log("Crawling Phone Place Kenya category taxonomy...");
  const categoryResponse = fetchWithBrowser(`${API_BASE}/products/categories?per_page=100&page=1`);
  const categories = JSON.parse(categoryResponse.text) as StoreCategory[];

  console.log(`Found ${categories.length} category/subcategory records.`);
  console.log("Crawling paginated product listing API...");

  const firstUrl = `${API_BASE}/products?per_page=${PAGE_SIZE}&page=1`;
  const firstResponse = fetchWithBrowser(firstUrl);
  const firstPage = JSON.parse(firstResponse.text) as StoreProduct[];
  const totalProducts = Number(firstResponse.headers["x-wp-total"] ?? firstPage.length);
  const totalPages =
    Number(firstResponse.headers["x-wp-totalpages"]) || Math.ceil(totalProducts / PAGE_SIZE);
  const rawProducts = [...firstPage];

  console.log(`Phone Place API reports ${totalProducts} products across ${totalPages} pages.`);

  for (let page = 2; page <= totalPages; page += 1) {
    const url = `${API_BASE}/products?per_page=${PAGE_SIZE}&page=${page}`;
    const response = fetchWithBrowser(url);
    const products = JSON.parse(response.text) as StoreProduct[];
    rawProducts.push(...products);
    console.log(`Fetched page ${page}/${totalPages}: ${rawProducts.length} products`);
  }

  const generated = rawProducts
    .map((product, index) => toGeneratedProduct(product, index))
    .filter((product): product is GeneratedProduct => Boolean(product));

  await writeFile(
    RAW_FILE,
    JSON.stringify(
      {
        categories,
        generatedCount: generated.length,
        rawCount: rawProducts.length,
        scrapedAt: new Date().toISOString(),
        source: BASE_URL,
      },
      null,
      2,
    ),
  );
  await writeFile(DATA_FILE, serialize(generated, categories));

  console.log(`Wrote ${generated.length} generated products to ${DATA_FILE}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
