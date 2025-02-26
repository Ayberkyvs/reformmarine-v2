import { ProductGrid } from "@/components/ProductGrid";
import { ProductSidebar } from "@/components/ProductSidebar";
import React from "react";
import HeroWithBreadcrumb from "@/components/HeroWithBreadcrumb";

const Page = () => {
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
          <ProductSidebar />
          <main className="flex-1">
            <ProductGrid />
          </main>
        </div>
      </div>
    </>
  );
};

export default Page;
