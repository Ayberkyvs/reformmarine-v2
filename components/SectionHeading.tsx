import React from "react";
import FadeIn from "./animations/FadeIn";

const SectionHeading = ({
	title,
	subtitle,
	description,
}: {
	title: string;
	subtitle?: string;
	description: string;
}) => {
	return (
		<>
			<FadeIn direction="up">
				<div className="section-heading max-w-[600px]">
					<h6 className="h6 uppercase">{subtitle}</h6>
					<h3 className="h4 xs:h3 font-semibold">{title}</h3>
					<p className="p">{description}</p>
				</div>
			</FadeIn>
		</>
	);
};

export default SectionHeading;
