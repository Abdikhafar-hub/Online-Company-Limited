import {
  Laptop, Smartphone, Tablet, Cctv, Printer, Router, HardDrive,
  Headphones, Keyboard, Mouse, Speaker, BatteryFull, Monitor, Watch
} from "lucide-react";
import type { Product } from "@/lib/site-data";

const ICONS = {
  laptop: Laptop, phone: Smartphone, tablet: Tablet, cctv: Cctv, printer: Printer,
  router: Router, ssd: HardDrive, headphones: Headphones, keyboard: Keyboard,
  mouse: Mouse, speaker: Speaker, battery: BatteryFull, monitor: Monitor, watch: Watch,
} as const;

const TONES: Record<Product["tone"], string> = {
  navy: "from-[oklch(0.32_0.06_260)] to-[oklch(0.18_0.04_260)] text-cream",
  graphite: "from-[oklch(0.42_0.02_250)] to-[oklch(0.22_0.02_250)] text-cream",
  sand: "from-[oklch(0.92_0.04_75)] to-[oklch(0.82_0.05_70)] text-navy",
  olive: "from-[oklch(0.55_0.09_120)] to-[oklch(0.35_0.07_130)] text-cream",
  rose: "from-[oklch(0.78_0.12_25)] to-[oklch(0.55_0.18_25)] text-cream",
  steel: "from-[oklch(0.78_0.02_240)] to-[oklch(0.58_0.03_240)] text-navy",
  ink: "from-[oklch(0.25_0.03_260)] to-[oklch(0.12_0.03_260)] text-cream",
};

export function ProductVisual({ product, size = "md" }: { product: Product; size?: "sm" | "md" | "lg" }) {
  const Icon = ICONS[product.icon] ?? Laptop;
  const sz = size === "lg" ? "h-28 w-28" : size === "sm" ? "h-12 w-12" : "h-20 w-20";
  return (
    <div className="relative w-full h-full rounded-2xl bg-beige overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className={`relative rounded-2xl bg-gradient-to-br ${TONES[product.tone]} p-6 shadow-[0_18px_40px_-20px_rgba(11,19,43,0.45)] rotate-[-4deg]`}>
        <Icon className={sz} strokeWidth={1.4} />
      </div>
    </div>
  );
}