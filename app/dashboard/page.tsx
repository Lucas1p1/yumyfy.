"use client"

import Link from "next/link"
import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { useAuth } from "@/hooks/use-auth"
import { UserProfileHeader } from "@/components/user-profile-header"

export default function DashboardPage() {
  const { user } = useAuth()
  const [activeTab, setActiveTab] = useState<"overview" | "profile" | "addresses" | "payments">("overview")

  // Mock data
  const recentOrders = [
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
  ]

  const savedAddresses = [
    {
      id: "addr-1",
      label: "Home",
      address: "123 Main Street, Apt 4B, New York, NY 10001",
      isDefault: true,
    },
    {
      id: "addr-2",
      label: "Work",
      address: "456 Business Ave, Suite 200, New York, NY 10002",
      isDefault: false,
    },
  ]

  const paymentMethods = [
    {
      id: "pay-1",
      type: "card",
      label: "Visa ending in 4242",
      lastFour: "4242",
      isDefault: true,
    },
    {
      id: "pay-2",
      type: "wallet",
      label: "Digital Wallet",
      isDefault: false,
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation isScrolled={true} />

      <div className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <UserProfileHeader />

          {/* Tabs */}
          <div className="flex gap-4 mb-8 border-b border-border overflow-x-auto">
            {["overview", "profile", "addresses", "payments"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as any)}
                className={`px-4 py-3 font-semibold border-b-2 transition-all capitalize whitespace-nowrap ${
                  activeTab === tab
                    ? "border-primary text-primary"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Overview Tab */}
          {activeTab === "overview" && (
            <div className="space-y-8">
              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-card rounded-xl border border-border p-6">
                  <p className="text-muted-foreground text-sm mb-2">Total Orders</p>
                  <p className="text-4xl font-black text-primary">24</p>
                </div>
                <div className="bg-card rounded-xl border border-border p-6">
                  <p className="text-muted-foreground text-sm mb-2">Total Spent</p>
                  <p className="text-4xl font-black text-primary">$487.50</p>
                </div>
                <div className="bg-card rounded-xl border border-border p-6">
                  <p className="text-muted-foreground text-sm mb-2">Loyalty Points</p>
                  <p className="text-4xl font-black text-primary">2,450</p>
                </div>
              </div>

              {/* Recent Orders */}
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-black">Recent Orders</h2>
                  <Link href="/orders">
                    <button className="text-primary font-semibold hover:underline">View All</button>
                  </Link>
                </div>
                <div className="space-y-4">
                  {recentOrders.map((order) => (
                    <Link key={order.id} href={`/orders/${order.id}`}>
                      <div className="bg-card rounded-xl border border-border p-4 hover:border-primary/50 hover:shadow-lg transition-all cursor-pointer">
                        <div className="flex items-center justify-between flex-wrap gap-4">
                          <div className="flex-1 min-w-0">
                            <p className="text-sm text-muted-foreground">{order.date}</p>
                            <h3 className="font-bold text-lg">Order #{order.id.slice(-6)}</h3>
                            <p className="text-sm text-muted-foreground mt-1">{order.service}</p>
                          </div>
                          <div className="text-right">
                            <p className="font-bold text-lg text-primary">${order.total.toFixed(2)}</p>
                            <span
                              className={`text-xs font-semibold px-2 py-1 rounded-full inline-block mt-1 ${
                                order.status === "delivered"
                                  ? "bg-green-100 text-green-800"
                                  : order.status === "in-delivery"
                                    ? "bg-purple-100 text-purple-800"
                                    : "bg-blue-100 text-blue-800"
                              }`}
                            >
                              {order.status.replace("-", " ").toUpperCase()}
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Profile Tab */}
          {activeTab === "profile" && (
            <div className="bg-card rounded-xl border border-border p-8 max-w-2xl">
              <h2 className="text-2xl font-black mb-6">Edit Profile</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Full Name</label>
                  <input
                    type="text"
                    defaultValue={user?.name}
                    className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    defaultValue={user?.email}
                    className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Phone</label>
                  <input
                    type="tel"
                    defaultValue={user?.phone}
                    className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg transition-all mt-6"
                >
                  Save Changes
                </button>
              </form>
            </div>
          )}

          {/* Addresses Tab */}
          {activeTab === "addresses" && (
            <div className="space-y-4">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-black">Saved Addresses</h2>
                <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg font-semibold text-sm hover:shadow-lg transition-all">
                  Add Address
                </button>
              </div>
              {savedAddresses.map((addr) => (
                <div key={addr.id} className="bg-card rounded-xl border border-border p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-bold text-lg mb-2">{addr.label}</h3>
                      <p className="text-muted-foreground">{addr.address}</p>
                    </div>
                    <div className="flex gap-2">
                      {addr.isDefault && (
                        <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                          Default
                        </span>
                      )}
                      <button className="text-primary text-sm font-semibold hover:underline">Edit</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Payments Tab */}
          {activeTab === "payments" && (
            <div className="space-y-4">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-black">Payment Methods</h2>
                <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg font-semibold text-sm hover:shadow-lg transition-all">
                  Add Payment
                </button>
              </div>
              {paymentMethods.map((method) => (
                <div key={method.id} className="bg-card rounded-xl border border-border p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-bold text-lg mb-1">
                        {method.type === "card" ? "💳" : "📱"} {method.label}
                      </h3>
                      {method.type === "card" && (
                        <p className="text-muted-foreground text-sm">Ending in {method.lastFour}</p>
                      )}
                    </div>
                    <div className="flex gap-2">
                      {method.isDefault && (
                        <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                          Default
                        </span>
                      )}
                      <button className="text-primary text-sm font-semibold hover:underline">Edit</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  )
}
