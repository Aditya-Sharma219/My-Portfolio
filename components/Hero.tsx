"use client";

import { useState, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import MagneticButton from "./MagneticButton";


export default function Hero() {

    const [mouse, setMouse] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const move = (e: MouseEvent) => {
            setMouse({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", move);

        return () => window.removeEventListener("mousemove", move);
    }, []);

    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden"
        >

            {/* Cursor spotlight */}
            <div
                className="pointer-events-none fixed inset-0 -z-10"
                style={{
                    background: `radial-gradient(circle 300px at ${mouse.x}px ${mouse.y}px, rgba(99,102,241,0.18), transparent 70%)`,
                }}
            />

            {/* Floating tech icons */}
            <div className="absolute inset-0 -z-10">

                <motion.img
                    src="/react.svg"
                    className="absolute top-24 left-20 w-10 opacity-70"
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                />

                <motion.img
                    src="/next.svg"
                    className="absolute bottom-32 right-28 w-12 opacity-70"
                    animate={{ y: [0, 20, 0] }}
                    transition={{ duration: 5, repeat: Infinity }}
                />

                <motion.img
                    src="/node.svg"
                    className="absolute top-40 right-16 w-10 opacity-70"
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                />

                <motion.img
                    src="/typescript.svg"
                    className="absolute bottom-20 left-24 w-10 opacity-70"
                    animate={{ y: [0, -18, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                />

            </div>

            {/* Hero Card */}
            <div className="max-w-4xl text-center backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-12 shadow-[0_10px_40px_rgba(0,0,0,0.6)]">

                {/* Heading */}
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                    Hi, I'm{" "}
                    <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                        Aditya Sharma
                    </span>
                </h1>

                {/* Typing Role */}
                <h2 className="mt-6 text-xl md:text-2xl text-gray-300">

                    <Typewriter
                        words={[
                            "Full Stack Developer",
                            "AI Systems Builder",
                            "Next.js Engineer",
                            "Open Source Creator",
                        ]}
                        loop
                        cursor
                        cursorStyle="|"
                        typeSpeed={70}
                        deleteSpeed={40}
                        delaySpeed={2000}
                    />

                </h2>

                {/* Description */}
                <p className="mt-6 text-lg text-gray-400 leading-relaxed">
                    Computer Science Undergraduate passionate about building
                    <span className="text-indigo-400"> scalable web applications</span>,
                    <span className="text-cyan-400"> AI-powered systems</span>, and
                    modern digital products.
                </p>

                {/* Buttons */}
                <div className="mt-10 flex flex-wrap justify-center gap-4 hover:cursor-pointer">

                    <a href="#projects">
                        <MagneticButton>
                            View Projects
                        </MagneticButton>
                    </a>

                    <a href="#contact">
                        <MagneticButton className="bg-transparent border border-white/20 hover:bg-white/10">
                            Contact Me
                        </MagneticButton>
                    </a>

                </div>


                {/* Social links */}
                <div className="mt-8 flex flex-wrap justify-center gap-6 text-gray-400 text-sm">

                    <a
                        href="https://github.com/Aditya-Sharma219"
                        target="_blank"
                        className="hover:text-white transition"
                    >
                        GitHub
                    </a>

                    <a
                        href="https://www.linkedin.com/in/aditya-sharma-49a9142a6/"
                        target="_blank"
                        className="hover:text-white transition"
                    >
                        LinkedIn
                    </a>

                    <a
                        href="mailto:aditya.sharma23@st.niituniversity.in"
                        className="hover:text-white transition"
                    >
                        Student Email
                    </a>

                    <a
                        href="mailto:adityash219@gmail.com"
                        className="hover:text-white transition"
                    >
                        Personal Email
                    </a>

                </div>

            </div>

        </section>
    );
}
