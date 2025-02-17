"use client";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
interface HamburgerMenuProps {
	className?: string;
	children?: React.ReactNode;
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({
	className,
	children,
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
					{children}
				</SheetContent>
			</Sheet>
		</div>
	);
};

export default HamburgerMenu;
