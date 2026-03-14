"use client";

import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative mt-28 border-t border-white/10">

      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Name */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
            Aditya Sharma
          </h3>
          <p className="text-gray-400 text-sm mt-1">
            Full Stack Developer • AI Enthusiast
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex gap-6 text-gray-400 text-sm">

          <a href="#about" className="hover:text-white transition">
            About
          </a>

          <a href="#projects" className="hover:text-white transition">
            Projects
          </a>

          <a href="#skills" className="hover:text-white transition">
            Skills
          </a>

          <a href="#contact" className="hover:text-white transition">
            Contact
          </a>

        </div>

        {/* Social Icons */}
        <div className="flex gap-4 text-gray-400">

          <a
            href="https://github.com/Aditya-Sharma219"
            target="_blank"
            className="hover:text-white transition"
          >
            <Github size={20} />
          </a>

          <a
            href="https://linkedin.com/in/aditya-sharma-49a9142a6"
            target="_blank"
            className="hover:text-white transition"
          >
            <Linkedin size={20} />
          </a>

          <a
            href="mailto:adityash219@gmail.com"
            className="hover:text-white transition"
          >
            <Mail size={20} />
          </a>

        </div>

      </div>

      {/* Bottom */}
      <div className="text-center text-gray-500 text-sm pb-6">
        © {new Date().getFullYear()} Aditya Sharma. Built with Next.js.
      </div>

    </footer>
  );
}
