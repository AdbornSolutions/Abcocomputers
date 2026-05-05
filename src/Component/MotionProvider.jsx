import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const sectionSelector = [
  "section",
  "footer",
  "[data-motion-section]",
  ".rm-page",
].join(",");

const itemSelector = [
  ".grid > *",
  ".space-y-4 > *",
  ".space-y-5 > *",
  ".flex.flex-col.gap-6 > *",
  "button",
  "img",
].join(",");

const MotionProvider = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    document.body.classList.add("motion-enabled");

    const sections = Array.from(document.querySelectorAll(sectionSelector));
    const targets = new Set(sections);

    sections.forEach((section) => {
      Array.from(section.querySelectorAll(itemSelector))
        .slice(0, 14)
        .forEach((item, index) => {
          item.style.setProperty("--motion-delay", `${Math.min(index * 55, 440)}ms`);
          targets.add(item);
        });
    });

    targets.forEach((target) => target.classList.add("motion-target"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("motion-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: "0px 0px -8% 0px",
        threshold: 0.12,
      }
    );

    targets.forEach((target) => observer.observe(target));

    return () => {
      observer.disconnect();
      document.body.classList.remove("motion-enabled");
      targets.forEach((target) => {
        target.classList.remove("motion-target", "motion-visible");
        target.style.removeProperty("--motion-delay");
      });
    };
  }, [location.pathname]);

  return children;
};

export default MotionProvider;
