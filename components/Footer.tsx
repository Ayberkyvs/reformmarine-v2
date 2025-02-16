import Link from "next/link";
import Logo from "./Logo";
import Image from "next/image";
const Footer = () => {
	return (
		<>
			<footer className="footer">
				<div className="layout !py-6">
					<div className="flex flex-col gap-5 sm:flex-row sm:justify-between sm:items-center sm:gap-0">
						<div className="flex flex-col gap-2">
							<Logo className="text-white w-[120px] h-[63px]" />
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
					<p className="small text-white">
						Copyright © {new Date().getFullYear()} Reform Marine. All rights
						reserved.
					</p>
				</div>
				<div className="w-full h-[40px] bg-primary-50">
					<div className="layout h-full !py-0 flex justify-end items-center text-end gap-1">
						<span className="small text-black">powered by </span>
						<Link href="https://ayberkyavas.com/">
							<Image
								src="https://ayberkyavas.com/logo.svg"
								width={51}
								height={28}
								alt="Ayberk Yavas Logo"
								className="brightness-0"
							/>
						</Link>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;
