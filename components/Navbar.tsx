"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map((link) =>
        document.querySelector(link.href)
      );

      sections.forEach((section, i) => {
        if (!section) return;

        const rect = section.getBoundingClientRect();

        if (rect.top <= 120 && rect.bottom >= 120) {
          setActive(navLinks[i].href);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-2xl bg-black/40 border-b border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.3)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent"
        >
          Aditya.dev
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">

          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`relative transition ${
                active === link.href
                  ? "text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {link.name}

              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-gradient-to-r from-indigo-500 to-cyan-400 transition-all duration-300 ${
                  active === link.href ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </a>
          ))}

          {/* Resume Button */}
          <a
            href="/Aditya_Sharma_Resume.pdf"
            className="ml-4 px-5 py-2 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 text-white font-medium shadow-lg hover:scale-105 transition"
          >
            Resume
          </a>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          open ? "max-h-[400px]" : "max-h-0"
        }`}
      >
        <div className="px-6 pb-6 pt-4 flex flex-col gap-4 backdrop-blur-2xl bg-black/70 border-t border-white/10">

          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-gray-300 hover:text-white transition"
            >
              {link.name}
            </a>
          ))}

          <a
            href="/Aditya_Sharma_Resume.pdf"
            className="mt-3 px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 text-white text-center"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}
