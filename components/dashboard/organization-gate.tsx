import { OrganizationSwitcher } from "../auth/organization-switcher";
import { LineIcon } from "../ui/line-icon";

export function OrganizationGate() {
  return (
    <section className="mt-8 rounded-[22px] border border-[#D5F16D]/20 bg-[#D5F16D]/[0.06] p-5 sm:p-6">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex gap-4">
          <div className="grid size-10 shrink-0 place-items-center rounded-xl bg-[#D5F16D] text-[#17211C]">
            <LineIcon name="compass" className="size-5" />
          </div>
          <div>
            <h2 className="text-sm font-semibold text-[#F5F7F3]">
              Choose an organization to define its mission context
            </h2>
            <p className="mt-1 max-w-xl text-sm leading-6 text-[#91A097]">
              Zivana keeps mission context tenant-isolated. Select an
              organization you belong to from the switcher before drafting an
              objective.
            </p>
          </div>
        </div>
        <OrganizationSwitcher />
      </div>
    </section>
  );
}