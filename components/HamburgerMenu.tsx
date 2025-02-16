"use client";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import NavMenu from "./NavMenu";
import type { NavItem } from "@/types";

interface HamburgerMenuProps {
	className?: string;
	navItems: NavItem[];
	phoneNumber: string;
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({
	className,
	navItems,
}) => {
	return (
		<div className={className}>
			<Sheet>
				<SheetTrigger asChild>
					<Button variant="outline" size="icon">
						<Menu className="h-6 w-6" />
					</Button>
				</SheetTrigger>
				<SheetContent className="z-[999] w-full">
					<SheetTitle className="hidden">Menu</SheetTitle>
					<NavMenu items={navItems} isMobile={true} className="mt-5" />
				</SheetContent>
			</Sheet>
		</div>
	);
};

export default HamburgerMenu;
