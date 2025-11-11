"use client"

import Link from "next/link"
import { useParams } from "next/navigation"
import { AdminSidebar } from "@/components/admin-sidebar"
import { AdminHeader } from "@/components/admin-header"
import { DeliveryMap } from "@/components/delivery-map"

export default function AdminOrderDetailPage() {
  const params = useParams()
  const orderId = params.id as string

  const order = {
    id: "ORD-001",
    customer: "John Doe",
    phone: "+1 (555) 123-4567",
    address: "123 Main Street, Apt 4B",
    items: [{ name: "Margherita Pizza", quantity: 1, price: 14.99 }],
    total: 24.99,
    status: "in-delivery" as const,
    driver: {
      id: "DRV-001",
      name: "Mike Johnson",
      phone: "+1 (555) 987-6543",
      rating: 4.9,
      vehicle: "Blue Toyota Camry",
      plate: "ABC123",
    },
    orderLocation: { lat: 3, lng: 2 },
    driverLocation: { lat: 2.5, lng: 2.2 },
  }

  return (
    <div className="flex min-h-screen bg-background">
      <AdminSidebar />

      <div className="flex-1">
        <AdminHeader />

        <div className="p-8">
          <Link href="/admin/orders">
            <button className="mb-6 text-primary font-semibold hover:underline">← Back to Orders</button>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Order Info */}
              <div className="bg-card rounded-xl border border-border p-6">
                <h2 className="text-2xl font-black mb-6">Order #{order.id.slice(-6)}</h2>

                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Customer</p>
                    <p className="font-semibold">{order.customer}</p>
                    <p className="text-sm text-muted-foreground">{order.phone}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Delivery Address</p>
                    <p className="font-semibold">{order.address}</p>
                  </div>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground mb-2">Items</p>
                  {order.items.map((item, idx) => (
                    <div key={idx} className="flex justify-between py-2 border-b border-border last:border-b-0">
                      <span>{item.name}</span>
                      <span className="font-semibold">${item.price.toFixed(2)}</span>
                    </div>
                  ))}
                  <div className="flex justify-between py-2 mt-2 font-bold text-lg">
                    <span>Total</span>
                    <span className="text-primary">${order.total.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              {/* Live Tracking */}
              <div className="bg-card rounded-xl border border-border p-6">
                <h3 className="text-xl font-bold mb-4">Live Tracking</h3>
                <DeliveryMap orderLocation={order.orderLocation} driverLocation={order.driverLocation} />
                <div className="mt-4 p-4 bg-muted/50 rounded-lg text-sm">
                  <p className="font-semibold mb-1">Distance: 2.3 km</p>
                  <p className="text-muted-foreground">Estimated arrival: 8 minutes</p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Driver Info */}
              <div className="bg-card rounded-xl border border-border p-6">
                <h3 className="text-lg font-bold mb-4">Assigned Driver</h3>
                <div className="text-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto text-3xl mb-3">
                    👤
                  </div>
                  <p className="font-bold">{order.driver.name}</p>
                  <div className="flex items-center justify-center gap-1 mt-1">
                    <span className="text-yellow-500">★</span>
                    <span className="text-sm font-semibold">{order.driver.rating}</span>
                  </div>
                </div>
                <div className="space-y-2 text-sm border-t border-border pt-4">
                  <p>
                    <span className="text-muted-foreground">Phone:</span>
                    <span className="font-semibold ml-2">{order.driver.phone}</span>
                  </p>
                  <p>
                    <span className="text-muted-foreground">Vehicle:</span>
                    <span className="font-semibold ml-2">{order.driver.vehicle}</span>
                  </p>
                  <p>
                    <span className="text-muted-foreground">Plate:</span>
                    <span className="font-semibold ml-2">{order.driver.plate}</span>
                  </p>
                </div>
                <button className="w-full mt-4 px-4 py-2 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-all text-sm">
                  Change Driver
                </button>
              </div>

              {/* Status Management */}
              <div className="bg-card rounded-xl border border-border p-6">
                <h3 className="text-lg font-bold mb-4">Status Management</h3>
                <div className="space-y-2">
                  {["Confirmed", "Ready for Delivery", "Out for Delivery", "Delivered"].map((s) => (
                    <button
                      key={s}
                      className="w-full px-4 py-2 text-sm border-2 border-border rounded-lg hover:border-primary/50 transition-all text-left"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-2">
                <button className="w-full px-4 py-2 bg-primary text-primary-foreground rounded-lg font-semibold text-sm hover:shadow-lg transition-all">
                  Contact Driver
                </button>
                <button className="w-full px-4 py-2 bg-secondary text-secondary-foreground rounded-lg font-semibold text-sm hover:shadow-lg transition-all">
                  Contact Customer
                </button>
                <button className="w-full px-4 py-2 border-2 border-destructive text-destructive rounded-lg font-semibold text-sm hover:bg-destructive/10 transition-all">
                  Cancel Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
