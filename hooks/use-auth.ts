"use client"

import { useState, useEffect } from "react"

export interface User {
  id: string
  name: string
  email: string
  phone: string
  avatar: string
}

export function useAuth() {
  const [user, setUser] = useState<User | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Simulate loading user from localStorage/session
    const saved = localStorage.getItem("user")
    if (saved) {
      setUser(JSON.parse(saved))
    } else {
      // Demo user
      const demoUser: User = {
        id: "user-1",
        name: "John Doe",
        email: "john@example.com",
        phone: "+1 (555) 123-4567",
        avatar: "👤",
      }
      setUser(demoUser)
      localStorage.setItem("user", JSON.stringify(demoUser))
    }
    setIsLoaded(true)
  }, [])

  const logout = () => {
    localStorage.removeItem("user")
    setUser(null)
  }

  return { user, isLoaded, logout }
}
