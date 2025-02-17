import type { SocialLink } from "@/types";
import Link from "next/link";
interface SocialsProps {
	links: SocialLink[];
	className: string;
}
const Socials = ({ links, className }: SocialsProps) => {
	return (
		<>
			<div className={className}>
				{links.map((link: SocialLink, index: number) => (
					<Link key={link.href + index} href={link.href} className="size-[1em]">
						{link.icon}
					</Link>
				))}
			</div>
		</>
	);
};

export default Socials;
