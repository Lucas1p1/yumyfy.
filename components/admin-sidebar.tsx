"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Logo } from "./logo"

const adminMenuItems = [
  { label: "Dashboard", href: "/admin", icon: "📊" },
  { label: "Orders", href: "/admin/orders", icon: "📦" },
  { label: "Tracking", href: "/admin/tracking", icon: "🗺️" },
  { label: "Drivers", href: "/admin/drivers", icon: "👤" },
  { label: "Analytics", href: "/admin/analytics", icon: "📈" },
  { label: "Settings", href: "/admin/settings", icon: "⚙️" },
]

export function AdminSidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-64 bg-card border-r border-border min-h-screen">
      <div className="p-6 border-b border-border">
        <Logo />
        <p className="text-xs text-muted-foreground mt-2">Management</p>
      </div>

      <nav className="p-4 space-y-2">
        {adminMenuItems.map((item) => (
          <Link key={item.href} href={item.href}>
            <button
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                pathname === item.href
                  ? "bg-gradient-blend text-white font-semibold"
                  : "hover:bg-muted text-foreground hover:text-primary"
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              <span className="font-semibold text-sm">{item.label}</span>
            </button>
          </Link>
        ))}
      </nav>
    </aside>
  )
}
