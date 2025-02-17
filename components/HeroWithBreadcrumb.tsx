"use client";
import { usePathname } from "next/navigation";
import BreadCrumb from "./BreadCrumb";
import Image from "next/image";
import { cn } from "@/lib/utils";

const HeroWithBreadcrumb = ({
	title,
	backgroundImageHref,
	backgroundImageAlt,
	color,
}: {
	title: string;
	backgroundImageHref: string;
	backgroundImageAlt: string;
	color: "primary" | "accent" | "white" | "black";
}) => {
	const pathname = usePathname().split("/").filter(Boolean);
	console.log(pathname);
	const colorClassName = `text-${color}`;
	return (
		<>
			<section className="w-full">
				<div className="relative flex flex-col items-start justify-center w-full aspect-video lg:aspect-[16/6]">
					<Image
						src={backgroundImageHref}
						alt={backgroundImageAlt}
						fill
						className="z-[-1] object-cover"
					/>
					<div className="layout">
						<h1 className={cn("h2 sm:h1 font-semibold", colorClassName)}>
							{title}
						</h1>
						<BreadCrumb pathname={pathname} className={colorClassName} />
					</div>
				</div>
			</section>
		</>
	);
};

export default HeroWithBreadcrumb;
