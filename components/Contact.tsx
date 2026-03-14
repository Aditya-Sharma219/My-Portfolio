"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Github, Linkedin, Send } from "lucide-react";

export default function Contact() {

  const formRef = useRef<HTMLFormElement>(null);
  const [success, setSuccess] = useState(false);

  const WEB3_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_API_KEY;

  const handleSubmit = async (e: React.FormEvent) => {

    e.preventDefault();

    const formData = new FormData(formRef.current!);
    formData.set("access_key", WEB3_KEY || "");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const result = await res.json();

    if (result.success) {

      toast.success("Message sent successfully 🚀");

      formRef.current?.reset();

      setSuccess(true);

      setTimeout(() => setSuccess(false), 4000);

    } else {

      toast.error("Something went wrong.");

    }
  };

  return (
    <section
      id="contact"
      className="relative py-32 px-6 overflow-hidden"
    >

      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/bg4.jpg"
          alt="background"
          fill
          priority
          className="object-cover opacity-80"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#020617]/90 via-[#020617]/70 to-[#020617]/90"></div>

      <ToastContainer theme="dark" />

      <div className="max-w-5xl mx-auto">

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
          Contact Me
        </h2>

        {/* Card */}
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-10 shadow-[0_0_40px_rgba(99,102,241,0.15)]">

          <p className="text-center text-gray-400 mb-10 max-w-xl mx-auto">
            Interested in collaborating, working together, or discussing a
            project? Send me a message and I'll get back to you.
          </p>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col gap-6"
          >

            <input type="hidden" name="access_key" value={WEB3_KEY} />
            <input type="checkbox" name="botcheck" className="hidden" />

            {/* Name */}
            <div className="relative">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 pl-11 text-white placeholder-gray-400 focus:outline-none focus:border-indigo-400 transition"
              />
              <Mail className="absolute left-3 top-3.5 text-gray-400" size={18}/>
            </div>

            {/* Email */}
            <div className="relative">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 pl-11 text-white placeholder-gray-400 focus:outline-none focus:border-indigo-400 transition"
              />
              <Mail className="absolute left-3 top-3.5 text-gray-400" size={18}/>
            </div>

            {/* Message */}
            <textarea
              name="message"
              rows={5}
              placeholder="Write your message..."
              required
              className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-indigo-400 transition"
            />

            {/* Button */}
            <button
              type="submit"
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 text-white py-3 rounded-lg font-medium hover:scale-105 transition"
            >
              <Send size={18}/>
              Send Message
            </button>

            {/* Success animation */}
            <AnimatePresence>
              {success && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="text-green-400 text-center mt-2"
                >
                  ✅ Message received! I'll reply soon.
                </motion.p>
              )}
            </AnimatePresence>

          </form>

          {/* Social Links */}
          <div className="flex justify-center gap-8 mt-10">

            <a
              href="mailto:adityash219@gmail.com"
              className="text-gray-400 hover:text-white transition"
            >
              <Mail size={22}/>
            </a>

            <a
              href="https://github.com/Aditya-Sharma219"
              target="_blank"
              className="text-gray-400 hover:text-white transition"
            >
              <Github size={22}/>
            </a>

            <a
              href="https://linkedin.com/in/aditya-sharma-49a9142a6"
              target="_blank"
              className="text-gray-400 hover:text-white transition"
            >
              <Linkedin size={22}/>
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}
