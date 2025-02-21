"use client";
import { usePathname } from "next/navigation";
import BreadCrumb from "./BreadCrumb";
import Image from "next/image";
import { cn } from "@/lib/utils";

const HeroWithBreadcrumb = ({
  title,
  backgroundImageHref,
  backgroundImageAlt,
  color,
}: {
  title: string;
  backgroundImageHref: string;
  backgroundImageAlt: string;
  color: string;
}) => {
  const pathname = usePathname().split("/").filter(Boolean);
  return (
    <>
      <section className="herowithbreadcrumb w-full">
        <div className="relative flex aspect-video w-full flex-col items-start justify-center lg:aspect-[16/6]">
          <Image
            src={backgroundImageHref || "/placeholder.svg"}
            alt={backgroundImageAlt}
            fill
            className="z-[-1] object-cover"
          />
          <div className="absolute inset-0 z-0 bg-black opacity-50"></div>
          <div className="layout relative z-[1]">
            <h1 className={cn("h2 sm:h1 font-semibold", color)}>{title}</h1>
            <BreadCrumb pathname={pathname} className={color} />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroWithBreadcrumb;
