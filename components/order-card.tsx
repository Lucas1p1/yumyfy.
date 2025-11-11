"use client"

import Link from "next/link"

export interface Order {
  id: string
  date: string
  total: number
  status: "pending" | "confirmed" | "in-delivery" | "delivered" | "cancelled"
  items: Array<{ name: string; quantity: number; icon: string }>
  service: string
  estimatedDelivery?: string
}

interface OrderCardProps {
  order: Order
}

const statusColors = {
  pending: "bg-yellow-100 text-yellow-800",
  confirmed: "bg-blue-100 text-blue-800",
  "in-delivery": "bg-purple-100 text-purple-800",
  delivered: "bg-green-100 text-green-800",
  cancelled: "bg-red-100 text-red-800",
}

const statusIcons = {
  pending: "⏳",
  confirmed: "✓",
  "in-delivery": "🚚",
  delivered: "✓✓",
  cancelled: "✕",
}

export function OrderCard({ order }: OrderCardProps) {
  return (
    <Link href={`/orders/${order.id}`}>
      <div className="bg-card rounded-xl border border-border p-6 hover:border-primary/50 hover:shadow-lg transition-all cursor-pointer">
        <div className="flex items-start justify-between mb-4">
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-wide">{order.service}</p>
            <h3 className="font-bold text-lg">Order #{order.id.slice(-6).toUpperCase()}</h3>
          </div>
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 ${statusColors[order.status]}`}
          >
            <span>{statusIcons[order.status]}</span>
            <span className="capitalize">{order.status.replace("-", " ")}</span>
          </span>
        </div>

        <div className="space-y-2 mb-4 pb-4 border-b border-border">
          <p className="text-sm text-muted-foreground">{order.date}</p>
          <div className="flex gap-2 flex-wrap">
            {order.items.map((item, idx) => (
              <span key={idx} className="text-sm bg-muted/50 px-2 py-1 rounded">
                {item.icon} {item.name} x{item.quantity}
              </span>
            ))}
          </div>
        </div>

        <div className="flex justify-between items-center">
          <p className="text-muted-foreground text-sm">
            {order.estimatedDelivery && `Est. Delivery: ${order.estimatedDelivery}`}
          </p>
          <p className="font-bold text-lg text-primary">${order.total.toFixed(2)}</p>
        </div>
      </div>
    </Link>
  )
}
