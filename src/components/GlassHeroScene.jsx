import React, { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sparkles } from "@react-three/drei";
import * as THREE from "three";

function GlassMaterial({ color = "#9eefff", opacity = 0.42 }) {
  return (
    <meshPhysicalMaterial
      color={color}
      metalness={0.08}
      roughness={0.06}
      transmission={0.7}
      thickness={0.85}
      transparent
      opacity={opacity}
      clearcoat={1}
      clearcoatRoughness={0.08}
      ior={1.35}
    />
  );
}

function GlassCluster() {
  const groupRef = useRef(null);
  const orbitRef = useRef(null);

  const satellites = useMemo(
    () => [
      { position: [-2.2, 0.9, -0.6], scale: 0.58, color: "#8de9ff" },
      { position: [2, -0.7, -0.2], scale: 0.46, color: "#b39cff" },
      { position: [0.2, -1.9, 0.3], scale: 0.38, color: "#7dffa8" },
    ],
    []
  );

  useFrame(({ clock, pointer }) => {
    const elapsed = clock.getElapsedTime();

    if (groupRef.current) {
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        pointer.x * 0.35 + Math.sin(elapsed * 0.2) * 0.18,
        0.045
      );
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        pointer.y * -0.2 + Math.cos(elapsed * 0.17) * 0.08,
        0.045
      );
    }

    if (orbitRef.current) {
      orbitRef.current.rotation.z = elapsed * 0.16;
      orbitRef.current.rotation.y = elapsed * 0.09;
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={1.35} rotationIntensity={0.65} floatIntensity={0.8}>
        <mesh castShadow receiveShadow>
          <icosahedronGeometry args={[1.45, 1]} />
          <GlassMaterial color="#bfefff" opacity={0.38} />
        </mesh>
      </Float>

      <group ref={orbitRef}>
        <mesh rotation={[Math.PI / 2.3, 0.2, 0]}>
          <torusGeometry args={[2.15, 0.018, 16, 160]} />
          <meshBasicMaterial color="#8de9ff" transparent opacity={0.46} />
        </mesh>
        <mesh rotation={[Math.PI / 2.8, 0.9, 0.8]}>
          <torusGeometry args={[1.66, 0.012, 16, 140]} />
          <meshBasicMaterial color="#ffffff" transparent opacity={0.28} />
        </mesh>
      </group>

      {satellites.map((satellite) => (
        <Float
          key={`${satellite.color}-${satellite.position.join("-")}`}
          speed={1.5}
          rotationIntensity={0.8}
          floatIntensity={1.1}
        >
          <mesh position={satellite.position} scale={satellite.scale}>
            <boxGeometry args={[1, 1, 1]} />
            <GlassMaterial color={satellite.color} opacity={0.48} />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

export default function GlassHeroScene() {
  return (
    <div className="hero-scene" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 6.2], fov: 42 }}
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.65} />
          <directionalLight position={[4, 5, 6]} intensity={1.7} color="#dff9ff" />
          <pointLight position={[-4, -2, 3]} intensity={2.1} color="#8de9ff" />
          <pointLight position={[3, -3, 2]} intensity={1.2} color="#b39cff" />
          <GlassCluster />
          <Sparkles count={52} scale={6} size={1.8} speed={0.28} opacity={0.34} color="#c9f7ff" />
        </Suspense>
      </Canvas>
    </div>
  );
}
