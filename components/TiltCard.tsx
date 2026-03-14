"use client";

import Tilt from "react-parallax-tilt";

export default function TiltCard({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Tilt
      glareEnable
      glareMaxOpacity={0.3}
      scale={1.05}
      tiltMaxAngleX={15}
      tiltMaxAngleY={15}
      className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-xl"
    >
      {children}
    </Tilt>
  );
}
