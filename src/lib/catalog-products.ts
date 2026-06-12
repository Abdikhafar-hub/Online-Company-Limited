export type Product = {
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

const phoneImages = [
  "https://www.apple.com/newsroom/images/product/iphone/standard/Apple_iPhone-13-Pro_iPhone-13-Pro-Max_09142021_inline.jpg.large.jpg",
  "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=60&w=3000",
  "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=60&w=2400",
  "https://images.unsplash.com/photo-1512499617640-c2f999098c01?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=60&w=2400",
];
const tabletImages = [
  "https://www.apple.com/newsroom/images/product/ipad/standard/Apple_iPad-10-2-inch_Ninth-Gen_09142021_big.jpg.large.jpg",
  "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=60&w=2400",
  "https://images.unsplash.com/photo-1589739900243-4b52cd9ddc89?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=60&w=2400",
];
const watchImages = [
  "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=60&w=2200",
  "https://images.unsplash.com/photo-1579586337278-3f436f25d4d6?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=60&w=2200",
];
const laptopImages = [
  "https://cdn.panacompu.com/cdn-img/pv/hp-elitebook-840-g8-front-view.jpg",
  "https://i.dell.com/is/image/DellContent//content/dam/ss2/product-images/dell-client-products/notebooks/latitude-notebooks/14-5420/media-gallery/la5420nt_xnb_00055rf110_gy_5000x5000_gettyimages-1254825733.psd?fmt=webp&hei=900&wid=900",
  "https://store.lenovo.com/media/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/2/0/20S0S0AK00-0.webp",
  "https://i5.walmartimages.com/seo/New-MacBook-Pro-13-3-Apple-M1-Chip-8-core-CPU-8-core-GPU-Space-Gray_ea8581b6-2f9a-4e4a-b941-92412e4a15a6.fa42d1d4db17bedbcce2c4d2c7ff784d.jpeg?odnBg=FFFFFF&odnHeight=576&odnWidth=576",
  "https://images.unsplash.com/photo-1600194990375-5d1d0b28781c?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=60&w=3000",
  "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=60&w=2400",
];
const desktopImages = [
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=60&w=2400",
  "https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=60&w=2400",
];
const accessoryImages = [
  "https://images.unsplash.com/photo-1743268139156-b9d8c1d4e98e?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=60&w=3000",
  "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=60&w=2400",
  "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=60&w=2400",
];
const bagImages = [
  "https://images.unsplash.com/photo-1547949003-9792a18a2601?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=60&w=2400",
  "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=60&w=2400",
];
const mobileAccessoryImages = [
  "https://images.unsplash.com/photo-1645760399036-42f9bc36c0ca?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=60&w=3000",
  "https://images.unsplash.com/photo-1609592424823-0f9f0a6f10d9?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=60&w=2400",
  "https://images.unsplash.com/photo-1585338447937-7082f8fc763d?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=60&w=2400",
];
const cctvImages = [
  "https://images.unsplash.com/photo-1686678652918-8b235f8b9415?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=60&w=3000",
  "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=60&w=2400",
];
const printerImages = [
  "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=60&w=3000",
  "https://images.unsplash.com/photo-1611174743420-3d7df880ce32?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=60&w=2400",
];
const networkingImages = [
  "https://images.unsplash.com/photo-1750711158632-5273ec9b9b86?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=60&w=3000",
  "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=60&w=2400",
];
const storageImages = [
  "https://images.unsplash.com/photo-1721333084639-0f64b0583875?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=60&w=3000",
  "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=60&w=2400",
];

const tones: Product["tone"][] = ["navy", "graphite", "sand", "olive", "rose", "steel", "ink"];
const stockStates: Product["stockStatus"][] = [
  "In Stock",
  "Limited Stock",
  "Pre-Order",
  "In Stock",
];

const pick = <T>(items: T[], index: number) => items[index % items.length];
const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

function buildProduct(
  index: number,
  input: Omit<Product, "slug" | "tone" | "stockStatus" | "whatsappInquiryText">,
): Product {
  const slug = slugify(input.id);
  return {
    ...input,
    slug,
    tone: pick(tones, index),
    stockStatus: pick(stockStates, index),
    whatsappInquiryText: `Hello Online Company Limited, I'm interested in ${input.name}. Please confirm availability, warranty and final price.`,
  };
}

const phoneStorageVariants = [
  { label: "128GB", price: 0 },
  { label: "256GB", price: 15000 },
  { label: "512GB", price: 42000 },
  { label: "1TB", price: 78000 },
];
const laptopConfigVariants = [
  { label: "8GB / 256GB SSD", price: 0, ram: "8GB", storage: "256GB SSD" },
  { label: "8GB / 512GB SSD", price: 9000, ram: "8GB", storage: "512GB SSD" },
  { label: "16GB / 512GB SSD", price: 18000, ram: "16GB", storage: "512GB SSD" },
  { label: "16GB / 1TB SSD", price: 34000, ram: "16GB", storage: "1TB SSD" },
];
const desktopConfigVariants = [
  { label: "8GB / 256GB SSD", price: 0, ram: "8GB", storage: "256GB SSD" },
  { label: "8GB / 512GB SSD", price: 7000, ram: "8GB", storage: "512GB SSD" },
  { label: "16GB / 512GB SSD", price: 17000, ram: "16GB", storage: "512GB SSD" },
  { label: "16GB / 1TB SSD", price: 30000, ram: "16GB", storage: "1TB SSD" },
];
const accessoryVariants = [
  { label: "Standard", price: 0 },
  { label: "Plus", price: 1200 },
  { label: "Pro", price: 2600 },
  { label: "Max", price: 4200 },
];

const iphoneBases = [
  { name: "iPhone 16 Pro Max", chip: "A18 Pro", display: '6.9"', price: 225000 },
  { name: "iPhone 16 Pro", chip: "A18 Pro", display: '6.3"', price: 198000 },
  { name: "iPhone 16", chip: "A18", display: '6.1"', price: 158000 },
  { name: "iPhone 15 Pro", chip: "A17 Pro", display: '6.1"', price: 176000 },
  { name: "iPhone 15", chip: "A16 Bionic", display: '6.1"', price: 139000 },
];
const samsungBases = [
  { name: "Samsung Galaxy S24 Ultra", chip: "Snapdragon 8 Gen 3", display: '6.8"', price: 185000 },
  { name: "Samsung Galaxy S24+", chip: "Exynos 2400", display: '6.7"', price: 148000 },
  { name: "Samsung Galaxy S24", chip: "Exynos 2400", display: '6.2"', price: 129000 },
  { name: "Samsung Galaxy A55 5G", chip: "Exynos 1480", display: '6.6"', price: 52000 },
  { name: "Samsung Galaxy A35 5G", chip: "Exynos 1380", display: '6.6"', price: 43500 },
];
const androidBases = [
  {
    brand: "Tecno",
    name: "Tecno Camon 30 Premier",
    chip: "Dimensity 8200",
    display: '6.77"',
    price: 57500,
  },
  {
    brand: "Infinix",
    name: "Infinix Note 40 Pro",
    chip: "Helio G99",
    display: '6.78"',
    price: 33500,
  },
  {
    brand: "Xiaomi",
    name: "Redmi Note 13 Pro",
    chip: "Snapdragon 7s Gen 2",
    display: '6.67"',
    price: 36500,
  },
  {
    brand: "OnePlus",
    name: "OnePlus Nord CE 4",
    chip: "Snapdragon 7 Gen 3",
    display: '6.7"',
    price: 61000,
  },
  {
    brand: "Nothing",
    name: "Nothing Phone (2a)",
    chip: "Dimensity 7200 Pro",
    display: '6.7"',
    price: 58500,
  },
];
const tabletBases = [
  {
    brand: "Apple",
    name: "Apple iPad 10th Gen",
    chip: "A14 Bionic",
    display: '10.9"',
    price: 62000,
  },
  { brand: "Apple", name: "Apple iPad Air 11", chip: "M2", display: '11"', price: 98000 },
  {
    brand: "Samsung",
    name: "Samsung Galaxy Tab S9 FE",
    chip: "Exynos 1380",
    display: '10.9"',
    price: 78000,
  },
  {
    brand: "Lenovo",
    name: "Lenovo Tab P12",
    chip: "Dimensity 7050",
    display: '12.7"',
    price: 69000,
  },
  { brand: "Xiaomi", name: "Xiaomi Pad 6", chip: "Snapdragon 870", display: '11"', price: 64000 },
];
const watchBases = [
  { brand: "Apple", name: "Apple Watch Series 9", chip: "S9 SiP", display: "45mm", price: 56000 },
  { brand: "Apple", name: "Apple Watch SE 2nd Gen", chip: "S8 SiP", display: "44mm", price: 36500 },
  {
    brand: "Samsung",
    name: "Samsung Galaxy Watch6",
    chip: "Exynos W930",
    display: "44mm",
    price: 42000,
  },
  { brand: "Huawei", name: "Huawei Watch GT 4", chip: "HarmonyOS", display: "46mm", price: 36000 },
  { brand: "Amazfit", name: "Amazfit GTR 4", chip: "Zepp OS", display: "46mm", price: 29500 },
];
const powerBankBases = [
  { brand: "Anker", name: "Anker PowerCore", capacity: "10,000mAh", watt: "18W", price: 4500 },
  {
    brand: "UGREEN",
    name: "UGREEN Nexode Power Bank",
    capacity: "12,000mAh",
    watt: "20W",
    price: 6200,
  },
  {
    brand: "Xiaomi",
    name: "Xiaomi Mi Power Bank",
    capacity: "10,000mAh",
    watt: "22.5W",
    price: 3900,
  },
  { brand: "Baseus", name: "Baseus Blade", capacity: "20,000mAh", watt: "65W", price: 9800 },
  { brand: "Oraimo", name: "Oraimo Traveler", capacity: "20,000mAh", watt: "15W", price: 4100 },
];
const chargerBases = [
  { brand: "Apple", name: "Apple USB-C Power Adapter", watt: "20W", port: "USB-C", price: 3400 },
  { brand: "Samsung", name: "Samsung Super Fast Charger", watt: "25W", port: "USB-C", price: 3200 },
  { brand: "Anker", name: "Anker Nano Charger", watt: "30W", port: "USB-C", price: 3800 },
  { brand: "UGREEN", name: "UGREEN Nexode Charger", watt: "45W", port: "USB-C", price: 5200 },
  { brand: "HP", name: "HP USB-C Travel Charger", watt: "65W", port: "USB-C", price: 5600 },
];
const earbudsBases = [
  { brand: "Apple", name: "Apple AirPods", battery: "24h", price: 19500 },
  { brand: "Samsung", name: "Samsung Galaxy Buds FE", battery: "30h", price: 13500 },
  { brand: "JBL", name: "JBL Wave Buds", battery: "32h", price: 7800 },
  { brand: "Sony", name: "Sony WF-C700N", battery: "20h", price: 18500 },
  { brand: "Oraimo", name: "Oraimo FreePods", battery: "28h", price: 4200 },
];
const speakerBases = [
  { brand: "JBL", name: "JBL Go", battery: "5h", price: 6500 },
  { brand: "Anker", name: "Soundcore Motion", battery: "12h", price: 9800 },
  { brand: "Sony", name: "Sony SRS-XB", battery: "16h", price: 14200 },
  { brand: "Oraimo", name: "Oraimo Palm", battery: "10h", price: 3800 },
  { brand: "Tribit", name: "Tribit StormBox", battery: "20h", price: 11200 },
];
const hpLaptopBases = [
  { name: "HP EliteBook 840 G8", cpu: "Intel Core i7-1165G7", display: '14"', price: 86000 },
  { name: "HP ProBook 450 G10", cpu: "Intel Core i5-1335U", display: '15.6"', price: 76000 },
  { name: "HP Pavilion 14", cpu: "Intel Core i5-1235U", display: '14"', price: 69000 },
  { name: "HP 250 G10", cpu: "Intel Core i5-1334U", display: '15.6"', price: 62000 },
  { name: "HP Envy x360 14", cpu: "Intel Core Ultra 5", display: '14"', price: 118000 },
];
const dellLaptopBases = [
  { name: "Dell Latitude 5420", cpu: "Intel Core i5-1145G7", display: '14"', price: 79000 },
  { name: "Dell Latitude 7440", cpu: "Intel Core i7-1365U", display: '14"', price: 118000 },
  { name: "Dell Inspiron 15 3530", cpu: "Intel Core i5-1334U", display: '15.6"', price: 71000 },
  { name: "Dell Vostro 3520", cpu: "Intel Core i5-1235U", display: '15.6"', price: 67000 },
  { name: "Dell Inspiron 14 5430", cpu: "Intel Core i7-1360P", display: '14"', price: 89000 },
];
const lenovoLaptopBases = [
  { name: "Lenovo ThinkPad T14", cpu: "AMD Ryzen 7 PRO 5850U", display: '14"', price: 92000 },
  { name: "Lenovo ThinkBook 14", cpu: "Intel Core i5-1335U", display: '14"', price: 73000 },
  { name: "Lenovo IdeaPad Slim 3", cpu: "Intel Core i5-12450H", display: '15.6"', price: 66000 },
  { name: "Lenovo V15 G4", cpu: "AMD Ryzen 5 7520U", display: '15.6"', price: 59000 },
  { name: "Lenovo Yoga 7", cpu: "AMD Ryzen 7 7735U", display: '14"', price: 108000 },
];
const appleLaptopBases = [
  { name: "MacBook Air 13 M1", cpu: "Apple M1", display: '13.3"', price: 118000 },
  { name: "MacBook Air 13 M2", cpu: "Apple M2", display: '13.6"', price: 149000 },
  { name: "MacBook Air 15 M3", cpu: "Apple M3", display: '15.3"', price: 215000 },
  { name: "MacBook Pro 14 M3", cpu: "Apple M3", display: '14.2"', price: 265000 },
  { name: "MacBook Pro 16 M3 Pro", cpu: "Apple M3 Pro", display: '16.2"', price: 398000 },
];
const gamingLaptopBases = [
  {
    brand: "ASUS",
    name: "ASUS TUF Gaming A15",
    cpu: "Ryzen 7 7735HS",
    gpu: "RTX 4060",
    display: '15.6"',
    price: 149000,
  },
  {
    brand: "Lenovo",
    name: "Lenovo LOQ 15",
    cpu: "Intel Core i7-13620H",
    gpu: "RTX 4050",
    display: '15.6"',
    price: 154000,
  },
  {
    brand: "HP",
    name: "HP Victus 15",
    cpu: "Intel Core i5-13420H",
    gpu: "RTX 3050",
    display: '15.6"',
    price: 126000,
  },
  {
    brand: "Dell",
    name: "Dell G15",
    cpu: "Ryzen 7 7840HS",
    gpu: "RTX 4060",
    display: '15.6"',
    price: 168000,
  },
  {
    brand: "Acer",
    name: "Acer Nitro V 15",
    cpu: "Intel Core i7-13620H",
    gpu: "RTX 4050",
    display: '15.6"',
    price: 146000,
  },
];
const desktopBases = [
  { brand: "Dell", name: "Dell OptiPlex 7010 SFF", cpu: "Intel Core i5-13500", price: 72000 },
  { brand: "HP", name: "HP Pro Tower 290 G9", cpu: "Intel Core i5-12500", price: 69000 },
  { brand: "Lenovo", name: "Lenovo ThinkCentre Neo 50t", cpu: "Intel Core i5-13400", price: 76000 },
  { brand: "Acer", name: "Acer Veriton X", cpu: "Intel Core i7-12700", price: 82000 },
  { brand: "Custom", name: "Custom Ryzen Office Desktop", cpu: "AMD Ryzen 5 5600G", price: 58500 },
];
const keyboardBases = [
  { brand: "Logitech", name: "Logitech K380", feature: "Wireless", price: 4200 },
  { brand: "HP", name: "HP 230 Slim Keyboard", feature: "Wireless", price: 3800 },
  { brand: "Redragon", name: "Redragon K552", feature: "Mechanical", price: 5600 },
  { brand: "Dell", name: "Dell KB216", feature: "Wired", price: 2200 },
  { brand: "Rapoo", name: "Rapoo E9050", feature: "Ultra-Slim", price: 4900 },
];
const mouseBases = [
  { brand: "Logitech", name: "Logitech M185", feature: "Wireless", price: 1800 },
  { brand: "HP", name: "HP X200", feature: "Wireless", price: 2100 },
  { brand: "Dell", name: "Dell MS116", feature: "Wired", price: 1200 },
  { brand: "Rapoo", name: "Rapoo M100", feature: "Multi-Mode", price: 2400 },
  { brand: "Redragon", name: "Redragon M602", feature: "Gaming", price: 4200 },
];
const webcamBases = [
  { brand: "Logitech", name: "Logitech C270", feature: "720p", price: 4600 },
  { brand: "Logitech", name: "Logitech C920", feature: "1080p", price: 13800 },
  { brand: "A4Tech", name: "A4Tech PK-910H", feature: "1080p", price: 5200 },
  { brand: "HP", name: "HP 325 FHD Webcam", feature: "1080p", price: 8400 },
  { brand: "Dell", name: "Dell WB3023", feature: "2K QHD", price: 17800 },
];
const bagBases = [
  { brand: "HP", name: "HP Prelude Backpack", feature: '15.6"', price: 3900 },
  { brand: "Dell", name: "Dell Pro Slim Briefcase", feature: '14"', price: 4300 },
  { brand: "Lenovo", name: "Lenovo Casual Toploader", feature: '15.6"', price: 3200 },
  { brand: "Targus", name: "Targus CitySmart Backpack", feature: '15.6"', price: 6800 },
  { brand: "WIWU", name: "WIWU Alpha Laptop Sleeve", feature: '13-14"', price: 2900 },
];
const cctvBases = [
  { brand: "Hikvision", name: "Hikvision Turret Camera", feature: "2MP", price: 4200 },
  { brand: "Dahua", name: "Dahua Bullet Camera", feature: "2MP", price: 4500 },
  { brand: "EZVIZ", name: "EZVIZ Outdoor Camera", feature: "3MP", price: 5200 },
  { brand: "Imou", name: "Imou Cruiser Camera", feature: "5MP", price: 7300 },
  { brand: "Uniview", name: "Uniview Dome Camera", feature: "4MP", price: 5800 },
];
const ipCameraBases = [
  { brand: "Hikvision", name: "Hikvision ColorVu IP Camera", feature: "4MP", price: 9800 },
  { brand: "Dahua", name: "Dahua WizSense IP Camera", feature: "4MP", price: 10200 },
  { brand: "Ubiquiti", name: "Ubiquiti UniFi G4 Bullet", feature: "4MP", price: 23500 },
  { brand: "Reolink", name: "Reolink RLC Camera", feature: "5MP", price: 11900 },
  { brand: "Axis", name: "Axis M32 Network Camera", feature: "5MP", price: 36800 },
];
const dvrBases = [
  { brand: "Hikvision", name: "Hikvision DVR", feature: "4-Channel", price: 9800 },
  { brand: "Hikvision", name: "Hikvision DVR", feature: "8-Channel", price: 13800 },
  { brand: "Dahua", name: "Dahua NVR", feature: "8-Channel", price: 18200 },
  { brand: "Uniview", name: "Uniview NVR", feature: "16-Channel", price: 26500 },
  { brand: "EZVIZ", name: "EZVIZ Recorder", feature: "4-Channel", price: 8900 },
];
const laserPrinterBases = [
  { brand: "HP", name: "HP LaserJet Pro", feature: "Mono Laser", price: 36500 },
  { brand: "Brother", name: "Brother HL-L2440DW", feature: "Mono Laser", price: 28500 },
  { brand: "Canon", name: "Canon i-SENSYS LBP223dw", feature: "Mono Laser", price: 39800 },
  { brand: "Kyocera", name: "Kyocera ECOSYS P2040dn", feature: "Mono Laser", price: 46500 },
  { brand: "Xerox", name: "Xerox B230", feature: "Mono Laser", price: 31000 },
];
const inkjetPrinterBases = [
  { brand: "Epson", name: "Epson EcoTank L3250", feature: "Ink Tank", price: 26500 },
  { brand: "Canon", name: "Canon Pixma G3430", feature: "Ink Tank", price: 24800 },
  { brand: "HP", name: "HP Smart Tank 580", feature: "Ink Tank", price: 28600 },
  { brand: "Brother", name: "Brother DCP-T420W", feature: "Ink Tank", price: 25500 },
  { brand: "Epson", name: "Epson EcoTank L5290", feature: "Ink Tank", price: 38900 },
];
const receiptPrinterBases = [
  { brand: "Xprinter", name: "Xprinter XP-Q80A", feature: "80mm Thermal", price: 8200 },
  { brand: "Hoin", name: "Hoin 80mm POS Printer", feature: "80mm Thermal", price: 7600 },
  { brand: "Rongta", name: "Rongta RP326", feature: "80mm Thermal", price: 8900 },
  { brand: "Bixolon", name: "Bixolon SRP-350III", feature: "80mm Thermal", price: 26500 },
  { brand: "Epson", name: "Epson TM-T20III", feature: "80mm Thermal", price: 29800 },
];
const barcodePrinterBases = [
  { brand: "Zebra", name: "Zebra ZD230", feature: "203dpi", price: 32000 },
  { brand: "TSC", name: "TSC TE200", feature: "203dpi", price: 28500 },
  { brand: "Xprinter", name: "Xprinter XP-365B", feature: "203dpi", price: 16800 },
  { brand: "Godex", name: "Godex G500", feature: "203dpi", price: 35200 },
  { brand: "Honeywell", name: "Honeywell PC42t", feature: "203dpi", price: 33800 },
];
const routerBases = [
  { brand: "TP-Link", name: "TP-Link Archer", feature: "Dual-Band Router", price: 7200 },
  { brand: "MikroTik", name: "MikroTik hAP ax", feature: "Wi-Fi 6 Router", price: 19500 },
  { brand: "Ubiquiti", name: "Ubiquiti UniFi Express", feature: "Cloud Gateway", price: 25900 },
  { brand: "D-Link", name: "D-Link DIR Series", feature: "Dual-Band Router", price: 6800 },
  { brand: "Mercusys", name: "Mercusys AX3000", feature: "Wi-Fi 6 Router", price: 9400 },
];
const switchBases = [
  { brand: "TP-Link", name: "TP-Link Gigabit Switch", feature: "8-Port", price: 5400 },
  { brand: "TP-Link", name: "TP-Link Gigabit Switch", feature: "24-Port", price: 18500 },
  { brand: "D-Link", name: "D-Link Smart Switch", feature: "16-Port", price: 14200 },
  { brand: "Cisco", name: "Cisco CBS Switch", feature: "24-Port", price: 46800 },
  { brand: "MikroTik", name: "MikroTik CRS Switch", feature: "24-Port", price: 33200 },
];
const accessPointBases = [
  { brand: "Ubiquiti", name: "Ubiquiti UniFi U6", feature: "Wi-Fi 6 Access Point", price: 19500 },
  { brand: "TP-Link", name: "TP-Link Omada EAP", feature: "Ceiling AP", price: 12400 },
  { brand: "Ruijie", name: "Ruijie Reyee AP", feature: "Ceiling AP", price: 11800 },
  {
    brand: "Grandstream",
    name: "Grandstream GWN AP",
    feature: "Wi-Fi 6 Access Point",
    price: 16200,
  },
  { brand: "Cambium", name: "Cambium cnPilot AP", feature: "Outdoor AP", price: 22800 },
];
const modemBases = [
  { brand: "Huawei", name: "Huawei 4G Modem", feature: "LTE Cat 6", price: 7200 },
  { brand: "ZTE", name: "ZTE 4G Router Modem", feature: "LTE Cat 6", price: 8600 },
  { brand: "TP-Link", name: "TP-Link 4G LTE Router", feature: "SIM Router", price: 11200 },
  { brand: "MikroTik", name: "MikroTik Chateau LTE", feature: "LTE Router", price: 27500 },
  { brand: "Netgear", name: "Netgear Nighthawk M1", feature: "Mobile Hotspot", price: 34800 },
];
const ssdBases = [
  { brand: "Samsung", name: "Samsung 980 NVMe SSD", feature: "PCIe 3.0 SSD", price: 8500 },
  { brand: "WD", name: "WD Blue SN580", feature: "NVMe SSD", price: 7800 },
  { brand: "Crucial", name: "Crucial P3 Plus", feature: "NVMe SSD", price: 8200 },
  { brand: "Kingston", name: "Kingston NV2", feature: "NVMe SSD", price: 7600 },
  { brand: "Lexar", name: "Lexar NM790", feature: "NVMe SSD", price: 11200 },
];
const hddBases = [
  { brand: "Western Digital", name: "WD Blue HDD", feature: "Internal HDD", price: 6900 },
  { brand: "Seagate", name: "Seagate Barracuda HDD", feature: "Internal HDD", price: 6700 },
  { brand: "Toshiba", name: "Toshiba P300 HDD", feature: "Internal HDD", price: 6400 },
  {
    brand: "Western Digital",
    name: "WD Elements External HDD",
    feature: "External HDD",
    price: 7200,
  },
  { brand: "Seagate", name: "Seagate Expansion Drive", feature: "External HDD", price: 7800 },
];
const ramBases = [
  { brand: "Crucial", name: "Crucial DDR4 Laptop RAM", feature: "DDR4 SO-DIMM", price: 4200 },
  { brand: "Kingston", name: "Kingston Fury Impact", feature: "DDR4 SO-DIMM", price: 4600 },
  { brand: "Corsair", name: "Corsair Vengeance", feature: "DDR5 Laptop RAM", price: 8800 },
  { brand: "Samsung", name: "Samsung DDR4 RAM", feature: "DDR4 SO-DIMM", price: 4300 },
  { brand: "TeamGroup", name: "Team Elite RAM", feature: "DDR4 Desktop RAM", price: 4500 },
];
const gpuBases = [
  { brand: "NVIDIA", name: "NVIDIA GeForce RTX 4060", feature: "8GB GDDR6", price: 56000 },
  { brand: "NVIDIA", name: "NVIDIA GeForce RTX 4070", feature: "12GB GDDR6X", price: 94000 },
  { brand: "AMD", name: "AMD Radeon RX 7600", feature: "8GB GDDR6", price: 52000 },
  { brand: "AMD", name: "AMD Radeon RX 7800 XT", feature: "16GB GDDR6", price: 98000 },
  { brand: "NVIDIA", name: "NVIDIA GeForce RTX 3050", feature: "8GB GDDR6", price: 36000 },
];

const tabletVariants = [
  { label: "64GB Wi-Fi", price: 0, storage: "64GB", network: "Wi-Fi" },
  { label: "128GB Wi-Fi", price: 11000, storage: "128GB", network: "Wi-Fi" },
  { label: "128GB LTE", price: 19000, storage: "128GB", network: "LTE" },
  { label: "256GB LTE", price: 33000, storage: "256GB", network: "LTE" },
];
const watchVariants = [
  { label: "40mm", price: 0, size: "40mm" },
  { label: "44mm", price: 6500, size: "44mm" },
  { label: "Bluetooth + GPS", price: 9000, size: "44mm GPS" },
  { label: "LTE Edition", price: 18000, size: "45mm LTE" },
];
const storageVariants = [
  { label: "256GB", price: 0 },
  { label: "512GB", price: 3200 },
  { label: "1TB", price: 9100 },
  { label: "2TB", price: 21500 },
];
const ramVariants = [
  { label: "8GB", price: 0 },
  { label: "16GB", price: 4200 },
  { label: "32GB", price: 11600 },
  { label: "64GB", price: 24600 },
];
const powerBankVariants = [
  { label: "10,000mAh", price: 0, watt: "20W" },
  { label: "20,000mAh", price: 1800, watt: "20W" },
  { label: "20,000mAh 30W", price: 3200, watt: "30W" },
  { label: "30,000mAh 65W", price: 5600, watt: "65W" },
];
const chargerVariants = [
  { label: "20W", price: 0 },
  { label: "30W", price: 800 },
  { label: "45W", price: 1700 },
  { label: "65W", price: 2600 },
];

const iPhones = iphoneBases.flatMap((base, baseIndex) =>
  phoneStorageVariants.map((variant, variantIndex) =>
    buildProduct(baseIndex * 4 + variantIndex, {
      id: `iphone-${baseIndex + 1}-${variant.label}`,
      name: `${base.name} ${variant.label}`,
      brand: "Apple",
      category: "phones-tablets",
      subcategory: "iPhones",
      categoryLabel: "iPhones",
      price: base.price + variant.price,
      oldPrice: base.price + variant.price + 12000,
      shortSpec: `${base.chip} · ${variant.label} · ${base.display} Super Retina XDR`,
      description: `${base.name} in ${variant.label} with flagship Apple performance, excellent cameras and dependable battery life.`,
      specs: [
        { label: "Chip", value: base.chip },
        { label: "Storage", value: variant.label },
        { label: "Display", value: `${base.display} OLED` },
        { label: "Network", value: "5G" },
      ],
      imageUrl: pick(phoneImages, baseIndex + variantIndex),
      tags: ["apple", "iphone", "ios smartphone", "smartphones", "phones", "mobile phones"],
      featured: baseIndex === 0 && variantIndex === 1,
      icon: "phone",
    }),
  ),
);

const samsungPhones = samsungBases.flatMap((base, baseIndex) =>
  phoneStorageVariants.map((variant, variantIndex) =>
    buildProduct(40 + baseIndex * 4 + variantIndex, {
      id: `samsung-${baseIndex + 1}-${variant.label}`,
      name: `${base.name} ${variant.label}`,
      brand: "Samsung",
      category: "phones-tablets",
      subcategory: "Samsung Phones",
      categoryLabel: "Samsung Phones",
      price: base.price + variant.price,
      oldPrice: base.price + variant.price + 9000,
      shortSpec: `${base.chip} · ${variant.label} · ${base.display} AMOLED`,
      description: `${base.name} with premium Samsung display quality, dependable cameras and smooth daily performance.`,
      specs: [
        { label: "Chip", value: base.chip },
        { label: "Storage", value: variant.label },
        { label: "Display", value: `${base.display} AMOLED` },
        { label: "Network", value: "5G" },
      ],
      imageUrl: pick(phoneImages, baseIndex + variantIndex + 1),
      tags: ["samsung", "android phones", "galaxy phones", "smartphones", "phones"],
      featured: baseIndex === 3 && variantIndex === 1,
      icon: "phone",
    }),
  ),
);

const androidPhones = androidBases.flatMap((base, baseIndex) =>
  phoneStorageVariants.map((variant, variantIndex) =>
    buildProduct(80 + baseIndex * 4 + variantIndex, {
      id: `${slugify(base.brand)}-android-${baseIndex + 1}-${variant.label}`,
      name: `${base.name} ${variant.label}`,
      brand: base.brand,
      category: "phones-tablets",
      subcategory: "Android Phones",
      categoryLabel: "Android Phones",
      price: base.price + variant.price,
      oldPrice: base.price + variant.price + 7000,
      shortSpec: `${base.chip} · ${variant.label} · ${base.display} AMOLED`,
      description: `${base.name} in ${variant.label} built for Android users who want strong performance and sharp displays.`,
      specs: [
        { label: "Chip", value: base.chip },
        { label: "Storage", value: variant.label },
        { label: "Display", value: `${base.display} AMOLED` },
        { label: "Network", value: "5G" },
      ],
      imageUrl: pick(phoneImages, baseIndex + variantIndex + 2),
      tags: ["android phones", "smartphones", "phones", base.brand.toLowerCase()],
      featured: base.brand === "Xiaomi" && variantIndex === 1,
      icon: "phone",
    }),
  ),
);

const tablets = tabletBases.flatMap((base, baseIndex) =>
  tabletVariants.map((variant, variantIndex) =>
    buildProduct(120 + baseIndex * 4 + variantIndex, {
      id: `${slugify(base.brand)}-tablet-${baseIndex + 1}-${variant.label}`,
      name: `${base.name} ${variant.label}`,
      brand: base.brand,
      category: "phones-tablets",
      subcategory: "Tablets",
      categoryLabel: "Tablets",
      price: base.price + variant.price,
      oldPrice: base.price + variant.price + 8000,
      shortSpec: `${base.chip} · ${variant.storage} · ${variant.network} · ${base.display}`,
      description: `${base.name} is ideal for study, work and streaming with reliable performance and a bright tablet display.`,
      specs: [
        { label: "Chip", value: base.chip },
        { label: "Storage", value: variant.storage },
        { label: "Connectivity", value: variant.network },
        { label: "Display", value: base.display },
      ],
      imageUrl: pick(tabletImages, baseIndex + variantIndex),
      tags: ["tablets", "ipad", "android tablet", base.brand.toLowerCase()],
      featured: base.brand === "Apple" && baseIndex === 0 && variantIndex === 1,
      icon: "tablet",
    }),
  ),
);

const smartWatches = watchBases.flatMap((base, baseIndex) =>
  watchVariants.map((variant, variantIndex) =>
    buildProduct(160 + baseIndex * 4 + variantIndex, {
      id: `${slugify(base.brand)}-watch-${baseIndex + 1}-${variant.label}`,
      name: `${base.name} ${variant.label}`,
      brand: base.brand,
      category: "phones-tablets",
      subcategory: "Smart Watches",
      categoryLabel: "Smart Watches",
      price: base.price + variant.price,
      oldPrice: base.price + variant.price + 6500,
      shortSpec: `${base.chip} · ${variant.size} · Bluetooth · Fitness tracking`,
      description: `${base.name} delivers smart notifications, health tracking and a premium wearable experience.`,
      specs: [
        { label: "Chip / OS", value: base.chip },
        { label: "Size", value: variant.size },
        { label: "Battery", value: "Up to 2 days" },
        { label: "Connectivity", value: "Bluetooth / GPS" },
      ],
      imageUrl: pick(watchImages, baseIndex + variantIndex),
      tags: ["smart watches", "wearables", "watch", base.brand.toLowerCase()],
      icon: "watch",
    }),
  ),
);

const powerBanks = powerBankBases.flatMap((base, baseIndex) =>
  powerBankVariants.map((variant, variantIndex) =>
    buildProduct(200 + baseIndex * 4 + variantIndex, {
      id: `${slugify(base.brand)}-power-bank-${baseIndex + 1}-${variant.label}`,
      name: `${base.name} Power Bank ${variant.label}`,
      brand: base.brand,
      category: "mobile-accessories",
      subcategory: "Power Banks",
      categoryLabel: "Power Banks",
      price: base.price + variant.price,
      oldPrice: base.price + variant.price + 900,
      shortSpec: `${variant.label} · ${variant.watt} · Fast Charging`,
      description: `${base.name} power bank keeps phones, tablets and earbuds charged throughout the day.`,
      specs: [
        { label: "Capacity", value: variant.label },
        { label: "Output", value: variant.watt },
        { label: "Ports", value: "USB-C + USB-A" },
        { label: "Recharge", value: "Fast input" },
      ],
      imageUrl: pick(mobileAccessoryImages, baseIndex + variantIndex),
      tags: ["power banks", "power", "charging", "battery bank", base.brand.toLowerCase()],
      icon: "battery",
    }),
  ),
);

const chargers = chargerBases.flatMap((base, baseIndex) =>
  chargerVariants.map((variant, variantIndex) =>
    buildProduct(240 + baseIndex * 4 + variantIndex, {
      id: `${slugify(base.brand)}-charger-${baseIndex + 1}-${variant.label}`,
      name: `${base.name} ${variant.label}`,
      brand: base.brand,
      category: "mobile-accessories",
      subcategory: "Chargers",
      categoryLabel: "Chargers",
      price: base.price + variant.price,
      oldPrice: base.price + variant.price + 700,
      shortSpec: `${variant.label} · ${base.port} · Fast Charge`,
      description: `${base.name} is built for safe fast charging across modern phones, tablets and accessories.`,
      specs: [
        { label: "Power", value: variant.label },
        { label: "Port", value: base.port },
        { label: "Protocol", value: "PD / PPS" },
        { label: "Use", value: "Phone / Tablet" },
      ],
      imageUrl: pick(mobileAccessoryImages, baseIndex + variantIndex + 1),
      tags: ["chargers", "charging", "power", "usb-c charger", base.brand.toLowerCase()],
      icon: "battery",
    }),
  ),
);

const earbuds = earbudsBases.flatMap((base, baseIndex) =>
  accessoryVariants.map((variant, variantIndex) =>
    buildProduct(280 + baseIndex * 4 + variantIndex, {
      id: `${slugify(base.brand)}-earbuds-${baseIndex + 1}-${variant.label}`,
      name: `${base.name} ${variant.label}`,
      brand: base.brand,
      category: "mobile-accessories",
      subcategory: "Earbuds",
      categoryLabel: "Earbuds",
      price: base.price + variant.price,
      oldPrice: base.price + variant.price + 1200,
      shortSpec: `${base.battery} battery · Bluetooth 5.3 · ENC`,
      description: `${base.name} offers comfortable true wireless listening for music, calls and daily commuting.`,
      specs: [
        { label: "Battery", value: base.battery },
        { label: "Connectivity", value: "Bluetooth 5.3" },
        { label: "ANC / ENC", value: "ENC" },
        { label: "Version", value: variant.label },
      ],
      imageUrl: pick(mobileAccessoryImages, baseIndex + variantIndex + 2),
      tags: ["earbuds", "audio", "headphones", "wireless earbuds", base.brand.toLowerCase()],
      icon: "headphones",
    }),
  ),
);

const speakers = speakerBases.flatMap((base, baseIndex) =>
  accessoryVariants.map((variant, variantIndex) =>
    buildProduct(320 + baseIndex * 4 + variantIndex, {
      id: `${slugify(base.brand)}-speaker-${baseIndex + 1}-${variant.label}`,
      name: `${base.name} Speaker ${variant.label}`,
      brand: base.brand,
      category: "mobile-accessories",
      subcategory: "Speakers",
      categoryLabel: "Speakers",
      price: base.price + variant.price,
      oldPrice: base.price + variant.price + 1500,
      shortSpec: `Bluetooth speaker · ${base.battery} battery · IPX rated`,
      description: `${base.name} is a portable Bluetooth speaker built for indoor listening and outdoor hangouts.`,
      specs: [
        { label: "Battery", value: base.battery },
        { label: "Connectivity", value: "Bluetooth 5.3" },
        { label: "Audio", value: "Stereo sound" },
        { label: "Version", value: variant.label },
      ],
      imageUrl: pick(mobileAccessoryImages, baseIndex + variantIndex),
      tags: ["speakers", "bluetooth speaker", "audio", base.brand.toLowerCase()],
      icon: "speaker",
    }),
  ),
);

const hpLaptops = hpLaptopBases.flatMap((base, baseIndex) =>
  laptopConfigVariants.map((variant, variantIndex) =>
    buildProduct(360 + baseIndex * 4 + variantIndex, {
      id: `hp-laptop-${baseIndex + 1}-${variant.label}`,
      name: `${base.name} ${variant.label}`,
      brand: "HP",
      category: "computers-laptops",
      subcategory: "HP Laptops",
      categoryLabel: "HP Laptops",
      price: base.price + variant.price,
      oldPrice: base.price + variant.price + 10000,
      shortSpec: `${base.cpu} · ${variant.ram} · ${variant.storage} · ${base.display}`,
      description: `${base.name} is a dependable HP laptop for business users, office staff and professionals.`,
      specs: [
        { label: "CPU", value: base.cpu },
        { label: "RAM", value: variant.ram },
        { label: "Storage", value: variant.storage },
        { label: "Display", value: `${base.display} FHD` },
      ],
      imageUrl: pick(laptopImages, baseIndex + variantIndex),
      tags: ["hp laptops", "business laptops", "computers", "laptops", "work laptops"],
      featured: baseIndex === 0 && variantIndex === 2,
      icon: "laptop",
    }),
  ),
);

const dellLaptops = dellLaptopBases.flatMap((base, baseIndex) =>
  laptopConfigVariants.map((variant, variantIndex) =>
    buildProduct(400 + baseIndex * 4 + variantIndex, {
      id: `dell-laptop-${baseIndex + 1}-${variant.label}`,
      name: `${base.name} ${variant.label}`,
      brand: "Dell",
      category: "computers-laptops",
      subcategory: "Dell Laptops",
      categoryLabel: "Dell Laptops",
      price: base.price + variant.price,
      oldPrice: base.price + variant.price + 9500,
      shortSpec: `${base.cpu} · ${variant.ram} · ${variant.storage} · ${base.display}`,
      description: `${base.name} balances productivity, portability and value for students and growing teams.`,
      specs: [
        { label: "CPU", value: base.cpu },
        { label: "RAM", value: variant.ram },
        { label: "Storage", value: variant.storage },
        { label: "Display", value: `${base.display} FHD` },
      ],
      imageUrl: pick(laptopImages, baseIndex + variantIndex + 1),
      tags: ["dell laptops", "student laptops", "computers", "laptops", "office laptops"],
      featured: base.name.includes("Latitude 5420") && variantIndex === 2,
      icon: "laptop",
    }),
  ),
);

const lenovoLaptops = lenovoLaptopBases.flatMap((base, baseIndex) =>
  laptopConfigVariants.map((variant, variantIndex) =>
    buildProduct(440 + baseIndex * 4 + variantIndex, {
      id: `lenovo-laptop-${baseIndex + 1}-${variant.label}`,
      name: `${base.name} ${variant.label}`,
      brand: "Lenovo",
      category: "computers-laptops",
      subcategory: "Lenovo Laptops",
      categoryLabel: "Lenovo Laptops",
      price: base.price + variant.price,
      oldPrice: base.price + variant.price + 9800,
      shortSpec: `${base.cpu} · ${variant.ram} · ${variant.storage} · ${base.display}`,
      description: `${base.name} is a versatile Lenovo machine built for business, study and long work sessions.`,
      specs: [
        { label: "CPU", value: base.cpu },
        { label: "RAM", value: variant.ram },
        { label: "Storage", value: variant.storage },
        { label: "Display", value: `${base.display} FHD` },
      ],
      imageUrl: pick(laptopImages, baseIndex + variantIndex + 2),
      tags: ["lenovo laptops", "business laptops", "computers", "laptops", "work laptops"],
      featured: base.name.includes("ThinkPad T14") && variantIndex === 2,
      icon: "laptop",
    }),
  ),
);

const appleLaptops = appleLaptopBases.flatMap((base, baseIndex) =>
  laptopConfigVariants.map((variant, variantIndex) =>
    buildProduct(480 + baseIndex * 4 + variantIndex, {
      id: `apple-laptop-${baseIndex + 1}-${variant.label}`,
      name: `${base.name} ${variant.label}`,
      brand: "Apple",
      category: "computers-laptops",
      subcategory: "Apple Laptops",
      categoryLabel: "Apple Laptops",
      price: base.price + variant.price,
      oldPrice: base.price + variant.price + 14000,
      shortSpec: `${base.cpu} · ${variant.ram} · ${variant.storage} · ${base.display} Retina`,
      description: `${base.name} offers premium Apple laptop performance for creators, developers and everyday professionals.`,
      specs: [
        { label: "Chip", value: base.cpu },
        { label: "RAM", value: variant.ram },
        { label: "Storage", value: variant.storage },
        { label: "Display", value: `${base.display} Retina` },
      ],
      imageUrl: pick(laptopImages, baseIndex + variantIndex + 3),
      tags: ["apple laptops", "macbooks", "macbook", "computers", "laptops"],
      featured: base.name.includes("MacBook Pro") && variantIndex === 1,
      icon: "laptop",
    }),
  ),
);

const gamingLaptops = gamingLaptopBases.flatMap((base, baseIndex) =>
  laptopConfigVariants.map((variant, variantIndex) =>
    buildProduct(520 + baseIndex * 4 + variantIndex, {
      id: `${slugify(base.brand)}-gaming-laptop-${baseIndex + 1}-${variant.label}`,
      name: `${base.name} ${variant.label}`,
      brand: base.brand,
      category: "computers-laptops",
      subcategory: "Gaming Laptops",
      categoryLabel: "Gaming Laptops",
      price: base.price + variant.price,
      oldPrice: base.price + variant.price + 12000,
      shortSpec: `${base.cpu} · ${base.gpu} · ${variant.ram} · ${base.display}`,
      description: `${base.name} is built for gaming, streaming and demanding design work with dedicated RTX graphics.`,
      specs: [
        { label: "CPU", value: base.cpu },
        { label: "GPU", value: base.gpu },
        { label: "RAM", value: variant.ram },
        { label: "Storage", value: variant.storage },
      ],
      imageUrl: pick(laptopImages, baseIndex + variantIndex + 4),
      tags: ["gaming laptops", "gaming", "rtx laptop", "computers", "laptops"],
      icon: "laptop",
    }),
  ),
);

const desktops = desktopBases.flatMap((base, baseIndex) =>
  desktopConfigVariants.map((variant, variantIndex) =>
    buildProduct(560 + baseIndex * 4 + variantIndex, {
      id: `${slugify(base.brand)}-desktop-${baseIndex + 1}-${variant.label}`,
      name: `${base.name} ${variant.label}`,
      brand: base.brand,
      category: "computers-laptops",
      subcategory: "Desktops",
      categoryLabel: "Desktops",
      price: base.price + variant.price,
      oldPrice: base.price + variant.price + 8500,
      shortSpec: `${base.cpu} · ${variant.ram} · ${variant.storage} · Desktop`,
      description: `${base.name} is designed for office work, labs, POS stations and heavy multitasking on a fixed desk.`,
      specs: [
        { label: "CPU", value: base.cpu },
        { label: "RAM", value: variant.ram },
        { label: "Storage", value: variant.storage },
        { label: "Form Factor", value: "Desktop / Tower" },
      ],
      imageUrl: pick(desktopImages, baseIndex + variantIndex),
      tags: ["desktops", "desktop pcs", "computers", "office desktops"],
      icon: "monitor",
    }),
  ),
);

function buildAccessoryGroup(
  offset: number,
  bases: { brand: string; name: string; feature: string; price: number }[],
  subcategory: string,
  icon: Product["icon"],
  imagePool: string[],
  tags: string[],
) {
  return bases.flatMap((base, baseIndex) =>
    accessoryVariants.map((variant, variantIndex) =>
      buildProduct(offset + baseIndex * 4 + variantIndex, {
        id: `${slugify(base.brand)}-${slugify(subcategory)}-${baseIndex + 1}-${variant.label}`,
        name: `${base.name} ${variant.label}`,
        brand: base.brand,
        category: "computer-accessories",
        subcategory,
        categoryLabel: subcategory,
        price: base.price + variant.price,
        oldPrice: base.price + variant.price + 600,
        shortSpec: `${base.feature} · ${variant.label}`,
        description: `${base.name} is a reliable ${subcategory.toLowerCase()} option for daily office and home use.`,
        specs: [
          { label: "Type", value: subcategory },
          { label: "Feature", value: base.feature },
          { label: "Edition", value: variant.label },
          { label: "Use", value: "Office / Home" },
        ],
        imageUrl: pick(imagePool, baseIndex + variantIndex),
        tags: [subcategory.toLowerCase(), ...tags, base.brand.toLowerCase()],
        icon,
      }),
    ),
  );
}

const keyboards = buildAccessoryGroup(
  600,
  keyboardBases,
  "Keyboards",
  "keyboard",
  accessoryImages,
  ["computer accessories", "keyboards"],
);
const mice = buildAccessoryGroup(640, mouseBases, "Mice", "mouse", accessoryImages, [
  "computer accessories",
  "mice",
]);
const webcams = buildAccessoryGroup(680, webcamBases, "Webcams", "monitor", accessoryImages, [
  "computer accessories",
  "webcams",
]);
const laptopBags = buildAccessoryGroup(720, bagBases, "Laptop Bags", "keyboard", bagImages, [
  "computer accessories",
  "laptop bags",
]);

function buildCctvGroup(
  offset: number,
  bases: { brand: string; name: string; feature: string; price: number }[],
  subcategory: string,
  extraTags: string[],
) {
  return bases.flatMap((base, baseIndex) =>
    accessoryVariants.map((variant, variantIndex) =>
      buildProduct(offset + baseIndex * 4 + variantIndex, {
        id: `${slugify(base.brand)}-${slugify(subcategory)}-${baseIndex + 1}-${variant.label}`,
        name: `${base.name} ${base.feature} ${variant.label}`,
        brand: base.brand,
        category: "cctv-security",
        subcategory,
        categoryLabel: subcategory,
        price: base.price + variant.price,
        oldPrice: base.price + variant.price + 900,
        shortSpec: `${base.feature} · Night vision · Weather rated`,
        description: `${base.name} is suitable for homes, shops, offices and other surveillance projects.`,
        specs: [
          { label: "Type", value: subcategory },
          { label: "Resolution / Kit", value: base.feature },
          { label: "Use", value: "Indoor / Outdoor" },
          { label: "Edition", value: variant.label },
        ],
        imageUrl: pick(cctvImages, baseIndex + variantIndex),
        tags: [
          "cctv cameras",
          "security",
          subcategory.toLowerCase(),
          ...extraTags,
          base.brand.toLowerCase(),
        ],
        icon: "cctv",
      }),
    ),
  );
}

const cctvCameras = buildCctvGroup(760, cctvBases, "CCTV Cameras", ["analog cameras"]);
const ipCameras = buildCctvGroup(800, ipCameraBases, "IP Cameras", ["network cameras"]);
const dvrSystems = buildCctvGroup(840, dvrBases, "DVR/NVR Systems", ["dvr", "nvr"]);

function buildPrinterGroup(
  offset: number,
  bases: { brand: string; name: string; feature: string; price: number }[],
  subcategory: string,
) {
  return bases.flatMap((base, baseIndex) =>
    accessoryVariants.map((variant, variantIndex) =>
      buildProduct(offset + baseIndex * 4 + variantIndex, {
        id: `${slugify(base.brand)}-${slugify(subcategory)}-${baseIndex + 1}-${variant.label}`,
        name: `${base.name} ${variant.label}`,
        brand: base.brand,
        category: "printers-office",
        subcategory,
        categoryLabel: subcategory,
        price: base.price + variant.price,
        oldPrice: base.price + variant.price + 1400,
        shortSpec: `${base.feature} · Office ready · ${variant.label}`,
        description: `${base.name} is a dependable ${subcategory.toLowerCase()} option for business, school and retail workflows.`,
        specs: [
          { label: "Type", value: subcategory },
          { label: "Technology", value: base.feature },
          { label: "Edition", value: variant.label },
          { label: "Connectivity", value: "USB / LAN / Wi-Fi" },
        ],
        imageUrl: pick(printerImages, baseIndex + variantIndex),
        tags: ["printers", subcategory.toLowerCase(), base.brand.toLowerCase()],
        icon: "printer",
      }),
    ),
  );
}

const laserPrinters = buildPrinterGroup(880, laserPrinterBases, "Laser Printers");
const inkjetPrinters = buildPrinterGroup(920, inkjetPrinterBases, "Inkjet Printers");
const receiptPrinters = buildPrinterGroup(960, receiptPrinterBases, "Receipt Printers");
const barcodePrinters = buildPrinterGroup(1000, barcodePrinterBases, "Barcode Printers");

function buildNetworkingGroup(
  offset: number,
  bases: { brand: string; name: string; feature: string; price: number }[],
  subcategory: string,
) {
  return bases.flatMap((base, baseIndex) =>
    accessoryVariants.map((variant, variantIndex) =>
      buildProduct(offset + baseIndex * 4 + variantIndex, {
        id: `${slugify(base.brand)}-${slugify(subcategory)}-${baseIndex + 1}-${variant.label}`,
        name: `${base.name} ${base.feature} ${variant.label}`,
        brand: base.brand,
        category: "networking",
        subcategory,
        categoryLabel: subcategory,
        price: base.price + variant.price,
        oldPrice: base.price + variant.price + 1200,
        shortSpec: `${base.feature} · Reliable networking · ${variant.label}`,
        description: `${base.name} helps build reliable home, office and project-based networks with stable connectivity.`,
        specs: [
          { label: "Type", value: subcategory },
          { label: "Feature", value: base.feature },
          { label: "Edition", value: variant.label },
          { label: "Deployment", value: "Home / Office / SME" },
        ],
        imageUrl: pick(networkingImages, baseIndex + variantIndex),
        tags: ["networking equipment", subcategory.toLowerCase(), base.brand.toLowerCase()],
        icon: "router",
      }),
    ),
  );
}

const routers = buildNetworkingGroup(1040, routerBases, "Routers");
const switches = buildNetworkingGroup(1080, switchBases, "Switches");
const accessPoints = buildNetworkingGroup(1120, accessPointBases, "Access Points");
const modems = buildNetworkingGroup(1160, modemBases, "Modems");

function buildStorageGroup(
  offset: number,
  bases: { brand: string; name: string; feature: string; price: number }[],
  subcategory: string,
  variants: { label: string; price: number }[],
) {
  return bases.flatMap((base, baseIndex) =>
    variants.map((variant, variantIndex) =>
      buildProduct(offset + baseIndex * 4 + variantIndex, {
        id: `${slugify(base.brand)}-${slugify(subcategory)}-${baseIndex + 1}-${variant.label}`,
        name: `${base.name} ${variant.label}`,
        brand: base.brand,
        category: "storage-components",
        subcategory,
        categoryLabel: subcategory,
        price: base.price + variant.price,
        oldPrice: base.price + variant.price + 1000,
        shortSpec: `${base.feature} · ${variant.label}`,
        description: `${base.name} gives you dependable ${subcategory.toLowerCase()} performance for upgrades, backups and workstation builds.`,
        specs: [
          { label: "Type", value: subcategory },
          { label: "Series", value: base.feature },
          { label: "Capacity / Size", value: variant.label },
          { label: "Use", value: "Upgrade / Build / Backup" },
        ],
        imageUrl: pick(storageImages, baseIndex + variantIndex),
        tags: ["storage devices", subcategory.toLowerCase(), base.brand.toLowerCase()],
        icon: "ssd",
      }),
    ),
  );
}

const ssds = buildStorageGroup(1200, ssdBases, "SSDs", storageVariants);
const hardDrives = buildStorageGroup(1240, hddBases, "Hard Drives", storageVariants);
const ram = buildStorageGroup(1280, ramBases, "RAM", ramVariants);
const gpus = buildStorageGroup(1320, gpuBases, "GPUs", [
  { label: "8GB", price: 0 },
  { label: "12GB", price: 18000 },
  { label: "16GB", price: 32000 },
  { label: "OC Edition", price: 9500 },
]);

export const PRODUCTS: Product[] = [
  ...hpLaptops,
  ...dellLaptops,
  ...lenovoLaptops,
  ...appleLaptops,
  ...gamingLaptops,
  ...desktops,
  ...iPhones,
  ...samsungPhones,
  ...androidPhones,
  ...tablets,
  ...smartWatches,
  ...powerBanks,
  ...chargers,
  ...earbuds,
  ...speakers,
  ...keyboards,
  ...mice,
  ...webcams,
  ...laptopBags,
  ...cctvCameras,
  ...ipCameras,
  ...dvrSystems,
  ...laserPrinters,
  ...inkjetPrinters,
  ...receiptPrinters,
  ...barcodePrinters,
  ...routers,
  ...switches,
  ...accessPoints,
  ...modems,
  ...ssds,
  ...hardDrives,
  ...ram,
  ...gpus,
];
