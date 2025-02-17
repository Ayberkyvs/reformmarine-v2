import { ServiceAccordion } from "@/components/ServiceAccordion";
import { services } from "@/lib/data";

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
