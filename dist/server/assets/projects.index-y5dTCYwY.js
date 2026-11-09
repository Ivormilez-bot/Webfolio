import { r as reactExports, V as jsxRuntimeExports } from "./server-oWJhpc-z.js";
import { P as PROJECTS, A as ALL_CATEGORIES, L as Link } from "./router-T-O4s7Dv.js";
import { S as SiteLayout, A as ArrowUpRight } from "./SiteLayout-BXAG8ETn.js";
import { R as Reveal } from "./Reveal-PYhhJw_K.js";
import "node:async_hooks";
import "node:stream";
import "node:stream/web";
import "util";
import "crypto";
import "async_hooks";
import "stream";
function Projects() {
  const [filter, setFilter] = reactExports.useState("All");
  const visible = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-7xl px-5 pb-12 pt-32 sm:px-8 md:pt-40", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex items-center gap-3 font-display text-xs uppercase tracking-[0.3em] text-primary", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-8 bg-primary" }),
          "Selected Work"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-6 max-w-4xl font-display text-5xl font-medium leading-[0.95] tracking-tightest text-foreground sm:text-6xl md:text-7xl", children: [
          "Brands designed to",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: " leave a lasting impression." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 1, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 flex flex-wrap gap-3", children: ALL_CATEGORIES.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setFilter(c), className: `rounded-full border px-5 py-2.5 text-sm font-medium transition-colors ${filter === c ? "border-primary bg-primary text-primary-foreground" : "border-border text-muted-foreground hover:border-foreground/40 hover:text-foreground"}`, children: c }, c)) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-7xl px-5 pb-28 sm:px-8 md:pb-36", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-5 sm:grid-cols-2", children: visible.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i % 2, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/projects/$slug", params: {
      slug: p.slug
    }, className: "hover-zoom group block overflow-hidden rounded-2xl border border-border bg-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[16/11] overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p.image, alt: p.title, loading: "lazy", className: "h-full w-full object-cover" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-foreground/20 bg-background/40 text-foreground backdrop-blur-sm transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-4 w-4" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-4 p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl font-medium text-foreground", children: p.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 max-w-sm text-sm text-muted-foreground", children: p.excerpt })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex shrink-0 flex-col items-end gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full border border-border px-3 py-1 text-xs uppercase tracking-wide text-primary", children: p.category }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: p.year })
        ] })
      ] })
    ] }) }, p.slug)) }) })
  ] });
}
export {
  Projects as component
};
