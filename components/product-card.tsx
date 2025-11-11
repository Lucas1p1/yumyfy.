"use client"
import { useState } from "react"

interface Product {
  id: number
  name: string
  price: string
  image: string
  category: string
}

export function ProductCard({ product }: { product: Product }) {
  const [isAdded, setIsAdded] = useState(false)

  const handleAddToCart = () => {
    setIsAdded(true)
    setTimeout(() => setIsAdded(false), 1500)
  }

  return (
    <div className="group relative bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl hover:border-primary/50 transition-all duration-300 flex flex-col">
      {/* Image */}
      <div className="relative h-48 w-full overflow-hidden bg-muted">
        <img
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <span className="absolute top-3 right-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
          {product.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-4 flex-grow flex flex-col">
        <h4 className="font-semibold text-card-foreground line-clamp-2 mb-2">{product.name}</h4>

        <div className="mt-auto flex items-center justify-between">
          <span className="text-2xl font-bold text-primary">{product.price}</span>

          <button
            onClick={handleAddToCart}
            className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300
              ${isAdded ? "bg-emerald-500 text-white" : "bg-primary text-primary-foreground hover:shadow-lg"}`}
          >
            {isAdded ? "✓ Added" : "+"}
          </button>
        </div>
      </div>
    </div>
  )
}
