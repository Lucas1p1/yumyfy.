"use client"

import Link from "next/link"
import { useState } from "react"
import Image from "next/image"

interface Service {
  id: string
  title: string
  description: string
  image: string
  color: string
  href: string
}

export function ServiceCard({ service }: { service: Service }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Link href={service.href}>
      <div
        className={`group relative p-0 rounded-2xl cursor-pointer transition-all duration-300 overflow-hidden
          ${isHovered ? "shadow-2xl scale-105" : "shadow-lg"}
          bg-card border border-border hover:border-primary/50 card-hover`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative w-full h-48 overflow-hidden bg-muted">
          <Image
            src={service.image || "/placeholder.svg"}
            alt={service.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>

        {/* Gradient background */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
        />

        <div className="relative p-6 space-y-3">
          <h3 className="text-2xl font-bold text-card-foreground group-hover:text-primary transition-colors">
            {service.title}
          </h3>

          <p className="text-card-foreground/70 group-hover:text-card-foreground transition-colors">
            {service.description}
          </p>

          <div className="flex items-center gap-2 text-primary font-semibold pt-2 group-hover:gap-3 transition-all">
            <span>Explore</span>
            <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
          </div>
        </div>

        {/* Animated corner accent */}
        <div
          className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${service.color} rounded-full opacity-0 group-hover:opacity-20 blur-xl transition-all duration-300`}
        />
      </div>
    </Link>
  )
}
