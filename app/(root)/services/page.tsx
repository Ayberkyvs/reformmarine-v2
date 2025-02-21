import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Reform Marine activity is providing mechanical and electrical service for ship and supplying spare parts. Our goal is to ensure safety and satisfaction in maritime operations by delivering high-quality service and a wide range of products to our customers in a timely and reliable manner.",
  openGraph: {
    title: "Services",
    description:
      "Reform Marine activity is providing mechanical and electrical service for ship and supplying spare parts. Our goal is to ensure safety and satisfaction in maritime operations by delivering high-quality service and a wide range of products to our customers in a timely and reliable manner.",
    type: "website",
    images: [
      {
        url: "https://reformmarine.com/images/services.webp",
        width: 1200,
        height: 630,
        alt: "Services",
      },
    ],
    url: "https://reformmarine.com/services",
  },
};

const ServiceCard = ({
  title,
  description,
  href,
  image,
}: {
  title: string;
  description: string;
  href: string;
  image: string;
}) => (
  <Link href={href || "/"}>
    <Card>
      <CardHeader>
        <Image
          src={image}
          alt={title}
          width={300}
          height={200}
          objectFit="cover"
          className="mb-2 aspect-video w-full rounded-md"
        />
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{description}</p>
      </CardContent>
      <CardFooter>
        <Button className="bg-accent-500 text-white hover:bg-accent-600">
          Learn More
        </Button>
      </CardFooter>
    </Card>
  </Link>
);
const Page = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <ServiceCard
          title="Electrical Service"
          description="Reform Marine, as a company specialising in electrical systems maintenance and repair, offers tailor-made solutions to the maritime industry. Our professional teams optimise the travel experience by improving the safety and performance of vessels with electrical maintenance services."
          image="/images/electrical.webp"
          href="/services/electrical"
        />
        <ServiceCard
          title="Mechanical Service"
          description="Reform Marine, as a company specialized senior engineer are perform to maintenance of ship mechanical services. This power includes engine maintenance and repair, maintenance of hydraulic systems,fuel system,quality of lubrication oil and also pneumatic equipment maintenance."
          image="/images/mechanical.webp"
          href="/services/mechanical"
        />
      </div>
    </>
  );
};

export default Page;
