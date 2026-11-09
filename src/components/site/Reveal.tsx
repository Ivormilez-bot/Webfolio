import { useEffect, useRef, useState, type ReactNode, type ElementType } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: 0 | 1 | 2 | 3 | 4;
  as?: ElementType;
};

/**
 * Scroll-triggered reveal. SSR-safe: starts hidden, becomes visible once it
 * intersects the viewport. Multiple safeguards ensure content can NEVER stay
 * invisible: (1) anything already in/near the viewport on mount reveals
 * immediately, (2) a fallback timer reveals after 1.2s regardless, and
 * (3) reduced-motion users skip the animation entirely.
 */
export function Reveal({ children, className = "", delay = 0, as }: RevealProps) {
  const Tag = (as ?? "div") as ElementType;
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Respect reduced motion — show instantly.
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced || typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    // If it's already within (or just below) the viewport on mount, reveal now.
    const rect = node.getBoundingClientRect();
    if (rect.top < window.innerHeight * 1.1) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px -5% 0px" }
    );
    observer.observe(node);

    // Absolute fallback: never let content stay hidden.
    const timer = window.setTimeout(() => setVisible(true), 1500);

    return () => {
      observer.disconnect();
      window.clearTimeout(timer);
    };
  }, []);

  const delayClass = delay ? ` reveal-delay-${delay}` : "";
  return (
    <Tag
      ref={ref as never}
      className={`reveal${visible ? " is-visible" : ""}${delayClass} ${className}`}
    >
      {children}
    </Tag>
  );
}
