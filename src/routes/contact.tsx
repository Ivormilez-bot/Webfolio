import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { ArrowUpRight, Mail, MapPin, Check } from "lucide-react";
import { SiteLayout } from "../components/site/SiteLayout";
import { Reveal } from "../components/site/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Elias Vance, Creative Designer" },
      {
        name: "description",
        content:
          "Start a project with Elias Vance. Available for select freelance branding, digital and editorial work.",
      },
    ],
  }),
  component: Contact,
});

const SOCIALS = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "Dribbble", href: "https://dribbble.com" },
  { label: "Behance", href: "https://behance.net" },
  { label: "LinkedIn", href: "https://linkedin.com" },
];

const BUDGETS = ["< $5k", "$5k – $15k", "$15k – $40k", "$40k +"];

function Contact() {
  const [sent, setSent] = useState(false);
  const [budget, setBudget] = useState<string | null>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <SiteLayout>
      <section className="mx-auto max-w-7xl px-5 pb-12 pt-32 sm:px-8 md:pt-40">
        <div className="grid items-end gap-8 md:grid-cols-12">
          <Reveal className="md:col-span-8">
            <p className="flex items-center gap-3 font-display text-xs uppercase tracking-[0.3em] text-primary">
              <span className="h-px w-8 bg-primary" />
              Contact
            </p>
            <h1 className="mt-6 font-display text-5xl font-medium leading-[0.95] tracking-tightest text-foreground sm:text-6xl md:text-7xl">
              Let's discuss
              <br />
              <span className="text-primary">your project.</span>
            </h1>
          </Reveal>
          <Reveal delay={1} className="md:col-span-4">
            <div className="inline-flex items-center gap-2.5 rounded-full border border-border bg-card px-4 py-2.5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
              </span>
              <span className="text-sm text-foreground">
                Available for new projects
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-28 sm:px-8 md:pb-36">
        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          {/* FORM */}
          <Reveal className="md:col-span-7">
            {sent ? (
              <div className="flex h-full min-h-[24rem] flex-col items-center justify-center rounded-2xl border border-border bg-card p-10 text-center">
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Check className="h-6 w-6" />
                </span>
                <h2 className="mt-6 font-display text-3xl font-medium text-foreground">
                  Message sent.
                </h2>
                <p className="mt-3 max-w-sm text-muted-foreground">
                  Thanks for reaching out — I'll get back to you within one to
                  two business days.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <Field label="Name" name="name" placeholder="Your name" required />
                  <Field label="Email" name="email" type="email" placeholder="you@company.com" required />
                </div>
                <Field label="Company" name="company" placeholder="Company or brand (optional)" />
                <div>
                  <label className="mb-3 block text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    Budget range
                  </label>
                  <div className="flex flex-wrap gap-3">
                    {BUDGETS.map((b) => (
                      <button
                        key={b}
                        type="button"
                        onClick={() => setBudget(b)}
                        className={`rounded-full border px-5 py-2.5 text-sm font-medium transition-colors ${
                          budget === b
                            ? "border-primary bg-primary text-primary-foreground"
                            : "border-border text-muted-foreground hover:border-foreground/40 hover:text-foreground"
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="mb-3 block text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    Project details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder="Tell me about what you're building, timelines, and what success looks like."
                    className="w-full resize-none rounded-2xl border border-border bg-card px-5 py-4 text-foreground placeholder:text-muted-foreground/70 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-medium text-primary-foreground transition-all duration-300 hover:gap-3 hover:bg-primary/90"
                >
                  Send message
                  <ArrowUpRight className="h-5 w-5" />
                </button>
              </form>
            )}
          </Reveal>

          {/* ASIDE */}
          <Reveal delay={1} className="md:col-span-5">
            <div className="space-y-10">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Email
                </p>
                <a
                  href="mailto:hello@eliasvance.studio"
                  className="mt-3 inline-flex items-center gap-2 font-display text-xl text-foreground hover:text-primary"
                >
                  <Mail className="h-5 w-5 text-primary" />
                  hello@eliasvance.studio
                </a>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Location
                </p>
                <p className="mt-3 inline-flex items-center gap-2 font-display text-xl text-foreground">
                  <MapPin className="h-5 w-5 text-primary" />
                  Lisbon · Remote worldwide
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Follow along
                </p>
                <ul className="mt-4 space-y-3">
                  {SOCIALS.map((s) => (
                    <li key={s.label}>
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 text-lg text-foreground/90 hover:text-primary"
                      >
                        {s.label}
                        <ArrowUpRight className="h-4 w-4 text-primary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6">
                <p className="leading-relaxed text-muted-foreground">
                  I take on a limited number of projects at a time to keep the
                  quality high. The more you can share up front, the faster I can
                  tell you how I'd approach it.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-3 block text-xs uppercase tracking-[0.2em] text-muted-foreground">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-full border border-border bg-card px-5 py-3.5 text-foreground placeholder:text-muted-foreground/70 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
      />
    </div>
  );
}
