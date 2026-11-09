import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowUpRight, ArrowLeft, ArrowRight } from "lucide-react";
import { SiteLayout } from "../components/site/SiteLayout";
import { Reveal } from "../components/site/Reveal";
import { PROJECTS, getProject } from "../data/projects";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.project.title} — Elias Vance` },
          { name: "description", content: loaderData.project.excerpt },
          { property: "og:image", content: loaderData.project.image },
        ]
      : [{ title: "Project — Elias Vance" }],
  }),
  component: ProjectDetail,
  notFoundComponent: () => (
    <SiteLayout>
      <div className="mx-auto max-w-3xl px-5 py-40 text-center">
        <h1 className="font-display text-4xl font-medium text-foreground">
          Project not found
        </h1>
        <Link
          to="/projects"
          className="mt-6 inline-flex items-center gap-2 text-primary"
        >
          <ArrowLeft className="h-4 w-4" /> Back to all work
        </Link>
      </div>
    </SiteLayout>
  ),
});

function ProjectDetail() {
  const { project } = Route.useLoaderData();
  const idx = PROJECTS.findIndex((p) => p.slug === project.slug);
  const next = PROJECTS[(idx + 1) % PROJECTS.length];

  return (
    <SiteLayout>
      {/* HEADER */}
      <section className="mx-auto max-w-7xl px-5 pb-10 pt-32 sm:px-8 md:pt-40">
        <Reveal>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" /> All work
          </Link>
        </Reveal>
        <div className="mt-8 grid items-end gap-8 md:grid-cols-12">
          <Reveal className="md:col-span-8">
            <div className="flex flex-wrap gap-2">
              {project.categories.map((c) => (
                <span
                  key={c}
                  className="rounded-full border border-border px-3 py-1 text-xs uppercase tracking-wide text-primary"
                >
                  {c}
                </span>
              ))}
            </div>
            <h1 className="mt-5 font-display text-5xl font-medium leading-[0.95] tracking-tightest text-foreground sm:text-6xl md:text-7xl">
              {project.title}
            </h1>
          </Reveal>
          <Reveal delay={1} className="md:col-span-4">
            <p className="text-lg leading-relaxed text-muted-foreground">
              {project.excerpt}
            </p>
          </Reveal>
        </div>
      </section>

      {/* HERO IMAGE */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="overflow-hidden rounded-2xl border border-border">
            <img
              src={project.image}
              alt={project.title}
              className="aspect-[16/10] w-full object-cover"
            />
          </div>
        </Reveal>
      </section>

      {/* META BAR */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-24">
        <div className="grid gap-8 border-y border-border py-10 sm:grid-cols-3">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Client</p>
            <p className="mt-2 font-display text-lg text-foreground">{project.client}</p>
          </Reveal>
          <Reveal delay={1}>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Year</p>
            <p className="mt-2 font-display text-lg text-foreground">{project.year}</p>
          </Reveal>
          <Reveal delay={2}>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Role</p>
            <p className="mt-2 font-display text-lg text-foreground">
              {project.role.join(" · ")}
            </p>
          </Reveal>
        </div>
      </section>

      {/* OVERVIEW + OBJECTIVES */}
      <section className="mx-auto max-w-7xl px-5 pb-8 sm:px-8">
        <div className="grid gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-7">
            <p className="font-display text-xs uppercase tracking-[0.3em] text-primary">
              Overview
            </p>
            <p className="mt-5 font-display text-2xl font-medium leading-[1.3] tracking-tight text-foreground sm:text-3xl">
              {project.overview}
            </p>
          </Reveal>
          <Reveal delay={1} className="md:col-span-5">
            <p className="font-display text-xs uppercase tracking-[0.3em] text-primary">
              Objectives
            </p>
            <ul className="mt-6 space-y-4">
              {project.objectives.map((o, i) => (
                <li key={i} className="flex gap-3 text-muted-foreground">
                  <span className="mt-1 font-display text-sm text-primary">
                    0{i + 1}
                  </span>
                  <span className="leading-relaxed">{o}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* PROCESS / CHALLENGES / SOLUTION */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-28">
        <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3">
          {[
            { label: "Process", body: project.process },
            { label: "Challenges", body: project.challenges },
            { label: "The Solution", body: project.solution },
          ].map((b, i) => (
            <Reveal key={b.label} delay={(i % 3) as 0 | 1 | 2} className="bg-card">
              <div className="h-full p-8 md:p-10">
                <p className="font-display text-xs uppercase tracking-[0.3em] text-primary">
                  {b.label}
                </p>
                <p className="mt-5 leading-relaxed text-muted-foreground">{b.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* MOCKUPS */}
      <section className="mx-auto max-w-7xl px-5 pb-8 sm:px-8">
        <Reveal>
          <p className="font-display text-xs uppercase tracking-[0.3em] text-primary">
            Mockups
          </p>
        </Reveal>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <Reveal>
            <div className="hover-zoom overflow-hidden rounded-2xl border border-border">
              <img src={project.image} alt={`${project.title} mockup`} loading="lazy" className="aspect-[4/3] w-full object-cover" />
            </div>
          </Reveal>
          <Reveal delay={1}>
            <div className="hover-zoom overflow-hidden rounded-2xl border border-border">
              <img src={project.image} alt={`${project.title} detail`} loading="lazy" className="aspect-[4/3] w-full object-cover [transform:scaleX(-1)]" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* RESULTS */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-28">
        <Reveal>
          <p className="font-display text-xs uppercase tracking-[0.3em] text-primary">
            Results
          </p>
        </Reveal>
        <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3">
          {project.results.map((r, i) => (
            <Reveal key={r.label} delay={(i % 3) as 0 | 1 | 2} className="bg-card">
              <div className="p-8 md:p-10">
                <p className="font-display text-5xl font-medium tracking-tight text-primary md:text-6xl">
                  {r.value}
                </p>
                <p className="mt-3 text-sm text-muted-foreground">{r.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* TESTIMONIAL */}
      {project.testimonial && (
        <section className="border-y border-border">
          <div className="mx-auto max-w-4xl px-5 py-24 text-center sm:px-8 md:py-32">
            <Reveal>
              <blockquote className="font-display text-3xl font-medium leading-[1.25] tracking-tight text-foreground sm:text-4xl">
                "{project.testimonial.quote}"
              </blockquote>
              <figcaption className="mt-8">
                <p className="font-medium text-foreground">{project.testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{project.testimonial.role}</p>
              </figcaption>
            </Reveal>
          </div>
        </section>
      )}

      {/* NEXT PROJECT */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-28">
        <Link
          to="/projects/$slug"
          params={{ slug: next.slug }}
          className="group block rounded-2xl border border-border bg-card p-8 transition-colors hover:bg-secondary md:p-12"
        >
          <div className="flex items-center justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                Next project
              </p>
              <h3 className="mt-3 font-display text-3xl font-medium text-foreground sm:text-4xl">
                {next.title}
              </h3>
            </div>
            <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-border text-foreground transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
              <ArrowRight className="h-5 w-5" />
            </span>
          </div>
        </Link>
      </section>

      {/* CTA */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-5 py-24 text-center sm:px-8 md:py-32">
          <Reveal>
            <h2 className="mx-auto max-w-2xl font-display text-4xl font-medium leading-[1.05] tracking-tightest text-foreground sm:text-5xl">
              Have a project like this in mind?
            </h2>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-medium text-primary-foreground transition-all duration-300 hover:gap-3 hover:bg-primary/90"
            >
              Get in Touch
              <ArrowUpRight className="h-5 w-5" />
            </Link>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}
