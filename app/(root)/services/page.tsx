import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
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
					className="w-full aspect-video mb-2 rounded-md"
				/>
				<CardTitle>{title}</CardTitle>
			</CardHeader>
			<CardContent>
				<p>{description}</p>
			</CardContent>
			<CardFooter>
				<Button className="bg-accent-500 hover:bg-accent-600 text-white">
					Learn More
				</Button>
			</CardFooter>
		</Card>
	</Link>
);
const Page = () => {
	return (
		<>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
