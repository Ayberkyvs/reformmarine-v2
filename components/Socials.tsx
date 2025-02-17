import { cn } from "@/lib/utils";
import type { SocialLink } from "@/types";
import Link from "next/link";
import React from "react";

interface SocialsProps {
	links: SocialLink[];
	className: string;
}
const Socials = ({ links, className }: SocialsProps) => {
	return (
		<>
			<div className={className}>
				{links.map((link: SocialLink, index: number) => (
					<Link key={index} href={link.href}>
						{link.icon}
					</Link>
				))}
			</div>
		</>
	);
};

export default Socials;
