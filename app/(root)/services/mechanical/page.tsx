import { ServiceAccordion } from "@/components/ServiceAccordion";
import { services } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Mechanical Service",
	description:
		"Reform Marine, as a company specialized senior engineer are perform to maintenance of ship mechanical services. This power includes engine maintenance and repair, maintenance of hydraulic systems,fuel system,quality of lubrication oil and also pneumatic equipment maintenance.",
	openGraph: {
		title: "Mechanical Service",
		description:
			"Reform Marine, as a company specialized senior engineer are perform to maintenance of ship mechanical services. This power includes engine maintenance and repair, maintenance of hydraulic systems,fuel system,quality of lubrication oil and also pneumatic equipment maintenance.",
		type: "website",
		images: [
			{
				url: "https://reformmarine.com/images/mechanical.webp",
				width: 1200,
				height: 630,
				alt: "Mechanical Service",
			},
		],
		url: "https://reformmarine.com/services/mechanical",
	},
};
const Mechanical = () => {
	const { mechanicalServices } = services;
	return (
		<>
			<h2 className="h5 font-semibold mb-6">Mechanical Service</h2>
			<ServiceAccordion services={mechanicalServices} />
		</>
	);
};
export default Mechanical;
