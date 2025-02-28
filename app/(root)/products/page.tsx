import ProductGrid from "@/components/ProductGrid";
import ProductSidebar from "@/components/ProductSidebar";
import HeroWithBreadcrumb from "@/components/HeroWithBreadcrumb";
import { getCategoriesQuery, getProductsQuery } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";

export const revalidate = 60;

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
          <ProductSidebar categories={categories} />
          <main className="flex-1">
            <ProductGrid initialProducts={products} />
          </main>
        </div>
      </div>
    </>
  );
};

export default Page;
