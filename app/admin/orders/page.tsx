"use client"

import Link from "next/link"
import { useState } from "react"
import { AdminSidebar } from "@/components/admin-sidebar"
import { AdminHeader } from "@/components/admin-header"

export default function AdminOrdersPage() {
  const [filterStatus, setFilterStatus] = useState("all")

  const allOrders = [
    {
      id: "ORD-001",
      customer: "John Doe",
      items: "Pizza x1",
      amount: "$24.99",
      status: "in-delivery",
      driver: "Mike Johnson",
      time: "2 min ago",
    },
    {
      id: "ORD-002",
      customer: "Jane Smith",
      items: "Bananas x2",
      amount: "$15.49",
      status: "pending",
      driver: "Unassigned",
      time: "5 min ago",
    },
    {
      id: "ORD-003",
      customer: "Bob Wilson",
      items: "Salmon x1",
      amount: "$32.50",
      status: "confirmed",
      driver: "Sarah Lee",
      time: "8 min ago",
    },
    {
      id: "ORD-004",
      customer: "Alice Brown",
      items: "Vitamins x1",
      amount: "$18.99",
      status: "in-delivery",
      driver: "Tom Davis",
      time: "12 min ago",
    },
    {
      id: "ORD-005",
      customer: "Charlie Green",
      items: "Biryani x2",
      amount: "$28.50",
      status: "delivered",
      driver: "Mike Johnson",
      time: "20 min ago",
    },
  ]

  const filteredOrders = filterStatus === "all" ? allOrders : allOrders.filter((o) => o.status === filterStatus)

  const statusColors = {
    pending: "bg-yellow-100 text-yellow-800",
    confirmed: "bg-blue-100 text-blue-800",
    "in-delivery": "bg-purple-100 text-purple-800",
    delivered: "bg-green-100 text-green-800",
  }

  return (
    <div className="flex min-h-screen bg-background">
      <AdminSidebar />

      <div className="flex-1">
        <AdminHeader />

        <div className="p-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-black">Orders</h1>
            <div className="flex gap-2">
              <select className="px-4 py-2 bg-card border border-border rounded-lg">
                <option>Last 7 days</option>
                <option>Last 30 days</option>
                <option>All time</option>
              </select>
            </div>
          </div>

          {/* Filters */}
          <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
            {["all", "pending", "confirmed", "in-delivery", "delivered"].map((status) => (
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

          {/* Table */}
          <div className="bg-card rounded-xl border border-border overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted border-b border-border">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-bold">Order ID</th>
                    <th className="px-6 py-4 text-left text-sm font-bold">Customer</th>
                    <th className="px-6 py-4 text-left text-sm font-bold">Items</th>
                    <th className="px-6 py-4 text-left text-sm font-bold">Amount</th>
                    <th className="px-6 py-4 text-left text-sm font-bold">Driver</th>
                    <th className="px-6 py-4 text-left text-sm font-bold">Status</th>
                    <th className="px-6 py-4 text-left text-sm font-bold">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredOrders.map((order) => (
                    <tr key={order.id} className="border-b border-border hover:bg-muted/50 transition-colors">
                      <td className="px-6 py-4 font-semibold">{order.id}</td>
                      <td className="px-6 py-4">{order.customer}</td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">{order.items}</td>
                      <td className="px-6 py-4 font-bold">{order.amount}</td>
                      <td className="px-6 py-4 text-sm">{order.driver}</td>
                      <td className="px-6 py-4">
                        <span
                          className={`text-xs font-semibold px-2 py-1 rounded-full ${statusColors[order.status as keyof typeof statusColors]}`}
                        >
                          {order.status.replace("-", " ").toUpperCase()}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <Link href={`/admin/orders/${order.id}`}>
                          <button className="text-primary font-semibold text-sm hover:underline">View</button>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
