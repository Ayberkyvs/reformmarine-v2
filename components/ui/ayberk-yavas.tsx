import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Yavas = ({ className }: { className?: string }) => {
  return (
    <div className={cn("flex items-center gap-1", className)}>
      {/* <span className="small text-black">powered by </span> */}
      <Link href="https://ayberkyavas.com/">
        <Image
          src="https://ayberkyavas.com/logo_embed.png"
          width={106}
          height={35}
          alt="Ayberk Yavas Logo"
          className="brightness-0"
        />
      </Link>
    </div>
  );
};
export default Yavas;
