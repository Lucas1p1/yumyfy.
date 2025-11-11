"use client"
import { useState } from "react"

interface Product {
  id: string
  name: string
  price: number
  image: string
  rating: number
  reviews: number
  category: string
  icon: string
}

interface ProductGridProps {
  products: Product[]
  onAddToCart?: (product: Product) => void
}

export function ProductGrid({ products, onAddToCart }: ProductGridProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map((product) => (
        <div
          key={product.id}
          className="group relative bg-card rounded-xl border border-border overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
          onMouseEnter={() => setHoveredId(product.id)}
          onMouseLeave={() => setHoveredId(null)}
        >
          {/* Image Container */}
          <div className="relative w-full h-40 bg-muted flex items-center justify-center overflow-hidden">
            <span className="text-6xl">{product.icon}</span>
            {hoveredId === product.id && (
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <button
                  onClick={() => onAddToCart?.(product)}
                  className="px-4 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg transition-all"
                >
                  Add to Cart
                </button>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-4 space-y-3">
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wide">{product.category}</p>
              <h3 className="font-bold text-sm line-clamp-2 mt-1">{product.name}</h3>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-1">
              <span className="text-yellow-500">★</span>
              <span className="text-xs font-semibold">{product.rating}</span>
              <span className="text-xs text-muted-foreground">({product.reviews})</span>
            </div>

            {/* Price */}
            <div className="flex items-center justify-between pt-2 border-t border-border">
              <span className="font-bold text-lg">${product.price.toFixed(2)}</span>
              <button
                onClick={() => onAddToCart?.(product)}
                className="md:hidden px-3 py-1 bg-primary text-primary-foreground rounded-lg text-xs font-semibold"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
