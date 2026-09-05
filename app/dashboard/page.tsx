import Link from "next/link";
import { BrandMark } from "../../components/brand-mark";

export const metadata = {
  title: "Workspace",
};

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-[#f7f8f5]">
      <header className="border-b border-[#dfe5dc] bg-white/65">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <Link href="/" aria-label="Zivana home">
            <BrandMark />
          </Link>
          <div className="flex items-center gap-3">
            <span className="hidden text-sm text-[#66736a] sm:block">Your workspace</span>
            <div className="grid size-9 place-items-center rounded-full bg-[#d5f16d] text-sm font-semibold text-[#17211c]">
              Z
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-medium text-[#a1c72f]">Workspace</p>
            <h1 className="mt-2 text-4xl font-semibold tracking-[-0.06em] sm:text-5xl">
              Good to have you here.
            </h1>
            <p className="mt-4 max-w-xl text-base leading-7 text-[#66736a]">
              Your Zivana workspace is ready for the next step. Start by
              defining what deserves your attention.
            </p>
          </div>
          <button
            className="w-fit rounded-full bg-[#17211c] px-5 py-3 text-sm font-semibold text-[#f7f8f5] opacity-50"
            type="button"
            disabled
            title="Missions will be available in a future release"
          >
            Create a mission
          </button>
        </div>

        <section className="mt-12 grid gap-5 lg:grid-cols-[1.4fr_0.6fr]">
          <div className="rounded-2xl border border-[#dfe5dc] bg-white/75 p-7 lg:p-9">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold tracking-[-0.03em]">Missions</h2>
              <span className="rounded-full bg-[#f0f4ed] px-3 py-1 text-xs text-[#66736a]">
                Coming soon
              </span>
            </div>
            <div className="flex min-h-64 flex-col items-center justify-center text-center">
              <span className="grid size-12 place-items-center rounded-2xl bg-[#eff5d5] text-2xl text-[#a1c72f]">
                +
              </span>
              <h3 className="mt-5 text-xl font-semibold tracking-[-0.03em]">
                Your first mission starts here.
              </h3>
              <p className="mt-2 max-w-sm text-sm leading-6 text-[#66736a]">
                Missions will give your work a clear direction and a place to
                build momentum.
              </p>
            </div>
          </div>

          <aside className="rounded-2xl bg-[#17211c] p-7 text-[#f7f8f5] lg:p-8">
            <p className="text-xs uppercase tracking-[0.16em] text-[#a9b5aa]">
              Foundation
            </p>
            <h2 className="mt-4 text-2xl font-medium leading-tight tracking-[-0.04em]">
              A calm place to begin.
            </h2>
            <p className="mt-4 text-sm leading-6 text-[#a9b5aa]">
              This initial shell is intentionally lightweight. Authentication,
              persistence, and workspace capabilities will be added as the
              product takes shape.
            </p>
            <div className="mt-12 border-t border-white/15 pt-4 text-xs text-[#d5f16d]">
              Zivana / 0.1.0
            </div>
          </aside>
        </section>
      </div>
    </main>
  );
}