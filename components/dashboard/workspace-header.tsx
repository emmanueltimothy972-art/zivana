"use client";

import { useOrganization, useUser } from "@clerk/nextjs";
import { OrganizationSwitcher } from "../auth/organization-switcher";
import { SessionMenu } from "../auth/session-menu";
import { LineIcon } from "../ui/line-icon";

export function WorkspaceHeader() {
  const { user } = useUser();
  const { organization } = useOrganization();

  return (
    <header className="border-b border-white/[0.08] bg-[#0b100d]/80 backdrop-blur">
      <div className="mx-auto flex max-w-[1500px] items-center justify-between gap-4 px-4 py-4 sm:px-7 lg:px-10">
        <div className="min-w-0">
          <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#64746a]">
            <span className="text-[#d5f16d]">Zivana</span>
            <span className="text-[#46544b]">/</span>
            <span>Command center</span>
          </div>
          <h1 className="mt-2 truncate text-sm font-medium text-[#f5f7f3] sm:text-base">
            {organization?.name || "Organization context required"}
          </h1>
          <p className="mt-1 truncate text-xs text-[#718078]">
            {user?.firstName ? `Operator session for ${user.firstName}` : "Authenticated operator session"}
          </p>
        </div>
        <div className="flex shrink-0 items-center gap-2 sm:gap-4">
          <div className="hidden sm:block">
            <OrganizationSwitcher />
          </div>
          <SessionMenu />
        </div>
      </div>
    </header>
  );
}

export function MobileWorkspaceBar() {
  return (
    <div className="flex items-center justify-between border-b border-white/[0.08] px-4 py-3 lg:hidden">
      <div className="flex items-center gap-2 text-xs font-medium text-[#91a097]">
        <LineIcon name="grid" className="size-4 text-[#d5f16d]" />
        Command center
      </div>
      <div className="sm:hidden">
        <OrganizationSwitcher />
      </div>
    </div>
  );
}