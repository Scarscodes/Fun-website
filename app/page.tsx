import SiteGrid from "@/components/SiteGrid";
 
export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <div className="mb-12">
        <h1 className="text-4xl font-medium tracking-tight text-neutral-900">
          the internet is wild
        </h1>
        <p className="mt-3 text-lg text-neutral-400">
          weird, fun, and pointless websites worth your time
        </p>
      </div>
      <SiteGrid />
    </main>
  );
}
 
