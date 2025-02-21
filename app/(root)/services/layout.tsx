"use client";
import type React from "react";
import Link from "next/link";
import HeroWithBreadcrumb from "@/components/HeroWithBreadcrumb";
import { usePathname } from "next/navigation";

const ServiceLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  const pathname = usePathname().split("/").filter(Boolean)[1];
  const isElectrical = pathname === "electrical";
  return (
    <div className="min-h-screen">
      <HeroWithBreadcrumb
        title={
          pathname === "electrical"
            ? "Electrical Service"
            : pathname === "mechanical"
              ? "Mechanical Service"
              : "Services"
        }
        backgroundImageHref={
          pathname === "electrical"
            ? "/images/electrical.webp"
            : pathname === "mechanical"
              ? "/images/mechanical.webp"
              : "/images/services.webp"
        }
        backgroundImageAlt={
          isElectrical
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
                pathname === "electrical"
                  ? "bg-primary-50 text-black"
                  : "text-slate-600 hover:bg-primary-50"
              }`}
            >
              Electrical Service
            </Link>
            <Link
              href="/services/mechanical"
              className={`block w-full rounded-md p-2 text-sm font-medium ${
                pathname === "mechanical"
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
    </div>
  );
};

export default ServiceLayout;
