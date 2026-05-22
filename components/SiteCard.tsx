import { Site, Tag } from "/data/sites";

const tagStyles: Record<Tag, string> = {
  weird: "bg-purple-100 text-purple-800",
  useful: "bg-green-100 text-green-800",
  art: "bg-pink-100 text-pink-800",
  chill: "bg-blue-100 text-blue-800",
  lol: "bg-amber-100 text-amber-800",
};

const tagLabels: Record<Tag, string> = {
  weird: "weird",
  useful: "actually useful",
  art: "art & creative",
  chill: "chill",
  lol: "lol",
};

export default function SiteCard({ site }: { site: Site }) {
  return (
    <a
      href={site.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col gap-3 rounded-2xl border border-neutral-200 bg-white p-5 transition-all duration-150 hover:-translate-y-1 hover:border-neutral-400 hover:shadow-sm"
    >
      <div className="flex items-start justify-between gap-2">
        <span className="font-medium text-neutral-900 leading-tight">
          {site.title}
        </span>
        <span
          className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium ${tagStyles[site.tag]}`}
        >
          {tagLabels[site.tag]}
        </span>
      </div>

      <span className="font-mono text-xs text-neutral-400">{site.url}</span>

      <p className="text-sm text-neutral-500 leading-relaxed">{site.desc}</p>

      <span className="mt-auto text-xs text-neutral-300 group-hover:text-neutral-500 transition-colors">
        visit &rarr;
      </span>
    </a>
  );
}
