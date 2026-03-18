"use client";

import { OrbitControls, Points, PointMaterial } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function CoreCluster() {
  const groupRef = useRef<THREE.Group>(null);

  const points = useMemo(() => {
    const count = 1200;
    const array = new Float32Array(count * 3);

    const pseudo = (seed: number) => {
      const value = Math.sin(seed * 127.1 + seed * seed * 0.13) * 43758.5453123;
      return value - Math.floor(value);
    };

    for (let i = 0; i < count; i += 1) {
      const r1 = pseudo(i + 1);
      const r2 = pseudo(i + 21);
      const r3 = pseudo(i + 77);

      const radius = 2.6 * Math.cbrt(r1);
      const theta = r2 * Math.PI * 2;
      const phi = Math.acos(2 * r3 - 1);

      array[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      array[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      array[i * 3 + 2] = radius * Math.cos(phi);
    }

    return array;
  }, []);

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = state.clock.elapsedTime * 0.16;
    groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
  });

  return (
    <group ref={groupRef}>
      <Points positions={points} stride={3} frustumCulled>
        <PointMaterial transparent color="#e458ff" size={0.03} sizeAttenuation depthWrite={false} />
      </Points>
      <mesh>
        <icosahedronGeometry args={[1.25, 1]} />
        <meshPhysicalMaterial
          color="#3b0f45"
          emissive="#d640d9"
          emissiveIntensity={0.4}
          metalness={0.8}
          roughness={0.2}
          transparent
          transmission={0.2}
          thickness={1.4}
        />
      </mesh>
    </group>
  );
}

export function NeuralCoreCanvas() {
  return (
    <div className="absolute inset-0 z-10 opacity-90">
      <Canvas camera={{ position: [0, 0, 6], fov: 48 }}>
        <ambientLight intensity={0.2} />
        <pointLight position={[2, 1, 4]} color="#ff4a84" intensity={22} distance={22} />
        <pointLight position={[-2, -2, 4]} color="#ff4a9d" intensity={15} distance={20} />
        <CoreCluster />
        <OrbitControls autoRotate autoRotateSpeed={0.35} enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
}
