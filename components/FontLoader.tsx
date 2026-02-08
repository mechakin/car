"use client";

import { useEffect } from "react";

export default function FontLoader() {
  useEffect(() => {
    // FontLoader disabled - using self-hosted Century Gothic via @font-face in globals.css
    return;

    // Create and add preconnect links
    const preconnect1 = document.createElement("link");
    preconnect1.rel = "preconnect";
    preconnect1.href = "https://fonts.googleapis.com";
    document.head.appendChild(preconnect1);

    const preconnect2 = document.createElement("link");
    preconnect2.rel = "preconnect";
    preconnect2.href = "https://fonts.gstatic.com";
    preconnect2.crossOrigin = "anonymous";
    document.head.appendChild(preconnect2);

    // FontLoader disabled - using self-hosted Century Gothic via @font-face in globals.css
  }, []);

  return null;
}
