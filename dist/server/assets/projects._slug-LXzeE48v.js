import { V as jsxRuntimeExports } from "./server-oWJhpc-z.js";
import { R as Route, P as PROJECTS, L as Link } from "./router-T-O4s7Dv.js";
import { c as createLucideIcon, S as SiteLayout, A as ArrowUpRight } from "./SiteLayout-BXAG8ETn.js";
import { R as Reveal } from "./Reveal-PYhhJw_K.js";
import { A as ArrowLeft } from "./arrow-left-DBiPi1Fb.js";
import "node:async_hooks";
import "node:stream";
import "node:stream/web";
import "util";
import "crypto";
import "async_hooks";
import "stream";
const __iconNode = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
];
const ArrowRight = createLucideIcon("arrow-right", __iconNode);
function ProjectDetail() {
  const {
    project
  } = Route.useLoaderData();
  const idx = PROJECTS.findIndex((p) => p.slug === project.slug);
  const next = PROJECTS[(idx + 1) % PROJECTS.length];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-7xl px-5 pb-10 pt-32 sm:px-8 md:pt-40", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/projects", className: "inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4" }),
        " All work"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 grid items-end gap-8 md:grid-cols-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "md:col-span-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: project.categories.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full border border-border px-3 py-1 text-xs uppercase tracking-wide text-primary", children: c }, c)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-5 font-display text-5xl font-medium leading-[0.95] tracking-tightest text-foreground sm:text-6xl md:text-7xl", children: project.title })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 1, className: "md:col-span-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg leading-relaxed text-muted-foreground", children: project.excerpt }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-7xl px-5 sm:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden rounded-2xl border border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: project.image, alt: project.title, className: "aspect-[16/10] w-full object-cover" }) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-8 border-y border-border py-10 sm:grid-cols-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.2em] text-muted-foreground", children: "Client" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 font-display text-lg text-foreground", children: project.client })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { delay: 1, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.2em] text-muted-foreground", children: "Year" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 font-display text-lg text-foreground", children: project.year })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { delay: 2, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.2em] text-muted-foreground", children: "Role" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 font-display text-lg text-foreground", children: project.role.join(" · ") })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-7xl px-5 pb-8 sm:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-12 md:grid-cols-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "md:col-span-7", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-xs uppercase tracking-[0.3em] text-primary", children: "Overview" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 font-display text-2xl font-medium leading-[1.3] tracking-tight text-foreground sm:text-3xl", children: project.overview })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { delay: 1, className: "md:col-span-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-xs uppercase tracking-[0.3em] text-primary", children: "Objectives" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-6 space-y-4", children: project.objectives.map((o, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3 text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "mt-1 font-display text-sm text-primary", children: [
            "0",
            i + 1
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "leading-relaxed", children: o })
        ] }, i)) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3", children: [{
      label: "Process",
      body: project.process
    }, {
      label: "Challenges",
      body: project.challenges
    }, {
      label: "The Solution",
      body: project.solution
    }].map((b, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i % 3, className: "bg-card", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-full p-8 md:p-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-xs uppercase tracking-[0.3em] text-primary", children: b.label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 leading-relaxed text-muted-foreground", children: b.body })
    ] }) }, b.label)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-7xl px-5 pb-8 sm:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-xs uppercase tracking-[0.3em] text-primary", children: "Mockups" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 grid gap-5 md:grid-cols-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hover-zoom overflow-hidden rounded-2xl border border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: project.image, alt: `${project.title} mockup`, loading: "lazy", className: "aspect-[4/3] w-full object-cover" }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 1, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hover-zoom overflow-hidden rounded-2xl border border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: project.image, alt: `${project.title} detail`, loading: "lazy", className: "aspect-[4/3] w-full object-cover [transform:scaleX(-1)]" }) }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-28", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-xs uppercase tracking-[0.3em] text-primary", children: "Results" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3", children: project.results.map((r, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i % 3, className: "bg-card", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8 md:p-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-5xl font-medium tracking-tight text-primary md:text-6xl", children: r.value }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-muted-foreground", children: r.label })
      ] }) }, r.label)) })
    ] }),
    project.testimonial && /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-y border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-4xl px-5 py-24 text-center sm:px-8 md:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("blockquote", { className: "font-display text-3xl font-medium leading-[1.25] tracking-tight text-foreground sm:text-4xl", children: [
        '"',
        project.testimonial.quote,
        '"'
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("figcaption", { className: "mt-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-foreground", children: project.testimonial.author }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: project.testimonial.role })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/projects/$slug", params: {
      slug: next.slug
    }, className: "group block rounded-2xl border border-border bg-card p-8 transition-colors hover:bg-secondary md:p-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-muted-foreground", children: "Next project" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-3 font-display text-3xl font-medium text-foreground sm:text-4xl", children: next.title })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-border text-foreground transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-5 w-5" }) })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-5 py-24 text-center sm:px-8 md:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mx-auto max-w-2xl font-display text-4xl font-medium leading-[1.05] tracking-tightest text-foreground sm:text-5xl", children: "Have a project like this in mind?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", className: "mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-medium text-primary-foreground transition-all duration-300 hover:gap-3 hover:bg-primary/90", children: [
        "Get in Touch",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-5 w-5" })
      ] })
    ] }) }) })
  ] });
}
export {
  ProjectDetail as component
};
