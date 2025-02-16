import { UnderlineSvg } from "./ui/underline-svg";

interface HighlightedHeadingProps {
	text: string;
	highlightedWord: string;
	className?: string;
}

export const HighlightedHeading = ({
	text,
	highlightedWord,
	className,
}: HighlightedHeadingProps) => {
	const parts = text.split(highlightedWord);

	return (
		<h1 className={className}>
			{parts[0]}
			<span className="relative inline-block text-accent-500">
				{highlightedWord}
				<UnderlineSvg />
			</span>
			{parts[1]}
		</h1>
	);
};
