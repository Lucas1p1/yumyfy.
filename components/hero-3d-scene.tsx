"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"

export function Hero3DScene() {
  const containerRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<THREE.Scene | null>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const meshesRef = useRef<THREE.Mesh[]>([])

  useEffect(() => {
    if (!containerRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    sceneRef.current = scene
    scene.background = null
    scene.fog = new THREE.Fog(0x000000, 10, 50)

    // Camera
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000,
    )
    camera.position.z = 5

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight)
    renderer.setClearColor(0x000000, 0)
    rendererRef.current = renderer
    containerRef.current.appendChild(renderer.domElement)

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6)
    scene.add(ambientLight)

    const pointLight = new THREE.PointLight(0xff9500, 1.5)
    pointLight.position.set(5, 5, 5)
    scene.add(pointLight)

    const pointLight2 = new THREE.PointLight(0x00d4ff, 1)
    pointLight2.position.set(-5, -5, 5)
    scene.add(pointLight2)

    // Create geometric shapes
    const createShape = (type: string, color: number, position: [number, number, number]) => {
      let geometry
      if (type === "box") {
        geometry = new THREE.BoxGeometry(1, 1, 1)
      } else if (type === "sphere") {
        geometry = new THREE.IcosahedronGeometry(0.7, 4)
      } else {
        geometry = new THREE.TetrahedronGeometry(1)
      }

      const material = new THREE.MeshPhongMaterial({
        color,
        emissive: color,
        emissiveIntensity: 0.3,
        shininess: 100,
        wireframe: false,
      })

      const mesh = new THREE.Mesh(geometry, material)
      mesh.position.set(...position)
      mesh.castShadow = true
      mesh.receiveShadow = true
      scene.add(mesh)
      return mesh
    }

    // Create multiple shapes for visual interest
    const shapes = [
      createShape("box", 0xff9500, [-2.5, 1.5, -2]),
      createShape("sphere", 0x00d4ff, [2, -1, -1.5]),
      createShape("tetra", 0x1ed760, [0, 2.5, -3]),
      createShape("box", 0xffd700, [-1.5, -2, -2.5]),
      createShape("sphere", 0xff1493, [1.5, 1, -2]),
    ]

    meshesRef.current = shapes

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate)

      // Rotate and float shapes
      shapes.forEach((shape, idx) => {
        shape.rotation.x += 0.003 + idx * 0.0005
        shape.rotation.y += 0.004 + idx * 0.0003
        shape.position.y += Math.sin(Date.now() * 0.001 + idx) * 0.0015

        // Glow effect
        ;(shape.material as THREE.MeshPhongMaterial).emissiveIntensity = 0.3 + Math.sin(Date.now() * 0.003 + idx) * 0.2
      })

      renderer.render(scene, camera)
    }

    animate()

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current) return
      const width = containerRef.current.clientWidth
      const height = containerRef.current.clientHeight
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      containerRef.current?.removeChild(renderer.domElement)
      renderer.dispose()
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full"
      style={{
        background: "radial-gradient(ellipse at center, rgba(255,149,0,0.1) 0%, rgba(0,0,0,0.4) 100%)",
      }}
    />
  )
}
