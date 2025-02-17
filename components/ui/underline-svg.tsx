import type React from "react";
import { cn } from "@/lib/utils";

interface UnderlineSvgProps extends React.SVGProps<SVGSVGElement> {
	className?: string;
}

export const UnderlineSvg = ({ className, ...props }: UnderlineSvgProps) => {
	return (
		<svg
			viewBox="0 0 287 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={cn("absolute -bottom-0 left-0 w-full h-auto", className)}
			preserveAspectRatio="none"
			{...props}
		>
			<path
				d="M3 15C26.2844 0.789441 264.303 11.8421 285 5"
				stroke="currentColor"
				strokeWidth="10"
			/>
		</svg>
	);
};
