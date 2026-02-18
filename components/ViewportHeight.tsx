"use client";

import { useEffect } from "react";

/**
 * Sets --app-height CSS variable to prevent mobile viewport shift when address bar hides.
 * On mobile, we lock to initial height and only update on orientation change.
 */
export default function ViewportHeight() {
  useEffect(() => {
    const setHeight = () => {
      const height = window.innerHeight;
      document.documentElement.style.setProperty("--app-height", `${height}px`);
    };

    setHeight();

    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

    if (isMobile) {
      // On mobile: lock to initial height, only update on orientation change
      // This prevents shift when address bar hides during scroll
      const handleOrientation = () => {
        setHeight();
      };
      window.addEventListener("orientationchange", handleOrientation);
      return () => window.removeEventListener("orientationchange", handleOrientation);
    } else {
      window.addEventListener("resize", setHeight);
      return () => window.removeEventListener("resize", setHeight);
    }
  }, []);

  return null;
}
