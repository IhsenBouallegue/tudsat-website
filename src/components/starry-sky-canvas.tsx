"use client";

import { PerspectiveCamera, Stars } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function StarrySkyCanvas() {
  return (
    <div className="fixed -z-50 h-screen w-screen">
      <Canvas>
        <StarsCanvas />
      </Canvas>
    </div>
  );
}

function StarsCanvas() {
  const starsRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (starsRef.current) {
      starsRef.current.rotation.y += 0.0001; // Adjust the speed of rotation here
      starsRef.current.rotation.x += 0.0001;
    }
  });
  return (
    <group ref={starsRef}>
      <Stars radius={50} depth={400} count={1000} factor={16} saturation={0} fade speed={2} />
    </group>
  );
}
