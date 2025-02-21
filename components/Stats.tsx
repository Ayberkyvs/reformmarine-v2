import type { Stat } from "@/types";

const Stats = ({ stats }: { stats: Stat[] }) => {
  return (
    <div className="grid w-full gap-5 xs:grid-cols-[1fr_1fr_1fr]">
      {stats.map((stat, index: number) => (
        <div
          key={index}
          className="flex-center size-auto flex-col border border-neutral-300 bg-white p-6 text-foreground"
        >
          <h6 className="h5 font-semibold text-accent-500">{stat.value}</h6>
          <p className="small line-clamp-1 md:text-base">{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

export default Stats;
