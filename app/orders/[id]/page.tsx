"use client"

import Link from "next/link"
import { useParams } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function OrderDetailPage() {
  const params = useParams()
  const orderId = params.id as string

  // Mock order details
  const order = {
    id: "ORD-001",
    date: "Today, 2:30 PM",
    total: 24.99,
    status: "in-delivery" as const,
    items: [{ name: "Margherita Pizza", quantity: 1, icon: "🍕", price: 14.99 }],
    service: "Food Delivery",
    estimatedDelivery: "3:15 PM",
    subtotal: 14.99,
    deliveryFee: 3.99,
    tax: 6.01,
    deliveryAddress: "123 Main Street, Apt 4B, New York, NY 10001",
    phone: "+1 (555) 123-4567",
    timeline: [
      { status: "Order Placed", time: "2:30 PM", completed: true },
      { status: "Confirmed", time: "2:35 PM", completed: true },
      { status: "Preparing", time: "2:40 PM", completed: true },
      { status: "On the Way", time: "2:50 PM", completed: true },
      { status: "Delivered", time: "3:15 PM", completed: false },
    ],
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation isScrolled={true} />

      <div className="pt-24 pb-12">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <Link href="/orders">
            <button className="mb-6 text-primary font-semibold hover:underline">← Back to Orders</button>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Order Header */}
              <div className="bg-card rounded-xl border border-border p-6">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h1 className="text-3xl font-black mb-2">Order #{order.id.slice(-6)}</h1>
                    <p className="text-muted-foreground">{order.date}</p>
                  </div>
                  <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full font-semibold capitalize">
                    🚚 {order.status.replace("-", " ")}
                  </span>
                </div>

                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Delivery Address</p>
                    <p className="font-semibold">{order.deliveryAddress}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Contact</p>
                    <p className="font-semibold">{order.phone}</p>
                  </div>
                </div>
              </div>

              {/* Order Items */}
              <div className="bg-card rounded-xl border border-border p-6">
                <h2 className="text-xl font-bold mb-4">Order Items</h2>
                {order.items.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 py-4 border-b border-border last:border-b-0">
                    <div className="text-4xl">{item.icon}</div>
                    <div className="flex-1">
                      <p className="font-semibold">{item.name}</p>
                      <p className="text-sm text-muted-foreground">Quantity: {item.quantity}</p>
                    </div>
                    <p className="font-bold text-lg">${item.price.toFixed(2)}</p>
                  </div>
                ))}
              </div>

              {/* Timeline */}
              <div className="bg-card rounded-xl border border-border p-6">
                <h2 className="text-xl font-bold mb-6">Delivery Timeline</h2>
                <div className="space-y-4">
                  {order.timeline.map((step, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div
                          className={`w-4 h-4 rounded-full ${
                            step.completed ? "bg-primary" : "bg-muted border-2 border-border"
                          }`}
                        />
                        {idx < order.timeline.length - 1 && (
                          <div className={`w-0.5 h-12 ${step.completed ? "bg-primary" : "bg-border"}`} />
                        )}
                      </div>
                      <div className="pb-4">
                        <p className={`font-semibold ${step.completed ? "text-foreground" : "text-muted-foreground"}`}>
                          {step.status}
                        </p>
                        <p
                          className={`text-sm ${step.completed ? "text-muted-foreground" : "text-muted-foreground/50"}`}
                        >
                          {step.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Order Summary */}
              <div className="bg-card rounded-xl border border-border p-6 sticky top-24">
                <h3 className="font-bold text-lg mb-4">Order Summary</h3>
                <div className="space-y-3 text-sm mb-4 pb-4 border-b border-border">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="font-medium">${order.subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Delivery Fee</span>
                    <span className="font-medium">${order.deliveryFee.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Tax</span>
                    <span className="font-medium">${order.tax.toFixed(2)}</span>
                  </div>
                </div>
                <div className="flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span className="text-primary">${order.total.toFixed(2)}</span>
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-2">
                <button className="w-full px-4 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg transition-all">
                  Track Live
                </button>
                <button className="w-full px-4 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-all">
                  Contact Seller
                </button>
                <button className="w-full px-4 py-3 border-2 border-border text-foreground rounded-lg font-semibold hover:border-primary/50 transition-all">
                  Rate Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
