"use client";

import type * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { usePathname } from "next/navigation";

export type NavItem = {
  name: string;
  href?: string;
  image?: string;
  isDisabled: boolean;
  items?: {
    name: string;
    description: string;
    image?: string;
    href?: string;
  }[];
};

type NavMenuProps = {
  items: NavItem[];
  isMobile?: boolean;
  className?: string;
};

const NavMenu: React.FC<NavMenuProps> = ({
  items,
  isMobile = false,
  className,
}) => {
  const pathname = usePathname();
  if (isMobile) {
    return (
      <Accordion type="single" collapsible className={cn("w-full", className)}>
        {items.map((item: NavItem, index: number) => (
          <AccordionItem
            value={`item-${index}`}
            key={item.name}
            disabled={item.isDisabled}
          >
            {item.href ? (
              <Link
                href={item.href}
                className="block px-6 py-4 text-base font-medium hover:bg-slate-50"
              >
                {item.name}
              </Link>
            ) : (
              <>
                <AccordionTrigger className="px-6 py-4 text-base">
                  {item.name}
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2 p-4">
                    {item.items?.map((dropdownItem) => (
                      <li key={dropdownItem.name}>
                        <Link
                          href={dropdownItem.href || ""}
                          className="block rounded p-2 hover:bg-slate-50"
                        >
                          {dropdownItem.image && (
                            <Image
                              src={
                                dropdownItem.image ||
                                "https://placehold.co/250x250"
                              }
                              alt={`${dropdownItem.name} image`}
                              width={250}
                              height={250}
                              className="mb-2 h-auto w-full"
                            />
                          )}
                          <h6 className="mb-1 text-base font-medium">
                            {dropdownItem.name}
                          </h6>
                          <p className="text-sm text-foreground-muted">
                            {dropdownItem.description}
                          </p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </>
            )}
          </AccordionItem>
        ))}
      </Accordion>
    );
  }

  return (
    <NavigationMenu className={className}>
      <NavigationMenuList>
        {items.map((item: NavItem, index: number) => (
          <NavigationMenuItem key={item.name + index}>
            {item.href ? (
              <NavigationMenuLink
                href={!item.isDisabled ? item.href : ""}
                className={cn(navigationMenuTriggerStyle(), {
                  "cursor-not-allowed text-neutral-600 hover:bg-transparent hover:text-neutral-600 focus:bg-transparent focus:text-neutral-600":
                    item.isDisabled,
                })}
                title={item.name}
                active={pathname === item.href}
              >
                {item.name}
              </NavigationMenuLink>
            ) : (
              <>
                <NavigationMenuTrigger disabled={item.isDisabled}>
                  {item.name}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-2 sm:w-[500px] sm:grid-cols-2 lg:w-[600px]">
                    {item.items?.map((dropdownItem) => (
                      <li key={dropdownItem.name}>
                        <NavigationMenuLink asChild title={dropdownItem.name}>
                          <Link
                            className="flex h-full select-none flex-col justify-start rounded-md p-6 no-underline outline-none hover:bg-slate-50 focus:shadow-md"
                            href={dropdownItem.href || ""}
                          >
                            {dropdownItem.image && (
                              <Image
                                src={
                                  dropdownItem.image ||
                                  "https://placehold.co/250x250"
                                }
                                alt={`${dropdownItem.name} image`}
                                width={250}
                                height={250}
                                className="mb-4 h-auto w-full"
                              />
                            )}
                            <h6 className="mb-2 text-lg font-medium">
                              {dropdownItem.name}
                            </h6>
                            <p className="small leading-tight text-foreground-muted">
                              {dropdownItem.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavMenu;
