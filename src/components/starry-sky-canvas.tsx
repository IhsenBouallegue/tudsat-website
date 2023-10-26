"use client";

import { PerspectiveCamera, Stars } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function StarrySkyCanvas() {
  return (
    <div className="fixed inset-x-0 -z-20 h-screen">
      <Canvas dpr={[1, 2]} gl={{ alpha: true }} shadows>
        <PerspectiveCamera makeDefault position={[0, 0, 10]} />
        <StarsCanvas />
        <hemisphereLight intensity={0.5} />
        <directionalLight position={[0, 2, 5]} castShadow intensity={1} />
      </Canvas>
    </div>
  );
}

function StarsCanvas() {
  const ref = useRef<any>();
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation && (ref.current.rotation.x -= delta / 100);
      ref.current.rotation && (ref.current.rotation.y -= delta / 150);
    }
  });
  return (
    <Stars
      ref={ref}
      radius={50}
      depth={400}
      count={3000}
      factor={15}
      saturation={0}
      fade
      speed={2}
    />
  );
}
