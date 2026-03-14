"use client";

import { motion } from "framer-motion";
import Particles from "../components/Particles";
import { Code, Server, Database, Cloud, Cpu, Layers } from "lucide-react";

const skills = [
  {
    title: "Languages",
    icon: Code,
    items: ["Python", "JavaScript", "Java"],
  },
  {
    title: "Frontend",
    icon: Layers,
    items: ["React.js", "Next.js", "Tailwind CSS", "HTML", "CSS"],
  },
  {
    title: "Backend",
    icon: Server,
    items: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    title: "Databases",
    icon: Database,
    items: ["MongoDB", "MySQL", "MS SQL Server"],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    items: ["AWS", "Docker", "Jenkins"],
  },
  {
    title: "AI & ML",
    icon: Cpu,
    items: ["RAG Systems", "Vector DB (Pinecone)", "Gemini API"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-28 px-6 overflow-hidden"
    >
      {/* Particles Background */}
      <div className="absolute inset-0 -z-10 opacity-40">
        <Particles
          particleColors={["#6366f1", "#06b6d4", "#a855f7"]}
          particleCount={200}
          particleSpread={12}
          speed={0.08}
          particleBaseSize={90}
          moveParticlesOnHover
        />
      </div>

      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-20 bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"
        >
          Skills
        </motion.h2>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {skills.map((skill, i) => {
            const Icon = skill.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-7 hover:shadow-[0_0_40px_rgba(99,102,241,0.25)] transition-all"
              >

                {/* Icon */}
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-indigo-500/20 text-indigo-400 mb-4">
                  <Icon size={22} />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-white mb-5">
                  {skill.title}
                </h3>

                {/* Skill chips */}
                <div className="flex flex-wrap gap-2">

                  {skill.items.map((item, index) => (
                    <span
                      key={index}
                      className="text-xs px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 hover:bg-indigo-500/30 transition"
                    >
                      {item}
                    </span>
                  ))}

                </div>

              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}
