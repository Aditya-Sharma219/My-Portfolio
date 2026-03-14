"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-28 px-6 overflow-hidden"
    >

      {/* Background Image */}
      <div className="absolute inset-0 -z-20">

        <Image
          src="/bg3.jpg"
          alt="background"
          fill
          priority
          className="object-cover opacity-80"
        />

      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#020617]/90 via-[#020617]/70 to-[#020617]/90"></div>

      {/* Glow Effects */}
      <div className="absolute -z-10 top-0 left-0 w-full h-full pointer-events-none">

        <div className="absolute top-[-120px] left-[-120px] w-[450px] h-[450px] bg-indigo-500/20 blur-[150px] rounded-full"></div>

        <div className="absolute bottom-[-120px] right-[-120px] w-[450px] h-[450px] bg-cyan-500/20 blur-[150px] rounded-full"></div>

      </div>

      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-20 bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex justify-center"
          >
            <div className="relative w-[260px] h-[260px] rounded-2xl overflow-hidden border border-white/10 backdrop-blur-xl bg-white/5 shadow-2xl">

              <Image
                src="/profile.jpg"
                alt="Aditya Sharma"
                fill
                className="object-cover"
              />

            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-6 text-gray-300 text-lg leading-relaxed"
          >

            <p>
              I'm <span className="text-indigo-400 font-semibold">Aditya Sharma</span>,
              a Computer Science undergraduate passionate about building scalable
              digital products and intelligent systems.
            </p>

            <p>
              I specialize in developing modern full-stack applications using
              <span className="text-cyan-400 font-medium">
                {" "}React, Next.js, Node.js, and MongoDB
              </span>{" "}
              with a focus on performance and clean architecture.
            </p>

            <p>
              I'm exploring
              <span className="text-purple-400 font-medium">
                {" "}AI systems, RAG, vector databases, and cloud infrastructure
              </span>{" "}
              to build intelligent applications.
            </p>

            <p>
              My goal is to combine
              <span className="text-indigo-300"> software engineering</span> with
              <span className="text-cyan-300"> artificial intelligence</span>.
            </p>

          </motion.div>

        </div>

      </div>

    </section>
  );
}
