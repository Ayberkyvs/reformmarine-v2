import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Home } from "lucide-react";
import React from "react";
import { cn } from "../lib/utils";

interface BreadCrumbProps {
	pathname: string[];
	className?: string;
}

const BreadCrumb = ({ pathname, className }: BreadCrumbProps) => {
	return (
		<>
			<Breadcrumb>
				<BreadcrumbList>
					<BreadcrumbItem>
						<BreadcrumbLink href="/">
							<Home className={cn("text-black w-[1em] h-[1em]", className)} />
						</BreadcrumbLink>
					</BreadcrumbItem>
					{pathname.map((segment, index) => {
						const href = `/${pathname.slice(0, index + 1).join("/")}`;
						const isLast = index === pathname.length - 1;

						return (
							<React.Fragment key={index}>
								<BreadcrumbSeparator className={className} />
								<BreadcrumbItem>
									{isLast ? (
										<BreadcrumbPage className={className}>
											{segment}
										</BreadcrumbPage>
									) : (
										<BreadcrumbLink href={href} className={className}>
											{segment}
										</BreadcrumbLink>
									)}
								</BreadcrumbItem>
							</React.Fragment>
						);
					})}
				</BreadcrumbList>
			</Breadcrumb>
		</>
	);
};

export default BreadCrumb;
