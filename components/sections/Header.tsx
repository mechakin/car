"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollVisible, setScrollVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hasScrolled, setHasScrolled] = useState(false);

  // Derive visibility: always visible when menu is open, otherwise use scroll state
  const isVisible = isMenuOpen || scrollVisible;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Mark that user has scrolled
      if (!hasScrolled && currentScrollY > 0) {
        setHasScrolled(true);
      }
      
      // Show header when scrolling up, hide when scrolling down
      if (currentScrollY < lastScrollY) {
        // Scrolling up - show header
        setScrollVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 10) {
        // Scrolling down - hide header
        setScrollVisible(false);
      } else if (currentScrollY < 10 && hasScrolled) {
        // At top after scrolling - show header
        setScrollVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, hasScrolled]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-transparent border-white/15 transition-transform duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
      <div className="px-6 py-4 sm:px-10 lg:px-12">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0" onClick={closeMenu}>
            <div className="relative w-24 h-24 sm:w-32 sm:h-32">
              <Image
                src="/images/wcc-logo.png"
                alt="West Coast Customs Logo"
                fill
                className="object-contain brightness-0 invert"
                sizes="(max-width: 640px) 96px, 128px"
                priority
              />
            </div>
          </Link>

          {/* Hamburger Menu Button */}
          <button
            onClick={toggleMenu}
            className="flex flex-col justify-center items-center w-10 h-10 space-y-1.5 focus:outline-none z-50"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </div>

      </header>

      {/* Mobile Menu Overlay - Separate from header so it works even when header is hidden */}
      <div
        className={`fixed inset-0 bg-black z-[60] transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMenu}
      >
        {/* Close Button (X) */}
        <button
          onClick={closeMenu}
          className="absolute top-11 right-6 sm:top-15 sm:right-12 w-10 h-10 flex items-center justify-center focus:outline-none z-[70] text-white hover:text-[#0A56FF] transition-colors"
          aria-label="Close menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <nav
          className="flex flex-col items-center justify-center h-full space-y-8 text-white"
          onClick={(e) => e.stopPropagation()}
        >
          <Link
            href="/"
            className="text-3xl sm:text-4xl font-bold uppercase tracking-tighter hover:text-[#0A56FF] transition-colors"
            onClick={closeMenu}
            style={{ letterSpacing: "-0.075em" }}
          >
            HOME
          </Link>
          <Link
            href="/academy"
            className="text-3xl sm:text-4xl font-bold uppercase tracking-tighter hover:text-[#0A56FF] transition-colors"
            onClick={closeMenu}
            style={{ letterSpacing: "-0.075em" }}
          >
            ACADEMY
          </Link>
          <Link
            href="/schedule"
            className="text-3xl sm:text-4xl font-bold uppercase tracking-tighter hover:text-[#0A56FF] transition-colors"
            onClick={closeMenu}
            style={{ letterSpacing: "-0.075em" }}
          >
            SCHEDULE
          </Link>
          <Link
            href="/storage"
            className="text-3xl sm:text-4xl font-bold uppercase tracking-tighter hover:text-[#0A56FF] transition-colors"
            onClick={closeMenu}
            style={{ letterSpacing: "-0.075em" }}
          >
            CONCIERGE
          </Link>  
        </nav>
      </div>
    </>
  );
}
