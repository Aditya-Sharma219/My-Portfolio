"use client";

import React, { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion, AnimatePresence } from "framer-motion";

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
      className="relative py-28 px-6 max-w-5xl mx-auto"
    >

      <ToastContainer theme="dark" />

      {/* Title */}
      <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
        Contact Me
      </h2>

      {/* Glass Card */}
      <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-10 shadow-[0_0_40px_rgba(99,102,241,0.15)]">

        <p className="text-center text-gray-400 mb-10 max-w-xl mx-auto">
          Interested in collaborating, working together, or discussing a project?
          Send me a message and I'll get back to you.
        </p>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col gap-6"
        >

          {/* Hidden Inputs */}
          <input type="hidden" name="access_key" value={WEB3_KEY} />
          <input type="checkbox" name="botcheck" className="hidden" />

          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-indigo-400 transition"
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-indigo-400 transition"
          />

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
            className="bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 text-white py-3 rounded-lg font-medium hover:scale-105 transition"
          >
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
        <div className="flex justify-center gap-6 mt-10 text-gray-400">

          <a
            href="mailto:adityash219@gmail.com"
            className="hover:text-white transition"
          >
            Email
          </a>

          <a
            href="https://github.com/Aditya-Sharma219"
            target="_blank"
            className="hover:text-white transition"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/aditya-sharma-49a9142a6"
            target="_blank"
            className="hover:text-white transition"
          >
            LinkedIn
          </a>

        </div>

      </div>

    </section>
  );
}
