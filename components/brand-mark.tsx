export function BrandMark({ tone = "dark" }: { tone?: "dark" | "light" }) {
  return (
    <span className="flex items-center gap-2.5" aria-label="Zivana">
      <span
        className={`grid size-8 place-items-center rounded-[10px] text-sm font-bold ${
          tone === "light"
            ? "bg-[#d5f16d] text-[#17211c]"
            : "bg-[#17211c] text-[#d5f16d]"
        }`}
      >
        Z
      </span>
      <span
        className={`text-[17px] font-semibold tracking-[-0.03em] ${
          tone === "light" ? "text-[#f5f7f3]" : "text-[#17211c]"
        }`}
      >
        zivana
      </span>
    </span>
  );
}