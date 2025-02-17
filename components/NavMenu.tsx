"use client";

import type * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { usePathname } from "next/navigation";

export type NavItem = {
	name: string;
	href?: string;
	image?: string;
	isDisabled: boolean;
	items?: {
		name: string;
		description: string;
		image?: string;
		href?: string;
	}[];
};

type NavMenuProps = {
	items: NavItem[];
	isMobile?: boolean;
	className?: string;
};

const NavMenu: React.FC<NavMenuProps> = ({
	items,
	isMobile = false,
	className,
}) => {
	const pathname = usePathname();
	if (isMobile) {
		return (
			<Accordion type="single" collapsible className={cn("w-full", className)}>
				{items.map((item: NavItem, index: number) => (
					<AccordionItem
						value={`item-${index}`}
						key={item.name}
						disabled={item.isDisabled}
					>
						{item.href ? (
							<Link
								href={item.href}
								className="text-base font-medium py-4 px-6 block hover:bg-slate-50"
							>
								{item.name}
							</Link>
						) : (
							<>
								<AccordionTrigger className="text-base py-4 px-6">
									{item.name}
								</AccordionTrigger>
								<AccordionContent>
									<ul className="space-y-2 p-4">
										{item.items?.map((dropdownItem) => (
											<li key={dropdownItem.name}>
												<Link
													href={dropdownItem.href || ""}
													className="block p-2 hover:bg-slate-50 rounded"
												>
													{dropdownItem.image && (
														<Image
															src={
																dropdownItem.image ||
																"https://placehold.co/250x250"
															}
															alt={`${dropdownItem.name} image`}
															width={250}
															height={250}
															className="w-full h-auto mb-2"
														/>
													)}
													<h6 className="text-base font-medium mb-1">
														{dropdownItem.name}
													</h6>
													<p className="text-sm text-muted-foreground">
														{dropdownItem.description}
													</p>
												</Link>
											</li>
										))}
									</ul>
								</AccordionContent>
							</>
						)}
					</AccordionItem>
				))}
			</Accordion>
		);
	}

	return (
		<NavigationMenu className={className}>
			<NavigationMenuList>
				{items.map((item: NavItem, index: number) => (
					<NavigationMenuItem key={item.name + index}>
						{item.href ? (
							<Link
								href={!item.isDisabled ? item.href : ""}
								legacyBehavior
								passHref
							>
								<NavigationMenuLink
									className={cn(navigationMenuTriggerStyle(), {
										"focus:bg-transparent hover:bg-transparent focus:text-neutral-600 hover:text-neutral-600 text-neutral-600 cursor-not-allowed":
											item.isDisabled,
									})}
									title={item.name}
									active={pathname === item.href}
								>
									{item.name}
								</NavigationMenuLink>
							</Link>
						) : (
							<>
								<NavigationMenuTrigger disabled={item.isDisabled}>
									{item.name}
								</NavigationMenuTrigger>
								<NavigationMenuContent>
									<ul className="grid gap-3 p-2 w-[400px] sm:w-[500px] sm:grid-cols-2 lg:w-[600px]">
										{item.items?.map((dropdownItem) => (
											<li key={dropdownItem.name}>
												<NavigationMenuLink asChild title={dropdownItem.name}>
													<Link
														className="flex h-full select-none flex-col justify-start rounded-md p-6 no-underline outline-none focus:shadow-md hover:bg-slate-50"
														href={dropdownItem.href || ""}
													>
														{dropdownItem.image && (
															<Image
																src={
																	dropdownItem.image ||
																	"https://placehold.co/250x250"
																}
																alt={`${dropdownItem.name} image`}
																width={250}
																height={250}
																className="w-full h-auto mb-4"
															/>
														)}
														<h6 className="mb-2 text-lg font-medium">
															{dropdownItem.name}
														</h6>
														<p className="small leading-tight text-muted-foreground">
															{dropdownItem.description}
														</p>
													</Link>
												</NavigationMenuLink>
											</li>
										))}
									</ul>
								</NavigationMenuContent>
							</>
						)}
					</NavigationMenuItem>
				))}
			</NavigationMenuList>
		</NavigationMenu>
	);
};

export default NavMenu;
