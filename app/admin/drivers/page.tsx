"use client"

import { AdminSidebar } from "@/components/admin-sidebar"
import { AdminHeader } from "@/components/admin-header"

export default function AdminDriversPage() {
  const drivers = [
    {
      id: "DRV-001",
      name: "Mike Johnson",
      phone: "+234 800 123 4567",
      rating: 4.9,
      status: "on-duty",
      trips: 24,
      earnings: "$890",
    },
    {
      id: "DRV-002",
      name: "Sarah Lee",
      phone: "+234 801 234 5678",
      rating: 4.8,
      status: "on-duty",
      trips: 19,
      earnings: "$720",
    },
    {
      id: "DRV-003",
      name: "Tom Davis",
      phone: "+234 802 345 6789",
      rating: 4.7,
      status: "off-duty",
      trips: 15,
      earnings: "$580",
    },
    {
      id: "DRV-004",
      name: "Emma Wilson",
      phone: "+234 803 456 7890",
      rating: 4.9,
      status: "on-duty",
      trips: 28,
      earnings: "$950",
    },
  ]

  const statusColors = {
    "on-duty": "bg-green-100 text-green-800",
    "off-duty": "bg-muted text-muted-foreground",
  }

  return (
    <div className="flex min-h-screen bg-background">
      <AdminSidebar />

      <div className="flex-1">
        <AdminHeader />

        <div className="p-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-black">Drivers</h1>
            <button className="px-6 py-2 bg-gradient-blend text-white rounded-lg font-semibold text-sm hover:shadow-lg hover:shadow-primary/30 transition-all transform hover:scale-105">
              Add Driver
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {drivers.map((driver) => (
              <div
                key={driver.id}
                className="bg-card rounded-xl border border-border p-6 card-hover shadow-md hover:shadow-lg"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-xl text-white font-bold">
                      👤
                    </div>
                    <div>
                      <p className="font-bold">{driver.name}</p>
                      <p className="text-xs text-muted-foreground">{driver.id}</p>
                    </div>
                  </div>
                  <span
                    className={`text-xs font-semibold px-2 py-1 rounded-full ${statusColors[driver.status as keyof typeof statusColors]}`}
                  >
                    {driver.status.replace("-", " ").toUpperCase()}
                  </span>
                </div>

                <div className="space-y-2 text-sm mb-4 pb-4 border-b border-border">
                  <p>
                    <span className="text-muted-foreground">Phone:</span>
                    <span className="font-semibold ml-2">{driver.phone}</span>
                  </p>
                  <p>
                    <span className="text-muted-foreground">Rating:</span>
                    <span className="font-semibold ml-2 flex items-center gap-1">
                      <span className="text-yellow-500">★</span>
                      {driver.rating}
                    </span>
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-2 mb-4 text-sm">
                  <div className="bg-muted/50 p-2 rounded">
                    <p className="text-muted-foreground text-xs">Trips Today</p>
                    <p className="font-bold">{driver.trips}</p>
                  </div>
                  <div className="bg-muted/50 p-2 rounded">
                    <p className="text-muted-foreground text-xs">Earnings</p>
                    <p className="font-bold text-primary">{driver.earnings}</p>
                  </div>
                </div>

                <button className="w-full px-3 py-2 bg-gradient-primary text-white rounded-lg font-semibold text-xs hover:shadow-lg transition-all transform hover:scale-105">
                  Manage
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
