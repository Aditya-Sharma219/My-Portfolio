"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-28 px-6 max-w-6xl mx-auto"
    >
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent"
      >
        About Me
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-12 items-center">

        {/* Left Side Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6 text-gray-300 text-lg leading-relaxed"
        >
          <p>
            I’m a <span className="text-indigo-400 font-semibold">Computer Science undergraduate</span> passionate about building 
            scalable web applications and intelligent AI-powered systems.
          </p>

          <p>
            I enjoy transforming ideas into real-world digital products using
            technologies like <span className="text-cyan-400">React, Next.js, Node.js</span> and modern cloud tools.
          </p>

          <p>
            My focus is on writing clean, scalable code and constantly learning 
            modern technologies to build impactful products.
          </p>

          <p>
            Currently exploring <span className="text-purple-400">AI systems, vector databases, and cloud architecture</span>.
          </p>
        </motion.div>

        {/* Right Side Cards */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 gap-6"
        >

          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-6 text-center">
            <h3 className="text-3xl font-bold text-indigo-400">15+</h3>
            <p className="text-gray-400 mt-2 text-sm">
              Projects Built
            </p>
          </div>

          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-6 text-center">
            <h3 className="text-3xl font-bold text-cyan-400">4+</h3>
            <p className="text-gray-400 mt-2 text-sm">
              Technologies
            </p>
          </div>

          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-6 text-center">
            <h3 className="text-3xl font-bold text-purple-400">AI</h3>
            <p className="text-gray-400 mt-2 text-sm">
              Systems & RAG
            </p>
          </div>

          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-6 text-center">
            <h3 className="text-3xl font-bold text-indigo-300">Cloud</h3>
            <p className="text-gray-400 mt-2 text-sm">
              AWS & DevOps
            </p>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
