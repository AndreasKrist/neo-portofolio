'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sphere, Box, Torus } from '@react-three/drei'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function FloatingShape({ position, color, type }: { position: [number, number, number], color: string, type: 'sphere' | 'box' | 'torus' }) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (!meshRef.current) return
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.2
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.3
    meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.3
  })

  const Shape = type === 'sphere' ? Sphere : type === 'box' ? Box : Torus

  return (
    <mesh ref={meshRef} position={position}>
      <Shape args={type === 'torus' ? [1, 0.4, 16, 32] : [1, 32, 32]}>
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.5}
          metalness={0.8}
          roughness={0.2}
        />
      </Shape>
    </mesh>
  )
}

export function FloatingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <FloatingShape position={[-4, 2, -2]} color="#b794f4" type="sphere" />
        <FloatingShape position={[4, -2, -3]} color="#63b3ed" type="box" />
        <FloatingShape position={[0, 0, -4]} color="#f687b3" type="torus" />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  )
}