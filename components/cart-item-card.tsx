"use client"

import type { CartItem } from "@/hooks/use-cart"

interface CartItemCardProps {
  item: CartItem
  onUpdateQuantity: (id: string, quantity: number) => void
  onRemove: (id: string) => void
}

export function CartItemCard({ item, onUpdateQuantity, onRemove }: CartItemCardProps) {
  return (
    <div className="flex gap-4 py-4 border-b border-border last:border-b-0">
      {/* Product Icon */}
      <div className="w-20 h-20 bg-muted rounded-lg flex items-center justify-center flex-shrink-0 text-4xl">
        {item.icon}
      </div>

      {/* Product Details */}
      <div className="flex-1">
        <h3 className="font-semibold text-sm md:text-base mb-1">{item.name}</h3>
        <p className="text-xs text-muted-foreground mb-3">{item.service}</p>

        {/* Quantity Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
            className="w-7 h-7 rounded border border-border hover:bg-muted transition-colors flex items-center justify-center"
          >
            −
          </button>
          <span className="w-8 text-center font-semibold text-sm">{item.quantity}</span>
          <button
            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
            className="w-7 h-7 rounded border border-border hover:bg-muted transition-colors flex items-center justify-center"
          >
            +
          </button>
        </div>
      </div>

      {/* Price & Remove */}
      <div className="flex flex-col items-end justify-between">
        <p className="font-bold text-base md:text-lg">${(item.price * item.quantity).toFixed(2)}</p>
        <button
          onClick={() => onRemove(item.id)}
          className="text-xs text-destructive hover:text-destructive/80 font-medium transition-colors"
        >
          Remove
        </button>
      </div>
    </div>
  )
}
