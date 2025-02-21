import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "./ui/button";
import Link from "next/link";
import type { Service } from "@/sanity/types";
import { ArrowRight } from "lucide-react";

export function ServiceAccordion({ services }: { services: Service[] }) {
  return (
    <Accordion type="single" collapsible className="space-y-2">
      {services.map((service) => (
        <AccordionItem
          key={service._id}
          value={`item-${service._id}`}
          className="rounded-md border bg-white"
        >
          <AccordionTrigger className="px-4 hover:no-underline">
            <span className="text-left">{service.title}</span>
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-2 px-4">
            <p>{service.description}</p>
            <Link
              href={
                service.category.toLocaleLowerCase() +
                "/" +
                service.slug.current
              }
            >
              <Button
                className="small bg-primary-500 hover:bg-primary-600"
                size="sm"
              >
                Learn More <ArrowRight />
              </Button>
            </Link>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
