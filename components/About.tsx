"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { memo } from "react";

function About() {
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
          priority={false}
          sizes="100vw"
          quality={80}
          className="object-cover opacity-70"
        />

      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#020617]/90 via-[#020617]/70 to-[#020617]/90"></div>

      {/* Glow Effects */}
      <div className="absolute -z-10 inset-0 pointer-events-none">

        <div className="absolute top-[-120px] left-[-120px] w-[420px] h-[420px] bg-indigo-500/20 blur-[140px] rounded-full"></div>

        <div className="absolute bottom-[-120px] right-[-120px] w-[420px] h-[420px] bg-cyan-500/20 blur-[140px] rounded-full"></div>

      </div>

      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center mb-20 bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative w-[260px] h-[260px] rounded-2xl overflow-hidden border border-white/10 backdrop-blur-xl bg-white/5 shadow-xl">

              <Image
                src="/profile1.jpg"
                alt="Aditya Sharma"
                fill
                sizes="260px"
                loading="lazy"
                className="object-cover object-[center_30%]"
              />

            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-gray-300 text-lg leading-relaxed"
          >

            <p>
              I'm <span className="text-indigo-400 font-semibold">Aditya Sharma</span>, a
              Computer Science undergraduate at NIIT University with a strong interest in
              building <span className="text-indigo-400">modern full-stack web applications </span>
              and learning how scalable applications are engineered.
            </p>

            <p>
              I work primarily with
              <span className="text-cyan-400 font-medium"> React, Next.js, Node.js, and MongoDB</span>,
              focusing on clean architecture, performance, and building practical applications.
            </p>

            <p>
              I’ve built projects involving
              <span className="text-purple-400 font-medium"> AI systems and RAG pipelines </span>
              and implemented
              <span className="text-indigo-400 font-medium"> CI/CD automation using Jenkins </span>
              along with cloud-based applications on
              <span className="text-cyan-400 font-medium"> AWS</span>.
              Currently, I’m exploring
              <span className="text-cyan-400 font-medium"> DevOps practices </span>
              to better understand how modern applications are deployed and maintained at scale.
            </p>

            <p>
              My goal is to become a well-rounded engineer who understands how
              <span className="text-indigo-300"> modern applications are built end-to-end</span> —
              from
              <span className="text-cyan-300"> frontend development</span> and
              <span className="text-purple-300"> backend architecture</span> to
              <span className="text-indigo-300"> database optimization</span>,
              <span className="text-cyan-300"> deployment</span>, and
              <span className="text-purple-300"> automation</span>.
            </p>


          </motion.div>

        </div>

      </div>

    </section>
  );
}

export default memo(About);
