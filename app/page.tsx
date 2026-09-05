import Link from "next/link";
import { SiteHeader } from "../components/site-header";

const principles = [
  {
    number: "01",
    title: "See the whole picture",
    description: "Bring your priorities into one calm, considered workspace.",
  },
  {
    number: "02",
    title: "Move with intention",
    description: "Turn direction into clear next steps without adding noise.",
  },
  {
    number: "03",
    title: "Keep your momentum",
    description: "Create a rhythm that makes meaningful progress feel natural.",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden">
      <SiteHeader />

      <section className="mx-auto grid max-w-6xl gap-16 px-6 pb-28 pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8 lg:pb-40 lg:pt-28">
        <div>
          <p className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#dfe5dc] bg-white/70 px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#66736a]">
            <span className="size-1.5 rounded-full bg-[#a1c72f]" />
            A clearer way forward
          </p>
          <h1 className="max-w-2xl text-6xl font-semibold leading-[0.96] tracking-[-0.075em] text-[#17211c] sm:text-7xl lg:text-[88px]">
            Make space for your <span className="text-[#a1c72f]">next.</span>
          </h1>
          <p className="mt-8 max-w-lg text-lg leading-8 text-[#66736a]">
            Zivana is a focused workspace for turning ambitious work into
            steady, meaningful momentum.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              className="rounded-full bg-[#17211c] px-6 py-3.5 text-sm font-semibold text-[#f7f8f5] transition-transform hover:-translate-y-0.5"
              href="/dashboard"
            >
              Enter your workspace
            </Link>
            <Link
              className="rounded-full border border-[#cbd5c9] px-6 py-3.5 text-sm font-semibold text-[#27352d] transition-colors hover:border-[#17211c]"
              href="#about"
            >
              Learn more
            </Link>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:justify-self-end">
          <div className="absolute -right-8 -top-12 size-32 rounded-full bg-[#d5f16d] blur-3xl" />
          <div className="relative rounded-[2rem] border border-[#dfe5dc] bg-white/75 p-4 shadow-[0_24px_80px_rgba(39,53,45,0.09)] backdrop-blur">
            <div className="rounded-[1.35rem] bg-[#17211c] p-7 text-[#f7f8f5]">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-[#a9b5aa]">
                    Your direction
                  </p>
                  <p className="mt-3 text-2xl font-medium tracking-[-0.04em]">
                    Start where<br />you are.
                  </p>
                </div>
                <span className="grid size-10 place-items-center rounded-full bg-[#d5f16d] text-lg text-[#17211c]">
                  ↗
                </span>
              </div>
              <div className="mt-20 flex items-end justify-between border-t border-white/15 pt-5">
                <span className="text-sm text-[#a9b5aa]">A workspace for momentum</span>
                <span className="text-xs text-[#d5f16d]">01 / 03</span>
              </div>
            </div>
            <div className="flex items-center justify-between px-3 pb-1 pt-5 text-xs text-[#66736a]">
              <span>Clarity over complexity</span>
              <span>zivana</span>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="border-t border-[#dfe5dc] bg-white/45">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="mb-14 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <h2 className="max-w-md text-4xl font-semibold leading-tight tracking-[-0.06em]">
              Built for the work that matters.
            </h2>
            <p className="max-w-xs text-sm leading-6 text-[#66736a]">
              A simple foundation for the Zivana experience. More capability
              will grow here, deliberately.
            </p>
          </div>
          <div className="grid gap-px overflow-hidden rounded-2xl border border-[#dfe5dc] bg-[#dfe5dc] md:grid-cols-3">
            {principles.map((principle) => (
              <article key={principle.number} className="bg-[#f7f8f5] p-7 lg:p-8">
                <p className="text-xs font-semibold tracking-[0.14em] text-[#a1c72f]">
                  {principle.number}
                </p>
                <h3 className="mt-16 text-xl font-semibold tracking-[-0.03em]">
                  {principle.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#66736a]">
                  {principle.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="mx-auto flex max-w-6xl items-center justify-between px-6 py-8 text-xs text-[#66736a] lg:px-8">
        <span>© {new Date().getFullYear()} Zivana</span>
        <span>Designed for meaningful momentum.</span>
      </footer>
    </main>
  );
}