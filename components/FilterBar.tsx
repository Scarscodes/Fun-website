"use client";

import { Tag, TAG_LABELS } from "/data/sites";

const ALL = "all";
type FilterValue = Tag | typeof ALL;

const filters: FilterValue[] = [ALL, "weird", "useful", "art", "chill", "lol"];

interface FilterBarProps {
  active: FilterValue;
  onChange: (tag: FilterValue) => void;
  counts: Record<FilterValue, number>;
}

export default function FilterBar({ active, onChange, counts }: FilterBarProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {filters.map((f) => (
        <button
          key={f}
          onClick={() => onChange(f)}
          className={`rounded-full border px-4 py-1.5 text-sm transition-all duration-100 ${
            active === f
              ? "border-neutral-900 bg-neutral-900 text-white"
              : "border-neutral-200 bg-white text-neutral-500 hover:border-neutral-400 hover:text-neutral-800"
          }`}
        >
          {f === ALL ? "all" : TAG_LABELS[f]}
          <span
            className={`ml-1.5 text-xs ${
              active === f ? "text-neutral-400" : "text-neutral-300"
            }`}
          >
            {counts[f]}
          </span>
        </button>
      ))}
    </div>
  );
}

export type { FilterValue };
