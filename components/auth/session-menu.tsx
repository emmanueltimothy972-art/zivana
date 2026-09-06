"use client";

import { useClerk, useUser } from "@clerk/nextjs";

function initials(firstName?: string | null, lastName?: string | null) {
  return [firstName?.[0], lastName?.[0]].filter(Boolean).join("").toUpperCase() || "Z";
}

export function SessionMenu() {
  const { isLoaded, user } = useUser();
  const { signOut } = useClerk();

  if (!isLoaded || !user) {
    return <div className="h-10 w-40 animate-pulse rounded-xl bg-white/[0.06]" />;
  }

  return (
    <div className="flex items-center gap-3">
      <div className="hidden min-w-0 text-right sm:block">
        <p className="truncate text-sm font-medium text-[#F5F7F3]">
          {user.fullName || user.username || "Zivana member"}
        </p>
        <p className="truncate text-xs text-[#91A097]">
          {user.primaryEmailAddress?.emailAddress}
        </p>
      </div>
      <div className="grid size-10 shrink-0 place-items-center rounded-xl bg-[#D5F16D] text-sm font-bold text-[#17211C]">
        {initials(user.firstName, user.lastName)}
      </div>
      <button
        className="hidden text-xs font-medium text-[#91A097] transition-colors hover:text-[#F5F7F3] md:block"
        type="button"
        onClick={() => void signOut({ redirectUrl: "/" })}
      >
        Sign out
      </button>
    </div>
  );
}