export const SITE = {
  name: "Online Company Limited",
  tagline: "Genuine Electronics, ICT Equipment, Repairs & Bulk Supply",
  phone: "+254 700 000 000",
  whatsapp: "254700000000",
  email: "sales@onlinecompany.co.ke",
  address: "Luthuli Avenue, Nairobi CBD, Kenya",
};

export type Category = {
  slug: string;
  name: string;
  parent?: string;
  chips: string[];
  description: string;
};

export const CATEGORIES: Category[] = [
  {
    slug: "computers-laptops",
    name: "Computers & Laptops",
    chips: [
      "Business Laptops",
      "Gaming Laptops",
      "Student Laptops",
      "Desktops",
      "All-in-One PCs",
      "Workstations",
      "Refurbished",
      "Custom-Built",
    ],
    description:
      "Business, gaming, student and workstation machines from HP, Dell, Lenovo, Apple and more — brand new, refurbished and custom-built.",
  },
  {
    slug: "phones-tablets",
    name: "Smartphones & Tablets",
    chips: ["Android Phones", "iPhones", "Tablets", "Smart Watches", "Foldables", "Rugged Phones"],
    description:
      "Latest Android and iPhone devices, tablets, smartwatches and foldables — genuine imports with warranty.",
  },
  {
    slug: "gaming",
    name: "Gaming",
    chips: [
      "Gaming Console",
      "PS5 Games",
      "PS4",
      "Nintendo",
      "Gaming Controllers",
      "Gaming Headsets",
      "VR Headsets",
    ],
    description: "Consoles, games, controllers, headsets and gaming accessories.",
  },
  {
    slug: "mobile-accessories",
    name: "Mobile Accessories",
    chips: [
      "Chargers",
      "Power Banks",
      "Earbuds",
      "Speakers",
      "Screen Protectors",
      "Phone Covers",
      "Memory Cards",
    ],
    description:
      "Phone chargers, power banks, audio gear, covers and memory — quality brands for everyday use.",
  },
  {
    slug: "content-creator-kit",
    name: "Content Creator Kit",
    chips: ["Action Cameras", "Drones", "Gimbals", "Ring Lights", "Tripods", "Smart Glasses"],
    description: "Creator gear including cameras, drones, stabilizers, tripods and lighting.",
  },
  {
    slug: "storage-components",
    name: "Storage & Components",
    chips: [
      "SSDs",
      "Hard Drives",
      "RAM",
      "GPUs",
      "Processors",
      "Motherboards",
      "NAS",
      "External Drives",
    ],
    description: "Upgrade drives, memory, GPUs and components — plus NAS solutions for businesses.",
  },
];

export type { Product } from "./catalog-products";
import { PHONEPLACE_PRODUCTS } from "@/data/products";

export const CATALOG_SOURCE = "phoneplace-generated";
export const PRODUCTS = PHONEPLACE_PRODUCTS;

export type Service = { slug: string; name: string; description: string; icon: string };
export const SERVICES: Service[] = [
  {
    slug: "laptop-repair",
    name: "Laptop Repair",
    description: "Hardware diagnostics, board-level repair, screen and keyboard replacements.",
    icon: "laptop",
  },
  {
    slug: "computer-repair",
    name: "Computer Repair",
    description: "Desktop diagnostics, upgrades and full system rebuilds.",
    icon: "monitor",
  },
  {
    slug: "phone-repair",
    name: "Phone Repair",
    description: "Screen, battery, charging port and motherboard repair.",
    icon: "phone",
  },
  {
    slug: "tablet-repair",
    name: "Tablet Repair",
    description: "iPad and Android tablet screen, battery and software fixes.",
    icon: "tablet",
  },
  {
    slug: "motherboard-repair",
    name: "Motherboard Repair",
    description: "Board-level micro-soldering for phones, laptops and consoles.",
    icon: "cpu",
  },
  {
    slug: "screen-replacement",
    name: "Screen Replacement",
    description: "Original and grade-A screens for popular phone and laptop models.",
    icon: "monitor",
  },
  {
    slug: "keyboard-replacement",
    name: "Keyboard Replacement",
    description: "Laptop keyboard replacements with genuine parts.",
    icon: "keyboard",
  },
  {
    slug: "charging-port-repair",
    name: "Charging Port Repair",
    description: "Charging port cleaning, repair and replacement.",
    icon: "battery",
  },
  {
    slug: "water-damage-repair",
    name: "Water Damage Repair",
    description: "Ultrasonic cleaning and component-level recovery.",
    icon: "phone",
  },
  {
    slug: "software-troubleshooting",
    name: "Software Troubleshooting",
    description: "OS installs, virus removal, optimisation and data backup.",
    icon: "ssd",
  },
  {
    slug: "cctv-installation",
    name: "CCTV Installation",
    description: "Site survey, installation and configuration of CCTV systems.",
    icon: "cctv",
  },
  {
    slug: "networking-setup",
    name: "Networking Setup",
    description: "Office and home network design, structured cabling and Wi-Fi setup.",
    icon: "router",
  },
  {
    slug: "printer-maintenance",
    name: "Printer Maintenance",
    description: "Servicing, toner replacement and repair for office printers.",
    icon: "printer",
  },
  {
    slug: "trade-in",
    name: "Device Trade-In",
    description: "Trade in your old phone, laptop or tablet against a new device.",
    icon: "phone",
  },
  {
    slug: "bulk-corporate-supply",
    name: "Bulk Corporate Supply",
    description: "Procurement, supply and delivery of ICT equipment to businesses.",
    icon: "monitor",
  },
];

export type Branch = { slug: string; name: string; city: string; address: string; phone: string };
export const BRANCHES: Branch[] = [
  {
    slug: "nairobi-cbd",
    name: "Nairobi CBD Branch",
    city: "Nairobi",
    address: "Luthuli Avenue, Nairobi CBD",
    phone: "+254 700 000 001",
  },
  {
    slug: "bbs-mall",
    name: "BBS Mall Branch",
    city: "Eastleigh, Nairobi",
    address: "BBS Mall, 2nd Floor, Eastleigh",
    phone: "+254 700 000 002",
  },
  {
    slug: "garissa",
    name: "Garissa Branch",
    city: "Garissa",
    address: "Garissa Town Centre",
    phone: "+254 700 000 003",
  },
];

export type CaseStudy = {
  slug: string;
  title: string;
  client: string;
  summary: string;
  tag: string;
};
export const PROJECTS: CaseStudy[] = [
  {
    slug: "corporate-laptop-supply",
    title: "Corporate Laptop Supply",
    client: "Nairobi-based logistics firm",
    summary:
      "Supplied 120 Dell Latitude laptops with imaging, asset tagging and on-site delivery within 10 days.",
    tag: "Corporate Supply",
  },
  {
    slug: "school-cctv-rollout",
    title: "School CCTV Installation",
    client: "Private school in Kiambu",
    summary:
      "End-to-end installation of 32 cameras across 3 buildings with NVR storage and remote monitoring.",
    tag: "CCTV Project",
  },
  {
    slug: "school-ict-equipment",
    title: "ICT Lab Equipment Supply",
    client: "Secondary school, Garissa",
    summary:
      "Supplied 40 desktops, network switches, projector and structured cabling for a new computer lab.",
    tag: "Institutional",
  },
  {
    slug: "retail-accessories",
    title: "Retail Accessories Bulk Supply",
    client: "Reseller network",
    summary:
      "Monthly wholesale supply of accessories — chargers, earbuds, covers and screen protectors — to 18 shops.",
    tag: "Wholesale",
  },
];

export const buildWhatsAppLink = (message: string) =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
