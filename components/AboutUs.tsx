import React from "react";
import SectionHeading from "./SectionHeading";
import Stats from "./Stats";
import FadeIn from "./animations/FadeIn";
import { statsData } from "@/lib/data";

const AboutUs = () => {
	return (
		<>
			<div className="layout gap-5 grid grid-cols-1 lg:grid-cols-[1fr_1fr]">
				<SectionHeading
					title="Reform Marine"
					subtitle="ABOUT US"
					description="Reform Marine  activity is providing mechanical and electrical service for ship and supplying spare parts. Our goal is to ensure safety and satisfaction in maritime operations by delivering high-quality service and a wide range of products to our customers in a timely and reliable manner.With our expert team and wide range of services, we offer fast and reliable solutions to all kinds of maritime needs of our customers. Reform Marine is proud to be a reliable service in the maritime world. We constantly improve ourselves and follow innovative technologies to understand the needs of our customers and offer them the most suitable solutions.
Reform Marine is a company that set out with the mission of providing innovative and high-quality solutions to the maritime sector."
				/>
				<FadeIn direction="left" delay={0.3} duration={0.8}>
					<div className="flex flex-col gap-5 h-full">
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12076.489097905895!2d29.312066261429493!3d40.825277835552306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cadd7659685b97%3A0x9f8ad867e6e6cc0e!2sReform%20Marine!5e0!3m2!1str!2str!4v1739734303765!5m2!1str!2str"
							loading="lazy"
							className="size-full"
							title="Reform Marine Location"
						></iframe>
						<Stats stats={statsData} variant="default" />
					</div>
				</FadeIn>
			</div>
		</>
	);
};

export default AboutUs;
