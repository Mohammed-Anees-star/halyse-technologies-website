"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Solutions", href: "/solutions" },
  { label: "Industries", href: "/industries" },
  { label: "Our Approach", href: "/our-approach" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // On hero pages (dark bg), use transparent navbar until scrolled
  const isHeroPage = pathname === "/";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || !isHeroPage
          ? "bg-white border-b border-gray-100 shadow-sm"
          : "bg-transparent border-b border-white/0"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shadow-sm">
              <span className="text-white font-black text-base leading-none">H</span>
            </div>
            <div className="flex flex-col leading-none">
              <span
                className={`font-bold text-[14px] tracking-tight transition-colors ${
                  scrolled || !isHeroPage ? "text-gray-900" : "text-white"
                }`}
              >
                Halyse Technologies
              </span>
              <span
                className={`text-[9px] font-semibold tracking-[0.15em] uppercase transition-colors ${
                  scrolled || !isHeroPage ? "text-blue-600" : "text-blue-300"
                }`}
              >
                Enterprise AI &amp; Data
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3.5 py-2 rounded-md text-[13px] font-medium transition-all duration-150 whitespace-nowrap ${
                  pathname === link.href
                    ? scrolled || !isHeroPage
                      ? "text-blue-700 bg-blue-50"
                      : "text-white bg-white/10"
                    : scrolled || !isHeroPage
                    ? "text-gray-600 hover:text-blue-700 hover:bg-gray-50"
                    : "text-white/70 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center bg-blue-600 hover:bg-blue-500 text-white text-[13px] font-semibold px-5 py-2 rounded-lg transition-all duration-200 shadow-sm whitespace-nowrap"
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-md transition-colors ${
              scrolled || !isHeroPage
                ? "text-gray-600 hover:bg-gray-100"
                : "text-white hover:bg-white/10"
            }`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl">
          <div className="px-4 sm:px-6 py-4 space-y-1">
            <Link
              href="/"
              className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                pathname === "/"
                  ? "text-blue-700 bg-blue-50"
                  : "text-gray-700 hover:text-blue-700 hover:bg-gray-50"
              }`}
            >
              Home
            </Link>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? "text-blue-700 bg-blue-50"
                    : "text-gray-700 hover:text-blue-700 hover:bg-gray-50"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3">
              <Link
                href="/contact"
                className="block w-full text-center bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold px-5 py-3 rounded-xl transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
