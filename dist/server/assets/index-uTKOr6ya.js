import { V as jsxRuntimeExports } from "./server-oWJhpc-z.js";
import { L as Link, P as PROJECTS } from "./router-T-O4s7Dv.js";
import { c as createLucideIcon, S as SiteLayout, A as ArrowUpRight } from "./SiteLayout-BXAG8ETn.js";
import { R as Reveal } from "./Reveal-PYhhJw_K.js";
import "node:async_hooks";
import "node:stream";
import "node:stream/web";
import "util";
import "crypto";
import "async_hooks";
import "stream";
const __iconNode = [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
];
const ArrowDown = createLucideIcon("arrow-down", __iconNode);
const TRUST = ["Aurelien Paris", "Aurora Living", "Lumen", "Nocte", "Monolith", "Flux Studio", "Northwind", "Atelier 9", "Verde", "Kinfolk"];
const SERVICES = [{
  n: "01",
  title: "Brand Identity",
  desc: "Logos, wordmarks, type systems and full visual identities built to last and to scale."
}, {
  n: "02",
  title: "Digital & Web",
  desc: "Editorial websites and product interfaces designed to feel premium and convert."
}, {
  n: "03",
  title: "Art Direction",
  desc: "Campaigns, photography direction and visual systems that own a category."
}, {
  n: "04",
  title: "Editorial & Print",
  desc: "Magazines, books and packaging — design you can hold in your hands."
}];
const SKILLS = ["Brand Strategy", "Identity Design", "Art Direction", "UX / UI Design", "Editorial Design", "Packaging", "Motion & 3D", "Design Systems"];
const PROCESS = [{
  n: "01",
  title: "Discover",
  desc: "We dig into your goals, audience and category to find the real problem worth solving."
}, {
  n: "02",
  title: "Define",
  desc: "Strategy and direction first — a clear creative platform before any pixels move."
}, {
  n: "03",
  title: "Design",
  desc: "Concepts refined through tight, collaborative iteration until it feels inevitable."
}, {
  n: "04",
  title: "Deliver",
  desc: "Production-ready assets, guidelines and support to launch and grow with confidence."
}];
const TESTIMONIALS = [{
  quote: "Elias understood the brand before I could explain it. The identity feels inevitable now — as if it always existed.",
  author: "Camille Aurelien",
  role: "Founder, Aurelien Paris"
}, {
  quote: "Working with Elias felt less like hiring a designer and more like gaining a creative partner. Our whole studio looks a tier above where we were.",
  author: "Daniel Reyes",
  role: "Principal, Aurora Living"
}, {
  quote: "He gave us a language, not a logo. A year later we're still building on the system he handed over.",
  author: "Mara Okafor",
  role: "Creative Lead, Flux Studio"
}];
function Home() {
  const featured = PROJECTS.slice(0, 3);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative flex min-h-[100svh] flex-col justify-center overflow-hidden px-5 pb-16 pt-28 sm:px-8 md:pt-32", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": true, className: "pointer-events-none absolute inset-x-0 bottom-8 select-none text-center font-display text-[20vw] font-bold leading-none ghost-text", children: "STUDIO" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto w-full max-w-7xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex items-center gap-3 font-display text-xs uppercase tracking-[0.3em] text-primary", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-8 bg-primary" }),
          "Creative Designer · Brand Partner"
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 1, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-6 max-w-[14ch] font-display text-[14vw] font-medium leading-[0.92] tracking-tightest text-foreground sm:text-[10vw] lg:text-[8.5rem]", children: [
          "Design that",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "leaves a mark." })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 2, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "max-w-md text-lg leading-relaxed text-muted-foreground", children: "I'm Elias — a multidisciplinary designer helping founders and teams build brands and digital experiences that connect, convert, and last." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", className: "inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-medium text-primary-foreground transition-all duration-300 hover:gap-3 hover:bg-primary/90", children: [
              "Get in Touch",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-4 w-4" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/projects", className: "inline-flex items-center gap-2 rounded-full border border-border px-7 py-4 text-sm font-medium text-foreground transition-colors hover:bg-secondary", children: "View Work" })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto mt-16 flex w-full max-w-7xl items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowDown, { className: "h-4 w-4 animate-bounce" }),
        "Scroll to explore"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "border-y border-border py-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-6 px-5 text-center text-xs uppercase tracking-[0.3em] text-muted-foreground sm:px-8", children: "Trusted by brands I've helped shape" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative flex overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex shrink-0 animate-marquee items-center gap-16 pr-16", children: [...TRUST, ...TRUST].map((b, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "whitespace-nowrap font-display text-2xl font-medium text-foreground/40", children: b }, i)) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-7xl px-5 py-24 sm:px-8 md:py-36", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-12 md:grid-cols-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { className: "md:col-span-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-xs uppercase tracking-[0.3em] text-primary", children: "Behind the work" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { delay: 1, className: "md:col-span-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-3xl font-medium leading-[1.15] tracking-tight text-foreground sm:text-4xl md:text-[2.75rem]", children: "I design with clarity and purpose — blending strategy and craft to build brands that look considered and work everywhere. Less noise, more intention." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/about", className: "mt-8 inline-flex items-center gap-2 text-sm font-medium text-foreground link-underline", children: [
          "More about me",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-4 w-4 text-primary" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-7xl px-5 py-12 sm:px-8 md:py-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-12 flex items-end justify-between gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-xs uppercase tracking-[0.3em] text-primary", children: "Featured Work" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 max-w-xl font-display text-4xl font-medium leading-[1.05] tracking-tight text-foreground sm:text-5xl", children: "Selected projects" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { className: "hidden sm:block", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/projects", className: "inline-flex items-center gap-2 text-sm font-medium text-foreground link-underline", children: [
          "View all",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-4 w-4 text-primary" })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-5 md:grid-cols-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { className: "md:col-span-7", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FeatureCard, { project: featured[0], large: true }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-5 md:col-span-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 1, children: /* @__PURE__ */ jsxRuntimeExports.jsx(FeatureCard, { project: featured[1] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 2, children: /* @__PURE__ */ jsxRuntimeExports.jsx(FeatureCard, { project: featured[2] }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-5 py-24 sm:px-8 md:py-36", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-12 md:grid-cols-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "md:col-span-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-xs uppercase tracking-[0.3em] text-primary", children: "What I do" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 font-display text-4xl font-medium leading-[1.05] tracking-tight text-foreground sm:text-5xl", children: "Services that move brands forward." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-sm text-muted-foreground", children: "From a single identity to an end-to-end brand system, I partner with you across the full creative process." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:col-span-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2", children: SERVICES.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i % 2, className: "bg-card", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group h-full p-8 transition-colors duration-300 hover:bg-secondary md:p-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-sm text-primary", children: s.n }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-6 font-display text-2xl font-medium text-foreground", children: s.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm leading-relaxed text-muted-foreground", children: s.desc })
      ] }) }, s.n)) }) })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-28", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-xs uppercase tracking-[0.3em] text-primary", children: "Capabilities" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 flex flex-wrap gap-3", children: SKILLS.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i % 4, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex rounded-full border border-border bg-card px-5 py-2.5 font-display text-base text-foreground/90", children: s }) }, s)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-5 py-24 sm:px-8 md:py-36", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-xs uppercase tracking-[0.3em] text-primary", children: "How I work" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 max-w-2xl font-display text-4xl font-medium leading-[1.05] tracking-tight text-foreground sm:text-5xl", children: "A clear, collaborative process." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-4", children: PROCESS.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i % 4, className: "bg-card", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-full p-8 md:p-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-4xl font-medium text-foreground/15", children: p.n }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-6 font-display text-xl font-medium text-foreground", children: p.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm leading-relaxed text-muted-foreground", children: p.desc })
      ] }) }, p.n)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-5 py-24 sm:px-8 md:py-36", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-xs uppercase tracking-[0.3em] text-primary", children: "What clients say" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid gap-5 md:grid-cols-3", children: TESTIMONIALS.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i % 3, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "flex h-full flex-col justify-between rounded-2xl border border-border bg-card p-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("blockquote", { className: "font-display text-lg leading-relaxed text-foreground/90", children: [
          '"',
          t.quote,
          '"'
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("figcaption", { className: "mt-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-foreground", children: t.author }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: t.role })
        ] })
      ] }) }, t.author)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-5 py-28 text-center sm:px-8 md:py-40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-xs uppercase tracking-[0.3em] text-primary", children: "Start a project" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mx-auto mt-6 max-w-3xl font-display text-5xl font-medium leading-[1] tracking-tightest text-foreground sm:text-6xl md:text-7xl", children: [
        "Let's bring your",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "brand to life." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-7 max-w-xl text-lg text-muted-foreground", children: "Whether you're starting fresh or evolving an existing brand, I'd love to hear what you're building." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", className: "mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-medium text-primary-foreground transition-all duration-300 hover:gap-3 hover:bg-primary/90", children: [
        "Get in Touch",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-5 w-5" })
      ] })
    ] }) }) })
  ] });
}
function FeatureCard({
  project,
  large = false
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/projects/$slug", params: {
    slug: project.slug
  }, className: "hover-zoom group block h-full overflow-hidden rounded-2xl border border-border bg-card", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `relative overflow-hidden ${large ? "aspect-[4/3] md:aspect-[16/12]" : "aspect-[16/10]"}`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: project.image, alt: project.title, loading: "lazy", className: "h-full w-full object-cover" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-foreground/20 bg-background/40 text-foreground backdrop-blur-sm transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-4 w-4" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-4 p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: `font-display font-medium text-foreground ${large ? "text-2xl" : "text-xl"}`, children: project.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: project.excerpt })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "shrink-0 rounded-full border border-border px-3 py-1 text-xs uppercase tracking-wide text-primary", children: project.category })
    ] })
  ] });
}
export {
  Home as component
};
