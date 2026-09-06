"use client";

import { FormEvent, useState } from "react";
import { LineIcon } from "../ui/line-icon";

const exampleObjectives = [
  "Find $10,000 in revenue opportunities.",
  "Build and execute a plan to acquire 100 qualified customers.",
  "Continuously monitor my business for high-value opportunities.",
  "Research this market and identify the best opportunities worth pursuing.",
  "Make me $7,000 this month.",
];

export function MissionComposer({ organizationReady }: { organizationReady: boolean }) {
  const [objective, setObjective] = useState("");
  const [notice, setNotice] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!organizationReady) {
      setNotice("Select an organization before defining a mission context.");
      return;
    }
    setNotice(
      "Mission intake is not connected yet. Nothing was saved, scheduled, or started.",
    );
  }

  return (
    <section
      id="mission-composer"
      className="overflow-hidden rounded-[28px] border border-[#d5f16d]/25 bg-[#111915] shadow-[0_24px_90px_rgba(0,0,0,0.2)]"
    >
      <div className="border-b border-white/[0.08] px-5 py-5 sm:px-7 sm:py-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#d5f16d]">
            <LineIcon name="target" className="size-3.5" />
            New mission
          </div>
          <span className="rounded-full border border-white/[0.09] px-2.5 py-1 text-[9px] uppercase tracking-[0.16em] text-[#64746a]">
            Browser-local draft
          </span>
        </div>
        <h2 className="mt-5 max-w-3xl text-3xl font-medium leading-[1.02] tracking-[-0.055em] text-[#f5f7f3] sm:text-4xl">
          What do you want Zivana to accomplish?
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-[#91a097]">
          Start with the outcome. Mission intake will eventually turn this
          direction into constraints, opportunities, a plan, approvals and
          measurable evidence.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="p-5 sm:p-7">
        <label className="sr-only" htmlFor="mission-objective">
          Mission objective
        </label>
        <textarea
          id="mission-objective"
          value={objective}
          onChange={(event) => {
            setObjective(event.target.value);
            setNotice("");
          }}
          disabled={!organizationReady}
          placeholder={
            organizationReady
              ? "Describe the outcome you want Zivana to pursue..."
              : "Select an organization to define a mission..."
          }
          className="min-h-[180px] w-full resize-none rounded-2xl border border-white/[0.1] bg-[#0b100d] p-5 text-lg leading-8 text-[#f5f7f3] outline-none transition-colors placeholder:text-[#536259] focus:border-[#d5f16d]/50 disabled:cursor-not-allowed disabled:opacity-50 sm:min-h-[220px] sm:p-6 sm:text-xl"
        />
        <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-xs leading-5 text-[#64746a]">
            Nothing executes from this screen. Future missions will require
            explicit approval before any authorized action.
          </p>
          <button
            type="submit"
            disabled={!organizationReady || objective.trim().length === 0}
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#d5f16d] px-4 py-3 text-sm font-semibold text-[#17211c] transition-colors hover:bg-[#e2fa8e] disabled:cursor-not-allowed disabled:bg-white/[0.08] disabled:text-[#536259]"
          >
            Capture objective
            <LineIcon name="arrow-right" className="size-4" />
          </button>
        </div>
        {notice && (
          <p
            className="mt-4 rounded-xl border border-[#d5f16d]/20 bg-[#d5f16d]/[0.06] px-4 py-3 text-xs leading-5 text-[#d5f16d]"
            role="status"
          >
            {notice}
          </p>
        )}
      </form>

      <div className="border-t border-white/[0.08] px-5 py-5 sm:px-7">
        <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#64746a]">
          <LineIcon name="spark" className="size-3.5 text-[#d5f16d]" />
          Start with an example
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {exampleObjectives.map((example) => (
            <button
              key={example}
              type="button"
              disabled={!organizationReady}
              onClick={() => {
                setObjective(example);
                setNotice("");
              }}
              className="rounded-full border border-white/[0.09] px-3 py-2 text-left text-xs text-[#91a097] transition-colors hover:border-[#d5f16d]/40 hover:text-[#f5f7f3] disabled:cursor-not-allowed disabled:opacity-40"
            >
              {example}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}