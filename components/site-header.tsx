import Link from "next/link";
import { BrandMark } from "./brand-mark";
import { PublicAuthActions } from "./auth/public-auth-actions";

export function SiteHeader() {
  return (
    <header className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-6 py-6 lg:px-10">
      <Link href="/" aria-label="Zivana home">
        <BrandMark tone="light" />
      </Link>
      <nav className="flex items-center gap-5 text-sm font-medium text-[#8f9e95]">
        <Link className="hidden transition-colors hover:text-[#f5f7f3] sm:block" href="#operator-loop">
          How it works
        </Link>
        <PublicAuthActions />
      </nav>
    </header>
  );
}