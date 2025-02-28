import { ServiceAccordion } from "@/components/ServiceAccordion";
import { client } from "@/sanity/lib/client";
import { getServicesByCategory } from "@/sanity/lib/queries";
import type { Metadata } from "next";
import NotFoundAlert from "@/components/NotFoundAlert";

export const revalidate = 120;
export const metadata: Metadata = {
  title: "Electrical Service",
  description:
    "Reform Marine, as a company specialising in electrical systems maintenance and repair, offers tailor-made solutions to the maritime industry. Our professional teams optimise the travel experience by improving the safety and performance of vessels with electrical maintenance services.",
  openGraph: {
    title: "Electrical Service",
    description:
      "Reform Marine, as a company specialising in electrical systems maintenance and repair, offers tailor-made solutions to the maritime industry. Our professional teams optimise the travel experience by improving the safety and performance of vessels with electrical maintenance services.",
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
const Electrical = async () => {
  const electricalServices = await client.fetch(getServicesByCategory, {
    category: "Electrical",
  });
  return (
    <>
      <h2 className="h5 mb-6 font-semibold">Electrical Service</h2>
      {electricalServices.length > 0 ? (
        <ServiceAccordion services={electricalServices} />
      ) : (
        <NotFoundAlert
          title="No Electrical Services Found!"
          description="We are sorry, but there are no services available at the moment."
        />
      )}
    </>
  );
};
export default Electrical;
