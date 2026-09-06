import { LineIcon } from "../ui/line-icon";
import { missionLifecycleStages } from "../../features/missions/types";

const boundaryCards = [
  {
    label: "Command",
    title: "Start with an outcome",
    description:
      "Give Zivana a high-level objective. A mission becomes the durable unit of work.",
    icon: "target" as const,
  },
  {
    label: "Intelligence",
    title: "Think beyond a chat",
    description:
      "Reasoning, discovery, evaluation, memory and learning stay separate from execution.",
    icon: "brain" as const,
  },
  {
    label: "Execution",
    title: "Act with authorization",
    description:
      "Tools, computers and external actions belong behind explicit approvals and verification.",
    icon: "route" as const,
  },
  {
    label: "Outcomes",
    title: "Measure what changed",
    description:
      "Financial impact is recorded as evidence, never invented as a dashboard number.",
    icon: "coins" as const,
  },
];

export function OperatorLoop() {
  return (
    <section id="operator-loop" className="border-y border-white/[0.09] bg-[#0d1310]">
      <div className="mx-auto max-w-[1440px] px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d5f16d]">
              The operator loop
            </p>
            <h2 className="mt-6 max-w-lg text-4xl font-semibold leading-[0.98] tracking-[-0.06em] text-[#f5f7f3] sm:text-5xl">
              Designed for objectives that outlive a browser tab.
            </h2>
            <p className="mt-6 max-w-md text-sm leading-7 text-[#8f9e95]">
              Zivana is being built around missions that can be understood,
              planned, approved, executed, verified and replanned over time.
              The foundation is intentionally honest about what is not connected
              yet.
            </p>
          </div>

          <div className="rounded-[28px] border border-white/[0.09] bg-[#111915] p-5 sm:p-7">
            <div className="flex items-center justify-between border-b border-white/[0.09] pb-5">
              <div className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-[#d5f16d]" />
                <span className="text-xs font-medium text-[#dce5de]">
                  Mission lifecycle
                </span>
              </div>
              <span className="text-[10px] uppercase tracking-[0.16em] text-[#64746a]">
                System boundary
              </span>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-3">
              {missionLifecycleStages.map((stage, index) => (
                <div
                  key={stage}
                  className={`flex items-center gap-2 rounded-xl border px-3 py-3 ${
                    index === 0
                      ? "border-[#d5f16d]/40 bg-[#d5f16d]/[0.08] text-[#d5f16d]"
                      : "border-white/[0.07] bg-white/[0.025] text-[#718078]"
                  }`}
                >
                  <span className="text-[10px] font-semibold tabular-nums opacity-60">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-xs font-medium">{stage}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 flex items-center gap-2 border-t border-white/[0.09] pt-5 text-[11px] text-[#64746a]">
              <LineIcon name="shield" className="size-3.5 text-[#d5f16d]" />
              <span>No mission is running in this foundation.</span>
            </div>
          </div>
        </div>

        <div className="mt-20 grid gap-px overflow-hidden rounded-2xl border border-white/[0.09] bg-white/[0.09] md:grid-cols-2 xl:grid-cols-4">
          {boundaryCards.map((card) => (
            <article key={card.label} className="bg-[#0d1310] p-6 sm:p-7">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#64746a]">
                  {card.label}
                </span>
                <LineIcon name={card.icon} className="size-4 text-[#d5f16d]" />
              </div>
              <h3 className="mt-14 text-lg font-medium tracking-[-0.035em] text-[#f5f7f3]">
                {card.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-[#718078]">
                {card.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}