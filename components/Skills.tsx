"use client";

import { motion } from "framer-motion";

const skills = [
  {
    title: "Languages",
    items: ["Python", "JavaScript", "Java"],
  },
  {
    title: "Frontend",
    items: ["React.js", "Next.js", "Tailwind CSS", "HTML", "CSS"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    title: "Databases",
    items: ["MongoDB", "MySQL", "MS SQL Server"],
  },
  {
    title: "Cloud & DevOps",
    items: ["AWS", "Docker", "Jenkins"],
  },
  {
    title: "AI & ML",
    items: ["RAG Systems", "Vector DB (Pinecone)", "Gemini API"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-28 px-6 max-w-7xl mx-auto"
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-20 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent"
      >
        Skills
      </motion.h2>

      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {skills.map((skill, i) => (

          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 hover:shadow-[0_0_25px_rgba(99,102,241,0.25)] transition"
          >

            <h3 className="text-xl font-semibold text-indigo-400 mb-4">
              {skill.title}
            </h3>

            <div className="flex flex-wrap gap-2">

              {skill.items.map((item, index) => (
                <span
                  key={index}
                  className="text-sm px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30"
                >
                  {item}
                </span>
              ))}

            </div>

          </motion.div>

        ))}

      </div>
    </section>
  );
}
