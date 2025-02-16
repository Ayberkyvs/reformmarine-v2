import React from "react";

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
		<div className="section-heading max-w-[600px]">
			<h6 className="uppercase">{subtitle}</h6>
			<h3 className="font-semibold">{title}</h3>
			<p>{description}</p>
		</div>
	);
};

export default SectionHeading;
