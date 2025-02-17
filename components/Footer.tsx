import Link from "next/link";
import Logo from "./Logo";
import Yavas from "./ui/ayberk-yavas";
import Socials from "./Socials";
import { socialLinks } from "@/lib/data";
const Footer = () => {
	return (
		<>
			<footer className="footer">
				<div className="layout !py-6">
					<div className="flex flex-col gap-5 sm:flex-row sm:justify-between sm:items-center sm:gap-0">
						<div className="flex flex-col gap-2">
							<Link href="/" scroll>
								<Logo className="text-white w-[120px] h-[63px]" />
							</Link>
							<span className="small text-white">
								Your Reliable Service in the Maritime
							</span>
						</div>
						<ul className="small text-white text-left sm:text-right">
							<li>
								<Link href="mailto:info@reformmarine.com">
									info@reformmarine.com
								</Link>
							</li>
							<li>
								<Link href="tel:+905373442566">+90 537 344 25 66</Link>
								<span> / </span>
								<Link href="tel:+905325675350">+90 532 567 53 50</Link>
							</li>
							<li>
								<Link href="https://maps.app.goo.gl/jvmtCDccixpsYFpv5">
									Postane, Kılıç Cd. No:18, 34940 Tuzla/İstanbul
								</Link>
							</li>
						</ul>
					</div>
					<hr className="my-2" />
					<div className="flex justify-between flex-wrap items-center">
						<p className="small text-white">
							Copyright © {new Date().getFullYear()} Reform Marine. All rights
							reserved.
						</p>
						<Socials
							links={socialLinks}
							className="flex gap-2 text-white mt-2 sm:mt-0"
						/>
					</div>
				</div>
				<div className="w-full h-[40px] bg-primary-50">
					<div className="layout h-full !py-0 flex justify-end items-center">
						<Yavas />
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;
