"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Search } from "lucide-react";

// ─── NAV STRUCTURE ──────────────────────────────────────────────────────────

type NavItem =
  | { label: string; href: string; children?: undefined }
  | { label: string; href?: string; children: { label: string; href: string }[] };

const navItems: NavItem[] = [
  { label: "Who We Are", href: "/about" },
  {
    label: "What We Do",
    children: [
      { label: "Solutions", href: "/solutions" },
      { label: "Industries", href: "/industries" },
      { label: "Our Approach", href: "/our-approach" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Insights", href: "/insights" },
    ],
  },
  { label: "Our Services", href: "/solutions" },
  {
    label: "Our Locations",
    children: [
      { label: "India — Headquarters", href: "/contact" },
      { label: "United States", href: "/contact" },
      { label: "Australia", href: "/contact" },
      { label: "Middle East (UAE)", href: "/contact" },
    ],
  },
];

// ─── COMPONENT ──────────────────────────────────────────────────────────────

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const pathname = usePathname();
  const router = useRouter();
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Close menus on route change
  useEffect(() => {
    setMobileOpen(false);
    setOpenMenu(null);
    setSearchOpen(false);
  }, [pathname]);

  // Focus search input when opened
  useEffect(() => {
    if (searchOpen) searchInputRef.current?.focus();
  }, [searchOpen]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const q = searchQuery.trim();
    if (!q) return;
    // Simple client-side redirect (no search index yet) — sends users to insights
    router.push(`/insights?q=${encodeURIComponent(q)}`);
    setSearchOpen(false);
    setSearchQuery("");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0e1030] text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-baseline gap-1.5 shrink-0">
            <span className="text-xl lg:text-2xl font-black tracking-tight text-white">
              HALYSE
            </span>
            <span className="text-[11px] lg:text-xs font-light tracking-[0.2em] text-white/60 hidden sm:inline">
              TECHNOLOGIES
            </span>
          </Link>

          {/* Desktop Nav (right-aligned) */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => {
              const hasDropdown = "children" in item && !!item.children;
              const isOpen = openMenu === item.label;

              if (!hasDropdown) {
                return (
                  <Link
                    key={item.label}
                    href={item.href!}
                    className={`py-2 text-sm font-medium whitespace-nowrap transition-colors ${
                      pathname === item.href
                        ? "text-white"
                        : "text-white/85 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              }

              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setOpenMenu(item.label)}
                  onMouseLeave={() => setOpenMenu(null)}
                >
                  <button
                    className="flex items-center gap-1.5 py-2 text-sm font-medium whitespace-nowrap text-white/85 hover:text-white transition-colors"
                    aria-expanded={isOpen}
                  >
                    {item.label}
                    <ChevronDown
                      size={14}
                      className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {isOpen && item.children && (
                    <div className="absolute top-full left-0 pt-2 min-w-[240px]">
                      <div className="bg-white text-gray-800 rounded-lg shadow-xl border border-gray-100 py-2 overflow-hidden">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="block px-4 py-2.5 text-sm hover:bg-blue-50 hover:text-blue-700 transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}

            {/* Search */}
            <button
              onClick={() => setSearchOpen((v) => !v)}
              className="flex items-center gap-1.5 py-2 text-sm font-medium whitespace-nowrap text-white/85 hover:text-white transition-colors"
              aria-label="Toggle search"
            >
              Search
              <Search size={14} className="text-pink-400" />
            </button>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Search overlay */}
      {searchOpen && (
        <div className="border-t border-white/10 bg-[#0e1030]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <form onSubmit={handleSearchSubmit} className="flex items-center gap-3">
              <Search size={18} className="text-pink-400 shrink-0" />
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search Halyse Technologies…"
                className="flex-1 bg-transparent border-none outline-none text-white placeholder-white/40 text-base"
              />
              <button
                type="button"
                onClick={() => setSearchOpen(false)}
                className="text-white/60 hover:text-white transition-colors"
                aria-label="Close search"
              >
                <X size={18} />
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#0e1030] border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            {navItems.map((item) => {
              if (!("children" in item) || !item.children) {
                return (
                  <Link
                    key={item.label}
                    href={item.href!}
                    className="block px-4 py-3 text-sm font-medium text-white/85 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                  >
                    {item.label}
                  </Link>
                );
              }

              const isOpen = openMenu === item.label;
              return (
                <div key={item.label}>
                  <button
                    onClick={() => setOpenMenu(isOpen ? null : item.label)}
                    className="w-full flex items-center justify-between px-4 py-3 text-sm font-medium text-white/85 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {isOpen && (
                    <div className="pl-4 space-y-0.5">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            {/* Mobile search */}
            <form
              onSubmit={handleSearchSubmit}
              className="flex items-center gap-2 px-4 py-3 mt-2 border-t border-white/10"
            >
              <Search size={16} className="text-pink-400 shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search…"
                className="flex-1 bg-transparent border-none outline-none text-white placeholder-white/40 text-sm"
              />
            </form>
          </div>
        </div>
      )}
    </header>
  );
}
