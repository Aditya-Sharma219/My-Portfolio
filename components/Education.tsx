"use client";

import { motion } from "framer-motion";
import { GraduationCap, School } from "lucide-react";
import DotGrid from "../components/DotGrid";

const education = [
  {
    school: "NIIT University",
    icon: GraduationCap,
    degree: "B.Tech in Computer Science Engineering",
    duration: "Aug 2023 — Jul 2027",
    cgpa: "8.26 CGPA",
    coursework: [
      "DSA",
      "OOP",
      "Operating Systems",
      "DBMS",
      "Software Engineering",
      "Cloud Computing",
      "NLP",
      "AI Agents",
    ],
  },
  {
    school: "Nilgiri Hills Public School",
    icon: School,
    degree: "CBSE",
    duration: "Class XII — 80% | Class X — 91.6%",
    cgpa: "",
    coursework: [],
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="relative py-32 px-6 overflow-hidden"
    >

      {/* DotGrid Background */}
      <div className="absolute inset-0 -z-10 opacity-80">
        <DotGrid
          dotSize={5}
          gap={15}
          baseColor="#271E37"
          activeColor="#5227FF"
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
      </div>

      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-24 bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"
        >
          Education
        </motion.h2>

        {/* Timeline */}
        <div className="relative border-l border-indigo-500/30 pl-10 space-y-16">

          {education.map((edu, i) => {

            const Icon = edu.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.2 }}
                className="relative"
              >

                {/* Timeline Dot */}
                <span className="absolute -left-[18px] top-6 w-6 h-6 rounded-full bg-indigo-500 shadow-[0_0_20px_rgba(99,102,241,0.9)]"></span>

                {/* Card */}
                <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 hover:shadow-[0_0_45px_rgba(99,102,241,0.35)] transition-all">

                  {/* Header */}
                  <div className="flex items-center gap-4 mb-4">

                    <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-indigo-500/20 text-indigo-400">
                      <Icon size={22}/>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        {edu.school}
                      </h3>

                      <p className="text-gray-400 text-sm">
                        {edu.degree}
                      </p>
                    </div>

                  </div>

                  <p className="text-indigo-400 text-sm mb-2">
                    {edu.duration}
                  </p>

                  {edu.cgpa && (
                    <p className="text-cyan-400 text-sm font-medium mb-4">
                      {edu.cgpa}
                    </p>
                  )}

                  {/* Coursework */}
                  {edu.coursework.length > 0 && (
                    <div className="flex flex-wrap gap-2">

                      {edu.coursework.map((course, index) => (
                        <span
                          key={index}
                          className="text-xs px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 hover:bg-indigo-500/30 transition"
                        >
                          {course}
                        </span>
                      ))}

                    </div>
                  )}

                </div>

              </motion.div>
            );
          })}

        </div>

      </div>

    </section>
  );
}
