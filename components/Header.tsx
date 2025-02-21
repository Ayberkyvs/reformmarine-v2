import Link from "next/link";
import Logo from "./Logo";
import HamburgerMenu from "./HamburgerMenu";
import NavMenu from "./NavMenu";
import { navData } from "@/lib/data";
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
            <Logo className="h-[58px] w-[110px] text-primary-500" />
          </Link>
          <NavMenu items={navData.items} className="hidden md:flex" />
          <Socials
            links={socialLinks}
            className="hidden gap-2 text-lg text-black md:flex"
          />
          <HamburgerMenu className="md:hidden">
            <div className="flex h-full flex-col">
              <Link href="/">
                <Logo className="h-[58px] text-black" variant="icon" />
              </Link>
              <NavMenu items={navData.items} isMobile={true} className="mt-5" />
              <Socials
                links={socialLinks}
                className="my-4 flex gap-2 px-5 text-xl text-black md:hidden"
              />
              <div className="mb-4 mt-auto w-full rounded-md bg-primary-50 p-4">
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
