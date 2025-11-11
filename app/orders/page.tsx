"use client"

import Link from "next/link"
import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { OrderCard } from "@/components/order-card"

export default function OrdersPage() {
  const [filterStatus, setFilterStatus] = useState<string>("all")

  // Mock order data
  const allOrders = [
    {
      id: "ORD-001",
      date: "Today, 2:30 PM",
      total: 24.99,
      status: "in-delivery" as const,
      items: [{ name: "Margherita Pizza", quantity: 1, icon: "🍕" }],
      service: "Food Delivery",
      estimatedDelivery: "3:15 PM",
    },
    {
      id: "ORD-002",
      date: "Yesterday, 10:45 AM",
      total: 15.49,
      status: "delivered" as const,
      items: [{ name: "Organic Bananas", quantity: 2, icon: "🍌" }],
      service: "Groceries",
      estimatedDelivery: "11:20 AM",
    },
    {
      id: "ORD-003",
      date: "2 days ago, 4:20 PM",
      total: 18.99,
      status: "delivered" as const,
      items: [{ name: "Vitamin C Tablets", quantity: 1, icon: "💊" }],
      service: "Pharmacy",
      estimatedDelivery: "5:00 PM",
    },
    {
      id: "ORD-004",
      date: "3 days ago, 7:10 PM",
      total: 32.5,
      status: "delivered" as const,
      items: [{ name: "Grilled Salmon", quantity: 1, icon: "🐟" }],
      service: "Food Delivery",
      estimatedDelivery: "7:45 PM",
    },
    {
      id: "ORD-005",
      date: "5 days ago, 9:00 AM",
      total: 9.99,
      status: "cancelled" as const,
      items: [{ name: "Express Delivery", quantity: 1, icon: "⚡" }],
      service: "Parcels",
    },
  ]

  const filteredOrders = filterStatus === "all" ? allOrders : allOrders.filter((o) => o.status === filterStatus)

  return (
    <div className="min-h-screen bg-background">
      <Navigation isScrolled={true} />

      <div className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="mb-8">
            <h1 className="text-4xl font-black mb-2">Your Orders</h1>
            <p className="text-muted-foreground">Track and manage all your orders</p>
          </div>

          {/* Filter Buttons */}
          <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
            {["all", "pending", "confirmed", "in-delivery", "delivered", "cancelled"].map((status) => (
              <button
                key={status}
                onClick={() => setFilterStatus(status)}
                className={`px-4 py-2 rounded-full font-semibold whitespace-nowrap transition-all ${
                  filterStatus === status
                    ? "bg-primary text-primary-foreground"
                    : "bg-card border border-border hover:border-primary/50"
                }`}
              >
                {status.charAt(0).toUpperCase() + status.slice(1).replace("-", " ")}
              </button>
            ))}
          </div>

          {/* Orders Grid */}
          {filteredOrders.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredOrders.map((order) => (
                <OrderCard key={order.id} order={order} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">📦</div>
              <h2 className="text-2xl font-bold mb-2">No orders found</h2>
              <p className="text-muted-foreground mb-8">Start shopping to see your orders here</p>
              <Link href="/browse">
                <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold">
                  Browse Products
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  )
}
