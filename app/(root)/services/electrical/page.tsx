import { ServiceAccordion } from "@/components/ServiceAccordion";
import { services } from "@/lib/data";

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
