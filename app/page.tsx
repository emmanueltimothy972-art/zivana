import Link from "next/link";
import { OperatorLoop } from "../components/landing/operator-loop";
import { SiteHeader } from "../components/site-header";
import { LineIcon } from "../components/ui/line-icon";

const examples = [
  "Find $10,000 in revenue opportunities.",
  "Build and execute a plan to acquire 100 qualified customers.",
  "Continuously monitor my business for high-value opportunities.",
  "Research this market and identify the opportunities worth pursuing.",
];

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#090d0b] text-[#f5f7f3]">
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:linear-gradient(to_bottom,black,transparent_75%)]" />
      <div className="pointer-events-none fixed right-[-12rem] top-[-14rem] size-[38rem] rounded-full bg-[#d5f16d]/[0.08] blur-[120px]" />
      <div className="relative">
        <SiteHeader />

        <section className="mx-auto grid max-w-[1440px] gap-16 px-6 pb-28 pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-10 lg:pb-40 lg:pt-28">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-[#d5f16d]/25 bg-[#d5f16d]/[0.06] px-3.5 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#d5f16d]">
              <span className="size-1.5 rounded-full bg-[#d5f16d]" />
              Autonomous operator / foundation
            </p>
            <h1 className="mt-8 max-w-4xl text-[clamp(3.8rem,8vw,8.5rem)] font-semibold leading-[0.86] tracking-[-0.09em] text-[#f5f7f3]">
              Give Zivana
              <br />
              an <span className="text-[#d5f16d]">objective.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-[#91a097] sm:text-xl">
              Your autonomous AI operator for turning high-level direction into
              measurable outcomes — by reasoning about the mission, discovering
              opportunities, planning work, executing authorized actions and
              learning what happened.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link
                className="inline-flex items-center gap-2 rounded-full bg-[#d5f16d] px-6 py-3.5 text-sm font-semibold text-[#17211c] transition-transform hover:-translate-y-0.5 hover:bg-[#e2fa8e]"
                href="/sign-up"
              >
                Start with Zivana
                <LineIcon name="arrow-right" className="size-4" />
              </Link>
              <Link
                className="rounded-full border border-white/15 px-6 py-3.5 text-sm font-semibold text-[#f5f7f3] transition-colors hover:border-[#d5f16d]/60"
                href="/sign-in"
              >
                Sign in
              </Link>
            </div>
            <p className="mt-5 text-xs text-[#64746a]">
              No fake activity. No invented outcomes. Just a serious foundation
              for the operator we are building.
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-xl lg:justify-self-end">
            <div className="absolute -inset-8 rounded-[3rem] bg-[#d5f16d]/[0.07] blur-3xl" />
            <div className="relative rounded-[28px] border border-white/[0.12] bg-[#111915]/90 p-3 shadow-[0_30px_100px_rgba(0,0,0,0.35)] backdrop-blur">
              <div className="rounded-[21px] border border-white/[0.09] bg-[#0b100d] p-6 sm:p-8">
                <div className="flex items-center justify-between border-b border-white/[0.09] pb-5">
                  <div className="flex items-center gap-2">
                    <span className="size-2 rounded-full bg-[#d5f16d]" />
                    <span className="text-xs font-medium text-[#dce5de]">
                      Zivana command
                    </span>
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.18em] text-[#64746a]">
                    Not running
                  </span>
                </div>
                <div className="py-12">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#64746a]">
                    Objective
                  </p>
                  <p className="mt-4 max-w-sm text-3xl font-medium leading-[1.05] tracking-[-0.055em] text-[#f5f7f3]">
                    What do you want Zivana to accomplish?
                  </p>
                  <div className="mt-8 rounded-xl border border-white/[0.09] bg-white/[0.03] p-4">
                    <p className="text-xs leading-6 text-[#718078]">
                      A mission will eventually move through understanding,
                      discovery, evaluation, planning, approval, execution and
                      verification.
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between border-t border-white/[0.09] pt-5 text-[11px] text-[#64746a]">
                  <span>Mission-centric by design</span>
                  <span className="text-[#d5f16d]">01 / 12</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-white/[0.09] bg-[#0d1310]">
          <div className="mx-auto grid max-w-[1440px] gap-8 px-6 py-8 sm:grid-cols-2 lg:grid-cols-4 lg:px-10">
            {[
              ["Command", "Objectives become durable missions."],
              ["Intelligence", "Reasoning stays separate from acting."],
              ["Execution", "Authorized actions are auditable."],
              ["Outcomes", "Impact is measured with evidence."],
            ].map(([label, description], index) => (
              <div key={label} className="flex gap-4">
                <span className="pt-0.5 text-[10px] font-semibold tabular-nums text-[#d5f16d]">
                  0{index + 1}
                </span>
                <div>
                  <p className="text-sm font-medium text-[#f5f7f3]">{label}</p>
                  <p className="mt-1 text-xs leading-5 text-[#718078]">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <OperatorLoop />

        <section className="mx-auto max-w-[1440px] px-6 py-24 lg:px-10 lg:py-32">
          <div className="flex flex-col justify-between gap-8 border-t border-white/[0.09] pt-8 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#64746a]">
                Build toward the outcome
              </p>
              <h2 className="mt-5 max-w-2xl text-4xl font-semibold leading-[0.98] tracking-[-0.06em] text-[#f5f7f3] sm:text-5xl">
                The browser is only the command surface.
              </h2>
            </div>
            <Link
              className="inline-flex w-fit items-center gap-2 rounded-full border border-[#d5f16d]/40 px-5 py-3 text-sm font-semibold text-[#d5f16d] transition-colors hover:bg-[#d5f16d]/[0.08]"
              href="/sign-up"
            >
              Create your workspace
              <LineIcon name="arrow-up-right" className="size-4" />
            </Link>
          </div>
          <div className="mt-16 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs uppercase tracking-[0.16em] text-[#536259]">
            {examples.map((example) => (
              <span key={example} className="max-w-xs normal-case tracking-normal">
                {example}
              </span>
            ))}
          </div>
        </section>

        <footer className="mx-auto flex max-w-[1440px] items-center justify-between border-t border-white/[0.09] px-6 py-8 text-xs text-[#64746a] lg:px-10">
          <span>© {new Date().getFullYear()} Zivana</span>
          <span>Autonomous operator foundation</span>
        </footer>
      </div>
    </main>
  );
}