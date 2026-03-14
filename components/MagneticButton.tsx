"use client";

import { useRef } from "react";

export default function MagneticButton({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLButtonElement>(null);

  const handleMouseMove = (e: any) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;

    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    ref.current!.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
  };

  const handleLeave = () => {
    if (ref.current) {
      ref.current.style.transform = "translate(0,0)";
    }
  };

  return (
    <button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleLeave}
      className={`px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 text-white font-medium transition duration-200 ${className}`}
    >
      {children}
    </button>
  );
}
