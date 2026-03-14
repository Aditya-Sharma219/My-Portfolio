"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const progress = (scrollTop / height) * 100;
      setWidth(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-[3px] z-[1000]">
      <div
        className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 transition-all"
        style={{ width: `${width}%` }}
      />
    </div>
  );
}
