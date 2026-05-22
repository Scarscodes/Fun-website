"use client";

import { useState, useMemo } from "react";
import { SITES, Tag } from "@/data/sites";
import SiteCard from "./SiteCard";
import FilterBar, { FilterValue } from "./FilterBar";

export default function SiteGrid() {
  const [active, setActive] = useState<FilterValue>("all");

  const counts = useMemo(() => {
    const c: Record<FilterValue, number> = {
      all: SITES.length,
      weird: 0,
      useful: 0,
      art: 0,
      chill: 0,
      lol: 0,
    };
    SITES.forEach((s) => c[s.tag]++);
    return c;
  }, []);

  const filtered = useMemo(
    () => (active === "all" ? SITES : SITES.filter((s) => s.tag === active)),
    [active]
  );

  return (
    <div className="flex flex-col gap-8">
      <FilterBar active={active} onChange={setActive} counts={counts} />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((site) => (
          <SiteCard key={site.url} site={site} />
        ))}
      </div>
    </div>
  );
}
