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
			<h6 className="h6 uppercase">{subtitle}</h6>
			<h3 className="h4 xs:h3 font-semibold">{title}</h3>
			<p className="p">{description}</p>
		</div>
	);
};

export default SectionHeading;
