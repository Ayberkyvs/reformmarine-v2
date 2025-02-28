"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import type { Product } from "@/sanity/types";
import NotFoundAlert from "./NotFoundAlert";
import Link from "next/link";
import { Rocket, X } from "lucide-react";
import { cn } from "@/lib/utils";
import LoaderComponent from "./Loader";

interface ProductGridProps {
  initialProducts: (Omit<Product, "categories"> & {
    categories: { slug: { current: string } }[];
  })[];
}

const ProductGrid = ({ initialProducts }: ProductGridProps) => {
  const searchParams = useSearchParams();
  const [products, setProducts] = useState(initialProducts || []);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const search = searchParams.get("search");
    const sort = searchParams.get("sort");
    const categories = searchParams.get("categories")?.split(",");

    let filteredProducts = [...initialProducts];

    if (search) {
      filteredProducts = filteredProducts.filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase()),
      );
    }

    if (categories?.length) {
      filteredProducts = filteredProducts.filter((product) =>
        product.categories.some((cat) =>
          categories?.includes(cat.slug.current),
        ),
      );
    }

    if (sort) {
      filteredProducts.sort((a, b) => {
        switch (sort) {
          case "price-low-high":
            return a.price - b.price;
          case "price-high-low":
            return b.price - a.price;
          case "name-a-z":
            return a.title.localeCompare(b.title);
          case "name-z-a":
            return b.title.localeCompare(a.title);
          default:
            return 0;
        }
      });
    }

    setProducts(filteredProducts);
    setLoading(false);
  }, [searchParams, initialProducts]);

  console.log(products);
  return (
    <>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {products.length > 0 &&
          !loading &&
          products.map((product) => (
            <Link
              href={`/products/${product.slug.current}`}
              key={product._id}
              className={cn(
                "relative aspect-auto h-fit rounded-lg border p-4",
                {
                  "opacity-80": !product.isOnSale,
                  "border-2 border-primary-200": product.isFeatured,
                },
              )}
            >
              {product.isFeatured && (
                <span className="small absolute left-2 top-2 rounded bg-primary-500 px-2 py-1 text-white">
                  <Rocket className="mr-px inline size-[1.2em]" /> Users Liked
                </span>
              )}
              {!product.isOnSale && (
                <span className="small absolute left-2 top-2 rounded bg-red-500 px-2 py-1 text-white">
                  <X className="mr-px inline size-[1.2em]" /> Not Avaliable
                </span>
              )}
              {product.mainImage && (
                <Image
                  src={urlFor(product.mainImage).url() || "/placeholder.svg"}
                  alt={product.title}
                  width={300}
                  height={300}
                  className="mb-4 h-40 w-full rounded border border-neutral-50 object-cover"
                />
              )}
              <h3 className="inline text-xl font-semibold">{product.title}</h3>
              <div className="float-end inline-flex flex-col items-end justify-center">
                {product?.compareAtPrice && (
                  <span className="small -mb-2 text-accent-500 line-through">
                    ${product?.compareAtPrice.toFixed(2)}
                  </span>
                )}
                <span className="p text-gray-800">
                  ${product.price.toFixed(2)}
                </span>
              </div>
              <p className="p mt-4 text-base">{product.description}</p>
            </Link>
          ))}
      </div>

      {products.length <= 0 && !loading && (
        <NotFoundAlert
          title="No products found"
          description="Sorry, we couldn't find any products matching your search."
        />
      )}

      {loading && <LoaderComponent className="h-[300px] w-full" />}
    </>
  );
};

export default ProductGrid;
