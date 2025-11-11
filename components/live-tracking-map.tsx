"use client"

import { Canvas } from "@react-three/fiber"
import { PerspectiveCamera, OrbitControls } from "@react-three/drei"

interface Delivery {
  id: string
  driverLocation: { lat: number; lng: number }
  deliveryLocation: { lat: number; lng: number }
  distance: string
  eta: string
}

function MapScene({ delivery }: { delivery?: Delivery }) {
  if (!delivery) return null

  return (
    <>
      <color attach="background" args={["#f4ffff"]} />
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={0.8} />
      <pointLight position={[-10, -10, 10]} intensity={0.4} color="#fd8000" />

      {/* Delivery location (purple marker) */}
      <mesh position={[3, 0, 0]}>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshStandardMaterial color="#551337" emissive="#551337" emissiveIntensity={0.5} />
      </mesh>

      {/* Driver location (orange marker) */}
      <mesh position={[-2, 0, 0]}>
        <sphereGeometry args={[0.25, 32, 32]} />
        <meshStandardMaterial color="#fd8000" emissive="#fd8000" emissiveIntensity={0.5} />
      </mesh>

      {/* Route line */}
      <line>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={2}
            array={new Float32Array([-2, 0, 0, 3, 0, 0])}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#fd8000" linewidth={3} />
      </line>

      <PerspectiveCamera makeDefault position={[0, 0, 8]} />
      <OrbitControls autoRotate autoRotateSpeed={2} />
    </>
  )
}

export function LiveTrackingMap({ delivery }: { delivery?: Delivery }) {
  return (
    <div className="w-full h-full relative">
      <Canvas>
        <MapScene delivery={delivery} />
      </Canvas>

      {/* Info Overlay */}
      {delivery && (
        <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm p-4 rounded-lg shadow-lg max-w-xs z-10">
          <p className="text-xs text-muted-foreground mb-1">Current Delivery</p>
          <p className="font-bold text-foreground mb-3">{delivery.id}</p>

          <div className="space-y-2 mb-3 pb-3 border-b border-border">
            <div className="flex justify-between">
              <span className="text-xs text-muted-foreground">Distance</span>
              <span className="text-xs font-bold text-primary">{delivery.distance}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-xs text-muted-foreground">ETA</span>
              <span className="text-xs font-bold text-secondary">{delivery.eta}</span>
            </div>
          </div>

          <div className="flex gap-2">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-orange-500" />
              <span className="text-xs text-muted-foreground">Driver</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-purple-700" />
              <span className="text-xs text-muted-foreground">Delivery</span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
