import { cn } from "@/lib/utils";
import Image from "next/image";

interface ImageCardProps {
  src: string;
  alt: string;
  caption: string;
  className?: string;
}

export function ImageCard({
  src,
  alt,
  caption,
  className = "",
}: ImageCardProps) {
  return (
    <div
      className={cn(
        "relative rounded-lg border border-primary-50 bg-white",
        className,
      )}
    >
      <Image
        src={src || "/images/placeholder.webp"}
        alt={alt}
        width={500}
        height={500}
        className="size-full object-cover"
      />
      <div className="absolute bottom-0 h-fit w-full bg-primary-500 p-2">
        <p className="text-sm text-white">{caption}</p>
      </div>
    </div>
  );
}
