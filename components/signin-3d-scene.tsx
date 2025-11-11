"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment } from "@react-three/drei"
import { useRef, useEffect } from "react"
import type * as THREE from "three"

function RealisticParcel() {
  const groupRef = useRef<THREE.Group>(null)

  useEffect(() => {
    if (groupRef.current) {
      groupRef.current.rotation.x = 0.3
      groupRef.current.rotation.y = 0.6
    }
  }, [])

  return (
    <group ref={groupRef}>
      {/* Main cardboard box - realistic brown color */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[2.4, 3, 1.8]} />
        <meshStandardMaterial color="#c4683d" metalness={0.05} roughness={0.85} map={undefined} />
      </mesh>

      {/* Left flap with natural crease */}
      <mesh position={[-1.2, 1.65, 0]} rotation={[0.5, 0, 0.1]}>
        <boxGeometry args={[0.8, 0.4, 1.8]} />
        <meshStandardMaterial color="#b8603a" metalness={0.04} roughness={0.88} />
      </mesh>

      {/* Right flap with natural crease */}
      <mesh position={[1.2, 1.65, 0]} rotation={[0.5, 0, -0.1]}>
        <boxGeometry args={[0.8, 0.4, 1.8]} />
        <meshStandardMaterial color="#b8603a" metalness={0.04} roughness={0.88} />
      </mesh>

      {/* Top flap */}
      <mesh position={[0, 1.8, -0.9]} rotation={[0.3, 0, 0]}>
        <boxGeometry args={[2.4, 0.35, 0.6]} />
        <meshStandardMaterial color="#ac5733" metalness={0.03} roughness={0.9} />
      </mesh>

      {/* Heavy-duty brown tape across width - horizontal */}
      <mesh position={[0, 0.4, 0.9]}>
        <boxGeometry args={[2.5, 0.2, 0.15]} />
        <meshStandardMaterial color="#3a2f2a" metalness={0.3} roughness={0.6} />
      </mesh>

      {/* Heavy-duty brown tape across width - below center */}
      <mesh position={[0, -0.4, 0.9]}>
        <boxGeometry args={[2.5, 0.2, 0.15]} />
        <meshStandardMaterial color="#3a2f2a" metalness={0.3} roughness={0.6} />
      </mesh>

      {/* Vertical tape stripe - left */}
      <mesh position={[-0.8, 0, 0.9]}>
        <boxGeometry args={[0.2, 3.2, 0.15]} />
        <meshStandardMaterial color="#3a2f2a" metalness={0.3} roughness={0.6} />
      </mesh>

      {/* Vertical tape stripe - right */}
      <mesh position={[0.8, 0, 0.9]}>
        <boxGeometry args={[0.2, 3.2, 0.15]} />
        <meshStandardMaterial color="#3a2f2a" metalness={0.3} roughness={0.6} />
      </mesh>

      {/* Center vertical tape */}
      <mesh position={[0, 0, 0.9]}>
        <boxGeometry args={[0.2, 3.2, 0.15]} />
        <meshStandardMaterial color="#3a2f2a" metalness={0.3} roughness={0.6} />
      </mesh>

      {/* Plastic handle - shiny grey */}
      <mesh position={[0, 2.4, 0.7]}>
        <boxGeometry args={[1.8, 0.5, 0.15]} />
        <meshStandardMaterial color="#505050" metalness={0.7} roughness={0.2} />
      </mesh>

      {/* Handle curve on left */}
      <mesh position={[-0.9, 2.65, 0.6]}>
        <boxGeometry args={[0.1, 0.8, 0.15]} />
        <meshStandardMaterial color="#404040" metalness={0.8} roughness={0.15} />
      </mesh>

      {/* Handle curve on right */}
      <mesh position={[0.9, 2.65, 0.6]}>
        <boxGeometry args={[0.1, 0.8, 0.15]} />
        <meshStandardMaterial color="#404040" metalness={0.8} roughness={0.15} />
      </mesh>

      {/* Shipping label area - white rectangle */}
      <mesh position={[0, 0.2, 0.92]}>
        <boxGeometry args={[1.6, 1.2, 0.02]} />
        <meshStandardMaterial color="#f5f5f5" metalness={0} roughness={0.9} />
      </mesh>

      {/* Label accent line */}
      <mesh position={[0, -0.15, 0.93]}>
        <boxGeometry args={[1.5, 0.05, 0.02]} />
        <meshStandardMaterial color="#551337" metalness={0} roughness={0.8} />
      </mesh>

      {/* Bottom edge highlight */}
      <mesh position={[0, -1.5, 0]}>
        <boxGeometry args={[2.4, 0.08, 1.8]} />
        <meshStandardMaterial color="#9a5035" metalness={0.05} roughness={0.85} />
      </mesh>

      {/* Subtle shadow */}
      <mesh position={[0, -1.52, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[2.8, 2.1]} />
        <meshStandardMaterial color="#000000" transparent opacity={0.15} emissive="#000000" />
      </mesh>
    </group>
  )
}

function Scene() {
  return (
    <>
      <color attach="background" args={["#f4ffff"]} />
      <Environment preset="studio" />
      <ambientLight intensity={0.9} />
      <pointLight position={[20, 15, 20]} intensity={1.8} color="#ffffff" />
      <pointLight position={[-15, 10, 10]} intensity={1.2} color="#fd8000" />
      <pointLight position={[10, -5, 15]} intensity={0.7} color="#551337" />

      <RealisticParcel />

      <OrbitControls
        autoRotate
        autoRotateSpeed={3}
        enableZoom={false}
        enablePan={false}
        minPolarAngle={Math.PI / 3.5}
        maxPolarAngle={(Math.PI * 2) / 3.2}
      />
    </>
  )
}

export function SignIn3DScene() {
  return (
    <div className="w-full h-full min-h-[500px]">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <Scene />
      </Canvas>
    </div>
  )
}
