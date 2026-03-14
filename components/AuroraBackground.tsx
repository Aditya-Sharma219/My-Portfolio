"use client";

export default function AuroraBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">

      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-purple-600 rounded-full blur-[200px] opacity-30 animate-pulse" />

      <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-cyan-500 rounded-full blur-[200px] opacity-30 animate-pulse" />

      <div className="absolute top-[40%] left-[50%] w-[500px] h-[500px] bg-indigo-600 rounded-full blur-[200px] opacity-30 animate-pulse" />

    </div>
  );
}
