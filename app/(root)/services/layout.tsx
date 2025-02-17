"use client";
import type React from "react";
import Link from "next/link";
import HeroWithBreadcrumb from "@/components/HeroWithBreadcrumb";
import { usePathname } from "next/navigation";

interface ServiceLayoutProps {
	children: React.ReactNode;
}

const Layout = ({ children }: ServiceLayoutProps) => {
	const pathname = usePathname().split("/").filter(Boolean)[1];
	const isElectrical = pathname === "electrical";
	return (
		<div className="min-h-screen">
			<HeroWithBreadcrumb
				title={isElectrical ? "Electrical Service" : "Mechanical Service"}
				backgroundImageHref={
					isElectrical ? "/images/electrical.webp" : "/images/mechanical.webp"
				}
				backgroundImageAlt={
					isElectrical
						? "Electrical Service related Photo"
						: "Mechanical Service related Photo"
				}
				color="white"
			/>
			<div className="layout">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-6">
					<div className="space-y-1">
						<Link
							href="electrical"
							className={`block w-full p-2 text-sm font-medium rounded-md ${
								pathname === "electrical"
									? "bg-primary-50 text-black"
									: "text-slate-600 hover:bg-primary-50"
							}`}
						>
							Electrical Service
						</Link>
						<Link
							href="mechanical"
							className={`block w-full p-2 text-sm font-medium rounded-md ${
								pathname === "mechanical"
									? "bg-primary-50 text-black"
									: "text-slate-600 hover:bg-slate-50"
							}`}
						>
							Mechanical Service
						</Link>
					</div>

					<div className="md:col-span-3">{children}</div>
				</div>
			</div>
		</div>
	);
};

export default Layout;
