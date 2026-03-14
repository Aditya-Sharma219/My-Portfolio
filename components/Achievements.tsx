"use client";

import { motion } from "framer-motion";
import { memo } from "react";
import Image from "next/image";
import { Trophy, Rocket, Brain, BookOpen } from "lucide-react";

type Achievement = {
  title: string;
  desc: string;
  icon: any;
};

const achievements: Achievement[] = [
  {
    title: "Runner-Up",
    desc: "College Hackathon 2025",
    icon: Trophy,
  },
  {
    title: "15+ Projects",
    desc: "Built using modern web technologies",
    icon: Rocket,
  },
  {
    title: "AI Systems",
    desc: "Worked on RAG and Generative AI projects",
    icon: Brain,
  },
  {
    title: "Continuous Learning",
    desc: "Exploring system design and scalable architecture",
    icon: BookOpen,
  },
];

function Achievements() {
  return (
    <section
      id="achievements"
      className="relative py-32 px-6 overflow-hidden"
    >

      {/* Background Image */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/bg1.jpg"
          alt="background"
          fill
          priority
          sizes="100vw"
          quality={80}
          className="object-cover opacity-85"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#020617]/90 via-[#020617]/70 to-[#020617]/90"></div>

      {/* Glow */}
      <div className="absolute -z-10 inset-0 pointer-events-none">
        <div className="absolute top-[-120px] left-[-120px] w-[380px] h-[380px] bg-purple-500/20 blur-[130px] rounded-full"></div>
        <div className="absolute bottom-[-120px] right-[-120px] w-[380px] h-[380px] bg-cyan-500/20 blur-[130px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-4xl md:text-5xl font-bold text-center mb-20 bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"
        >
          Achievements
        </motion.h2>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {achievements.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group text-center backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-10
                hover:shadow-[0_0_45px_rgba(99,102,241,0.35)] hover:-translate-y-2
                transition-all duration-300"
              >

                {/* Icon */}
                <div className="w-14 h-14 mx-auto mb-5 flex items-center justify-center rounded-xl
                bg-indigo-500/20 text-indigo-400 group-hover:bg-indigo-500/30 group-hover:scale-110 transition">
                  <Icon size={26} />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-2">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.desc}
                </p>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default memo(Achievements);
