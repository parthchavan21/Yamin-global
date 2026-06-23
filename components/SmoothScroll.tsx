"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.1, smoothWheel: true });

    let raf: number;
    function loop(time: number) {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    }
    raf = requestAnimationFrame(loop);

    // Offset so a section isn't hidden behind the fixed navbar after scrolling.
    const HEADER_OFFSET = -84;

    // Intercept same-page hash links (nav, footer, CTAs) so they ease to the
    // target via Lenis instead of the browser's instant jump. Capture phase +
    // stopPropagation keeps Next's <Link> from also navigating.
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) {
        return;
      }
      const anchor = (e.target as HTMLElement | null)?.closest?.("a");
      if (!anchor) return;
      if (anchor.target && anchor.target !== "_self") return;

      const href = anchor.getAttribute("href");
      if (!href || !href.includes("#")) return;

      const url = new URL(href, window.location.href);
      // Only handle in-page targets; let cross-page navigation fall through.
      if (url.pathname !== window.location.pathname) return;

      const id = url.hash.slice(1);
      const target = id ? document.getElementById(id) : null;
      if (!target) return;

      e.preventDefault();
      e.stopPropagation();
      history.pushState(null, "", url.hash);
      lenis.scrollTo(target, { offset: HEADER_OFFSET });
    };
    document.addEventListener("click", onClick, true);

    // Landing on a page with a hash (e.g. /#why from another page) — ease to it.
    if (window.location.hash) {
      const target = document.getElementById(window.location.hash.slice(1));
      if (target) requestAnimationFrame(() => lenis.scrollTo(target, { offset: HEADER_OFFSET }));
    }

    return () => {
      document.removeEventListener("click", onClick, true);
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
