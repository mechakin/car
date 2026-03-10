"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollVisible, setScrollVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Derive visibility: always visible when menu is open, otherwise use scroll state
  const isVisible = isMenuOpen || scrollVisible;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show header when at top, when scrolling up, or when scrolled back to top
      if (currentScrollY < 10) {
        setScrollVisible(true);
      } else if (currentScrollY < lastScrollY) {
        setScrollVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setScrollVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    // Set initial visibility based on scroll position on mount
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [lastScrollY]);

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
        } ${isMenuOpen ? "z-[70]" : ""}`}
      >
      <div className="px-6 py-3 sm:px-10 lg:px-12">
        <div className="flex items-center justify-between">
          {/* Logo - scaled up visually, container keeps header layout stable */}
          <Link href="/" className="flex-shrink-0 overflow-visible" onClick={closeMenu}>
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
              <div className="absolute inset-0 scale-150 sm:scale-150">
                <Image
                  src="/images/wcc_logo_for_website_fixed.png"
                  alt="West Coast Customs Logo"
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 80px, 120px"
                  priority
                />
              </div>
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
            href="https://westcoastcustomsshop.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl sm:text-4xl font-bold uppercase tracking-tighter hover:text-[#0A56FF] transition-colors"
            onClick={closeMenu}
            style={{ letterSpacing: "-0.075em" }}
          >
            APPAREL
          </Link>
          <Link
            href="/events"
            className="text-3xl sm:text-4xl font-bold uppercase tracking-tighter hover:text-[#0A56FF] transition-colors"
            onClick={closeMenu}
            style={{ letterSpacing: "-0.075em" }}
          >
            EVENTS
          </Link>
          <Link
            href="https://westcoastcustomsacademy.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl sm:text-4xl font-bold uppercase tracking-tighter hover:text-[#0A56FF] transition-colors"
            onClick={closeMenu}
            style={{ letterSpacing: "-0.075em" }}
          >
            ACADEMY
          </Link>
          <Link
            href="https://shop.westcoastcustoms.com/collections/thicc-kits"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl sm:text-4xl font-bold uppercase tracking-tighter hover:text-[#0A56FF] transition-colors"
            onClick={closeMenu}
            style={{ letterSpacing: "-0.075em" }}
          >
            THICC KITS
          </Link>
          <Link
            href="/schedule"
            className="text-3xl sm:text-4xl font-bold uppercase tracking-tighter hover:text-[#0A56FF] transition-colors"
            onClick={closeMenu}
            style={{ letterSpacing: "-0.075em" }}
          >
            TOURS
          </Link>
          <Link
            href="/custom"
            className="text-3xl sm:text-4xl font-bold uppercase tracking-tighter hover:text-[#0A56FF] transition-colors"
            onClick={closeMenu}
            style={{ letterSpacing: "-0.075em" }}
          >
            CUSTOM BUILD
          </Link>
          <Link
            href="/brand-build"
            className="text-3xl sm:text-4xl font-bold uppercase tracking-tighter hover:text-[#0A56FF] transition-colors"
            onClick={closeMenu}
            style={{ letterSpacing: "-0.075em" }}
          >
            BRAND BUILD
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
