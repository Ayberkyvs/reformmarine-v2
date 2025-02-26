import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
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

export function ProductSidebar() {
  return (
    <aside className="w-full border-r pr-5 xs:w-40 sm:w-64">
      <div className="mb-6">
        <h2 className="mb-2 text-lg font-semibold">Search</h2>
        <div className="relative">
          <Search className="absolute left-2 top-1/2 size-5 -translate-y-1/2 text-gray-400" />
          <Input
            type="search"
            placeholder="Search products..."
            className="pl-9"
          />
        </div>
      </div>

      <div className="mb-6">
        <h2 className="mb-2 text-lg font-semibold">Sort by</h2>
        <Select>
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
        <h2 className="mb-2 text-lg font-semibold">Categories</h2>
        <Accordion type="multiple" className="w-full">
          <AccordionItem value="electronics">
            <AccordionTrigger>Electronics</AccordionTrigger>
            <AccordionContent>
              <div className="flex items-center space-x-2">
                <Checkbox id="smartphones" />
                <label htmlFor="smartphones">Smartphones</label>
              </div>
              <div className="mt-2 flex items-center space-x-2">
                <Checkbox id="laptops" />
                <label htmlFor="laptops">Laptops</label>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="clothing">
            <AccordionTrigger>Clothing</AccordionTrigger>
            <AccordionContent>
              <div className="flex items-center space-x-2">
                <Checkbox id="mens" />
                <label htmlFor="mens">Men's</label>
              </div>
              <div className="mt-2 flex items-center space-x-2">
                <Checkbox id="womens" />
                <label htmlFor="womens">Women's</label>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <Button className="mt-6 w-full">Apply Filters</Button>
    </aside>
  );
}
