"use client"

import Link from "next/link"
import { AdminSidebar } from "@/components/admin-sidebar"
import { AdminHeader } from "@/components/admin-header"

export default function AdminDashboardPage() {
  const stats = [
    { label: "Total Orders", value: "1,245", icon: "📦", color: "from-primary to-primary/80" },
    { label: "Active Deliveries", value: "23", icon: "🚚", color: "from-secondary to-orange-600" },
    { label: "Revenue Today", value: "$2,450", icon: "💰", color: "from-orange-400 to-secondary" },
    { label: "Active Drivers", value: "47", icon: "👤", color: "from-primary/60 to-purple-600" },
  ]

  const recentOrders = [
    { id: "ORD-001", customer: "John Doe", amount: "$24.99", status: "in-delivery", time: "2 min ago" },
    { id: "ORD-002", customer: "Jane Smith", amount: "$15.49", status: "pending", time: "5 min ago" },
    { id: "ORD-003", customer: "Bob Wilson", amount: "$32.50", status: "confirmed", time: "8 min ago" },
    { id: "ORD-004", customer: "Alice Brown", amount: "$18.99", status: "in-delivery", time: "12 min ago" },
  ]

  const statusColors = {
    pending: "bg-orange-100 text-orange-800",
    confirmed: "bg-primary/10 text-primary",
    "in-delivery": "bg-secondary/10 text-secondary",
    delivered: "bg-green-100 text-green-800",
  }

  return (
    <div className="flex min-h-screen bg-background">
      <AdminSidebar />

      <div className="flex-1">
        <AdminHeader />

        <div className="p-8">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className={`bg-gradient-to-br ${stat.color} text-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow`}
              >
                <p className="text-white/90 text-sm mb-2">{stat.label}</p>
                <div className="flex items-end justify-between">
                  <p className="text-4xl font-black">{stat.value}</p>
                  <span className="text-4xl">{stat.icon}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Recent Orders */}
            <div className="lg:col-span-2 bg-card rounded-xl border border-border p-6 shadow-md">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-foreground">Recent Orders</h2>
                <Link href="/admin/orders">
                  <button className="text-primary font-semibold text-sm hover:text-primary/80 transition-colors">
                    View All
                  </button>
                </Link>
              </div>
              <div className="space-y-3">
                {recentOrders.map((order) => (
                  <div
                    key={order.id}
                    className="flex items-center justify-between p-4 bg-muted/30 rounded-lg hover:bg-muted transition-colors cursor-pointer border border-border/50"
                  >
                    <div className="flex-1">
                      <p className="font-semibold text-foreground">{order.id}</p>
                      <p className="text-sm text-muted-foreground">{order.customer}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <span
                        className={`text-xs font-semibold px-3 py-1 rounded-full ${statusColors[order.status as keyof typeof statusColors]}`}
                      >
                        {order.status.replace("-", " ").toUpperCase()}
                      </span>
                      <p className="font-bold text-foreground">{order.amount}</p>
                      <p className="text-xs text-muted-foreground">{order.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="space-y-6">
              <div className="bg-card rounded-xl border border-border p-6 shadow-md">
                <h3 className="font-bold text-foreground mb-4">Performance</h3>
                <div className="space-y-4 text-sm">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-muted-foreground">On-time Delivery</span>
                      <span className="font-semibold text-foreground">94%</span>
                    </div>
                    <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-primary" style={{ width: "94%" }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-muted-foreground">Customer Satisfaction</span>
                      <span className="font-semibold text-foreground">4.8/5</span>
                    </div>
                    <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-orange" style={{ width: "96%" }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-muted-foreground">Driver Utilization</span>
                      <span className="font-semibold text-foreground">87%</span>
                    </div>
                    <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-blend" style={{ width: "87%" }} />
                    </div>
                  </div>
                </div>
              </div>

              <Link href="/admin/orders">
                <button className="w-full px-6 py-3 bg-gradient-blend text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/30 transition-all transform hover:scale-105">
                  Manage Orders
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
