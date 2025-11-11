"use client"

import Link from "next/link"
import { useCart } from "@/hooks/use-cart"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CartItemCard } from "@/components/cart-item-card"
import { OrderSummary } from "@/components/order-summary"

export default function CartPage() {
  const { items, total, removeItem, updateQuantity, clearCart } = useCart()

  const subtotal = total
  const deliveryFee = 3.99
  const finalTotal = subtotal + deliveryFee

  return (
    <div className="min-h-screen bg-background">
      <Navigation isScrolled={true} />

      <div className="pt-24 pb-12">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h1 className="text-4xl font-black mb-8">Shopping Cart</h1>

          {items.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-6">
                <div className="bg-card rounded-xl border border-border p-6">
                  <div className="flex justify-between items-center mb-6">
                    <p className="text-muted-foreground">{items.length} item(s) in cart</p>
                    <button
                      onClick={clearCart}
                      className="text-sm text-muted-foreground hover:text-destructive transition-colors"
                    >
                      Clear Cart
                    </button>
                  </div>

                  {items.map((item) => (
                    <CartItemCard key={item.id} item={item} onUpdateQuantity={updateQuantity} onRemove={removeItem} />
                  ))}
                </div>

                {/* Continue Shopping */}
                <Link href="/browse">
                  <button className="w-full px-6 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-all">
                    Continue Shopping
                  </button>
                </Link>
              </div>

              {/* Summary & Checkout */}
              <div className="lg:col-span-1 space-y-6">
                <OrderSummary subtotal={subtotal} deliveryFee={deliveryFee} total={finalTotal} />

                <Link href="/checkout">
                  <button className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg transition-all">
                    Proceed to Checkout
                  </button>
                </Link>

                {/* Promo Code */}
                <div className="bg-card rounded-xl border border-border p-4 space-y-3">
                  <label className="text-sm font-semibold block">Promo Code</label>
                  <input
                    type="text"
                    placeholder="Enter promo code"
                    className="w-full px-3 py-2 bg-background border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <button className="w-full px-3 py-2 bg-secondary text-secondary-foreground rounded-lg font-semibold text-sm hover:shadow-md transition-all">
                    Apply Code
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🛒</div>
              <h2 className="text-2xl font-bold mb-2">Your cart is empty</h2>
              <p className="text-muted-foreground mb-8">Add items to get started</p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Link href="/groceries">
                  <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg transition-all">
                    Shop Groceries
                  </button>
                </Link>
                <Link href="/browse">
                  <button className="px-6 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-all">
                    Browse All
                  </button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  )
}
