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
    chips: ["Business Laptops", "Gaming Laptops", "Student Laptops", "Desktops", "All-in-One PCs", "Workstations", "Refurbished", "Custom-Built"],
    description: "Business, gaming, student and workstation machines from HP, Dell, Lenovo, Apple and more — brand new, refurbished and custom-built.",
  },
  {
    slug: "phones-tablets",
    name: "Smartphones & Tablets",
    chips: ["Android Phones", "iPhones", "Tablets", "Smart Watches", "Foldables", "Rugged Phones"],
    description: "Latest Android and iPhone devices, tablets, smartwatches and foldables — genuine imports with warranty.",
  },
  {
    slug: "computer-accessories",
    name: "Computer Accessories",
    chips: ["Keyboards", "Mice", "Webcams", "Laptop Bags", "Chargers", "Cooling Pads", "USB Hubs", "Docking Stations"],
    description: "Everything around your computer — keyboards, mice, docks, chargers, bags and more.",
  },
  {
    slug: "mobile-accessories",
    name: "Mobile Accessories",
    chips: ["Chargers", "Power Banks", "Earbuds", "Speakers", "Screen Protectors", "Phone Covers", "Memory Cards"],
    description: "Phone chargers, power banks, audio gear, covers and memory — quality brands at fair prices.",
  },
  {
    slug: "cctv-security",
    name: "Security & Surveillance",
    chips: ["CCTV Cameras", "IP Cameras", "DVR/NVR Systems", "Installation", "Accessories"],
    description: "CCTV and IP camera systems with professional installation, maintenance and accessories.",
  },
  {
    slug: "printers-office",
    name: "Printers & Office Equipment",
    chips: ["Laser Printers", "Inkjet", "Receipt Printers", "Barcode Printers", "Scanners", "Photocopiers", "Toners"],
    description: "Printers, scanners, copiers and consumables for offices, retail and home use.",
  },
  {
    slug: "networking",
    name: "Networking Equipment",
    chips: ["Routers", "Access Points", "Switches", "Modems", "Cables", "Fiber", "Cabinets"],
    description: "Routers, switches, access points, fiber gear and structured cabling for any project size.",
  },
  {
    slug: "storage-components",
    name: "Storage & Components",
    chips: ["SSDs", "Hard Drives", "RAM", "GPUs", "Processors", "Motherboards", "NAS", "External Drives"],
    description: "Upgrade drives, memory, GPUs and components — plus NAS solutions for businesses.",
  },
];

export type Product = {
  slug: string;
  name: string;
  brand: string;
  category: string; // slug
  categoryLabel: string;
  price?: number;
  oldPrice?: number;
  requestPrice?: boolean;
  shortSpec: string;
  description: string;
  specs: { label: string; value: string }[];
  featured?: boolean;
  icon: "laptop" | "phone" | "tablet" | "cctv" | "printer" | "router" | "ssd" | "headphones" | "keyboard" | "mouse" | "speaker" | "battery" | "monitor" | "watch";
  tone: "navy" | "graphite" | "sand" | "olive" | "rose" | "steel" | "ink";
};

export const PRODUCTS: Product[] = [
  // Laptops
  { slug: "hp-elitebook-840-g8", name: "HP EliteBook 840 G8", brand: "HP", category: "computers-laptops", categoryLabel: "Business Laptops", price: 85000, oldPrice: 95000, shortSpec: "Intel i7 11th Gen · 16GB RAM · 512GB SSD · 14\" FHD", description: "Premium business laptop with 11th Gen Intel Core i7, vPro security and a backlit keyboard. Built for long days in the field.", specs: [{label:"CPU",value:"Intel Core i7-1165G7"},{label:"RAM",value:"16GB DDR4"},{label:"Storage",value:"512GB NVMe SSD"},{label:"Display",value:"14\" FHD IPS"},{label:"OS",value:"Windows 11 Pro"}], featured: true, icon: "laptop", tone: "graphite" },
  { slug: "dell-latitude-5420", name: "Dell Latitude 5420", brand: "Dell", category: "computers-laptops", categoryLabel: "Business Laptops", price: 78000, shortSpec: "Intel i5 11th Gen · 16GB · 512GB SSD · 14\"", description: "Reliable Latitude for daily corporate workloads with strong battery life and ports for the office.", specs: [{label:"CPU",value:"Intel Core i5-1145G7"},{label:"RAM",value:"16GB"},{label:"Storage",value:"512GB SSD"},{label:"Display",value:"14\" FHD"}], featured: true, icon: "laptop", tone: "navy" },
  { slug: "lenovo-thinkpad-t14", name: "Lenovo ThinkPad T14", brand: "Lenovo", category: "computers-laptops", categoryLabel: "Business Laptops", price: 92000, shortSpec: "Ryzen 7 · 16GB · 512GB SSD · 14\"", description: "ThinkPad durability with AMD Ryzen 7 performance. The legendary keyboard remains.", specs: [{label:"CPU",value:"AMD Ryzen 7 PRO"},{label:"RAM",value:"16GB"},{label:"Storage",value:"512GB SSD"}], featured: true, icon: "laptop", tone: "ink" },
  { slug: "macbook-pro-2020", name: "MacBook Pro 2020 (M1)", brand: "Apple", category: "computers-laptops", categoryLabel: "Apple Laptops", price: 145000, oldPrice: 159000, shortSpec: "Apple M1 · 8GB · 256GB SSD · 13.3\" Retina", description: "Apple Silicon M1 — silent, fast and all-day battery. Ideal for creators and professionals.", specs: [{label:"Chip",value:"Apple M1"},{label:"RAM",value:"8GB Unified"},{label:"Storage",value:"256GB SSD"},{label:"Display",value:"13.3\" Retina"}], featured: true, icon: "laptop", tone: "sand" },
  { slug: "hp-probook-450", name: "HP ProBook 450 G9", brand: "HP", category: "computers-laptops", categoryLabel: "Business Laptops", price: 72000, shortSpec: "Intel i5 12th Gen · 8GB · 512GB SSD · 15.6\"", description: "Practical 15-inch business laptop, great for students and SMBs.", specs: [{label:"CPU",value:"Intel Core i5-1235U"},{label:"RAM",value:"8GB"},{label:"Storage",value:"512GB SSD"}], icon: "laptop", tone: "steel" },
  { slug: "dell-optiplex-desktop", name: "Dell OptiPlex 7090 Desktop", brand: "Dell", category: "computers-laptops", categoryLabel: "Desktops", price: 65000, shortSpec: "Intel i5 · 8GB · 1TB HDD · SFF", description: "Small-form-factor desktop for offices and cyber cafes.", specs: [{label:"CPU",value:"Intel Core i5"},{label:"RAM",value:"8GB"},{label:"Storage",value:"1TB HDD"}], icon: "monitor", tone: "graphite" },

  // Phones
  { slug: "iphone-13-pro", name: "iPhone 13 Pro", brand: "Apple", category: "phones-tablets", categoryLabel: "iPhones", price: 115000, oldPrice: 129000, shortSpec: "A15 Bionic · 128GB · 6.1\" Super Retina XDR", description: "Pro-grade triple-camera system with ProMotion display and all-day battery.", specs: [{label:"Chip",value:"A15 Bionic"},{label:"Storage",value:"128GB"},{label:"Display",value:"6.1\" XDR 120Hz"}], featured: true, icon: "phone", tone: "ink" },
  { slug: "samsung-galaxy-a55", name: "Samsung Galaxy A55 5G", brand: "Samsung", category: "phones-tablets", categoryLabel: "Android Phones", price: 48000, shortSpec: "Exynos 1480 · 8GB · 256GB · 6.6\" AMOLED", description: "Mid-range hero from Samsung with stunning AMOLED and 5G connectivity.", specs: [{label:"CPU",value:"Exynos 1480"},{label:"RAM",value:"8GB"},{label:"Storage",value:"256GB"}], featured: true, icon: "phone", tone: "navy" },
  { slug: "tecno-camon-30", name: "Tecno Camon 30", brand: "Tecno", category: "phones-tablets", categoryLabel: "Android Phones", price: 28500, shortSpec: "Helio G99 · 8GB · 256GB · 6.78\" AMOLED", description: "Camera-first smartphone with a clean design and bright display.", specs: [{label:"CPU",value:"Helio G99"},{label:"RAM",value:"8GB"},{label:"Storage",value:"256GB"}], featured: true, icon: "phone", tone: "olive" },
  { slug: "infinix-hot-50", name: "Infinix Hot 50 Pro", brand: "Infinix", category: "phones-tablets", categoryLabel: "Android Phones", price: 22500, shortSpec: "Helio G100 · 8GB · 256GB · 6.78\"", description: "Best-in-class value with smooth performance and large battery.", specs: [{label:"CPU",value:"Helio G100"},{label:"RAM",value:"8GB"},{label:"Storage",value:"256GB"}], icon: "phone", tone: "rose" },
  { slug: "redmi-note-13", name: "Redmi Note 13 Pro", brand: "Xiaomi", category: "phones-tablets", categoryLabel: "Android Phones", price: 32000, shortSpec: "Snapdragon 7s Gen 2 · 8GB · 256GB", description: "Flagship-feeling Redmi with 200MP camera and 120Hz AMOLED.", specs: [{label:"CPU",value:"Snapdragon 7s Gen 2"},{label:"Display",value:"6.67\" AMOLED 120Hz"}], icon: "phone", tone: "steel" },
  { slug: "ipad-9th-gen", name: "Apple iPad 9th Gen", brand: "Apple", category: "phones-tablets", categoryLabel: "Tablets", price: 45000, shortSpec: "A13 Bionic · 64GB · 10.2\" Retina · Wi-Fi", description: "Reliable iPad for school, work and creativity.", specs: [{label:"Chip",value:"A13"},{label:"Storage",value:"64GB"}], icon: "tablet", tone: "sand" },

  // CCTV
  { slug: "hikvision-4ch-kit", name: "Hikvision 4 Channel CCTV Kit", brand: "Hikvision", category: "cctv-security", categoryLabel: "CCTV Kits", price: 35000, shortSpec: "4 × 2MP cameras · DVR · 1TB HDD · cables", description: "Complete 4-channel CCTV kit ready for installation in homes and small offices.", specs: [{label:"Channels",value:"4"},{label:"Resolution",value:"2MP / 1080p"},{label:"Storage",value:"1TB HDD"}], featured: true, icon: "cctv", tone: "graphite" },
  { slug: "dahua-ip-camera", name: "Dahua 4MP IP Camera", brand: "Dahua", category: "cctv-security", categoryLabel: "IP Cameras", price: 9500, shortSpec: "4MP · PoE · IR Night Vision", description: "Crisp 4MP IP camera with PoE and reliable night vision for outdoor use.", specs: [{label:"Resolution",value:"4MP"},{label:"Power",value:"PoE"}], featured: true, icon: "cctv", tone: "navy" },
  { slug: "cctv-dvr-system", name: "8 Channel DVR System", brand: "Hikvision", category: "cctv-security", categoryLabel: "DVR/NVR Systems", requestPrice: true, shortSpec: "8 channels · supports 8MP cameras", description: "Pro-grade 8 channel DVR for medium businesses and multi-room setups.", specs: [{label:"Channels",value:"8"}], icon: "cctv", tone: "ink" },
  { slug: "wireless-security-camera", name: "Wireless Wi-Fi Camera", brand: "Imou", category: "cctv-security", categoryLabel: "Wireless Cameras", price: 4500, shortSpec: "2MP · Wi-Fi · 2-way audio", description: "Plug-and-play wireless camera with app control and night vision.", specs: [{label:"Connectivity",value:"Wi-Fi"}], icon: "cctv", tone: "steel" },

  // Printers
  { slug: "hp-laserjet-pro", name: "HP LaserJet Pro M404dn", brand: "HP", category: "printers-office", categoryLabel: "Laser Printers", price: 38000, shortSpec: "Mono Laser · Duplex · 38ppm · LAN", description: "Fast mono laser printer for busy offices with duplex and networking.", specs: [{label:"Type",value:"Mono Laser"},{label:"Speed",value:"38ppm"}], featured: true, icon: "printer", tone: "graphite" },
  { slug: "epson-ecotank-l3250", name: "Epson EcoTank L3250", brand: "Epson", category: "printers-office", categoryLabel: "Inkjet Printers", price: 26500, shortSpec: "All-in-One · Wi-Fi · Refillable Ink Tanks", description: "Wireless 3-in-1 EcoTank with ultra-low cost per page.", specs: [{label:"Type",value:"Inkjet AIO"}], featured: true, icon: "printer", tone: "sand" },
  { slug: "canon-pixma-g3020", name: "Canon Pixma G3020", brand: "Canon", category: "printers-office", categoryLabel: "Inkjet Printers", price: 24500, shortSpec: "Print · Scan · Copy · Wi-Fi", description: "Compact Pixma with refillable tanks — ideal for home offices.", specs: [{label:"Type",value:"Inkjet AIO"}], icon: "printer", tone: "navy" },
  { slug: "xprinter-receipt", name: "Xprinter Thermal Receipt Printer", brand: "Xprinter", category: "printers-office", categoryLabel: "Receipt Printers", price: 8500, shortSpec: "80mm · USB · LAN · 250mm/s", description: "Reliable 80mm thermal printer for retail POS.", specs: [{label:"Paper",value:"80mm"}], icon: "printer", tone: "steel" },
  { slug: "zebra-barcode-printer", name: "Zebra ZD230 Barcode Printer", brand: "Zebra", category: "printers-office", categoryLabel: "Barcode Printers", price: 32000, shortSpec: "Thermal Transfer · 203dpi · USB", description: "Durable barcode label printer for warehouses and pharmacies.", specs: [{label:"DPI",value:"203"}], icon: "printer", tone: "ink" },
  { slug: "kyocera-photocopier", name: "Kyocera M2540dn Photocopier", brand: "Kyocera", category: "printers-office", categoryLabel: "Photocopiers", requestPrice: true, shortSpec: "Print · Copy · Scan · Fax · 40ppm", description: "Workhorse mono MFP for high-volume office environments.", specs: [{label:"Speed",value:"40ppm"}], icon: "printer", tone: "graphite" },

  // Networking
  { slug: "tplink-archer-c80", name: "TP-Link Archer C80 Router", brand: "TP-Link", category: "networking", categoryLabel: "Routers", price: 7500, shortSpec: "AC1900 · Dual Band · MU-MIMO", description: "Strong dual-band home/office router with great coverage.", specs: [{label:"Speed",value:"AC1900"}], featured: true, icon: "router", tone: "navy" },
  { slug: "ubiquiti-unifi-u6", name: "Ubiquiti UniFi U6-Lite AP", brand: "Ubiquiti", category: "networking", categoryLabel: "Access Points", price: 19500, shortSpec: "Wi-Fi 6 · PoE · Ceiling Mount", description: "Pro Wi-Fi 6 access point for offices, hotels and schools.", specs: [{label:"Standard",value:"Wi-Fi 6"}], featured: true, icon: "router", tone: "steel" },
  { slug: "tplink-24port-switch", name: "TP-Link 24-Port Gigabit Switch", brand: "TP-Link", category: "networking", categoryLabel: "Network Switches", price: 18500, shortSpec: "24 × 1Gbps · Unmanaged · Rack mount", description: "Solid 24-port gigabit switch for SMB networks.", specs: [{label:"Ports",value:"24 × 1Gbps"}], icon: "router", tone: "graphite" },
  { slug: "fiber-patch-cable", name: "Fiber Patch Cable 10m (SC-LC)", brand: "Generic", category: "networking", categoryLabel: "Fiber Equipment", price: 1200, shortSpec: "Single-mode · SC to LC · 10m", description: "High-quality single-mode fiber patch cable, 10 meters.", specs: [{label:"Length",value:"10m"}], icon: "router", tone: "olive" },
  { slug: "9u-network-cabinet", name: "9U Wall-Mount Network Cabinet", brand: "Generic", category: "networking", categoryLabel: "Network Cabinets", price: 14500, shortSpec: "9U · Wall mount · with fan & PDU", description: "Compact wall-mount cabinet with fan and power distribution.", specs: [{label:"Size",value:"9U"}], icon: "router", tone: "ink" },

  // Accessories & components
  { slug: "hp-65w-charger", name: "HP 65W Laptop Charger", brand: "HP", category: "computer-accessories", categoryLabel: "Chargers", price: 2800, shortSpec: "Original · 65W · Blue Pin", description: "Genuine HP 65W charger compatible with most HP laptops.", specs: [{label:"Wattage",value:"65W"}], icon: "battery", tone: "navy" },
  { slug: "anker-powerbank-20k", name: "Anker PowerCore 20,000mAh", brand: "Anker", category: "mobile-accessories", categoryLabel: "Power Banks", price: 6500, shortSpec: "20,000mAh · USB-C PD · 2 outputs", description: "Reliable Anker power bank with fast PD charging.", specs: [{label:"Capacity",value:"20,000mAh"}], icon: "battery", tone: "ink" },
  { slug: "logitech-m185", name: "Logitech M185 Wireless Mouse", brand: "Logitech", category: "computer-accessories", categoryLabel: "Mice", price: 1500, shortSpec: "2.4GHz · Plug-and-Play · 12 month battery", description: "Compact wireless mouse — a workhorse for the office.", specs: [{label:"Battery",value:"AA"}], icon: "mouse", tone: "graphite" },
  { slug: "redragon-mech-keyboard", name: "Redragon K552 Mechanical Keyboard", brand: "Redragon", category: "computer-accessories", categoryLabel: "Keyboards", price: 5500, shortSpec: "TKL · Blue switches · RGB", description: "Tenkeyless mechanical keyboard with vibrant RGB and clicky switches.", specs: [{label:"Layout",value:"TKL"}], icon: "keyboard", tone: "ink" },
  { slug: "jbl-go-3", name: "JBL Go 3 Bluetooth Speaker", brand: "JBL", category: "mobile-accessories", categoryLabel: "Speakers", price: 6500, shortSpec: "Bluetooth 5.1 · IP67 · 5h battery", description: "Compact waterproof speaker with big JBL sound.", specs: [{label:"Battery",value:"5h"}], icon: "speaker", tone: "rose" },
  { slug: "samsung-ssd-512", name: "Samsung 980 NVMe SSD 512GB", brand: "Samsung", category: "storage-components", categoryLabel: "SSDs", price: 8500, shortSpec: "NVMe PCIe 3.0 · up to 3,500MB/s", description: "Fast NVMe SSD upgrade for laptops and desktops.", specs: [{label:"Capacity",value:"512GB"}], featured: true, icon: "ssd", tone: "steel" },
  { slug: "crucial-ram-8gb", name: "Crucial 8GB DDR4 RAM", brand: "Crucial", category: "storage-components", categoryLabel: "RAM Upgrades", price: 4200, shortSpec: "DDR4 · 3200MHz · SO-DIMM", description: "8GB DDR4 SO-DIMM laptop memory upgrade.", specs: [{label:"Speed",value:"3200MHz"}], icon: "ssd", tone: "olive" },
  { slug: "wd-elements-1tb", name: "WD Elements 1TB External HDD", brand: "Western Digital", category: "storage-components", categoryLabel: "External Drives", price: 7200, shortSpec: "USB 3.0 · 1TB · Portable", description: "Portable 1TB external drive for backups and media.", specs: [{label:"Capacity",value:"1TB"}], icon: "ssd", tone: "ink" },
  { slug: "sony-wh-ch520", name: "Sony WH-CH520 Headphones", brand: "Sony", category: "mobile-accessories", categoryLabel: "Headphones", price: 7500, shortSpec: "Wireless · 50h battery · Multipoint", description: "Lightweight wireless headphones with 50-hour battery.", specs: [{label:"Battery",value:"50h"}], icon: "headphones", tone: "navy" },
  { slug: "apple-watch-se", name: "Apple Watch SE 2nd Gen", brand: "Apple", category: "phones-tablets", categoryLabel: "Smart Watches", price: 32500, shortSpec: "40mm · GPS · Aluminium", description: "Essential Apple Watch for fitness and notifications.", specs: [{label:"Size",value:"40mm"}], icon: "watch", tone: "sand" },
];

export type Service = { slug: string; name: string; description: string; icon: string };
export const SERVICES: Service[] = [
  { slug: "laptop-repair", name: "Laptop Repair", description: "Hardware diagnostics, board-level repair, screen and keyboard replacements.", icon: "laptop" },
  { slug: "computer-repair", name: "Computer Repair", description: "Desktop diagnostics, upgrades and full system rebuilds.", icon: "monitor" },
  { slug: "phone-repair", name: "Phone Repair", description: "Screen, battery, charging port and motherboard repair.", icon: "phone" },
  { slug: "tablet-repair", name: "Tablet Repair", description: "iPad and Android tablet screen, battery and software fixes.", icon: "tablet" },
  { slug: "motherboard-repair", name: "Motherboard Repair", description: "Board-level micro-soldering for phones, laptops and consoles.", icon: "cpu" },
  { slug: "screen-replacement", name: "Screen Replacement", description: "Original and grade-A screens for popular phone and laptop models.", icon: "monitor" },
  { slug: "keyboard-replacement", name: "Keyboard Replacement", description: "Laptop keyboard replacements with genuine parts.", icon: "keyboard" },
  { slug: "charging-port-repair", name: "Charging Port Repair", description: "Charging port cleaning, repair and replacement.", icon: "battery" },
  { slug: "water-damage-repair", name: "Water Damage Repair", description: "Ultrasonic cleaning and component-level recovery.", icon: "phone" },
  { slug: "software-troubleshooting", name: "Software Troubleshooting", description: "OS installs, virus removal, optimisation and data backup.", icon: "ssd" },
  { slug: "cctv-installation", name: "CCTV Installation", description: "Site survey, installation and configuration of CCTV systems.", icon: "cctv" },
  { slug: "networking-setup", name: "Networking Setup", description: "Office and home network design, structured cabling and Wi-Fi setup.", icon: "router" },
  { slug: "printer-maintenance", name: "Printer Maintenance", description: "Servicing, toner replacement and repair for office printers.", icon: "printer" },
  { slug: "trade-in", name: "Device Trade-In", description: "Trade in your old phone, laptop or tablet against a new device.", icon: "phone" },
  { slug: "bulk-corporate-supply", name: "Bulk Corporate Supply", description: "Procurement, supply and delivery of ICT equipment to businesses.", icon: "monitor" },
];

export type Branch = { slug: string; name: string; city: string; address: string; phone: string };
export const BRANCHES: Branch[] = [
  { slug: "nairobi-cbd", name: "Nairobi CBD Branch", city: "Nairobi", address: "Luthuli Avenue, Nairobi CBD", phone: "+254 700 000 001" },
  { slug: "bbs-mall", name: "BBS Mall Branch", city: "Eastleigh, Nairobi", address: "BBS Mall, 2nd Floor, Eastleigh", phone: "+254 700 000 002" },
  { slug: "garissa", name: "Garissa Branch", city: "Garissa", address: "Garissa Town Centre", phone: "+254 700 000 003" },
  { slug: "dadaab", name: "Dadaab Branch", city: "Dadaab", address: "Dadaab Main Market", phone: "+254 700 000 004" },
  { slug: "ifo", name: "Ifo Branch", city: "Ifo", address: "Ifo Town", phone: "+254 700 000 005" },
  { slug: "kismayo-link", name: "Mombasa Pickup Point", city: "Mombasa", address: "Digo Road, Mombasa", phone: "+254 700 000 006" },
];

export type CaseStudy = { slug: string; title: string; client: string; summary: string; tag: string };
export const PROJECTS: CaseStudy[] = [
  { slug: "corporate-laptop-supply", title: "Corporate Laptop Supply", client: "Nairobi-based logistics firm", summary: "Supplied 120 Dell Latitude laptops with imaging, asset tagging and on-site delivery within 10 days.", tag: "Corporate Supply" },
  { slug: "school-cctv-rollout", title: "School CCTV Installation", client: "Private school in Kiambu", summary: "End-to-end installation of 32 cameras across 3 buildings with NVR storage and remote monitoring.", tag: "CCTV Project" },
  { slug: "school-ict-equipment", title: "ICT Lab Equipment Supply", client: "Secondary school, Garissa", summary: "Supplied 40 desktops, network switches, projector and structured cabling for a new computer lab.", tag: "Institutional" },
  { slug: "retail-accessories", title: "Retail Accessories Bulk Supply", client: "Reseller network", summary: "Monthly wholesale supply of accessories — chargers, earbuds, covers and screen protectors — to 18 shops.", tag: "Wholesale" },
];

export const formatKES = (n: number) => "KSh " + n.toLocaleString("en-KE");

export const buildWhatsAppLink = (message: string) =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;