"use client";
import { usePathname } from "next/navigation";
import HeroWithBreadcrumb from "./HeroWithBreadcrumb";
import Link from "next/link";
import type { ReactNode } from "react";

const capitalizeWords = (str: string) => {
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
};

const ServiceLayoutComponent = ({ children }: { children: ReactNode }) => {
  const pathname =
    usePathname().split("/").pop()?.split("-").join(" ").toLowerCase() || "";
  const capitalizedPathname = capitalizeWords(pathname);

  return (
    <>
      <HeroWithBreadcrumb
        title={
          capitalizedPathname === "Electrical"
            ? "Electrical Service"
            : capitalizedPathname === "Mechanical"
              ? "Mechanical Service"
              : capitalizedPathname
        }
        backgroundImageHref={
          capitalizedPathname === "Electrical"
            ? "/images/electrical.webp"
            : capitalizedPathname === "Mechanical"
              ? "/images/mechanical.webp"
              : "/images/services.webp"
        }
        backgroundImageAlt={
          capitalizedPathname === "Electrical"
            ? "Electrical Service related Photo"
            : "Mechanical Service related Photo"
        }
        color="text-white sm:text-white"
      />
      <div className="layout">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
          <aside className="space-y-1 lg:col-span-2">
            <Link
              href="/services/electrical"
              className={`block w-full rounded-md p-2 text-sm font-medium ${
                capitalizedPathname === "Electrical"
                  ? "bg-primary-50 text-black"
                  : "text-slate-600 hover:bg-primary-50"
              }`}
            >
              Electrical Service
            </Link>
            <Link
              href="/services/mechanical"
              className={`block w-full rounded-md p-2 text-sm font-medium ${
                capitalizedPathname === "Mechanical"
                  ? "bg-primary-50 text-black"
                  : "text-slate-600 hover:bg-slate-50"
              }`}
            >
              Mechanical Service
            </Link>
          </aside>

          <div className="lg:col-span-10">{children}</div>
        </div>
      </div>
    </>
  );
};

export default ServiceLayoutComponent;
