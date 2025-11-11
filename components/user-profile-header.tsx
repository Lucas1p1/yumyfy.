"use client"

import { useAuth } from "@/hooks/use-auth"

export function UserProfileHeader() {
  const { user } = useAuth()

  if (!user) return null

  return (
    <div className="bg-gradient-to-r from-primary to-accent text-white rounded-xl p-8 mb-8">
      <div className="flex items-center gap-6">
        <div className="text-6xl bg-white/20 rounded-full w-24 h-24 flex items-center justify-center">
          {user.avatar}
        </div>
        <div>
          <h1 className="text-3xl font-black mb-2">{user.name}</h1>
          <p className="text-white/90 mb-1">{user.email}</p>
          <p className="text-white/90">{user.phone}</p>
        </div>
      </div>
    </div>
  )
}
