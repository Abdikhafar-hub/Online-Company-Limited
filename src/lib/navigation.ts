function catalogHref(params: { brand?: string; cat?: string; q?: string; sub?: string }) {
  const searchParams = new URLSearchParams();

  if (params.cat) searchParams.set("cat", params.cat);
  if (params.brand) searchParams.set("brand", params.brand);
  if (params.q) searchParams.set("q", params.q);
  if (params.sub) searchParams.set("sub", params.sub);

  return `/products?${searchParams.toString()}`;
}

export type ShopNavItem = {
  label: string;
  href: string;
  links: Array<{ label: string; href: string }>;
};

export const SHOP_NAV: ShopNavItem[] = [
  {
    label: "Samsung",
    href: catalogHref({ cat: "phones-tablets", brand: "Samsung" }),
    links: [
      {
        label: "All Samsung Phones",
        href: catalogHref({ cat: "phones-tablets", brand: "Samsung", sub: "Samsung Phones" }),
      },
      {
        label: "Galaxy S Series",
        href: catalogHref({ cat: "phones-tablets", brand: "Samsung", q: "Galaxy S" }),
      },
      {
        label: "Galaxy A Series",
        href: catalogHref({ cat: "phones-tablets", brand: "Samsung", q: "Galaxy A" }),
      },
      {
        label: "Galaxy Z Foldables",
        href: catalogHref({ cat: "phones-tablets", brand: "Samsung", q: "Galaxy Z" }),
      },
      {
        label: "Galaxy Tablets",
        href: catalogHref({ cat: "phones-tablets", brand: "Samsung", sub: "Galaxy Tablet" }),
      },
      {
        label: "Galaxy Watch",
        href: catalogHref({
          cat: "mobile-accessories",
          brand: "Samsung",
          sub: "Samsung Galaxy Watch",
        }),
      },
      {
        label: "Samsung Accessories",
        href: catalogHref({
          cat: "mobile-accessories",
          brand: "Samsung",
          sub: "Samsung Accessories",
        }),
      },
    ],
  },
  {
    label: "Apple",
    href: catalogHref({ brand: "Apple" }),
    links: [
      { label: "All Apple Products", href: catalogHref({ brand: "Apple" }) },
      {
        label: "iPhones",
        href: catalogHref({ cat: "phones-tablets", brand: "Apple", sub: "iPhone" }),
      },
      {
        label: "iPads",
        href: catalogHref({ cat: "phones-tablets", brand: "Apple", sub: "Apple iPad" }),
      },
      {
        label: "AirPods",
        href: catalogHref({ cat: "mobile-accessories", brand: "Apple", sub: "AirPods" }),
      },
      {
        label: "Apple Accessories",
        href: catalogHref({ cat: "mobile-accessories", brand: "Apple", sub: "Apple Accessories" }),
      },
      {
        label: "Apple Watch",
        href: catalogHref({ cat: "mobile-accessories", brand: "Apple", sub: "Apple Watch" }),
      },
      {
        label: "MacBooks",
        href: catalogHref({ cat: "computers-laptops", brand: "Apple", sub: "MacBooks" }),
      },
      {
        label: "Apple Pencil",
        href: catalogHref({ cat: "mobile-accessories", brand: "Apple", sub: "Apple Pencil" }),
      },
    ],
  },
  {
    label: "Smartphones",
    href: "/category/phones-tablets",
    links: [
      { label: "All Smartphones", href: "/category/phones-tablets" },
      {
        label: "iPhones",
        href: catalogHref({ cat: "phones-tablets", brand: "Apple", sub: "iPhone" }),
      },
      {
        label: "Samsung Phones",
        href: catalogHref({ cat: "phones-tablets", brand: "Samsung", sub: "Samsung Phones" }),
      },
      {
        label: "Tecno Phones",
        href: catalogHref({ cat: "phones-tablets", brand: "Tecno", sub: "Tecno Phones" }),
      },
      {
        label: "Infinix Phones",
        href: catalogHref({ cat: "phones-tablets", brand: "Infinix", sub: "Infinix Phones" }),
      },
      {
        label: "Xiaomi Phones",
        href: catalogHref({ cat: "phones-tablets", brand: "Xiaomi", sub: "Xiaomi Phones" }),
      },
      {
        label: "Oppo Phones",
        href: catalogHref({ cat: "phones-tablets", brand: "Oppo", sub: "Oppo Phones" }),
      },
      {
        label: "Google Pixel Phones",
        href: catalogHref({ cat: "phones-tablets", brand: "Google", sub: "Google Pixel Phones" }),
      },
      {
        label: "Nothing Phones",
        href: catalogHref({ cat: "phones-tablets", brand: "Nothing", sub: "Nothing Phones" }),
      },
      {
        label: "OnePlus Phones",
        href: catalogHref({ cat: "phones-tablets", brand: "OnePlus", sub: "OnePlus Phones" }),
      },
      {
        label: "Vivo Phones",
        href: catalogHref({ cat: "phones-tablets", brand: "Vivo", sub: "Vivo Phones" }),
      },
      {
        label: "Itel Phones",
        href: catalogHref({ cat: "phones-tablets", brand: "Itel", sub: "Itel Phones" }),
      },
      {
        label: "HMD Phones",
        href: catalogHref({ cat: "phones-tablets", brand: "HMD", sub: "HMD Phones" }),
      },
      {
        label: "Redmi Smartphones",
        href: catalogHref({ cat: "phones-tablets", brand: "Redmi", sub: "Redmi Smartphones" }),
      },
      {
        label: "Realme Phones",
        href: catalogHref({ cat: "phones-tablets", brand: "Realme", sub: "Realme Phones" }),
      },
      {
        label: "Poco Phone",
        href: catalogHref({ cat: "phones-tablets", brand: "Poco", sub: "Poco Phone" }),
      },
      {
        label: "Foldable Phones",
        href: catalogHref({ cat: "phones-tablets", sub: "Foldable Phones" }),
      },
      {
        label: "Honor Phones",
        href: catalogHref({ cat: "phones-tablets", brand: "Honor", sub: "Honor Phones" }),
      },
      {
        label: "Blackview Phones",
        href: catalogHref({ cat: "phones-tablets", brand: "Blackview", sub: "Blackview Phones" }),
      },
      {
        label: "ZTE Phones",
        href: catalogHref({ cat: "phones-tablets", brand: "ZTE", sub: "ZTE Phones" }),
      },
      {
        label: "Sony Xperia Phones",
        href: catalogHref({ cat: "phones-tablets", brand: "Sony", sub: "Sony Xperia Phones" }),
      },
    ],
  },
  {
    label: "Mobile Accessories",
    href: "/category/mobile-accessories",
    links: [
      { label: "All Mobile Accessories", href: "/category/mobile-accessories" },
      { label: "Power Banks", href: catalogHref({ cat: "mobile-accessories", sub: "Powerbank" }) },
      { label: "Chargers", href: catalogHref({ cat: "mobile-accessories", sub: "Chargers" }) },
      {
        label: "Smartwatches",
        href: catalogHref({ cat: "mobile-accessories", sub: "Smartwatches" }),
      },
      {
        label: "Smart Bands",
        href: catalogHref({ cat: "mobile-accessories", sub: "Smart Bands" }),
      },
      {
        label: "Media Streamers",
        href: catalogHref({ cat: "mobile-accessories", sub: "Media Streamers" }),
      },
      {
        label: "Phone Covers",
        href: catalogHref({ cat: "mobile-accessories", sub: "Phone Covers" }),
      },
      { label: "Protectors", href: catalogHref({ cat: "mobile-accessories", sub: "Protectors" }) },
      {
        label: "Smart Glasses",
        href: catalogHref({ cat: "mobile-accessories", sub: "Smart Glasses" }),
      },
    ],
  },
  {
    label: "Audio",
    href: catalogHref({ cat: "mobile-accessories", q: "audio" }),
    links: [
      { label: "All Audio", href: catalogHref({ cat: "mobile-accessories", q: "audio" }) },
      { label: "Buds", href: catalogHref({ cat: "mobile-accessories", sub: "Buds" }) },
      {
        label: "Galaxy Buds",
        href: catalogHref({ cat: "mobile-accessories", sub: "Galaxy Buds" }),
      },
      {
        label: "In-Ear Headphones",
        href: catalogHref({ cat: "mobile-accessories", sub: "In-Ear Headphones" }),
      },
      {
        label: "Open-Ear Earbuds",
        href: catalogHref({ cat: "mobile-accessories", sub: "Open-Ear Earbuds" }),
      },
      { label: "Speakers", href: catalogHref({ cat: "mobile-accessories", sub: "Speakers" }) },
      { label: "Soundbar", href: catalogHref({ cat: "mobile-accessories", sub: "Soundbar" }) },
      { label: "Headphones", href: catalogHref({ cat: "mobile-accessories", sub: "Headphones" }) },
      {
        label: "Microphones",
        href: catalogHref({ cat: "mobile-accessories", sub: "Microphones" }),
      },
    ],
  },
  {
    label: "Gaming",
    href: catalogHref({ cat: "gaming" }),
    links: [
      { label: "All Gaming", href: catalogHref({ cat: "gaming" }) },
      { label: "Gaming Console", href: catalogHref({ cat: "gaming", sub: "Gaming Console" }) },
      { label: "PS5 Games", href: catalogHref({ cat: "gaming", sub: "PS5 Games" }) },
      { label: "PS4", href: catalogHref({ cat: "gaming", sub: "PS4" }) },
      { label: "Nintendo", href: catalogHref({ cat: "gaming", sub: "Nintendo" }) },
      { label: "Nintendo Games", href: catalogHref({ cat: "gaming", sub: "Nintendo Games" }) },
      {
        label: "Gaming Controllers",
        href: catalogHref({ cat: "gaming", sub: "Gaming Controllers" }),
      },
      { label: "Gaming Headsets", href: catalogHref({ cat: "gaming", sub: "Gaming Headsets" }) },
      { label: "VR Headsets", href: catalogHref({ cat: "gaming", sub: "VR Headsets" }) },
    ],
  },
  {
    label: "Computers",
    href: catalogHref({ cat: "computers-laptops" }),
    links: [
      { label: "All Computers & Laptops", href: catalogHref({ cat: "computers-laptops" }) },
      {
        label: "MacBooks",
        href: catalogHref({ cat: "computers-laptops", brand: "Apple", sub: "MacBooks" }),
      },
      {
        label: "iMac",
        href: catalogHref({ cat: "computers-laptops", brand: "Apple", sub: "iMac" }),
      },
      {
        label: "Mac Studio",
        href: catalogHref({ cat: "computers-laptops", brand: "Apple", sub: "Mac Studio" }),
      },
      {
        label: "Microsoft Surface",
        href: catalogHref({
          cat: "computers-laptops",
          brand: "Microsoft",
          sub: "Microsoft Surface",
        }),
      },
      {
        label: "Lenovo",
        href: catalogHref({ cat: "computers-laptops", brand: "Lenovo", sub: "Lenovo" }),
      },
    ],
  },
  {
    label: "Storage Devices",
    href: catalogHref({ cat: "storage-components" }),
    links: [
      { label: "All Storage", href: catalogHref({ cat: "storage-components" }) },
      {
        label: "Flash Drives",
        href: catalogHref({ cat: "storage-components", sub: "Flash Drives" }),
      },
      {
        label: "Hard Drives",
        href: catalogHref({ cat: "storage-components", sub: "Hard Drives" }),
      },
      {
        label: "Memory Cards",
        href: catalogHref({ cat: "storage-components", sub: "Memory Cards" }),
      },
      { label: "USB Hubs", href: catalogHref({ cat: "storage-components", sub: "USB Hubs" }) },
    ],
  },
  {
    label: "Tablets",
    href: catalogHref({ cat: "phones-tablets", sub: "Tablets" }),
    links: [
      { label: "All Tablets", href: catalogHref({ cat: "phones-tablets", sub: "Tablets" }) },
      {
        label: "Apple iPads",
        href: catalogHref({ cat: "phones-tablets", brand: "Apple", sub: "Apple iPad" }),
      },
      {
        label: "Galaxy Tablet",
        href: catalogHref({ cat: "phones-tablets", brand: "Samsung", sub: "Galaxy Tablet" }),
      },
      {
        label: "Xiaomi Tablets",
        href: catalogHref({ cat: "phones-tablets", brand: "Xiaomi", sub: "Xiaomi Tablets" }),
      },
      {
        label: "Amazon Tablets",
        href: catalogHref({ cat: "phones-tablets", brand: "Amazon", sub: "Amazon" }),
      },
      { label: "ElimuTab", href: catalogHref({ cat: "phones-tablets", sub: "ElimuTab" }) },
      {
        label: "Modio Tablets",
        href: catalogHref({ cat: "phones-tablets", brand: "Modio", sub: "Modio Tablets" }),
      },
      {
        label: "reMarkable",
        href: catalogHref({ cat: "phones-tablets", brand: "reMarkable", sub: "reMarkable" }),
      },
    ],
  },
  {
    label: "Creator Kit",
    href: catalogHref({ cat: "content-creator-kit" }),
    links: [
      { label: "All Creator Kit", href: catalogHref({ cat: "content-creator-kit" }) },
      {
        label: "Action Cameras",
        href: catalogHref({ cat: "content-creator-kit", sub: "Action Cameras" }),
      },
      { label: "Cameras", href: catalogHref({ cat: "content-creator-kit", sub: "Cameras" }) },
      { label: "Drone", href: catalogHref({ cat: "content-creator-kit", sub: "Drone" }) },
      { label: "Gimbal", href: catalogHref({ cat: "content-creator-kit", sub: "Gimbal" }) },
      { label: "Ring Light", href: catalogHref({ cat: "content-creator-kit", sub: "Ring Light" }) },
      { label: "Tripod", href: catalogHref({ cat: "content-creator-kit", sub: "Tripod" }) },
    ],
  },
];
