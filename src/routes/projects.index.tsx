import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { SiteLayout } from "../components/site/SiteLayout";
import { Reveal } from "../components/site/Reveal";
import { PROJECTS, ALL_CATEGORIES } from "../data/projects";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Work — Elias Vance, Creative Designer" },
      {
        name: "description",
        content:
          "Selected branding, digital, editorial and art direction projects by creative designer Elias Vance.",
      },
    ],
  }),
  component: Projects,
});

function Projects() {
  const [filter, setFilter] = useState("All");
  const visible =
    filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  return (
    <SiteLayout>
      <section className="mx-auto max-w-7xl px-5 pb-12 pt-32 sm:px-8 md:pt-40">
        <Reveal>
          <p className="flex items-center gap-3 font-display text-xs uppercase tracking-[0.3em] text-primary">
            <span className="h-px w-8 bg-primary" />
            Selected Work
          </p>
          <h1 className="mt-6 max-w-4xl font-display text-5xl font-medium leading-[0.95] tracking-tightest text-foreground sm:text-6xl md:text-7xl">
            Brands designed to
            <span className="text-primary"> leave a lasting impression.</span>
          </h1>
        </Reveal>

        {/* Filters */}
        <Reveal delay={1}>
          <div className="mt-12 flex flex-wrap gap-3">
            {ALL_CATEGORIES.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setFilter(c)}
                className={`rounded-full border px-5 py-2.5 text-sm font-medium transition-colors ${
                  filter === c
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border text-muted-foreground hover:border-foreground/40 hover:text-foreground"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Grid */}
      <section className="mx-auto max-w-7xl px-5 pb-28 sm:px-8 md:pb-36">
        <div className="grid gap-5 sm:grid-cols-2">
          {visible.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 2) as 0 | 1}>
              <Link
                to="/projects/$slug"
                params={{ slug: p.slug }}
                className="hover-zoom group block overflow-hidden rounded-2xl border border-border bg-card"
              >
                <div className="relative aspect-[16/11] overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                  <span className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-foreground/20 bg-background/40 text-foreground backdrop-blur-sm transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
                <div className="flex items-start justify-between gap-4 p-6">
                  <div>
                    <h3 className="font-display text-2xl font-medium text-foreground">
                      {p.title}
                    </h3>
                    <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                      {p.excerpt}
                    </p>
                  </div>
                  <div className="flex shrink-0 flex-col items-end gap-2">
                    <span className="rounded-full border border-border px-3 py-1 text-xs uppercase tracking-wide text-primary">
                      {p.category}
                    </span>
                    <span className="text-xs text-muted-foreground">{p.year}</span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
