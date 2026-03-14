"use client";

import { motion } from "framer-motion";

const achievements = [
  {
    title: "Runner-Up",
    desc: "College Hackathon 2025",
  },
  {
    title: "10+ Projects",
    desc: "Built using modern web technologies",
  },
  {
    title: "AI Systems",
    desc: "Worked on RAG and Generative AI projects",
  },
  {
    title: "Continuous Learning",
    desc: "Exploring system design and scalable architecture",
  },
];

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="relative py-28 px-6 max-w-7xl mx-auto"
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-20 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent"
      >
        Achievements
      </motion.h2>

      {/* Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

        {achievements.map((item, i) => (

          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="text-center backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 hover:shadow-[0_0_30px_rgba(99,102,241,0.25)] transition"
          >

            <h3 className="text-2xl font-bold text-indigo-400 mb-2">
              {item.title}
            </h3>

            <p className="text-gray-400 text-sm">
              {item.desc}
            </p>

          </motion.div>

        ))}

      </div>
    </section>
  );
}
