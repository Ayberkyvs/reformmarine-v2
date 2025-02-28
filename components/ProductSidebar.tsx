"use client";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { useSearchParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";

interface Category {
  _id: string;
  title: string;
  slug: { current: string };
  parentCategory: { _id: string; title: string } | null;
  subCategories: { _id: string; title: string; slug: { current: string } }[];
}

interface ProductSidebarProps {
  categories: Category[];
}

const ProductSidebar = ({ categories }: ProductSidebarProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [search, setSearch] = useState(searchParams.get("search") || "");
  const [sort, setSort] = useState(searchParams.get("sort") || "");
  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    searchParams.get("categories")?.split(",") || [],
  );

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    if (search) params.set("search", search);
    else params.delete("search");
    if (sort) params.set("sort", sort);
    else params.delete("sort");
    if (selectedCategories.length)
      params.set("categories", selectedCategories.join(","));
    else params.delete("categories");
    router.push(`/products?${params.toString()}`, { scroll: false });
  }, [search, sort, selectedCategories, router, searchParams]);

  const handleCategoryChange = (slug: string) => {
    setSelectedCategories((prev) =>
      prev.includes(slug) ? prev.filter((c) => c !== slug) : [...prev, slug],
    );
  };

  const parentCategories = categories.filter((cat) => !cat.parentCategory);

  return (
    <aside className="w-full pr-5 xs:w-40 xs:border-r sm:w-64">
      <div className="mb-6">
        <h2 className="mb-2 text-base font-semibold">
          {search ? `Results for '${search}'` : "Search"}
        </h2>
        <div className="relative">
          <Search className="absolute left-2 top-1/2 size-5 -translate-y-1/2 text-gray-400" />
          <Input
            type="search"
            placeholder="Search products..."
            className="pl-9"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="mb-6">
        <h2 className="mb-2 text-base font-semibold">Sort by</h2>
        <Select value={sort} onValueChange={setSort}>
          <SelectTrigger>
            <SelectValue placeholder="Select option" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="price-low-high">Price: Low to High</SelectItem>
            <SelectItem value="price-high-low">Price: High to Low</SelectItem>
            <SelectItem value="name-a-z">Name: A to Z</SelectItem>
            <SelectItem value="name-z-a">Name: Z to A</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <h2 className="mb-2 text-base font-semibold">Categories</h2>
        <Accordion type="multiple" className="w-full">
          {parentCategories.map((parentCat) => (
            <AccordionItem key={parentCat._id} value={parentCat.slug.current}>
              <AccordionTrigger className="text-sm">
                {parentCat.title}
              </AccordionTrigger>
              <AccordionContent>
                {parentCat.subCategories.map((subCat) => (
                  <div key={subCat._id} className="flex items-center space-x-2">
                    <Checkbox
                      id={subCat.slug.current}
                      checked={selectedCategories.includes(subCat.slug.current)}
                      onCheckedChange={() =>
                        handleCategoryChange(subCat.slug.current)
                      }
                    />
                    <label htmlFor={subCat.slug.current}>{subCat.title}</label>
                  </div>
                ))}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </aside>
  );
};

export default ProductSidebar;
