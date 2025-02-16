import Link from "next/link";
import Logo from "./Logo";
import HamburgerMenu from "./HamburgerMenu";
import NavMenu from "./NavMenu";
import { navData } from "@/lib/nav-data";

const Header = () => {
	return (
		<>
			<header className="header">
				<div className="inner-header layout">
					<Logo className="w-[110px] h-[58px] text-primary-500" />
					<NavMenu items={navData.items} className="hidden md:flex" />
					<Link href="tel:+905373442566" className="small hidden md:flex">
						+90 537 344 25 66
					</Link>
					<HamburgerMenu
						className="md:hidden"
						phoneNumber="99"
						navItems={navData.items}
					/>
				</div>
			</header>
		</>
	);
};

export default Header;
