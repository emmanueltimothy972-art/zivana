import Link from "next/link";
import { BrandMark } from "../brand-mark";
import { LineIcon, type IconName } from "../ui/line-icon";

const navGroups: Array<{
  label: string;
  items: Array<{ label: string; icon: IconName; active?: boolean }>;
}> = [
  {
    label: "Command",
    items: [
      { label: "Overview", icon: "grid", active: true },
      { label: "Missions", icon: "target" },
      { label: "Opportunities", icon: "search" },
    ],
  },
  {
    label: "Intelligence",
    items: [
      { label: "Memory", icon: "brain" },
      { label: "Skills", icon: "book" },
      { label: "Workers", icon: "layers" },
    ],
  },
  {
    label: "Execution",
    items: [
      { label: "Activity", icon: "activity" },
      { label: "Approvals", icon: "lock" },
      { label: "Runs", icon: "play" },
    ],
  },
  {
    label: "Outcomes",
    items: [
      { label: "Results", icon: "check" },
      { label: "Financial impact", icon: "coins" },
    ],
  },
  {
    label: "System",
    items: [
      { label: "Organization", icon: "compass" },
      { label: "Settings", icon: "settings" },
    ],
  },
];

export function AgentSidebar() {
  return (
    <aside className="hidden w-[258px] shrink-0 flex-col border-r border-white/[0.08] bg-[#0c120f] px-4 py-6 lg:flex">
      <Link className="px-3" href="/" aria-label="Zivana home">
        <BrandMark tone="light" />
      </Link>
      <div className="mt-12 flex items-center justify-between px-3">
        <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#64746a]">
          Command center
        </span>
        <span className="size-1.5 rounded-full bg-[#d5f16d]" />
      </div>

      <nav className="mt-5 space-y-6" aria-label="Command center navigation">
        {navGroups.map((group) => (
          <div key={group.label}>
            <p className="px-3 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#536259]">
              {group.label}
            </p>
            <div className="mt-2 space-y-0.5">
              {group.items.map((item) =>
                item.active ? (
                  <Link
                    key={item.label}
                    className="flex items-center gap-3 rounded-xl bg-white/[0.08] px-3 py-2.5 text-sm font-medium text-[#f5f7f3]"
                    href="/dashboard"
                  >
                    <LineIcon name={item.icon} className="size-[16px] text-[#d5f16d]" />
                    <span>{item.label}</span>
                  </Link>
                ) : (
                  <div
                    key={item.label}
                    aria-disabled="true"
                    className="flex cursor-not-allowed items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-[#718078]"
                    title={`${item.label} will be connected in a future phase`}
                  >
                    <LineIcon name={item.icon} className="size-[16px] text-[#536259]" />
                    <span>{item.label}</span>
                    <span className="ml-auto text-[9px] uppercase tracking-[0.12em] text-[#46544b]">
                      Soon
                    </span>
                  </div>
                ),
              )}
            </div>
          </div>
        ))}
      </nav>

      <div className="mt-auto rounded-2xl border border-[#d5f16d]/15 bg-[#d5f16d]/[0.04] p-4">
        <div className="flex items-center gap-2 text-xs font-medium text-[#dce5de]">
          <span className="size-1.5 rounded-full bg-[#d5f16d]" />
          Foundation mode
        </div>
        <p className="mt-3 text-xs leading-5 text-[#718078]">
          Command is ready. Intelligence and execution will connect behind
          explicit boundaries.
        </p>
      </div>
    </aside>
  );
}