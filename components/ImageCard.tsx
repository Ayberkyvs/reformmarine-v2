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
				"relative rounded-lg bg-white border border-primary-50",
				className
			)}
		>
			<Image
				src={src || "/placeholder.svg"}
				alt={alt}
				fill
				className="object-cover"
				placeholder="blur"
				blurDataURL="/placeholder.svg"
			/>
			<div className="absolute bottom-0 bg-primary-500 p-2 w-full h-fit">
				<p className="text-sm text-white">{caption}</p>
			</div>
		</div>
	);
}
