import ServiceDetail from "@/components/ServiceDetail";
import { client } from "@/sanity/lib/client";
import {
	getRelatedServices,
	getServiceDetailsBySlug,
} from "@/sanity/lib/queries";
const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
	const slug = (await params)?.slug || "";

	const serviceData = await client.fetch(getServiceDetailsBySlug, { slug });
	const { category } = serviceData;
	const relatedServices = await client.fetch(getRelatedServices, { category });
	return (
		<>
			<ServiceDetail data={serviceData} />
		</>
	);
};

export default Page;
