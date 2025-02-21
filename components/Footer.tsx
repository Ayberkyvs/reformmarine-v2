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
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between sm:gap-0">
            <div className="flex flex-col gap-2">
              <Link href="/" scroll>
                <Logo className="h-[63px] w-[120px] text-white" />
              </Link>
              <span className="small text-white">
                Your Reliable Service in the Maritime
              </span>
            </div>
            <ul className="small text-left text-white sm:text-right">
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
          <div className="flex flex-wrap items-center justify-between">
            <p className="small text-white">
              Copyright © {new Date().getFullYear()} Reform Marine. All rights
              reserved.
            </p>
            <Socials
              links={socialLinks}
              className="mt-2 flex gap-2 text-white sm:mt-0"
            />
          </div>
        </div>
        <div className="h-[40px] w-full bg-primary-50">
          <div className="layout flex h-full items-center justify-end !py-0">
            <Yavas />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
