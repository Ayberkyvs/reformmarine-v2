import type { Stat } from "@/types";

const Stats = ({
	stats,
	variant = "default",
}: {
	stats: Stat[];
	variant: string;
}) => {
	return (
		<div className="grid xs:grid-cols-[1fr_1fr_1fr] gap-5 w-full">
			{stats.map((stat, index: number) => (
				<div
					key={index}
					className="flex-center flex-col p-6 size-auto border bg-white text-foreground border-neutral-300"
				>
					<h6 className="h5 text-accent-500 font-semibold">{stat.value}</h6>
					<p className="small md:text-base line-clamp-1">{stat.label}</p>
				</div>
			))}
		</div>
	);
};

export default Stats;
