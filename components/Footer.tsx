"use client";

import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {

  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-28 border-t border-white/10">

      {/* subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[1px] bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-8">

        {/* Name */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent hover:opacity-90 transition">
            Aditya Sharma
          </h3>

          <p className="text-gray-400 text-sm mt-1">
            Full Stack Developer • AI/ML Enthusiast
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap justify-center gap-6 text-gray-400 text-sm">

          {[
            { name: "About", link: "#about" },
            { name: "Projects", link: "#projects" },
            { name: "Skills", link: "#skills" },
            { name: "Contact", link: "#contact" },
          ].map((item) => (

            <a
              key={item.name}
              href={item.link}
              className="relative hover:text-white transition after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-indigo-400 after:transition-all hover:after:w-full"
            >
              {item.name}
            </a>

          ))}

        </div>

        {/* Social Icons */}
        <div className="flex gap-5 text-gray-400">

          <a
            href="https://github.com/Aditya-Sharma219"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white hover:scale-110 transition"
          >
            <Github size={20}/>
          </a>

          <a
            href="https://linkedin.com/in/aditya-sharma-49a9142a6"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white hover:scale-110 transition"
          >
            <Linkedin size={20}/>
          </a>

          <a
            href="mailto:adityash219@gmail.com"
            className="hover:text-white hover:scale-110 transition"
          >
            <Mail size={20}/>
          </a>

        </div>

      </div>

      {/* Bottom */}
      <div className="text-center text-gray-500 text-sm pb-6 border-t border-white/5 pt-6">
        © {year} Aditya Sharma • Built with Next.js & Tailwind • Last Updated: 15th March 2026
      </div>

    </footer>
  );
}
