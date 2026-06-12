import { GENERATED_PRODUCTS } from "../data/products.generated.ts";

type Product = (typeof GENERATED_PRODUCTS)[number];

const REQUIRED_TOTAL = 500;
const REQUIRED_MAJOR_SUBCATEGORIES = [
  "iPhone",
  "Samsung Phones",
  "Tecno Phones",
  "Infinix Phones",
  "Xiaomi Phones",
  "Oppo Phones",
  "Google Pixel Phones",
  "OnePlus Phones",
  "Vivo Phones",
  "Itel Phones",
  "Realme Phones",
  "Poco Phone",
  "Foldable Phones",
  "Honor Phones",
  "ZTE Phones",
  "Sony Xperia Phones",
  "Powerbank",
  "Chargers",
  "Buds",
  "Speakers",
  "Headphones",
  "Smartwatches",
  "Tablets",
  "Apple iPad",
  "Galaxy Tablet",
  "MacBooks",
];

const placeholderPatterns = [
  /placeholder/i,
  /unsplash\.com/i,
  /images\.pexels\.com/i,
  /apple\.com\/newsroom/i,
  /walmartimages\.com/i,
  /cdn\.panacompu\.com/i,
  /i\.dell\.com/i,
  /store\.lenovo\.com/i,
];

function countBy(products: Product[], key: keyof Product) {
  const counts = new Map<string, number>();

  for (const product of products) {
    const value = String(product[key] ?? "Unknown");
    counts.set(value, (counts.get(value) ?? 0) + 1);
  }

  return Array.from(counts.entries()).sort((a, b) => b[1] - a[1]);
}

function printCounts(label: string, counts: Array<[string, number]>) {
  console.log(`\n${label}`);
  for (const [name, count] of counts) {
    console.log(`- ${name}: ${count}`);
  }
}

const products = GENERATED_PRODUCTS;
const categoryCounts = countBy(products, "category");
const subcategoryCounts = countBy(products, "subcategory");
const brandCounts = countBy(products, "brand");
const imageCounts = countBy(products, "imageUrl");

const missingImages = products.filter((product) => !product.imageUrl);
const nonPhonePlaceImages = products.filter(
  (product) => !product.imageUrl.startsWith("https://www.phoneplacekenya.com/wp-content/uploads/"),
);
const placeholderImages = products.filter((product) =>
  placeholderPatterns.some((pattern) => pattern.test(product.imageUrl)),
);
const duplicateImages = imageCounts.filter(([, count]) => count > 1);
const duplicatePlaceholderImages = duplicateImages.filter(([image]) =>
  placeholderPatterns.some((pattern) => pattern.test(image)),
);
const subcategoryMap = new Map(subcategoryCounts);
const majorSubcategoryFailures = REQUIRED_MAJOR_SUBCATEGORIES.filter(
  (subcategory) => (subcategoryMap.get(subcategory) ?? 0) < 20,
);

console.log(`Total product count: ${products.length}`);
printCounts("Count per category", categoryCounts);
printCounts("Count per subcategory", subcategoryCounts);
printCounts("Count per brand", brandCounts);

console.log(`\nProducts missing images: ${missingImages.length}`);
for (const product of missingImages.slice(0, 20)) {
  console.log(`- ${product.name}`);
}

console.log(`\nProducts using duplicate images: ${duplicateImages.length}`);
for (const [image, count] of duplicateImages.slice(0, 20)) {
  console.log(`- ${count}x ${image}`);
}

console.log(`\nProducts using duplicate placeholder images: ${duplicatePlaceholderImages.length}`);
for (const [image, count] of duplicatePlaceholderImages.slice(0, 20)) {
  console.log(`- ${count}x ${image}`);
}

const failures: string[] = [];

if (products.length < REQUIRED_TOTAL) {
  failures.push(`total products ${products.length} is below ${REQUIRED_TOTAL}`);
}

if (missingImages.length > 0) {
  failures.push(`${missingImages.length} products have no image`);
}

if (nonPhonePlaceImages.length > 0) {
  failures.push(`${nonPhonePlaceImages.length} products do not use Phone Place upload images`);
}

if (placeholderImages.length > 0) {
  failures.push(
    `${placeholderImages.length} products use placeholder/stock/manufacturer fallback images`,
  );
}

if (duplicatePlaceholderImages.length > 0) {
  failures.push(`${duplicatePlaceholderImages.length} duplicate placeholder images found`);
}

if (majorSubcategoryFailures.length > 0) {
  failures.push(
    `major subcategories under 20 products: ${majorSubcategoryFailures
      .map((subcategory) => `${subcategory} (${subcategoryMap.get(subcategory) ?? 0})`)
      .join(", ")}`,
  );
}

if (failures.length > 0) {
  console.error("\nCatalog verification failed:");
  for (const failure of failures) {
    console.error(`- ${failure}`);
  }
  process.exit(1);
}

console.log("\nCatalog verification passed.");
