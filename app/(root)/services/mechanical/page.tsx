import { ServiceAccordion } from "@/components/ServiceAccordion";
import { client } from "@/sanity/lib/client";
import { getServicesByCategory } from "@/sanity/lib/queries";
import type { Metadata } from "next";
import NoFoundAlert from "../../../../components/NoFoundAlert";

export const revalidate = 120;
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
const Mechanical = async () => {
  const mechanicalServices = await client.fetch(getServicesByCategory, {
    category: "Mechanical",
  });
  return (
    <>
      <h2 className="h5 mb-6 font-semibold">Mechanical Service</h2>
      {mechanicalServices.length > 0 ? (
        <ServiceAccordion services={mechanicalServices} />
      ) : (
        <NoFoundAlert
          title="No Mechanical Services Found!"
          description="We are sorry, but there are no services available at the moment."
        />
      )}
    </>
  );
};
export default Mechanical;
