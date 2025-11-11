"use client"

import { useEffect, useRef } from "react"

interface DeliveryMapProps {
  orderLocation?: { lat: number; lng: number }
  driverLocation?: { lat: number; lng: number }
}

export function DeliveryMap({ orderLocation, driverLocation }: DeliveryMapProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext("2d")
      if (!ctx) return

      // Clear canvas
      ctx.fillStyle = "#f5f5f5"
      ctx.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height)

      // Draw grid
      ctx.strokeStyle = "#ddd"
      ctx.lineWidth = 1
      for (let i = 0; i < canvasRef.current.width; i += 50) {
        ctx.beginPath()
        ctx.moveTo(i, 0)
        ctx.lineTo(i, canvasRef.current.height)
        ctx.stroke()
        ctx.beginPath()
        ctx.moveTo(0, i)
        ctx.lineTo(canvasRef.current.width, i)
        ctx.stroke()
      }

      // Draw order location
      if (orderLocation) {
        ctx.fillStyle = "#ef4444"
        ctx.beginPath()
        ctx.arc(orderLocation.lat * 50, orderLocation.lng * 50, 10, 0, Math.PI * 2)
        ctx.fill()
        ctx.fillStyle = "#fff"
        ctx.font = "bold 14px sans-serif"
        ctx.textAlign = "center"
        ctx.textBaseline = "middle"
        ctx.fillText("📍", orderLocation.lat * 50, orderLocation.lng * 50)
      }

      // Draw driver location
      if (driverLocation) {
        ctx.fillStyle = "#3b82f6"
        ctx.beginPath()
        ctx.arc(driverLocation.lat * 50, driverLocation.lng * 50, 10, 0, Math.PI * 2)
        ctx.fill()
        ctx.fillStyle = "#fff"
        ctx.font = "bold 14px sans-serif"
        ctx.textAlign = "center"
        ctx.textBaseline = "middle"
        ctx.fillText("🚚", driverLocation.lat * 50, driverLocation.lng * 50)
      }
    }
  }, [orderLocation, driverLocation])

  return <canvas ref={canvasRef} width={400} height={300} className="w-full border border-border rounded-lg" />
}
