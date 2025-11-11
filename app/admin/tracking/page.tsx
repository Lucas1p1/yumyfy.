"use client"

import { useState } from "react"
import { AdminSidebar } from "@/components/admin-sidebar"
import { AdminHeader } from "@/components/admin-header"
import { LiveTrackingMap } from "@/components/live-tracking-map"

export default function AdminTrackingPage() {
  const [selectedOrder, setSelectedOrder] = useState("ORD-001")

  const activeDeliveries = [
    {
      id: "ORD-001",
      customer: "John Doe",
      driver: "Mike Johnson",
      status: "in-delivery",
      distance: "2.3 km away",
      eta: "8 mins",
      itemCount: 3,
      driverLocation: { lat: 6.5244, lng: 3.3792 },
      deliveryLocation: { lat: 6.5289, lng: 3.3849 },
    },
    {
      id: "ORD-002",
      customer: "Jane Smith",
      driver: "Sarah Lee",
      status: "confirmed",
      distance: "5.1 km away",
      eta: "15 mins",
      itemCount: 2,
      driverLocation: { lat: 6.51, lng: 3.37 },
      deliveryLocation: { lat: 6.525, lng: 3.39 },
    },
    {
      id: "ORD-003",
      customer: "Bob Wilson",
      driver: "Tom Davis",
      status: "in-delivery",
      distance: "1.8 km away",
      eta: "5 mins",
      itemCount: 4,
      driverLocation: { lat: 6.535, lng: 3.365 },
      deliveryLocation: { lat: 6.53, lng: 3.39 },
    },
  ]

  const selectedDelivery = activeDeliveries.find((d) => d.id === selectedOrder)

  return (
    <div className="flex min-h-screen bg-background">
      <AdminSidebar />

      <div className="flex-1">
        <AdminHeader />

        <div className="p-8">
          <h1 className="text-3xl font-black text-foreground mb-6">Live Delivery Tracking</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Map */}
            <div className="lg:col-span-2 bg-card rounded-xl border border-border overflow-hidden shadow-lg h-96 lg:h-full">
              <LiveTrackingMap delivery={selectedDelivery} />
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Active Deliveries List */}
              <div className="bg-card rounded-xl border border-border p-6 shadow-md">
                <h3 className="font-bold text-foreground mb-4">Active Deliveries ({activeDeliveries.length})</h3>
                <div className="space-y-3">
                  {activeDeliveries.map((delivery) => (
                    <button
                      key={delivery.id}
                      onClick={() => setSelectedOrder(delivery.id)}
                      className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                        selectedOrder === delivery.id
                          ? "border-primary bg-primary/5"
                          : "border-border bg-muted/30 hover:border-primary/50"
                      }`}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <p className="font-semibold text-foreground">{delivery.id}</p>
                        <span className="text-xs font-bold px-2 py-1 rounded-full bg-secondary/20 text-secondary">
                          {delivery.status.replace("-", " ").toUpperCase()}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-1">{delivery.customer}</p>
                      <p className="text-xs text-muted-foreground">Driver: {delivery.driver}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Delivery Details */}
              {selectedDelivery && (
                <div className="bg-card rounded-xl border border-border p-6 shadow-md space-y-4">
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Order ID</p>
                    <p className="font-bold text-foreground">{selectedDelivery.id}</p>
                  </div>

                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Driver</p>
                    <p className="font-bold text-foreground">{selectedDelivery.driver}</p>
                  </div>

                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Distance</p>
                    <p className="font-bold text-foreground">{selectedDelivery.distance}</p>
                  </div>

                  <div>
                    <p className="text-xs text-muted-foreground mb-1">ETA</p>
                    <p className="font-bold text-secondary text-lg">{selectedDelivery.eta}</p>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <p className="text-xs text-muted-foreground mb-2">Items ({selectedDelivery.itemCount})</p>
                    <div className="space-y-2">
                      {Array.from({ length: selectedDelivery.itemCount }).map((_, i) => (
                        <div key={i} className="flex justify-between text-sm p-2 bg-muted/30 rounded">
                          <span className="text-foreground">Item {i + 1}</span>
                          <span className="text-muted-foreground">1x</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 space-y-2 flex gap-2">
                    <button className="flex-1 px-4 py-2 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors text-sm">
                      Contact Driver
                    </button>
                    <button className="flex-1 px-4 py-2 bg-muted text-foreground rounded-lg font-semibold hover:bg-border transition-colors text-sm">
                      Update Status
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
