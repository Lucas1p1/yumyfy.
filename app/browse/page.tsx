"use client"

import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { useState } from "react"

const categories = [
  {
    id: "groceries",
    name: "Groceries & Fresh Produce",
    description: "Premium quality groceries delivered fresh to your door",
    icon: "🛒",
    color: "from-emerald-500 to-green-600",
    products: 245,
    href: "/groceries",
  },
  {
    id: "pharmacy",
    name: "Pharmacy & Health",
    description: "Quality medicines and wellness products at your fingertips",
    icon: "💊",
    color: "from-blue-500 to-cyan-600",
    products: 189,
    href: "/pharmacy",
  },
  {
    id: "food",
    name: "Food Delivery",
    description: "Delicious meals from your favorite restaurants delivered hot",
    icon: "🍕",
    color: "from-orange-500 to-red-600",
    products: 156,
    href: "/food",
  },
  {
    id: "parcels",
    name: "Parcel Delivery",
    description: "Fast and reliable parcel services for all your shipping needs",
    icon: "📦",
    color: "from-purple-500 to-pink-600",
    products: 89,
    href: "/parcels",
  },
]

export default function BrowsePage() {
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-background">
      <Navigation isScrolled={true} />

      <div className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-black mb-4">Browse All Categories</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore all our services and find exactly what you're looking for
            </p>
          </div>

          {/* Featured Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {categories.map((category) => (
              <Link key={category.id} href={category.href}>
                <div
                  className={`group relative p-8 rounded-2xl cursor-pointer transition-all duration-300 overflow-hidden
                    ${hoveredId === category.id ? "shadow-2xl scale-105" : "shadow-lg"}
                    bg-card border border-border hover:border-primary/50`}
                  onMouseEnter={() => setHoveredId(category.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  {/* Gradient background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  />

                  <div className="relative space-y-4">
                    <div className="text-6xl">{category.icon}</div>

                    <h2 className="text-2xl font-bold text-card-foreground group-hover:text-primary transition-colors">
                      {category.name}
                    </h2>

                    <p className="text-card-foreground/70 group-hover:text-card-foreground transition-colors">
                      {category.description}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <span className="text-sm text-muted-foreground">{category.products} products</span>
                      <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                        <span>Explore</span>
                        <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
                      </div>
                    </div>
                  </div>

                  {/* Animated corner accent */}
                  <div
                    className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${category.color} rounded-full opacity-0 group-hover:opacity-20 blur-xl transition-all duration-300`}
                  />
                </div>
              </Link>
            ))}
          </div>

          {/* Popular Searches */}
          <div className="bg-card rounded-2xl p-8 border border-border">
            <h2 className="text-2xl font-bold mb-6">Popular Searches</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {[
                "Organic Bananas",
                "Vitamin C",
                "Pizza",
                "Express Delivery",
                "Fresh Vegetables",
                "Pain Relief",
                "Biryani",
                "Same-Day Delivery",
              ].map((search) => (
                <Link key={search} href={`/search?q=${encodeURIComponent(search)}`}>
                  <button className="w-full px-4 py-2 text-sm font-medium border border-border rounded-lg hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all">
                    {search}
                  </button>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
