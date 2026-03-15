"use client";

import { useEffect, useRef, memo } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import Image from "next/image";

const Typewriter = dynamic(
    () => import("react-simple-typewriter").then((m) => m.Typewriter),
    { ssr: false }
);

const MagneticButton = dynamic(() => import("./MagneticButton"), {
    ssr: false,
});

function Hero() {
    const spotlightRef = useRef<HTMLDivElement>(null);
    const mouse = useRef({ x: 0, y: 0 });
    const raf = useRef<number | null>(null);


    useEffect(() => {
        const update = () => {
            if (spotlightRef.current) {
                spotlightRef.current.style.background = `radial-gradient(circle 320px at ${mouse.current.x}px ${mouse.current.y}px, rgba(99,102,241,0.18), transparent 70%)`;
            }

            raf.current = requestAnimationFrame(update);
        };

        const move = (e: MouseEvent) => {
            mouse.current.x = e.clientX;
            mouse.current.y = e.clientY;
        };

        window.addEventListener("mousemove", move);
        raf.current = requestAnimationFrame(update);

        return () => {
            window.removeEventListener("mousemove", move);
            if (raf.current) {
                cancelAnimationFrame(raf.current);
            }

        };
    }, []);

    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden"
        >
            {/* Aurora Background */}
            <div className="absolute inset-0 -z-20 overflow-hidden">
                <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-purple-600 rounded-full blur-[180px] opacity-30 animate-pulse" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-cyan-500 rounded-full blur-[180px] opacity-30 animate-pulse" />
                <div className="absolute top-[40%] left-[40%] w-[500px] h-[500px] bg-indigo-600 rounded-full blur-[180px] opacity-30 animate-pulse" />
            </div>

            {/* Cursor spotlight */}
            <div
                ref={spotlightRef}
                className="pointer-events-none fixed inset-0 -z-10"
            />

            {/* Floating Tech Icons */}
            <div className="absolute inset-0 -z-10">
                <motion.img
                    src="/react.svg"
                    className="absolute top-24 left-20 w-12 opacity-70"
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                />

                <motion.img
                    src="/next.svg"
                    className="absolute bottom-32 right-28 w-14 opacity-70"
                    animate={{ y: [0, 20, 0] }}
                    transition={{ duration: 5, repeat: Infinity }}
                />

                <motion.img
                    src="/node.svg"
                    className="absolute top-40 right-16 w-12 opacity-70"
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                />

                <motion.img
                    src="/typescript.svg"
                    className="absolute bottom-20 left-24 w-12 opacity-70"
                    animate={{ y: [0, -18, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                />
            </div>

            {/* Hero Card */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl text-center backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-12 shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
            >

                {/* Heading */}
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
                    Hi, I'm{" "}
                    <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                        Aditya Sharma
                    </span>
                </h1>

                {/* Typing */}
                <h2 className="mt-6 text-xl md:text-2xl text-gray-300">
                    <Typewriter
                        words={[
                            "Full Stack Web Developer",
                            "Next.js & React Developer",
                            "AI & RAG Systems Enthusiast",
                            "Computer Science Undergraduate",
                        ]}
                        loop
                        cursor
                        typeSpeed={60}
                        deleteSpeed={30}
                        delaySpeed={2000}
                    />
                </h2>

                {/* Description */}
                <p className="mt-6 text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto">
                    Computer Science student passionate about building
                    <span className="text-indigo-400"> modern full-stack web applications</span>,
                    exploring
                    <span className="text-cyan-400"> AI-powered systems</span>, and creating
                    <span className="text-purple-400"> scalable applications</span>.
                </p>


                {/* Buttons */}
                <div className="mt-10 flex flex-wrap justify-center gap-5">
                    <a href="#projects">
                        <MagneticButton>View Projects</MagneticButton>
                    </a>

                    <a href="#contact">
                        <MagneticButton className="bg-transparent border border-white/20 hover:bg-white/10">
                            Contact Me
                        </MagneticButton>
                    </a>
                </div>

                {/* Social */}
                <div className="mt-8 flex flex-wrap justify-center gap-6 text-gray-400 text-sm">
                    <a
                        href="https://github.com/Aditya-Sharma219"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition"
                    >
                        GitHub
                    </a>

                    <a
                        href="https://www.linkedin.com/in/aditya-sharma-49a9142a6/"
                        target="_blank"
                        rel="noopener noreferrer"
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
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="absolute bottom-10 text-gray-400 text-sm"
            />
        </section>
    );
}

export default memo(Hero);
