import { GENERATED_PRODUCTS } from "../../data/products.generated";
import { sanitizeProductForDisplay } from "@/lib/product-display";

export const PHONEPLACE_PRODUCTS = GENERATED_PRODUCTS.map(sanitizeProductForDisplay);
