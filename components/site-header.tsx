import Link from "next/link";
import { BrandMark } from "./brand-mark";

export function SiteHeader() {
  return (
    <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6 lg:px-8">
      <Link href="/" aria-label="Zivana home">
        <BrandMark />
      </Link>
      <nav className="flex items-center gap-5 text-sm font-medium text-[#66736a]">
        <Link className="hidden transition-colors hover:text-[#17211c] sm:block" href="#about">
          About
        </Link>
        <Link
          className="rounded-full bg-[#17211c] px-4 py-2.5 text-[#f7f8f5] transition-transform hover:-translate-y-0.5"
          href="/dashboard"
        >
          Open workspace
        </Link>
      </nav>
    </header>
  );
}