"use client";

import { motion } from "framer-motion";

const education = [
  {
    school: "NIIT University",
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
      className="relative py-28 px-6 max-w-6xl mx-auto"
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-20 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent"
      >
        Education
      </motion.h2>

      {/* Timeline */}
      <div className="relative border-l border-white/10 pl-8 space-y-14">

        {education.map((edu, i) => (

          <motion.div
            key={i}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.2 }}
            className="relative"
          >

            {/* Dot */}
            <span className="absolute -left-[12px] top-2 w-5 h-5 bg-indigo-500 rounded-full shadow-[0_0_10px_rgba(99,102,241,0.6)]"></span>

            {/* Card */}
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 hover:shadow-[0_0_25px_rgba(99,102,241,0.25)] transition">

              <h3 className="text-xl font-semibold text-white">
                {edu.school}
              </h3>

              <p className="text-gray-400 text-sm mt-1">
                {edu.degree}
              </p>

              <p className="text-indigo-400 text-sm mt-1">
                {edu.duration}
              </p>

              {edu.cgpa && (
                <p className="text-cyan-400 text-sm mt-2 font-medium">
                  {edu.cgpa}
                </p>
              )}

              {/* Coursework */}
              {edu.coursework.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-4">

                  {edu.coursework.map((course, index) => (
                    <span
                      key={index}
                      className="text-xs px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30"
                    >
                      {course}
                    </span>
                  ))}

                </div>
              )}

            </div>

          </motion.div>

        ))}

      </div>
    </section>
  );
}
