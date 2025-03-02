"use client";

import { useState } from "react";
import { Plus, ArrowUp, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { actionButtons } from "@/lib/data";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function MobileActionButtons() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToTop = () => {
    scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col-reverse items-end gap-3 md:hidden">
      {isOpen && (
        <>
          <Button
            onClick={scrollToTop}
            size="icon"
            className="rounded-full bg-primary-500 shadow-lg hover:bg-primary-500/90"
            aria-label="Scroll to top"
          >
            <ArrowUp className="size-5" />
          </Button>

          {actionButtons.map((button) => (
            <Button
              key={button.id}
              size="icon"
              className={cn("rounded-full shadow-lg", {
                "bg-blue-500 hover:bg-blue-600": button.bgColor === "blue",
                "bg-red-500 hover:bg-red-600": button.bgColor === "red",
                "bg-green-500 hover:bg-green-600": button.bgColor === "green",
                "bg-yellow-500 hover:bg-yellow-600":
                  button.bgColor === "yellow",
              })}
              asChild
              aria-label={button.label}
            >
              <Link href={button.url} target="_blank" rel="noopener noreferrer">
                {button.icon}
              </Link>
            </Button>
          ))}
        </>
      )}

      <Button
        onClick={toggleMenu}
        size="icon"
        className={cn("rounded-full shadow-lg", {
          "bg-primary-500 hover:bg-primary-500/90": !isOpen,
          "bg-red-500 hover:bg-red-500/90": isOpen,
        })}
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? <X className="size-5" /> : <Plus className="size-5" />}
      </Button>
    </div>
  );
}
