"use client";

import { useState } from "react";
import Link from "next/link";
import { Unlock, Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "All Tools", href: "/#tools" },
    { label: "Blog", href: "/blog" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/5 bg-[#0a0a0f]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-purple-700 shadow-lg shadow-violet-500/20 group-hover:shadow-violet-500/40 transition-shadow">
            <Unlock className="h-4 w-4 text-white" />
          </div>
          <span className="text-lg font-bold tracking-tight text-white">
            theelite<span className="text-violet-400">access</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm font-medium text-zinc-400 transition-colors hover:bg-white/5 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          className="flex md:hidden items-center justify-center rounded-lg p-2 text-zinc-400 hover:bg-white/5 hover:text-white transition-colors"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-white/5 bg-[#0a0a0f]/95 backdrop-blur-xl px-4 pb-4 pt-2">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-between rounded-lg px-3 py-3 text-sm font-medium text-zinc-400 hover:bg-white/5 hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
