"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 pointer-events-none z-[999]"
      style={{
        transform: `translate(${pos.x - 12}px, ${pos.y - 12}px)`
      }}
    >
      <div className="w-6 h-6 rounded-full border border-cyan-400 shadow-[0_0_12px_#22d3ee]"></div>
    </div>
  );
}
