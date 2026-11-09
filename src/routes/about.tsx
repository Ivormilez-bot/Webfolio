import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Download } from "lucide-react";
import { SiteLayout } from "../components/site/SiteLayout";
import { Reveal } from "../components/site/Reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Elias Vance, Creative Designer" },
      {
        name: "description",
        content:
          "The story, philosophy and process behind Elias Vance — a multidisciplinary creative designer and brand partner.",
      },
    ],
  }),
  component: About,
});

const TIMELINE = [
  { year: "Now", title: "Independent Creative Designer", desc: "Partnering with founders, studios and brands worldwide on identity, digital and editorial work." },
  { year: "2021", title: "Design Lead — Studio Atelier 9", desc: "Led brand and digital for clients across fashion, hospitality and culture." },
  { year: "2017", title: "Senior Designer — Northwind", desc: "Shipped identity systems and product UI for early-stage startups." },
  { year: "2014", title: "Started designing professionally", desc: "First freelance commissions while studying visual communication." },
];

const VALUES = [
  { title: "Clarity over noise", desc: "The best design removes everything that isn't essential. I aim for inevitable, not decorative." },
  { title: "Strategy first", desc: "Beautiful work that doesn't move the business is just decoration. Direction comes before pixels." },
  { title: "Craft is respect", desc: "Attention to detail signals care — to your audience and to the work itself." },
  { title: "True partnership", desc: "I work with you, not just for you. The best results come from a real collaboration." },
];

const TOOLS = ["Figma", "Adobe CC", "Webflow", "Blender", "After Effects", "Framer", "Cinema 4D", "Notion"];
const EXPERTISE = ["Brand Identity", "Art Direction", "UX / UI Design", "Editorial Design", "Packaging", "Motion & 3D", "Design Systems", "Creative Strategy"];

function About() {
  return (
    <SiteLayout>
      {/* HEADER */}
      <section className="mx-auto max-w-7xl px-5 pb-12 pt-32 sm:px-8 md:pt-40">
        <div className="grid items-end gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-7">
            <p className="flex items-center gap-3 font-display text-xs uppercase tracking-[0.3em] text-primary">
              <span className="h-px w-8 bg-primary" />
              About
            </p>
            <h1 className="mt-6 font-display text-5xl font-medium leading-[0.95] tracking-tightest text-foreground sm:text-6xl md:text-7xl">
              Designer.
              <br />
              Strategist.
              <br />
              <span className="text-primary">Creative partner.</span>
            </h1>
          </Reveal>
          <Reveal delay={1} className="md:col-span-5">
            <p className="text-lg leading-relaxed text-muted-foreground">
              For over a decade I've helped brands find their voice and show up
              with confidence. I move between strategy, identity, digital and
              editorial — the connective tissue that makes a brand feel whole.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/cv-elias-vance.txt"
                download
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
              >
                Download CV
                <Download className="h-4 w-4 text-primary" />
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all duration-300 hover:gap-3 hover:bg-primary/90"
              >
                Work with me
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PORTRAIT + STORY */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-24">
        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          <Reveal className="md:col-span-5">
            <div className="overflow-hidden rounded-2xl border border-border">
              <img
                src="/images/portrait.jpg"
                alt="Portrait of Elias Vance"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
          <div className="md:col-span-7">
            <Reveal>
              <p className="font-display text-xs uppercase tracking-[0.3em] text-primary">
                My story
              </p>
              <div className="mt-6 space-y-5 text-lg leading-relaxed text-muted-foreground">
                <p>
                  I started designing because I was obsessed with how the right
                  combination of type, image and space could make people feel
                  something. That obsession never left.
                </p>
                <p>
                  After years inside studios and startups, I went independent to
                  do the work I cared about most — close, considered
                  partnerships with founders and teams who treat design as a
                  competitive advantage, not an afterthought.
                </p>
                <p>
                  Today I work with a small number of clients at a time, so each
                  project gets the attention it deserves. My philosophy is
                  simple: <span className="text-foreground">strategy first, craft always, and nothing on the page that doesn't earn its place.</span>
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 md:py-32">
          <Reveal>
            <p className="font-display text-xs uppercase tracking-[0.3em] text-primary">
              Experience
            </p>
            <h2 className="mt-4 font-display text-4xl font-medium tracking-tight text-foreground sm:text-5xl">
              A short history.
            </h2>
          </Reveal>
          <div className="mt-14">
            {TIMELINE.map((t, i) => (
              <Reveal key={t.year} delay={(i % 4) as 0 | 1 | 2 | 3}>
                <div className="grid items-start gap-4 border-t border-border py-8 md:grid-cols-12">
                  <span className="font-display text-2xl font-medium text-primary md:col-span-2">
                    {t.year}
                  </span>
                  <h3 className="font-display text-xl font-medium text-foreground md:col-span-4">
                    {t.title}
                  </h3>
                  <p className="text-muted-foreground md:col-span-6">{t.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 md:py-32">
          <Reveal>
            <p className="font-display text-xs uppercase tracking-[0.3em] text-primary">
              Core values
            </p>
            <h2 className="mt-4 max-w-xl font-display text-4xl font-medium tracking-tight text-foreground sm:text-5xl">
              What guides the work.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={(i % 2) as 0 | 1} className="bg-card">
                <div className="h-full p-8 md:p-10">
                  <h3 className="font-display text-2xl font-medium text-foreground">
                    {v.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERTISE + TOOLS */}
      <section className="border-t border-border">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 sm:px-8 md:grid-cols-2 md:py-32">
          <Reveal>
            <p className="font-display text-xs uppercase tracking-[0.3em] text-primary">
              Skills & expertise
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {EXPERTISE.map((s) => (
                <span
                  key={s}
                  className="inline-flex rounded-full border border-border bg-card px-5 py-2.5 font-display text-base text-foreground/90"
                >
                  {s}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal delay={1}>
            <p className="font-display text-xs uppercase tracking-[0.3em] text-primary">
              Selected tools
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {TOOLS.map((s) => (
                <span
                  key={s}
                  className="inline-flex rounded-full border border-border bg-card px-5 py-2.5 font-display text-base text-foreground/90"
                >
                  {s}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-5 py-28 text-center sm:px-8 md:py-36">
          <Reveal>
            <h2 className="mx-auto max-w-3xl font-display text-5xl font-medium leading-[1] tracking-tightest text-foreground sm:text-6xl">
              Like how I think?
              <br />
              <span className="text-primary">Let's collaborate.</span>
            </h2>
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
