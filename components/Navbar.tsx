"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Projects", href: "#projects" },
  { name: "Live Demos", href: "#demos" },
  { name: "Skills", href: "#skills" },
  { name: "Initiative", href: "#initiative" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-black/40 border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent hover:opacity-90 transition"
        >
          Aditya.dev
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">

          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-gray-300 hover:text-white transition group"
            >
              {link.name}

              {/* hover underline */}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-indigo-500 to-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}

          {/* Resume Button */}
          <a
            href="/Aditya_Sharma_Resume.pdf"
            className="ml-2 px-5 py-2 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 text-white font-medium shadow-lg hover:scale-105 transition"
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
      {open && (
        <div className="md:hidden px-6 pb-6 pt-2 flex flex-col gap-4 backdrop-blur-xl bg-black/70 border-t border-white/10">

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
            className="mt-2 px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 text-white text-center"
          >
            Resume
          </a>
        </div>
      )}
    </nav>
  );
}
