"use client";

import type React from "react";

import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

interface HamburgerMenuProps {
	className?: string;
	children?: React.ReactNode;
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({
	className,
	children,
}) => {
	const [open, setOpen] = useState(false);
	const pathname = usePathname();
	useEffect(() => {
		setOpen(false);
	}, [pathname]);

	return (
		<div className={className}>
			<Sheet open={open} onOpenChange={setOpen}>
				<SheetTrigger asChild>
					<Button variant="outline" size="icon">
						<Menu className="size-6" />
					</Button>
				</SheetTrigger>
				<SheetContent className="z-[999] w-full overflow-y-auto">
					<SheetTitle className="sr-only">Menu</SheetTitle>
					{children}
				</SheetContent>
			</Sheet>
		</div>
	);
};

export default HamburgerMenu;
