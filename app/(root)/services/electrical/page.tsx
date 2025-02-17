import { ServiceAccordion } from "@/components/ServiceAccordion";
import { services } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Electrical Service",
	description:
		"Reform Marine, as a company specialising in electrical systems maintenance and repair, offers tailor-made solutions to the maritime industry. Our professional teams optimise the travel experience by improving the safety and performance of vessels with electrical maintenance services.",
	openGraph: {
		title: "Electrical Service",
		description:
			"Reform Marine, as a company specialising in electrical systems maintenance and repair, offers tailor-made solutions to the maritime industry. Our professional teams optimise the travel experience by improving the safety and performance of vessels with electrical maintenance services.",
		type: "website",
		images: [
			{
				url: "https://reformmarine.com/images/electrical.webp",
				width: 1200,
				height: 630,
				alt: "Electrical Service",
			},
		],
		url: "https://reformmarine.com/services/electrical",
	},
};
const Electrical = () => {
	const { electricalServices } = services;
	return (
		<>
			<h2 className="h5 font-semibold mb-6">Electrical Service</h2>
			<ServiceAccordion services={electricalServices} />
		</>
	);
};
export default Electrical;
