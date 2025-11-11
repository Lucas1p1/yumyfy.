"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Logo } from "@/components/logo"
import { ThemeToggle } from "@/components/theme-toggle"

export default function SignUpPage() {
  const [userType, setUserType] = useState<"customer" | "vendor" | "rider" | null>(null)
  const [step, setStep] = useState(1)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      alert("Sign up successful! Welcome to Yumyfy!")
    }, 2000)
  }

  if (!userType) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 dark:from-black dark:via-black dark:to-orange/10 flex items-center justify-center p-4">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-orange/10 dark:bg-orange/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 dark:bg-orange/30 rounded-full blur-3xl" />
        </div>

        <div className="absolute top-6 right-6 z-10">
          <ThemeToggle />
        </div>

        <div className="relative w-full max-w-5xl">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6 scale-150 origin-center">
              <Logo />
            </div>
            <h1 className="text-5xl font-black text-primary dark:text-orange mb-3">Join Yumyfy</h1>
            <p className="text-xl text-muted-foreground font-medium">Choose how you want to grow with us</p>
          </div>

          {/* User Type Selection */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Customer */}
            <button
              onClick={() => {
                setUserType("customer")
                setStep(1)
              }}
              className="group p-8 bg-card dark:bg-black rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-primary dark:hover:border-orange dark:border-orange/20"
            >
              <div className="relative w-full h-32 mb-4 rounded-lg overflow-hidden">
                <img src="/images/customer-shopping.jpg" alt="Customer" className="object-cover w-full h-full" />
              </div>
              <h3 className="text-2xl font-bold text-primary dark:text-orange mb-2">Customer</h3>
              <p className="text-sm text-muted-foreground mb-4">Shop for groceries, food, pharmacy, and parcels</p>
              <ul className="text-xs text-foreground/70 space-y-1">
                <li>✓ Fast delivery</li>
                <li>✓ Best prices</li>
                <li>✓ Real-time tracking</li>
              </ul>
            </button>

            {/* Vendor */}
            <button
              onClick={() => {
                setUserType("vendor")
                setStep(1)
              }}
              className="group p-8 bg-card dark:bg-black rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-orange dark:border-orange/20"
            >
              <div className="relative w-full h-32 mb-4 rounded-lg overflow-hidden">
                <img src="/images/vendor-shop.jpg" alt="Vendor" className="object-cover w-full h-full" />
              </div>
              <h3 className="text-2xl font-bold text-orange mb-2">Vendor</h3>
              <p className="text-sm text-muted-foreground mb-4">Sell your products to thousands of customers</p>
              <ul className="text-xs text-foreground/70 space-y-1">
                <li>✓ Grow business</li>
                <li>✓ Real-time analytics</li>
                <li>✓ Easy payments</li>
              </ul>
            </button>

            {/* Delivery Rider */}
            <button
              onClick={() => {
                setUserType("rider")
                setStep(1)
              }}
              className="group p-8 bg-card dark:bg-black rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-primary dark:hover:border-orange dark:border-orange/20"
            >
              <div className="relative w-full h-32 mb-4 rounded-lg overflow-hidden">
                <img src="/images/delivery-rider.jpg" alt="Delivery Rider" className="object-cover w-full h-full" />
              </div>
              <h3 className="text-2xl font-bold text-primary dark:text-orange mb-2">Delivery Rider</h3>
              <p className="text-sm text-muted-foreground mb-4">Earn money delivering orders in your city</p>
              <ul className="text-xs text-foreground/70 space-y-1">
                <li>✓ Flexible hours</li>
                <li>✓ Guaranteed earnings</li>
                <li>✓ Support 24/7</li>
              </ul>
            </button>
          </div>

          {/* Sign In Link */}
          <p className="text-center text-sm text-foreground mt-8">
            Already have an account?{" "}
            <Link href="/signin" className="font-bold text-primary dark:text-orange hover:text-primary/80">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    )
  }

  if (userType === "customer") {
    return (
      <CustomerSignUp
        step={step}
        setStep={setStep}
        loading={loading}
        onSubmit={handleSubmit}
        onBack={() => setUserType(null)}
      />
    )
  }

  if (userType === "vendor") {
    return (
      <VendorSignUp
        step={step}
        setStep={setStep}
        loading={loading}
        onSubmit={handleSubmit}
        onBack={() => setUserType(null)}
      />
    )
  }

  return (
    <RiderSignUp
      step={step}
      setStep={setStep}
      loading={loading}
      onSubmit={handleSubmit}
      onBack={() => setUserType(null)}
    />
  )
}

function CustomerSignUp({ step, setStep, loading, onSubmit, onBack }: any) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    address: "",
    city: "",
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 dark:from-black dark:via-black dark:to-orange/10 flex items-center justify-center p-4">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-orange/10 dark:bg-orange/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 dark:bg-orange/30 rounded-full blur-3xl" />
      </div>

      <div className="relative w-full max-w-md">
        <div className="bg-card dark:bg-black rounded-2xl shadow-xl p-8 dark:border dark:border-orange/20">
          <button
            onClick={onBack}
            className="mb-6 flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-base"
          >
            ←
          </button>

          <h1 className="text-3xl font-black text-primary dark:text-orange mb-2">Create Account</h1>
          <p className="text-base text-muted-foreground mb-6 font-medium">Customer Account • Step {step} of 2</p>

          {/* Progress Bar */}
          <div className="w-full bg-muted dark:bg-orange/10 rounded-full h-2 mb-8">
            <div
              className="bg-gradient-blend h-2 rounded-full transition-all duration-300"
              style={{ width: `${(step / 2) * 100}%` }}
            />
          </div>

          <form onSubmit={onSubmit} className="space-y-5">
            {step === 1 ? (
              <>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Full Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-4 py-3 bg-muted dark:bg-orange/10 border border-border dark:border-orange/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-orange dark:text-white"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Email Address</label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-muted dark:bg-orange/10 border border-border dark:border-orange/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-orange dark:text-white"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+234 800 000 0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-muted dark:bg-orange/10 border border-border dark:border-orange/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-orange dark:text-white"
                    required
                  />
                </div>
              </>
            ) : (
              <>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Password</label>
                  <input
                    type="password"
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="w-full px-4 py-3 bg-muted dark:bg-orange/10 border border-border dark:border-orange/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-orange dark:text-white"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Address</label>
                  <input
                    type="text"
                    placeholder="123 Main Street"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full px-4 py-3 bg-muted dark:bg-orange/10 border border-border dark:border-orange/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-orange dark:text-white"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">City</label>
                  <input
                    type="text"
                    placeholder="Lagos"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-4 py-3 bg-muted dark:bg-orange/10 border border-border dark:border-orange/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-orange dark:text-white"
                    required
                  />
                </div>
              </>
            )}

            <div className="flex gap-4 pt-6">
              {step === 2 && (
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="flex-1 py-3 bg-muted dark:bg-orange/10 text-foreground dark:text-orange font-bold rounded-lg hover:bg-border dark:hover:bg-orange/20 transition-colors"
                >
                  Previous
                </button>
              )}
              <button
                type={step === 1 ? "button" : "submit"}
                onClick={() => step === 1 && setStep(2)}
                disabled={loading}
                className="flex-1 py-3 bg-gradient-blend text-white font-bold rounded-lg hover:shadow-lg hover:shadow-primary/30 transition-all disabled:opacity-70"
              >
                {loading ? "Creating Account..." : step === 1 ? "Continue" : "Create Account"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

function VendorSignUp({ step, setStep, loading, onSubmit, onBack }: any) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-orange/5 dark:from-black dark:via-black dark:to-orange/10 flex items-center justify-center p-4">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-orange/10 dark:bg-orange/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 dark:bg-orange/30 rounded-full blur-3xl" />
      </div>

      <div className="relative w-full max-w-md">
        <div className="bg-card dark:bg-black rounded-2xl shadow-xl p-8 border border-orange/20 dark:border-orange/30">
          <button
            onClick={onBack}
            className="mb-6 flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-base"
          >
            ←
          </button>

          <h1 className="text-3xl font-black text-orange mb-2">Become a Vendor</h1>
          <p className="text-base text-muted-foreground mb-6 font-medium">Vendor Account • Step {step} of 3</p>

          {/* Progress Bar */}
          <div className="w-full bg-muted dark:bg-orange/10 rounded-full h-2 mb-8">
            <div
              className="bg-gradient-orange h-2 rounded-full transition-all duration-300"
              style={{ width: `${(step / 3) * 100}%` }}
            />
          </div>

          <form onSubmit={onSubmit} className="space-y-5">
            {step === 1 ? (
              <>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Business Name</label>
                  <input
                    type="text"
                    placeholder="Your Store Name"
                    className="w-full px-4 py-3 bg-muted dark:bg-orange/10 border border-border dark:border-orange/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange dark:text-white"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Business Type</label>
                  <select className="w-full px-4 py-3 bg-muted dark:bg-orange/10 border border-border dark:border-orange/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange dark:text-white">
                    <option>Grocery Store</option>
                    <option>Restaurant</option>
                    <option>Pharmacy</option>
                    <option>Other</option>
                  </select>
                </div>
              </>
            ) : step === 2 ? (
              <>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Email Address</label>
                  <input
                    type="email"
                    placeholder="business@example.com"
                    className="w-full px-4 py-3 bg-muted dark:bg-orange/10 border border-border dark:border-orange/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange dark:text-white"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+234 800 000 0000"
                    className="w-full px-4 py-3 bg-muted dark:bg-orange/10 border border-border dark:border-orange/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange dark:text-white"
                    required
                  />
                </div>
              </>
            ) : (
              <>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Bank Account Number</label>
                  <input
                    type="text"
                    placeholder="0123456789"
                    className="w-full px-4 py-3 bg-muted dark:bg-orange/10 border border-border dark:border-orange/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange dark:text-white"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Password</label>
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full px-4 py-3 bg-muted dark:bg-orange/10 border border-border dark:border-orange/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange dark:text-white"
                    required
                  />
                </div>
              </>
            )}

            <div className="flex gap-4 pt-6">
              {step > 1 && (
                <button
                  type="button"
                  onClick={() => setStep(step - 1)}
                  className="flex-1 py-3 bg-muted dark:bg-orange/10 text-foreground dark:text-orange font-bold rounded-lg hover:bg-border dark:hover:bg-orange/20 transition-colors"
                >
                  Previous
                </button>
              )}
              <button
                type={step === 3 ? "submit" : "button"}
                onClick={() => step < 3 && setStep(step + 1)}
                disabled={loading}
                className="flex-1 py-3 bg-gradient-orange text-white font-bold rounded-lg hover:shadow-lg transition-all disabled:opacity-70"
              >
                {loading ? "Creating Account..." : step === 3 ? "Create Account" : "Continue"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

function RiderSignUp({ step, setStep, loading, onSubmit, onBack }: any) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 dark:from-black dark:via-black dark:to-orange/10 flex items-center justify-center p-4">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-orange/10 dark:bg-orange/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 dark:bg-orange/30 rounded-full blur-3xl" />
      </div>

      <div className="relative w-full max-w-md">
        <div className="bg-card dark:bg-black rounded-2xl shadow-xl p-8 dark:border dark:border-orange/20">
          <button
            onClick={onBack}
            className="mb-6 flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-base"
          >
            ←
          </button>

          <h1 className="text-3xl font-black text-primary dark:text-orange mb-2">Join as Rider</h1>
          <p className="text-base text-muted-foreground mb-6 font-medium">Delivery Rider Account • Step {step} of 3</p>

          {/* Progress Bar */}
          <div className="w-full bg-muted dark:bg-orange/10 rounded-full h-2 mb-8">
            <div
              className="bg-gradient-blend h-2 rounded-full transition-all duration-300"
              style={{ width: `${(step / 3) * 100}%` }}
            />
          </div>

          <form onSubmit={onSubmit} className="space-y-5">
            {step === 1 ? (
              <>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Full Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 bg-muted dark:bg-orange/10 border border-border dark:border-orange/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-orange dark:text-white"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Driver's License</label>
                  <input
                    type="text"
                    placeholder="License Number"
                    className="w-full px-4 py-3 bg-muted dark:bg-orange/10 border border-border dark:border-orange/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-orange dark:text-white"
                    required
                  />
                </div>
              </>
            ) : step === 2 ? (
              <>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Vehicle Type</label>
                  <select className="w-full px-4 py-3 bg-muted dark:bg-orange/10 border border-border dark:border-orange/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-orange dark:text-white">
                    <option>Motorcycle</option>
                    <option>Bicycle</option>
                    <option>Car</option>
                    <option>Van</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Vehicle Registration</label>
                  <input
                    type="text"
                    placeholder="Registration Number"
                    className="w-full px-4 py-3 bg-muted dark:bg-orange/10 border border-border dark:border-orange/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-orange dark:text-white"
                    required
                  />
                </div>
              </>
            ) : (
              <>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Email Address</label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 bg-muted dark:bg-orange/10 border border-border dark:border-orange/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-orange dark:text-white"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Password</label>
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full px-4 py-3 bg-muted dark:bg-orange/10 border border-border dark:border-orange/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-orange dark:text-white"
                    required
                  />
                </div>
              </>
            )}

            <div className="flex gap-4 pt-6">
              {step > 1 && (
                <button
                  type="button"
                  onClick={() => setStep(step - 1)}
                  className="flex-1 py-3 bg-muted dark:bg-orange/10 text-foreground dark:text-orange font-bold rounded-lg hover:bg-border dark:hover:bg-orange/20 transition-colors"
                >
                  Previous
                </button>
              )}
              <button
                type={step === 3 ? "submit" : "button"}
                onClick={() => step < 3 && setStep(step + 1)}
                disabled={loading}
                className="flex-1 py-3 bg-gradient-blend text-white font-bold rounded-lg hover:shadow-lg transition-all disabled:opacity-70"
              >
                {loading ? "Creating Account..." : step === 3 ? "Create Account" : "Continue"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
