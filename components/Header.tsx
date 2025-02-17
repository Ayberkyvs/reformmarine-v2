import Link from "next/link";
import Logo from "./Logo";
import HamburgerMenu from "./HamburgerMenu";
import NavMenu from "./NavMenu";
import { navData } from "@/lib/nav-data";
import { cn } from "@/lib/utils";
import Socials from "./Socials";
import Instagram from "./ui/instagram-logo";
import LinkedIn from "./ui/linkedin-logo";
import GoogleMaps from "./ui/google-map";
import WhatsApp from "./ui/whatsapp-logo";
import Yavas from "./ui/ayberk-yavas";
const Header = () => {
	const socialLinks = [
		{
			icon: <WhatsApp className="aspect-square w-[1em] h-[1em]" />,
			name: "WhatsApp",
			href: "http://wa.me/905546733676",
		},
		{
			icon: <Instagram className="aspect-square w-[1em] h-[1em]" />,
			name: "Instagram",
			href: "https://www.instagram.com/reformmarine/",
		},
		{
			icon: <LinkedIn className="aspect-square w-[1em] h-[1em]" />,
			name: "LinkedIn",
			href: "https://www.linkedin.com/company/reformmarine",
		},
		{
			icon: <GoogleMaps className="aspect-square w-[1em] h-[1em]" />,
			name: "Google Maps",
			href: "https://www.google.com/maps/place/Reform+Marine/@40.8184183,29.2955793,18.72z/data=!4m6!3m5!1s0x14cadd7659685b97:0x9f8ad867e6e6cc0e!8m2!3d40.8183382!4d29.296018!16s%2Fg%2F11w3tk9ws3?hl=tr&coh=219815&entry=tts&g_ep=EgoyMDI0MDYxOS4xKgBIAVAD",
		},
	];
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
						<div className="relative h-full">
							<Link href="/">
								<Logo className="h-[58px] text-black" variant="icon" />
							</Link>
							<NavMenu items={navData.items} isMobile={true} className="mt-5" />
							<Socials
								links={socialLinks}
								className="flex md:hidden text-xl gap-2 text-black px-5 mt-4"
							/>
							<div className="absolute bottom-0 bg-primary-50 w-full p-4 rounded-md">
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
