"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { memo, useMemo } from "react";
import { Github, ExternalLink, Code } from "lucide-react";
import Image from "next/image";

const Tilt = dynamic(() => import("react-parallax-tilt"), { ssr: false });

function Projects() {
  type Project = {
  title: string
  desc: string
  tech: string[]
  github: string
  demo?: string
  video?: string
  note?: string
  codeAvailable?: boolean
  demoAvailable?: boolean
}



  const projects: Project[] = useMemo(() => [

    {
      title: "NIIT University GatePass System",
      desc: "University-level application built using React, Node.js, Express and MS SQL APIs for managing student entry and exit. Includes role-based access control, session management and structured backend architecture. Currently contributing by fixing bugs and adding new features.",
      tech: ["React", "Node.js", "Express", "MS SQL"],
      demo: "https://gatepass.niituniversity.in/aboutus",
      github: "#",
      codeAvailable: false,
      note: "Source code not available (private university project)"
    },

    {
      title: "AI Website Builder",
      desc: "Generate full websites using natural language prompts. The system generates HTML, CSS and JavaScript code and instantly renders a live preview.",
      tech: ["AI", "HTML", "CSS", "JavaScript"],
      demo: "https://website-builderai.vercel.app/",
      github: "https://github.com/Aditya-Sharma219/websiteMaker"
    },

    {
      title: "Get Me A Chai",
      desc: "Creator funding platform where users can register and receive donations. Anyone can search creators and support them using Razorpay payments. Includes dashboard for payments, creator discovery and leaderboard.",
      tech: ["Next.js", "MongoDB", "NextAuth", "Razorpay"],
      demo: "#",
      github: "https://github.com/Aditya-Sharma219/GetMeAchai",
      demoAvailable: false,
      note: "Live demo coming soon"
    },

    {
      title: "HeritageAI",
      desc: "AI-powered multi-agent system using Gemini and LLMs to verify historical monument information from internet and Wikipedia sources.",
      tech: ["Next.js", "Multi-Agent AI", "Gemini API", "LLM", "RAG"],
      demo: "#",
      github: "https://github.com/Aditya-Sharma219/HeritageAI",
      demoAvailable: false,
      note: "Live demo currently unavailable"
    },

    {
      title: "Spotify Clone",
      desc: "Spotify-like music player built with HTML, CSS and JavaScript supporting play, pause, next, previous, volume and seek bar.",
      tech: ["HTML", "CSS", "JavaScript"],
      demo: "#",
      github: "https://github.com/Aditya-Sharma219/Spotify_Clone",
      demoAvailable: false,
      note: "Live demo coming soon"
    },

    {
      title: "URL Shortener",
      desc: "Dynamic routing system allowing users to create custom handles and store multiple social links like Instagram, YouTube, Twitter etc.",
      tech: ["Next.js", "MongoDB", "API"],
      demo: "#",
      github: "https://github.com/Aditya-Sharma219/Url-shortner",
      demoAvailable: false,
      note: "Live demo coming soon"
    },

    {
      title: "RAG AI Document Query",
      desc: "Document search system using JavaScript, Gemini API and Pinecone vector database for Retrieval Augmented Generation queries.",
      tech: ["JavaScript", "Gemini API", "Pinecone", "RAG"],
      demo: "#",
      github: "#",
      demoAvailable: false,
      note: "Live demo and code coming soon"
    },

    {
      title: "AWS IoT Hydraulic Dashboard",
      desc: "Cloud dashboard using Next.js and AWS with DynamoDB, CloudWatch alarms and Lambda APIs processing simulated machine data.",
      tech: ["Next.js", "AWS Lambda", "DynamoDB", "CloudWatch", "Python"],
      demo: "https://iot-hydraulic-dashboard.vercel.app/",
      github: "https://github.com/Aditya-Sharma219/iot-hydraulic-dashboard",
      video: "https://drive.google.com/file/d/1pWZpmTFmvFEqToFBEy2npDXOdrA7yemK/view?usp=sharing"
    },

    {
      title: "Vaelora — Web Development Initiative",
      desc: "Personal web development initiative where I build modern websites for creators within 24 hours with focus on clean UI and fast performance.",
      tech: ["Next.js", "React", "Tailwind"],
      demo: "https://vaeloraaa.vercel.app/",
      github: "#",
      codeAvailable: false
    }

  ], []);

  const additionalProjects: Project[] = useMemo(() => [

    {
      title: "CI/CD MERN Healthcare System",
      desc: "Doctor-patient role based MERN application with Jenkins CI/CD pipeline that automatically builds Docker containers on GitHub push.",
      tech: ["MERN", "Jenkins", "Docker", "CI/CD"],
      github: "https://github.com/Aditya-Sharma219/Capstone1",
      note: "Demo video coming soon"
    },

    {
      title: "Frontend UI Clone Collection",
      desc: "Collection of UI clone projects including Netflix, Spotify, Paytm and Twitter along with React mini apps.",
      tech: ["React", "JavaScript", "HTML", "CSS"],
      github: "https://github.com/Aditya-Sharma219/"
    }

  ], []);

  return (

    <section id="projects" className="relative py-28 px-6 overflow-hidden">

      <div className="absolute inset-0 -z-20">
        <Image
          src="/bg2.jpg"
          alt="projects background"
          fill
          sizes="100vw"
          quality={80}
          className="object-cover opacity-70"
        />
      </div>

      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#020617]/90 via-[#020617]/70 to-[#020617]/90"></div>

      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center p-4 mb-20 bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">

          {projects.map((project, i) => (

            <Tilt key={project.title} glareEnable glareMaxOpacity={0.15} scale={1.04}>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-7 h-full hover:shadow-[0_0_30px_rgba(99,102,241,0.25)] transition"
              >

                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-indigo-500/20 text-indigo-400 mb-4">
                  <Code size={20} />
                </div>

                <h3 className="text-xl font-semibold text-white mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm mb-4">
                  {project.desc}
                </p>

                {project.note && (
                  <p className="text-xs text-yellow-300 mb-4">
                    {project.note}
                  </p>
                )}

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span key={tech} className="text-xs px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 flex-wrap">

                  {project.demoAvailable === false ? (
                    <span className="text-xs px-3 py-2 rounded-lg bg-yellow-500/20 text-yellow-300 border border-yellow-500/30">
                      Demo Coming Soon
                    </span>
                  ) : (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-cyan-400 text-white hover:scale-105 transition">
                      <ExternalLink size={16} /> Live
                    </a>
                  )}

                  {project.codeAvailable === false ? (
                    <span className="text-xs px-3 py-2 rounded-lg bg-red-500/20 text-red-300 border border-red-500/30">
                      Code Private
                    </span>
                  ) : (
                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm px-4 py-2 rounded-lg border border-white/20 hover:bg-white/10 transition">
                      <Github size={16} /> Code
                    </a>
                  )}

                  {project.video && (
                    <a href={project.video} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm px-4 py-2 rounded-lg border border-indigo-400 text-indigo-300 hover:bg-indigo-500/10 transition">
                      🎥 Video
                    </a>
                  )}

                </div>

              </motion.div>

            </Tilt>

          ))}

        </div>

        <h3 className="text-2xl font-semibold text-indigo-400 mb-10 text-center">
          Additional Projects
        </h3>

        <div className="grid md:grid-cols-2 gap-10">

          {additionalProjects.map((project, i) => (

            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-7 
hover:shadow-[0_0_40px_rgba(99,102,241,0.25)] hover:-translate-y-1 
transition-all duration-300"
            >

              {/* Icon */}
              <div className="w-11 h-11 flex items-center justify-center rounded-xl 
bg-indigo-500/20 text-indigo-400 mb-4">
                <Code size={20} />
              </div>

              {/* Title */}
              <h3 className="text-xl text-white font-semibold mb-3 group-hover:text-indigo-300 transition">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                {project.desc}
              </p>

              {/* Note */}
              {project.note && (
                <p className="text-xs text-yellow-300 mb-4">
                  {project.note}
                </p>
              )}

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mb-6">

                {project.tech.map((tech) => (

                  <span
                    key={tech}
                    className="text-xs px-3 py-1 rounded-full 
bg-indigo-500/20 text-indigo-300 border border-indigo-500/30
hover:bg-indigo-500/30 transition"
                  >
                    {tech}
                  </span>

                ))}

              </div>

              {/* Buttons */}
              <div className="flex gap-3 flex-wrap">

                {/* Code */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm px-4 py-2 rounded-lg 
border border-white/20 hover:bg-white/10 transition"
                >
                  <Github size={16} />
                  Code
                </a>

                {/* Optional Demo */}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm px-4 py-2 rounded-lg 
bg-gradient-to-r from-indigo-500 to-cyan-400 text-white hover:scale-105 transition"
                  >
                    <ExternalLink size={16} />
                    Live
                  </a>
                )}

                {/* Optional Video */}
                {project.video && (
                  <a
                    href={project.video}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm px-4 py-2 rounded-lg 
border border-indigo-400 text-indigo-300 hover:bg-indigo-500/10 transition"
                  >
                    🎥 Video
                  </a>
                )}

              </div>

            </motion.div>

          ))}


        </div>

      </div>

    </section>

  );

}

export default memo(Projects);
