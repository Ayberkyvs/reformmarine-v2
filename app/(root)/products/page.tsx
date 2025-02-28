import ProductGrid from "@/components/ProductGrid";
import ProductSidebar from "@/components/ProductSidebar";
import HeroWithBreadcrumb from "@/components/HeroWithBreadcrumb";
import { getCategoriesQuery, getProductsQuery } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import { Suspense } from "react";
import LoaderComponent from "@/components/Loader";
import type { Metadata } from "next";

export const revalidate = 60;
export const metadata: Metadata = {
  title: "Products",
  description:
    "Extensive product selection, superior workmanship, fast turnaround and on-time delivery make us your one-stop shop.Regardless of brand, the close follow-up of each customer is at the heart of our offering.",
  openGraph: {
    title: "Products",
    description:
      "Extensive product selection, superior workmanship, fast turnaround and on-time delivery make us your one-stop shop.Regardless of brand, the close follow-up of each customer is at the heart of our offering.",
    images: [
      {
        url: "/images/products.webp",
        width: 1200,
        height: 630,
        alt: "Products",
      },
    ],
    url: "https://reformmarine.com/products",
  },
};

const Page = async () => {
  const [products, categories] = await Promise.all([
    client.fetch(getProductsQuery),
    client.fetch(getCategoriesQuery),
  ]);
  return (
    <>
      <HeroWithBreadcrumb
        title="Products"
        backgroundImageHref="/images/products.webp"
        backgroundImageAlt="Products"
        color="text-white sm:text-white"
      />
      <div className="w-full">
        <div className="layout flex flex-col gap-5 xs:flex-row">
          <Suspense fallback={<LoaderComponent className="h-fit w-full" />}>
            <ProductSidebar categories={categories} />
          </Suspense>
          <main className="flex-1">
            <Suspense fallback={<LoaderComponent className="h-fit w-full" />}>
              <ProductGrid initialProducts={products} />
            </Suspense>
          </main>
        </div>
      </div>
    </>
  );
};

export default Page;
