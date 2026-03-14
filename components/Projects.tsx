"use client";

import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { Github, ExternalLink, Code } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "NIIT University GatePass System",
    desc: "Full stack university system for managing student entry and exit records with backend APIs and MS SQL database.",
    tech: ["React", "Node.js", "Express", "MS SQL"],
    demo: "https://gatepass.niituniversity.in/aboutus",
    github: "#",
  },
  {
    title: "Get Me A Chai",
    desc: "Full stack creator funding platform with authentication and Razorpay payment integration.",
    tech: ["Next.js", "MongoDB", "NextAuth", "Razorpay"],
    demo: "#",
    github: "#",
  },
  {
    title: "HeritageAI",
    desc: "AI powered cultural video understanding platform built during HackOrate hackathon.",
    tech: ["AI", "Python", "LLM", "Hackathon"],
    demo: "https://hackorate-project.vercel.app/",
    github: "#",
  },
  {
    title: "Spotify Clone",
    desc: "Music streaming web app with custom audio playback controls and playlist navigation.",
    tech: ["HTML", "CSS", "JavaScript"],
    demo: "#",
    github: "#",
  },
  {
    title: "URL Shortener",
    desc: "Shorten long URLs and manage links using a MongoDB database.",
    tech: ["Next.js", "MongoDB", "API"],
    demo: "#",
    github: "#",
  },
  {
    title: "RAG AI Document Query System",
    desc: "Retrieval-Augmented Generation system using Pinecone and Gemini API for intelligent document querying.",
    tech: ["Python", "Gemini API", "Pinecone", "AI"],
    demo: "#",
    github: "#",
  },
];

const otherProjects = [
  "AI Website Generator from Natural Language Prompts",
  "CI/CD Pipeline using Jenkins and Docker",
  "AWS Cloud Dashboard using EC2, Lambda and DynamoDB",
  "Netflix / Spotify / Paytm / Twitter UI Clones",
  "React Apps: To-Do App, Tic-Tac-Toe, Password Manager",
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-28 px-6 overflow-hidden"
    >

      {/* Background Image */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/bg2.jpg"
          alt="background"
          fill
          priority
          className="object-cover opacity-80"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#020617]/90 via-[#020617]/70 to-[#020617]/90"></div>

      {/* Glow Effects */}
      <div className="absolute -z-10 w-full h-full pointer-events-none">
        <div className="absolute top-[-120px] left-[-120px] w-[400px] h-[400px] bg-purple-500/20 blur-[140px] rounded-full"></div>
        <div className="absolute bottom-[-120px] right-[-120px] w-[400px] h-[400px] bg-cyan-500/20 blur-[140px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-20 bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"
        >
          Projects
        </motion.h2>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
          {projects.map((project, i) => (
            <Tilt
              key={i}
              glareEnable
              glareMaxOpacity={0.2}
              scale={1.05}
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
            >
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-7 h-full hover:shadow-[0_0_40px_rgba(99,102,241,0.25)] transition-all"
              >

                {/* Icon */}
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-indigo-500/20 text-indigo-400 mb-4">
                  <Code size={22}/>
                </div>

                <h3 className="text-xl font-semibold text-white mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm mb-6">
                  {project.desc}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-4">

                  <a
                    href={project.demo}
                    target="_blank"
                    className="flex items-center gap-2 text-sm px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-cyan-400 text-white hover:scale-105 transition"
                  >
                    <ExternalLink size={16}/>
                    Live
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    className="flex items-center gap-2 text-sm px-4 py-2 rounded-lg border border-white/20 hover:bg-white/10 transition"
                  >
                    <Github size={16}/>
                    Code
                  </a>

                </div>

              </motion.div>
            </Tilt>
          ))}
        </div>

        {/* Other Projects */}
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8">
          <h3 className="text-xl font-semibold mb-6 text-indigo-400">
            Other Notable Projects
          </h3>

          <ul className="grid md:grid-cols-2 gap-4 text-gray-300 text-sm">
            {otherProjects.map((p, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-cyan-400">•</span>
                {p}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}
