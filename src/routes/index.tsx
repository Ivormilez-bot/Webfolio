/** @jsx React.createElement */
import React from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { SiteLayout } from "../components/site/SiteLayout";
import { Reveal } from "../components/site/Reveal";
import { PROJECTS } from "../data/projects";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ivor Wanjala — Creative Designer & Brand Partner" },
      {
        name: "description",
        content:
          "Brand identity, motion and editorial design with clarity, emotion and purpose. A creative partner for founders, startups and agencies.",
      },
    ],
  }),
  component: Home,
});

const TRUST = [
  "Crimson Communications",
  "Moran Publishers",
  "Ideas Un Limited",
  "Nadalo Water",
  "Disqav",
  "Trill Studio",
  "Northwind",
  "Atelier 9",
  "Usawa Agenda",
  "Ujuzi Fulani Hub",
];

const SERVICES = [
  {
    n: "01",
    title: "Brand Identity",
    desc: "Logos, wordmarks, type systems and full visual identities built to last and to scale.",
  },
  {
    n: "02",
    title: "Motion Design",
    desc: "Transforming ideas into compelling motion experiences through purposeful animation and design.",
  },
  {
    n: "03",
    title: "Art Direction",
    desc: "Campaigns, photography direction and visual systems that own a category.",
  },
  {
    n: "04",
    title: "Editorial & Print",
    desc: "Magazines, books and packaging — design you can hold in your hands.",
  },
];

const SKILLS = [
  "Brand Strategy",
  "Identity Design",
  "Art Direction",
  "Creative Direction",
  "Editorial Design",
  "Packaging",
  "Motion Design",
  "Campaign Design",
];

const PROCESS = [
  {
    n: "01",
    title: "Discover",
    desc: "We dig into your goals, audience and category to find the real problem worth solving.",
  },
  {
    n: "02",
    title: "Define",
    desc: "Strategy and direction first — a clear creative platform before any pixels move.",
  },
  {
    n: "03",
    title: "Design",
    desc: "Concepts refined through tight, collaborative iteration until it feels inevitable.",
  },
  {
    n: "04",
    title: "Deliver",
    desc: "Production-ready assets, guidelines and support to launch and grow with confidence.",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "Ivor transformed our brand with creativity, professionalism, and exceptional attention to detail. The final identity exceeded our expectations and was a pleasure to collaborate on.",
    author: "Bill Sila",
    role: "Founder, Nadalo Water",
  },
  {
    quote:
      "Working with Ivor felt less like hiring a designer and more like gaining a creative partner. Our whole studio looks a tier above where we were.",
    author: "Charlotte Meja",
    role: "Founder, Trill Studio",
  },
  {
    quote:
      "Working with Ivor on the Ujuzi Fulani Hub logo was a seamless experience. The final design perfectly captures the essence of our brand.",
    author: "Tabitha Gichiah",
    role: "Founder, Ujuzi Fulani Hub",
  },
];

function Home() {
  const featured = PROJECTS.slice(0, 3);
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden px-5 pb-16 pt-28 sm:px-8 md:pt-32">
        {/* ghost word */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-8 select-none text-center font-display text-[20vw] font-bold leading-none ghost-text"
        >
          STUDIO
        </span>

        <div className="relative mx-auto w-full max-w-7xl">
          <Reveal>
            <p className="flex items-center gap-3 font-display text-xs uppercase tracking-[0.3em] text-primary">
              <span className="h-px w-8 bg-primary" />
              Creative Designer · Brand Partner
            </p>
          </Reveal>

          <Reveal delay={1}>
            <h1 className="mt-6 max-w-[14ch] font-display text-[14vw] font-medium leading-[0.92] tracking-tightest text-foreground sm:text-[10vw] lg:text-[8.5rem]">
              Design that
              <br />
              <span className="text-primary">leaves a mark.</span>
            </h1>
          </Reveal>

          <Reveal delay={2}>
            <div className="mt-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
              <p className="max-w-md text-lg leading-relaxed text-muted-foreground">
                I'm Ivor — a multidisciplinary designer helping founders and teams build brands and
                visual identities that connect, convert, and last.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-medium text-primary-foreground transition-all duration-300 hover:gap-3 hover:bg-primary/90"
                >
                  Get in Touch
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-4 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
                >
                  View Work
                </Link>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="relative mx-auto mt-16 flex w-full max-w-7xl items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
          <ArrowDown className="h-4 w-4 animate-bounce" />
          Scroll to explore
        </div>
      </section>

      {/* TRUST MARQUEE */}
      <section className="border-y border-border py-8">
        <p className="mb-6 px-5 text-center text-xs uppercase tracking-[0.3em] text-muted-foreground sm:px-8">
          Trusted by brands I've helped shape
        </p>
        <div className="relative flex overflow-hidden">
          <div className="flex shrink-0 animate-marquee items-center gap-16 pr-16">
            {[...TRUST, ...TRUST].map((b, i) => (
              <span
                key={i}
                className="whitespace-nowrap font-display text-2xl font-medium text-foreground/40"
              >
                {b}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 md:py-36">
        <div className="grid gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-4">
            <p className="font-display text-xs uppercase tracking-[0.3em] text-primary">
              Behind the work
            </p>
          </Reveal>
          <Reveal delay={1} className="md:col-span-8">
            <p className="font-display text-3xl font-medium leading-[1.15] tracking-tight text-foreground sm:text-4xl md:text-[2.75rem]">
              I design with clarity and purpose — blending strategy and craft to build brands that
              look considered and work everywhere. Less noise, more intention.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-foreground link-underline"
            >
              More about me
              <ArrowUpRight className="h-4 w-4 text-primary" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* FEATURED PROJECTS — asymmetric */}
      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 md:py-20">
        <div className="mb-12 flex items-end justify-between gap-6">
          <Reveal>
            <p className="font-display text-xs uppercase tracking-[0.3em] text-primary">
              Featured Work
            </p>
            <h2 className="mt-4 max-w-xl font-display text-4xl font-medium leading-[1.05] tracking-tight text-foreground sm:text-5xl">
              Selected projects
            </h2>
          </Reveal>
          <Reveal className="hidden sm:block">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-sm font-medium text-foreground link-underline"
            >
              View all
              <ArrowUpRight className="h-4 w-4 text-primary" />
            </Link>
          </Reveal>
        </div>

        {/* one large + two small */}
        <div className="grid gap-5 md:grid-cols-12">
          <Reveal className="md:col-span-7">
            <FeatureCard project={featured[0]} large />
          </Reveal>
          <div className="grid gap-5 md:col-span-5">
            <Reveal delay={1}>
              <FeatureCard project={featured[1]} />
            </Reveal>
            <Reveal delay={2}>
              <FeatureCard project={featured[2]} />
            </Reveal>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 md:py-36">
          <div className="grid gap-12 md:grid-cols-12">
            <Reveal className="md:col-span-4">
              <p className="font-display text-xs uppercase tracking-[0.3em] text-primary">
                What I do
              </p>
              <h2 className="mt-4 font-display text-4xl font-medium leading-[1.05] tracking-tight text-foreground sm:text-5xl">
                Services that move brands forward.
              </h2>
              <p className="mt-6 max-w-sm text-muted-foreground">
                From a single identity to an end-to-end brand system, I partner with you across the
                full creative process.
              </p>
            </Reveal>

            <div className="md:col-span-8">
              <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
                {SERVICES.map((s, i) => (
                  <Reveal key={s.n} delay={(i % 2) as 0 | 1} className="bg-card">
                    <div className="group h-full p-8 transition-colors duration-300 hover:bg-secondary md:p-10">
                      <span className="font-display text-sm text-primary">{s.n}</span>
                      <h3 className="mt-6 font-display text-2xl font-medium text-foreground">
                        {s.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS SNAPSHOT */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-28">
          <Reveal>
            <p className="font-display text-xs uppercase tracking-[0.3em] text-primary">
              Capabilities
            </p>
          </Reveal>
          <div className="mt-8 flex flex-wrap gap-3">
            {SKILLS.map((s, i) => (
              <Reveal key={s} delay={(i % 4) as 0 | 1 | 2 | 3}>
                <span className="inline-flex rounded-full border border-border bg-card px-5 py-2.5 font-display text-base text-foreground/90">
                  {s}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 md:py-36">
          <Reveal>
            <p className="font-display text-xs uppercase tracking-[0.3em] text-primary">
              How I work
            </p>
            <h2 className="mt-4 max-w-2xl font-display text-4xl font-medium leading-[1.05] tracking-tight text-foreground sm:text-5xl">
              A clear, collaborative process.
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-4">
            {PROCESS.map((p, i) => (
              <Reveal key={p.n} delay={(i % 4) as 0 | 1 | 2 | 3} className="bg-card">
                <div className="h-full p-8 md:p-10">
                  <span className="font-display text-4xl font-medium text-foreground/15">
                    {p.n}
                  </span>
                  <h3 className="mt-6 font-display text-xl font-medium text-foreground">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 md:py-36">
          <Reveal>
            <p className="font-display text-xs uppercase tracking-[0.3em] text-primary">
              What clients say
            </p>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.author} delay={(i % 3) as 0 | 1 | 2}>
                <figure className="flex h-full flex-col justify-between rounded-2xl border border-border bg-card p-8">
                  <blockquote className="font-display text-lg leading-relaxed text-foreground/90">
                    "{t.quote}"
                  </blockquote>
                  <figcaption className="mt-8">
                    <p className="font-medium text-foreground">{t.author}</p>
                    <p className="text-sm text-muted-foreground">{t.role}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-5 py-28 text-center sm:px-8 md:py-40">
          <Reveal>
            <p className="font-display text-xs uppercase tracking-[0.3em] text-primary">
              Start a project
            </p>
            <h2 className="mx-auto mt-6 max-w-3xl font-display text-5xl font-medium leading-[1] tracking-tightest text-foreground sm:text-6xl md:text-7xl">
              Let's bring your
              <br />
              <span className="text-primary">brand to life.</span>
            </h2>
            <p className="mx-auto mt-7 max-w-xl text-lg text-muted-foreground">
              Whether you're starting fresh or evolving an existing brand, I'd love to hear what
              you're building.
            </p>
            <Link
              to="/contact"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-medium text-primary-foreground transition-all duration-300 hover:gap-3 hover:bg-primary/90"
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

function FeatureCard({
  project,
  large = false,
}: {
  project: (typeof PROJECTS)[number];
  large?: boolean;
}) {
  return (
    <Link
      to="/projects/$slug"
      params={{ slug: project.slug }}
      className="hover-zoom group block h-full overflow-hidden rounded-2xl border border-border bg-card"
    >
      <div
        className={`relative overflow-hidden ${large ? "aspect-[4/3] md:aspect-[16/12]" : "aspect-[16/10]"}`}
      >
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
        <span className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-foreground/20 bg-background/40 text-foreground backdrop-blur-sm transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>
      <div className="flex items-center justify-between gap-4 p-6">
        <div>
          <h3
            className={`font-display font-medium text-foreground ${large ? "text-2xl" : "text-xl"}`}
          >
            {project.title}
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">{project.excerpt}</p>
        </div>
        <span className="shrink-0 rounded-full border border-border px-3 py-1 text-xs uppercase tracking-wide text-primary">
          {project.category}
        </span>
      </div>
    </Link>
  );
}
