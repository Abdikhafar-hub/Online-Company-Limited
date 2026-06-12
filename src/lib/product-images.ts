import type { Category, Product, Service } from "./site-data";

export type RemoteImageAsset = {
  src: string;
  alt: string;
  fallbackLabel: string;
};

const laptopCategoryImage =
  "https://images.unsplash.com/photo-1600194990375-5d1d0b28781c?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000";
const phoneCategoryImage =
  "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c21hcnRwaG9uZXxlbnwwfHwwfHx8MA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000";
const computerAccessoriesImage =
  "https://images.unsplash.com/photo-1743268139156-b9d8c1d4e98e?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000";
const mobileAccessoriesImage =
  "https://images.unsplash.com/photo-1645760399036-42f9bc36c0ca?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000";
const cctvCategoryImage =
  "https://images.unsplash.com/photo-1686678652918-8b235f8b9415?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000";
const printerCategoryImage =
  "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJpbnRlcnxlbnwwfHwwfHx8MA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000";
const networkingCategoryImage =
  "https://images.unsplash.com/photo-1750711158632-5273ec9b9b86?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000";
const storageCategoryImage =
  "https://images.unsplash.com/photo-1721333084639-0f64b0583875?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000";
const warehouseImage =
  "https://images.unsplash.com/photo-1689942010216-dc412bb1e7a9?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHdhcmVob3VzZXxlbnwwfHwwfHx8MA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000";
const repairImage =
  "https://images.unsplash.com/photo-1721333090143-8bfc7007ed97?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000";

type CategorySlug = Category["slug"];
type ProductSlug = Product["slug"];
type ServiceSlug = Service["slug"];

function warehouseImageAsset(fallbackLabel: string): RemoteImageAsset {
  return {
    src: warehouseImage,
    alt: "Warehouse aisles with organized stock on shelving",
    fallbackLabel,
  };
}

export const categoryImages: Record<CategorySlug, RemoteImageAsset> = {
  "computers-laptops": {
    src: laptopCategoryImage,
    alt: "Laptop on a clean desk setup",
    fallbackLabel: "Computers & Laptops",
  },
  "phones-tablets": {
    src: phoneCategoryImage,
    alt: "Modern smartphones displayed for a product shoot",
    fallbackLabel: "Smartphones & Tablets",
  },
  "computer-accessories": {
    src: computerAccessoriesImage,
    alt: "Keyboard and desk accessories laid out together",
    fallbackLabel: "Computer Accessories",
  },
  gaming: {
    src: computerAccessoriesImage,
    alt: "Gaming desk accessories and keyboard setup",
    fallbackLabel: "Gaming",
  },
  "mobile-accessories": {
    src: mobileAccessoriesImage,
    alt: "Mobile accessories including chargers and earbuds",
    fallbackLabel: "Mobile Accessories",
  },
  "cctv-security": {
    src: cctvCategoryImage,
    alt: "Mounted CCTV camera for security monitoring",
    fallbackLabel: "Security & Surveillance",
  },
  "content-creator-kit": {
    src: cctvCategoryImage,
    alt: "Camera and creator gear for content production",
    fallbackLabel: "Content Creator Kit",
  },
  "printers-office": {
    src: printerCategoryImage,
    alt: "Office printer ready for everyday work",
    fallbackLabel: "Printers & Office Equipment",
  },
  networking: {
    src: networkingCategoryImage,
    alt: "Networking hardware in a modern server environment",
    fallbackLabel: "Networking Equipment",
  },
  "storage-components": {
    src: storageCategoryImage,
    alt: "Portable SSD drives on a tabletop",
    fallbackLabel: "Storage & Components",
  },
};

export const productImages: Partial<Record<ProductSlug, RemoteImageAsset>> = {
  "hp-elitebook-840-g8": {
    src: "https://cdn.panacompu.com/cdn-img/pv/hp-elitebook-840-g8-front-view.jpg",
    alt: "HP EliteBook 840 G8 front product photo",
    fallbackLabel: "HP EliteBook 840 G8",
  },
  "dell-latitude-5420": {
    src: "https://i.dell.com/is/image/DellContent//content/dam/ss2/product-images/dell-client-products/notebooks/latitude-notebooks/14-5420/media-gallery/la5420nt_xnb_00055rf110_gy_5000x5000_gettyimages-1254825733.psd?fmt=webp&hei=900&wid=900",
    alt: "Dell Latitude 5420 product photo",
    fallbackLabel: "Dell Latitude 5420",
  },
  "lenovo-thinkpad-t14": {
    src: "https://store.lenovo.com/media/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/2/0/20S0S0AK00-0.webp",
    alt: "Lenovo ThinkPad T14 product photo",
    fallbackLabel: "Lenovo ThinkPad T14",
  },
  "macbook-pro-2020": {
    src: "https://i5.walmartimages.com/seo/New-MacBook-Pro-13-3-Apple-M1-Chip-8-core-CPU-8-core-GPU-Space-Gray_ea8581b6-2f9a-4e4a-b941-92412e4a15a6.fa42d1d4db17bedbcce2c4d2c7ff784d.jpeg?odnBg=FFFFFF&odnHeight=576&odnWidth=576",
    alt: "MacBook Pro 2020 with M1 chip product photo",
    fallbackLabel: "MacBook Pro 2020",
  },
  "iphone-13-pro": {
    src: "https://www.apple.com/newsroom/images/product/iphone/standard/Apple_iPhone-13-Pro_iPhone-13-Pro-Max_09142021_inline.jpg.large.jpg",
    alt: "Apple iPhone 13 Pro product photo",
    fallbackLabel: "iPhone 13 Pro",
  },
  "ipad-9th-gen": {
    src: "https://www.apple.com/newsroom/images/product/ipad/standard/Apple_iPad-10-2-inch_Ninth-Gen_09142021_big.jpg.large.jpg",
    alt: "Apple iPad 9th generation product photo",
    fallbackLabel: "Apple iPad 9th Gen",
  },
  "samsung-ssd-512": {
    src: storageCategoryImage,
    alt: "Samsung portable SSD drives displayed on a table",
    fallbackLabel: "Samsung 980 NVMe SSD",
  },
};

export const serviceImages: Record<ServiceSlug, RemoteImageAsset> = {
  "laptop-repair": {
    src: repairImage,
    alt: "Technician repairing laptop internals",
    fallbackLabel: "Laptop Repair",
  },
  "computer-repair": {
    src: laptopCategoryImage,
    alt: "Desktop and laptop workstation setup",
    fallbackLabel: "Computer Repair",
  },
  "phone-repair": {
    src: phoneCategoryImage,
    alt: "Smartphones ready for repair and setup",
    fallbackLabel: "Phone Repair",
  },
  "tablet-repair": {
    src: "https://www.apple.com/newsroom/images/product/ipad/standard/Apple_iPad-10-2-inch_Ninth-Gen_09142021_big.jpg.large.jpg",
    alt: "Tablet product close-up",
    fallbackLabel: "Tablet Repair",
  },
  "motherboard-repair": {
    src: repairImage,
    alt: "Motherboard repair in progress",
    fallbackLabel: "Motherboard Repair",
  },
  "screen-replacement": {
    src: phoneCategoryImage,
    alt: "Phones with bright screens for replacement service",
    fallbackLabel: "Screen Replacement",
  },
  "keyboard-replacement": {
    src: computerAccessoriesImage,
    alt: "Keyboard and workspace accessories",
    fallbackLabel: "Keyboard Replacement",
  },
  "charging-port-repair": {
    src: mobileAccessoriesImage,
    alt: "Chargers and mobile power accessories",
    fallbackLabel: "Charging Port Repair",
  },
  "water-damage-repair": {
    src: repairImage,
    alt: "Hands working carefully on laptop internals",
    fallbackLabel: "Water Damage Repair",
  },
  "software-troubleshooting": {
    src: storageCategoryImage,
    alt: "Storage devices beside a laptop computer",
    fallbackLabel: "Software Troubleshooting",
  },
  "cctv-installation": {
    src: cctvCategoryImage,
    alt: "Security camera installation visual",
    fallbackLabel: "CCTV Installation",
  },
  "networking-setup": {
    src: networkingCategoryImage,
    alt: "Networking environment with racks and wiring",
    fallbackLabel: "Networking Setup",
  },
  "printer-maintenance": {
    src: printerCategoryImage,
    alt: "Office printer maintenance visual",
    fallbackLabel: "Printer Maintenance",
  },
  "trade-in": {
    src: phoneCategoryImage,
    alt: "Smartphones displayed for exchange or resale",
    fallbackLabel: "Device Trade-In",
  },
  "bulk-corporate-supply": warehouseImageAsset("Bulk Corporate Supply"),
};

export const marketingImages = {
  homeHeroPrimary: productImages["hp-elitebook-840-g8"]!,
  homeHeroSecondary: categoryImages["phones-tablets"],
  genuineProducts: categoryImages["computers-laptops"],
  countrywideDelivery: warehouseImageAsset("Countrywide Delivery"),
  wholesaleRetail: warehouseImageAsset("Wholesale & Retail Supply"),
  expertRepairs: {
    src: repairImage,
    alt: "Repair technician installing a laptop SSD",
    fallbackLabel: "Expert Repair Services",
  },
  homeBulkCard: warehouseImageAsset("Corporate & Bulk Supply"),
  homeRepairsCard: {
    src: repairImage,
    alt: "Repair technician servicing laptop components",
    fallbackLabel: "Repair & Maintenance",
  },
  wholesaleShowcase: warehouseImageAsset("Bulk Supply"),
} as const;

export const pageHeroImages = {
  products: categoryImages["computers-laptops"],
  bulkSupply: warehouseImageAsset("Bulk Supply"),
  cctvSecurity: categoryImages["cctv-security"],
  services: {
    src: repairImage,
    alt: "Professional repair workspace",
    fallbackLabel: "Services",
  },
  repairs: {
    src: repairImage,
    alt: "Electronics repair technician replacing an SSD",
    fallbackLabel: "Repairs",
  },
} as const;

export const bulkSupplyCardImages = {
  resellerSupply: categoryImages["mobile-accessories"],
  corporateLaptopSupply: categoryImages["computers-laptops"],
  schoolInstitutionSupply: categoryImages.networking,
  cctvNetworkingProjects: categoryImages["cctv-security"],
} as const;

export const cctvFeatureImages = {
  cameras: categoryImages["cctv-security"],
  systems: categoryImages["cctv-security"],
  homeSurveillance: categoryImages["cctv-security"],
  businessSurveillance: categoryImages.networking,
} as const;

export function getCategoryImage(category: CategorySlug): RemoteImageAsset {
  return categoryImages[category];
}

export function getProductImage(
  product: Pick<Product, "slug" | "category" | "name" | "imageUrl">,
): RemoteImageAsset {
  const asset = product.imageUrl
    ? {
        src: product.imageUrl,
        alt: `${product.name} product photo`,
        fallbackLabel: product.name,
      }
    : (productImages[product.slug] ?? categoryImages[product.category as CategorySlug]);
  return {
    ...asset,
    fallbackLabel: product.name,
  };
}

export function getServiceImage(service: Pick<Service, "slug" | "name">): RemoteImageAsset {
  const asset = serviceImages[service.slug];
  return {
    ...asset,
    fallbackLabel: service.name,
  };
}
