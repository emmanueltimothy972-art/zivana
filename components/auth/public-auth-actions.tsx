"use client";

import Link from "next/link";
import { useAuth } from "@clerk/nextjs";

export function PublicAuthActions() {
  const { isLoaded, isSignedIn } = useAuth();

  if (!isLoaded) {
    return <div className="h-10 w-28 animate-pulse rounded-full bg-white/10" />;
  }

  return (
    <>
      {isSignedIn ? (
        <Link
          className="rounded-full border border-white/15 bg-white/[0.06] px-4 py-2.5 text-[#f5f7f3] transition-colors hover:border-[#d5f16d]/50 hover:bg-white/10"
          href="/dashboard"
        >
          Open workspace
        </Link>
      ) : (
        <>
          <Link
            className="hidden transition-colors hover:text-[#f5f7f3] sm:block"
            href="/sign-in"
          >
            Sign in
          </Link>
          <Link
            className="rounded-full bg-[#d5f16d] px-4 py-2.5 text-[#17211c] transition-transform hover:-translate-y-0.5 hover:bg-[#e2fa8e]"
            href="/sign-up"
          >
            Start with Zivana
          </Link>
        </>
      )}
    </>
  );
}