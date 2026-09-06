import { AgentSidebar } from "./agent-sidebar";
import { OrganizationGate } from "./organization-gate";
import { MissionComposer } from "./mission-composer";
import { MissionLifecycle } from "./mission-lifecycle";
import { MobileWorkspaceBar, WorkspaceHeader } from "./workspace-header";
import { LineIcon } from "../ui/line-icon";

const foundationAreas = [
  {
    label: "Missions",
    icon: "target" as const,
    description: "Durable objectives, constraints, plans and replanning.",
  },
  {
    label: "Opportunities",
    icon: "search" as const,
    description: "Discovery and expected-value evaluation, when connected.",
  },
  {
    label: "Memory",
    icon: "brain" as const,
    description: "Mission context and verified learning over time.",
  },
  {
    label: "Workers",
    icon: "layers" as const,
    description: "Specialists created only for genuinely complex missions.",
  },
  {
    label: "Approvals",
    icon: "lock" as const,
    description: "Human authorization before real-world actions.",
  },
  {
    label: "Financial impact",
    icon: "coins" as const,
    description: "Potential to recovered, always backed by evidence.",
  },
];

export function AgentWorkspace({ organizationReady }: { organizationReady: boolean }) {
  return (
    <main className="min-h-screen bg-[#090d0b] text-[#f5f7f3]">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_76%_-12%,rgba(213,241,109,0.1),transparent_30rem)]" />
      <div className="relative flex min-h-screen">
        <AgentSidebar />
        <div className="min-w-0 flex-1">
          <WorkspaceHeader />
          <MobileWorkspaceBar />
          <div className="mx-auto max-w-[1500px] px-4 pb-20 pt-8 sm:px-7 sm:pt-10 lg:px-10 lg:pt-14">
            <div className="flex flex-col justify-between gap-8 xl:flex-row xl:items-end">
              <div className="max-w-3xl">
                <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#d5f16d]">
                  <span className="size-1.5 rounded-full bg-[#d5f16d]" />
                  Command / foundation mode
                </div>
                <h2 className="mt-5 text-[clamp(2.8rem,6vw,6.5rem)] font-semibold leading-[0.88] tracking-[-0.085em] text-[#f5f7f3]">
                  What do you want
                  <br className="hidden sm:block" /> Zivana to accomplish?
                </h2>
                <p className="mt-6 max-w-2xl text-sm leading-7 text-[#91a097] sm:text-base">
                  Missions are the core unit. Describe the outcome you want to
                  pursue; reasoning, discovery, execution and measurement will
                  connect here as those systems are built.
                </p>
              </div>
              <div className="flex max-w-sm items-start gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.025] p-4">
                <LineIcon name="shield" className="mt-0.5 size-4 shrink-0 text-[#d5f16d]" />
                <p className="text-xs leading-5 text-[#91a097]">
                  Organization context is enforced server-side. Nothing runs
                  from this screen and no financial outcome is assumed.
                </p>
              </div>
            </div>

            {!organizationReady && <OrganizationGate />}

            <div className="mt-8">
              <MissionComposer organizationReady={organizationReady} />
            </div>

            <div className="mt-6">
              <MissionLifecycle />
            </div>

            <section className="mt-6">
              <div className="flex items-end justify-between gap-4">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#64746a]">
                    Product boundaries
                  </p>
                  <h2 className="mt-2 text-xl font-medium tracking-[-0.04em] text-[#f5f7f3]">
                    The operator grows from here
                  </h2>
                </div>
                <span className="hidden text-[10px] uppercase tracking-[0.14em] text-[#536259] sm:block">
                  No connected data
                </span>
              </div>
              <div className="mt-4 grid gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 xl:grid-cols-3">
                {foundationAreas.map((area) => (
                  <article key={area.label} className="bg-[#0d1310] p-5 sm:p-6">
                    <div className="flex items-center justify-between">
                      <LineIcon name={area.icon} className="size-4 text-[#d5f16d]" />
                      <span className="text-[9px] uppercase tracking-[0.14em] text-[#536259]">
                        Not connected
                      </span>
                    </div>
                    <h3 className="mt-12 text-sm font-semibold text-[#dce5de]">{area.label}</h3>
                    <p className="mt-2 text-xs leading-5 text-[#718078]">{area.description}</p>
                  </article>
                ))}
              </div>
            </section>

            <p className="mt-12 text-center text-[10px] uppercase tracking-[0.18em] text-[#46544b]">
              Zivana autonomous operator foundation · command before autonomy
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}