import Link from "next/link";
import Logo from "./Logo";
import HamburgerMenu from "./HamburgerMenu";
import NavMenu from "./NavMenu";
import { navData } from "@/lib/nav-data";
import { cn } from "@/lib/utils";
import Socials from "./Socials";
import Yavas from "./ui/ayberk-yavas";
import { socialLinks } from "@/lib/data";

const Header = () => {
	return (
		<>
			<header className="header">
				<div className={cn("inner-header layout !py-0")}>
					<Link href="/">
						<Logo className="w-[110px] h-[58px] text-primary-500" />
					</Link>
					<NavMenu items={navData.items} className="hidden md:flex" />
					<Socials
						links={socialLinks}
						className="hidden md:flex text-lg gap-2 text-black"
					/>
					<HamburgerMenu className="md:hidden">
						<div className="flex flex-col h-full">
							<Link href="/">
								<Logo className="h-[58px] text-black" variant="icon" />
							</Link>
							<NavMenu items={navData.items} isMobile={true} className="mt-5" />
							<Socials
								links={socialLinks}
								className="flex md:hidden text-xl gap-2 text-black px-5 mt-4"
							/>
							<div className="bg-primary-50 w-full p-4 rounded-md mt-auto">
								<Yavas className="place-self-end" />
							</div>
						</div>
					</HamburgerMenu>
				</div>
			</header>
		</>
	);
};

export default Header;
