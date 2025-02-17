import React from "react";
import AboutUs from "../../../components/AboutUs";
import SectionHeading from "@/components/SectionHeading";
import Image from "next/image";
import { cn } from "@/lib/utils";
import FadeIn from "@/components/animations/FadeIn";
import HeroWithBreadcrumb from "@/components/HeroWithBreadcrumb";

interface AboutUsSectionProps {
	title: string;
	isReverse: boolean;
	subtitle: string;
	description: string;
	imageHref: string;
	imageAlt: string;
}
const AboutUsSection = ({ ...props }: AboutUsSectionProps) => {
	const { title, subtitle, description, imageHref, imageAlt, isReverse } =
		props;
	return (
		<div className="w-full">
			<div className="layout grid grid-cols-1 lg:grid-cols-2 items-start gap-5 h-fit">
				<div className={cn("h-fit", isReverse ? "lg:order-2" : "lg:order-1")}>
					<SectionHeading
						title={title}
						subtitle={subtitle}
						description={description}
					/>
				</div>
				<FadeIn
					direction={isReverse ? "right" : "left"}
					className={cn("w-fit h-fit", isReverse ? "lg:order-1" : "lg:order-2")}
				>
					<Image
						src={imageHref}
						alt={imageAlt}
						width={640}
						height={360}
						className="w-full h-full aspect-video"
					/>
				</FadeIn>
			</div>
		</div>
	);
};
const Page = () => {
	return (
		<>
			<HeroWithBreadcrumb
				title="About Us"
				backgroundImageHref="/images/about-us.webp"
				backgroundImageAlt="Aerial Photography of Cityscape at Night"
				color="white"
			/>
			<div className="about">
				<AboutUs />
			</div>
			<AboutUsSection
				title="Our Mission"
				subtitle="About Us"
				imageAlt="Close Up Photo of People Holding Puzzle Pieces"
				description="Reform Marine aims to provide sustainable and innovative solutions in the maritime industry by delivering eco-friendly and efficient maintenance services. Our mission is to minimize the environmental impact of maritime transportation by utilizing advanced technologies, contribute to the development of the industry, and ensure the highest quality standards in the maritime field. As Reform Marine, we strive to meet our customers' needs in the best possible way, adding value to the global maritime industry through reliable, responsible, and ethical business practices."
				imageHref="/images/mission.webp"
				isReverse={true}
			/>
			<AboutUsSection
				title="Our Vision"
				subtitle="About Us"
				imageAlt="Puzzle Piece in a Wooden Hand"
				description="Reform Marine, our vision is to be a top quality service covering the world by combining sustainability and development in the maritime sector. We aim to provide the highest efficiency standards in the industry by using environmentally friendly practices and advanced technologies. We aim to create a lasting and positive impact in the maritime service field with quality services. As Reform Marine, we are committed to providing advanced and sustainable solutions that shape the sea of the future."
				imageHref="/images/vision.webp"
				isReverse={false}
			/>
		</>
	);
};

export default Page;
