"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useCart } from "@/hooks/use-cart"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { OrderSummary } from "@/components/order-summary"

interface DeliveryInfo {
  fullName: string
  email: string
  phone: string
  address: string
  city: string
  zip: string
  instructions: string
}

interface PaymentInfo {
  method: "card" | "wallet" | "upi"
  cardNumber?: string
  expiryDate?: string
  cvv?: string
}

export default function CheckoutPage() {
  const { items, total, clearCart } = useCart()
  const [step, setStep] = useState<"delivery" | "payment" | "confirmation">("delivery")
  const [deliveryInfo, setDeliveryInfo] = useState<DeliveryInfo>({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zip: "",
    instructions: "",
  })
  const [paymentInfo, setPaymentInfo] = useState<PaymentInfo>({
    method: "card",
  })
  const [isProcessing, setIsProcessing] = useState(false)

  const subtotal = total
  const deliveryFee = 3.99
  const finalTotal = subtotal + deliveryFee

  const handleDeliveryChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setDeliveryInfo((prev) => ({ ...prev, [name]: value }))
  }

  const handleDeliverySubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (deliveryInfo.fullName && deliveryInfo.email && deliveryInfo.phone && deliveryInfo.address) {
      setStep("payment")
    }
  }

  const handlePaymentSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)
    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsProcessing(false)
    setStep("confirmation")
    clearCart()
  }

  if (items.length === 0 && step !== "confirmation") {
    return (
      <div className="min-h-screen bg-background">
        <Navigation isScrolled={true} />
        <div className="pt-24 pb-12">
          <div className="max-w-6xl mx-auto px-4 md:px-8 text-center py-20">
            <h1 className="text-3xl font-bold mb-4">Your cart is empty</h1>
            <Link href="/browse">
              <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold">
                Continue Shopping
              </button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation isScrolled={true} />

      <div className="pt-24 pb-12">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h1 className="text-4xl font-black mb-8">Checkout</h1>

          {step === "confirmation" ? (
            /* Order Confirmation */
            <div className="text-center py-16">
              <div className="text-7xl mb-6">✓</div>
              <h2 className="text-3xl font-bold mb-2">Order Confirmed!</h2>
              <p className="text-muted-foreground text-lg mb-8">
                Your order has been placed successfully. A confirmation email has been sent to {deliveryInfo.email}
              </p>

              <div className="bg-card rounded-xl border border-border p-8 max-w-md mx-auto mb-8 text-left">
                <h3 className="font-bold text-lg mb-4">Order Details</h3>
                <div className="space-y-2 text-sm mb-4 pb-4 border-b border-border">
                  <p>
                    <span className="text-muted-foreground">Order ID:</span>
                    <span className="font-semibold ml-2">
                      #ORD-{Math.random().toString(36).substr(2, 9).toUpperCase()}
                    </span>
                  </p>
                  <p>
                    <span className="text-muted-foreground">Delivery to:</span>
                    <span className="font-semibold ml-2">{deliveryInfo.fullName}</span>
                  </p>
                  <p>
                    <span className="text-muted-foreground">Estimated Delivery:</span>
                    <span className="font-semibold ml-2">30-45 minutes</span>
                  </p>
                </div>
                <p className="text-2xl font-bold text-primary">Total: ${finalTotal.toFixed(2)}</p>
              </div>

              <div className="flex gap-4 justify-center">
                <Link href="/orders">
                  <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold">
                    View Orders
                  </button>
                </Link>
                <Link href="/">
                  <button className="px-6 py-3 border-2 border-primary text-primary rounded-lg font-semibold">
                    Back to Home
                  </button>
                </Link>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-6">
                {/* Steps Indicator */}
                <div className="flex gap-4 mb-8">
                  <div
                    className={`flex-1 py-3 text-center rounded-lg font-semibold transition-all ${
                      step === "delivery"
                        ? "bg-primary text-primary-foreground"
                        : "bg-card border border-border text-muted-foreground"
                    }`}
                  >
                    1. Delivery
                  </div>
                  <div
                    className={`flex-1 py-3 text-center rounded-lg font-semibold transition-all ${
                      step === "payment"
                        ? "bg-primary text-primary-foreground"
                        : "bg-card border border-border text-muted-foreground"
                    }`}
                  >
                    2. Payment
                  </div>
                </div>

                {/* Delivery Step */}
                {step === "delivery" && (
                  <form
                    onSubmit={handleDeliverySubmit}
                    className="bg-card rounded-xl border border-border p-6 space-y-4"
                  >
                    <h2 className="text-2xl font-bold mb-6">Delivery Address</h2>

                    <div>
                      <label className="block text-sm font-semibold mb-2">Full Name</label>
                      <input
                        type="text"
                        name="fullName"
                        value={deliveryInfo.fullName}
                        onChange={handleDeliveryChange}
                        placeholder="John Doe"
                        required
                        className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold mb-2">Email</label>
                        <input
                          type="email"
                          name="email"
                          value={deliveryInfo.email}
                          onChange={handleDeliveryChange}
                          placeholder="john@example.com"
                          required
                          className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold mb-2">Phone</label>
                        <input
                          type="tel"
                          name="phone"
                          value={deliveryInfo.phone}
                          onChange={handleDeliveryChange}
                          placeholder="+1 (555) 000-0000"
                          required
                          className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2">Address</label>
                      <input
                        type="text"
                        name="address"
                        value={deliveryInfo.address}
                        onChange={handleDeliveryChange}
                        placeholder="123 Main Street, Apt 4B"
                        required
                        className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold mb-2">City</label>
                        <input
                          type="text"
                          name="city"
                          value={deliveryInfo.city}
                          onChange={handleDeliveryChange}
                          placeholder="New York"
                          required
                          className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold mb-2">ZIP Code</label>
                        <input
                          type="text"
                          name="zip"
                          value={deliveryInfo.zip}
                          onChange={handleDeliveryChange}
                          placeholder="10001"
                          required
                          className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2">Delivery Instructions (Optional)</label>
                      <textarea
                        name="instructions"
                        value={deliveryInfo.instructions}
                        onChange={handleDeliveryChange}
                        placeholder="Ring doorbell twice..."
                        rows={3}
                        className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg transition-all"
                    >
                      Continue to Payment
                    </button>
                  </form>
                )}

                {/* Payment Step */}
                {step === "payment" && (
                  <form
                    onSubmit={handlePaymentSubmit}
                    className="bg-card rounded-xl border border-border p-6 space-y-6"
                  >
                    <h2 className="text-2xl font-bold">Payment Method</h2>

                    {/* Payment Method Selection */}
                    <div className="space-y-3">
                      {["card", "wallet", "upi"].map((method) => (
                        <label
                          key={method}
                          className={`block p-4 rounded-lg border-2 cursor-pointer transition-all ${
                            paymentInfo.method === method
                              ? "border-primary bg-primary/5"
                              : "border-border hover:border-primary/50"
                          }`}
                        >
                          <input
                            type="radio"
                            name="method"
                            value={method}
                            checked={paymentInfo.method === (method as any)}
                            onChange={(e) =>
                              setPaymentInfo({ ...paymentInfo, method: e.target.value as "card" | "wallet" | "upi" })
                            }
                            className="mr-3"
                          />
                          <span className="font-semibold capitalize">
                            {method === "card" ? "Credit/Debit Card" : method === "wallet" ? "Digital Wallet" : "UPI"}
                          </span>
                        </label>
                      ))}
                    </div>

                    {/* Card Details */}
                    {paymentInfo.method === "card" && (
                      <div className="space-y-4 p-4 bg-muted/30 rounded-lg">
                        <div>
                          <label className="block text-sm font-semibold mb-2">Card Number</label>
                          <input
                            type="text"
                            placeholder="4532 1234 5678 9010"
                            className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-semibold mb-2">Expiry Date</label>
                            <input
                              type="text"
                              placeholder="MM/YY"
                              className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-semibold mb-2">CVV</label>
                            <input
                              type="text"
                              placeholder="123"
                              className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="flex gap-4">
                      <button
                        type="button"
                        onClick={() => setStep("delivery")}
                        className="flex-1 px-6 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-all"
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        disabled={isProcessing}
                        className="flex-1 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isProcessing ? "Processing..." : `Pay $${finalTotal.toFixed(2)}`}
                      </button>
                    </div>
                  </form>
                )}
              </div>

              {/* Order Summary Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 space-y-6">
                  <OrderSummary subtotal={subtotal} deliveryFee={deliveryFee} total={finalTotal} />

                  {/* Order Items */}
                  <div className="bg-card rounded-xl border border-border p-4 space-y-3">
                    <h3 className="font-bold">Items</h3>
                    {items.map((item) => (
                      <div key={item.id} className="flex justify-between text-sm">
                        <span>
                          {item.icon} {item.name} x{item.quantity}
                        </span>
                        <span className="font-semibold">${(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  )
}
