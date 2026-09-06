import { missionLifecycleStages } from "../../features/missions/types";
import { LineIcon } from "../ui/line-icon";

export function MissionLifecycle() {
  return (
    <section className="rounded-[24px] border border-white/[0.08] bg-[#101813] p-5 sm:p-6">
      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#64746a]">
            Mission lifecycle
          </p>
          <h2 className="mt-2 text-lg font-medium tracking-[-0.035em] text-[#f5f7f3]">
            The loop a mission will eventually run through
          </h2>
        </div>
        <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/[0.08] px-3 py-1.5 text-[10px] uppercase tracking-[0.14em] text-[#64746a]">
          <span className="size-1.5 rounded-full bg-[#536259]" />
          No active mission
        </span>
      </div>
      <div className="mt-6 flex gap-2 overflow-x-auto pb-1">
        {missionLifecycleStages.map((stage, index) => (
          <div
            key={stage}
            className={`flex min-w-[112px] shrink-0 flex-col gap-3 rounded-xl border p-3 ${
              index === 0
                ? "border-[#d5f16d]/30 bg-[#d5f16d]/[0.06]"
                : "border-white/[0.07] bg-white/[0.02]"
            }`}
          >
            <div className="flex items-center justify-between">
              <span
                className={`text-[10px] font-semibold tabular-nums ${
                  index === 0 ? "text-[#d5f16d]" : "text-[#536259]"
                }`}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              {index === 0 && (
                <LineIcon name="target" className="size-3.5 text-[#d5f16d]" />
              )}
            </div>
            <span className={`text-xs font-medium ${index === 0 ? "text-[#f5f7f3]" : "text-[#718078]"}`}>
              {stage}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}