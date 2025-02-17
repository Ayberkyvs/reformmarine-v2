import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

interface ServiceItem {
	title: string;
	description: string;
}

interface ServiceAccordionProps {
	services: ServiceItem[];
}

export function ServiceAccordion({ services }: ServiceAccordionProps) {
	return (
		<Accordion type="single" collapsible className="space-y-2">
			{services.map((service, index) => (
				<AccordionItem
					key={index}
					value={`item-${index}`}
					className="bg-white border rounded-md"
				>
					<AccordionTrigger className="px-4 hover:no-underline">
						<span className="text-left">{service.title}</span>
					</AccordionTrigger>
					<AccordionContent className="px-4">
						<p>{service.description}</p>
					</AccordionContent>
				</AccordionItem>
			))}
		</Accordion>
	);
}
