import type { Product } from "@/lib/site-data";
import { getProductImage } from "@/lib/product-images";
import { RemoteImage } from "./remote-image";

export function ProductVisual({
  product,
  size = "md",
}: {
  product: Product;
  size?: "sm" | "md" | "lg";
}) {
  const image = getProductImage(product);
  const sizes =
    size === "lg"
      ? "(min-width: 1024px) 42vw, 92vw"
      : size === "sm"
        ? "(min-width: 1024px) 10rem, 6rem"
        : "(min-width: 1280px) 18rem, (min-width: 640px) 24rem, 92vw";

  return (
    <RemoteImage
      alt={image.alt}
      className="h-full w-full rounded-2xl"
      fallbackLabel={image.fallbackLabel}
      imageClassName="object-cover"
      sizes={sizes}
      src={image.src}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-navy/10 via-transparent to-transparent" />
    </RemoteImage>
  );
}
