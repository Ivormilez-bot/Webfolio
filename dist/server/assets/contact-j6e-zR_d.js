import { r as reactExports, V as jsxRuntimeExports } from "./server-oWJhpc-z.js";
import { c as createLucideIcon, S as SiteLayout, A as ArrowUpRight } from "./SiteLayout-BXAG8ETn.js";
import { R as Reveal } from "./Reveal-PYhhJw_K.js";
import "node:async_hooks";
import "node:stream";
import "node:stream/web";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "./router-T-O4s7Dv.js";
const __iconNode$2 = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]];
const Check = createLucideIcon("check", __iconNode$2);
const __iconNode$1 = [
  ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }],
  ["rect", { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" }]
];
const Mail = createLucideIcon("mail", __iconNode$1);
const __iconNode = [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z"
    }
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
];
const MapPin = createLucideIcon("map-pin", __iconNode);
const SOCIALS = [{
  label: "Instagram",
  href: "https://instagram.com"
}, {
  label: "Dribbble",
  href: "https://dribbble.com"
}, {
  label: "Behance",
  href: "https://behance.net"
}, {
  label: "LinkedIn",
  href: "https://linkedin.com"
}];
const BUDGETS = ["< $5k", "$5k – $15k", "$15k – $40k", "$40k +"];
function Contact() {
  const [sent, setSent] = reactExports.useState(false);
  const [budget, setBudget] = reactExports.useState(null);
  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-7xl px-5 pb-12 pt-32 sm:px-8 md:pt-40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid items-end gap-8 md:grid-cols-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "md:col-span-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex items-center gap-3 font-display text-xs uppercase tracking-[0.3em] text-primary", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-8 bg-primary" }),
          "Contact"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-6 font-display text-5xl font-medium leading-[0.95] tracking-tightest text-foreground sm:text-6xl md:text-7xl", children: [
          "Let's discuss",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "your project." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 1, className: "md:col-span-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2.5 rounded-full border border-border bg-card px-4 py-2.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative flex h-2.5 w-2.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative inline-flex h-2.5 w-2.5 rounded-full bg-primary" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-foreground", children: "Available for new projects" })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-7xl px-5 pb-28 sm:px-8 md:pb-36", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-12 md:grid-cols-12 md:gap-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { className: "md:col-span-7", children: sent ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-full min-h-[24rem] flex-col items-center justify-center rounded-2xl border border-border bg-card p-10 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-6 w-6" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-6 font-display text-3xl font-medium text-foreground", children: "Message sent." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 max-w-sm text-muted-foreground", children: "Thanks for reaching out — I'll get back to you within one to two business days." })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 sm:grid-cols-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Name", name: "name", placeholder: "Your name", required: true }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Email", name: "email", type: "email", placeholder: "you@company.com", required: true })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Company", name: "company", placeholder: "Company or brand (optional)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "mb-3 block text-xs uppercase tracking-[0.2em] text-muted-foreground", children: "Budget range" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-3", children: BUDGETS.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setBudget(b), className: `rounded-full border px-5 py-2.5 text-sm font-medium transition-colors ${budget === b ? "border-primary bg-primary text-primary-foreground" : "border-border text-muted-foreground hover:border-foreground/40 hover:text-foreground"}`, children: b }, b)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "message", className: "mb-3 block text-xs uppercase tracking-[0.2em] text-muted-foreground", children: "Project details" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { id: "message", name: "message", rows: 5, required: true, placeholder: "Tell me about what you're building, timelines, and what success looks like.", className: "w-full resize-none rounded-2xl border border-border bg-card px-5 py-4 text-foreground placeholder:text-muted-foreground/70 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "submit", className: "inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-medium text-primary-foreground transition-all duration-300 hover:gap-3 hover:bg-primary/90", children: [
          "Send message",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-5 w-5" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 1, className: "md:col-span-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.2em] text-muted-foreground", children: "Email" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "mailto:hello@eliasvance.studio", className: "mt-3 inline-flex items-center gap-2 font-display text-xl text-foreground hover:text-primary", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-5 w-5 text-primary" }),
            "hello@eliasvance.studio"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.2em] text-muted-foreground", children: "Location" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-3 inline-flex items-center gap-2 font-display text-xl text-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-5 w-5 text-primary" }),
            "Lisbon · Remote worldwide"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.2em] text-muted-foreground", children: "Follow along" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-4 space-y-3", children: SOCIALS.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: s.href, target: "_blank", rel: "noopener noreferrer", className: "group inline-flex items-center gap-2 text-lg text-foreground/90 hover:text-primary", children: [
            s.label,
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-4 w-4 text-primary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" })
          ] }) }, s.label)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl border border-border bg-card p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "leading-relaxed text-muted-foreground", children: "I take on a limited number of projects at a time to keep the quality high. The more you can share up front, the faster I can tell you how I'd approach it." }) })
      ] }) })
    ] }) })
  ] });
}
function Field({
  label,
  name,
  type = "text",
  placeholder,
  required
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: name, className: "mb-3 block text-xs uppercase tracking-[0.2em] text-muted-foreground", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: name, name, type, required, placeholder, className: "w-full rounded-full border border-border bg-card px-5 py-3.5 text-foreground placeholder:text-muted-foreground/70 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" })
  ] });
}
export {
  Contact as component
};
