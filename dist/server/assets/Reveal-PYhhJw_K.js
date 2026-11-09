import { r as reactExports, V as jsxRuntimeExports } from "./server-oWJhpc-z.js";
function Reveal({ children, className = "", delay = 0, as }) {
  const Tag = as ?? "div";
  const ref = reactExports.useRef(null);
  const [visible, setVisible] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const prefersReduced = typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced || typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
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
    const timer = window.setTimeout(() => setVisible(true), 1500);
    return () => {
      observer.disconnect();
      window.clearTimeout(timer);
    };
  }, []);
  const delayClass = delay ? ` reveal-delay-${delay}` : "";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Tag,
    {
      ref,
      className: `reveal${visible ? " is-visible" : ""}${delayClass} ${className}`,
      children
    }
  );
}
export {
  Reveal as R
};
