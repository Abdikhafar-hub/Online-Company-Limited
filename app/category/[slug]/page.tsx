import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import { CatalogBrowser } from "@/components/catalog-browser";
import { PageHero, SiteLayout } from "@/components/site-layout";
import { filterCatalogProducts } from "@/lib/catalog-service";
import { getCategoryImage } from "@/lib/product-images";
import { CATEGORIES } from "@/lib/site-data";

type CategoryPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = CATEGORIES.find((item) => item.slug === slug);

  if (!category) {
    return {
      title: "Category not found",
    };
  }

  return {
    title: category.name,
    description: category.description,
  };
}

export function generateStaticParams() {
  return CATEGORIES.map((category) => ({ slug: category.slug }));
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = CATEGORIES.find((item) => item.slug === slug);

  if (!category) {
    notFound();
  }

  const products = filterCatalogProducts({ category: category.slug });
  const image = getCategoryImage(category.slug);

  return (
    <SiteLayout>
      <PageHero
        breadcrumb={`Home / ${category.name}`}
        image={image}
        kicker="Category Page"
        title={category.name}
      >
        <p>{category.description}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {category.chips.map((chip) => (
            <span
              key={chip}
              className="rounded-full bg-cream-deep px-3 py-1.5 text-xs font-semibold text-navy-soft"
            >
              {chip}
            </span>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 rounded-full border border-navy/20 px-4 py-2 text-sm font-semibold text-navy"
          >
            <ArrowLeft className="h-4 w-4" /> Back to shop
          </Link>
          <span className="inline-flex items-center rounded-full bg-cream-deep px-4 py-2 text-sm font-semibold text-navy">
            {products.length} matching products
          </span>
        </div>
      </PageHero>
      <CatalogBrowser initialCategory={category.slug} lockCategory />
    </SiteLayout>
  );
}
