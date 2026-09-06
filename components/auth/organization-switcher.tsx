"use client";

import { OrganizationSwitcher as ClerkOrganizationSwitcher } from "@clerk/nextjs";

export function OrganizationSwitcher() {
  return (
    <ClerkOrganizationSwitcher
      hidePersonal
      afterCreateOrganizationUrl="/dashboard"
      afterSelectOrganizationUrl="/dashboard"
      appearance={{
        elements: {
          rootBox: "max-w-full",
          organizationSwitcherTrigger:
            "border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-[#F5F7F3] hover:bg-white/[0.08]",
          organizationPreviewTextContainer: "text-left",
          organizationPreviewMainIdentifier: "text-[#F5F7F3]",
          organizationPreviewSecondaryIdentifier: "text-[#91A097]",
          organizationSwitcherPopoverCard:
            "border border-[#344139] bg-[#111915] text-[#F5F7F3] shadow-2xl",
          organizationSwitcherPopoverActionButton:
            "text-[#C8D2CA] hover:bg-white/[0.06] hover:text-[#F5F7F3]",
        },
      }}
    />
  );
}