"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { Logo } from "@/components/logo"
import { ThemeToggle } from "@/components/theme-toggle"
import { Chrome, Facebook } from "lucide-react"

export default function SignInPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      alert("Sign in successful!")
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-background text-foreground dark:bg-black flex items-center justify-center relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl dark:bg-orange-500/10" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange/5 rounded-full blur-3xl dark:bg-orange-500/10" />
      </div>

      {/* Theme Toggle */}
      <div className="absolute top-6 right-6 z-10">
        <ThemeToggle />
      </div>

      {/* Sign In Card */}
      <div className="relative w-full max-w-md mx-auto px-4 py-8">
        <div className="bg-card dark:bg-gray-900 rounded-2xl shadow-xl p-8 border border-border dark:border-orange-500/30">
          <div className="flex justify-center mb-8">
            <div className="scale-150 origin-center">
              <Logo />
            </div>
          </div>

          <h1 className="text-4xl font-black text-center mb-2 text-primary dark:text-orange-400">
            Welcome Back
          </h1>
          <p className="text-center text-muted-foreground dark:text-gray-400 mb-8 text-lg">
            Sign in to your Yumyfy account
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-foreground dark:text-white mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full px-4 py-3 bg-muted dark:bg-gray-800 border border-border dark:border-orange-500/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-orange-400 focus:border-transparent transition-all text-foreground dark:text-white"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-semibold text-foreground dark:text-white mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-4 py-3 bg-muted dark:bg-gray-800 border border-border dark:border-orange-500/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-orange-400 focus:border-transparent transition-all text-foreground dark:text-white"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground dark:text-gray-400 dark:hover:text-gray-200"
                >
                  {showPassword ? "🙈" : "👁️"}
                </button>
              </div>
            </div>

            {/* Remember & Forgot */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-border dark:border-orange-500/30 accent-primary dark:accent-orange-400"
                />
                <span className="text-sm text-foreground dark:text-gray-300">Remember me</span>
              </label>
              <Link
                href="#"
                className="text-sm font-semibold text-primary dark:text-orange-400 hover:text-primary/80 dark:hover:text-orange-300 transition-colors"
              >
                Forgot password?
              </Link>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-gradient-blend dark:bg-orange-500 text-white dark:text-black font-bold rounded-lg hover:shadow-lg hover:shadow-primary/30 dark:hover:shadow-orange-500/30 transition-all duration-300 transform hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="w-5 h-5 border-2 border-white dark:border-black border-t-transparent rounded-full animate-spin" />
                  Signing in...
                </span>
              ) : (
                "Sign In"
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border dark:border-orange-500/20" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-card dark:bg-gray-900 text-muted-foreground dark:text-gray-400">
                Or continue with
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/* Google Button */}
            <button className="py-3 bg-muted dark:bg-gray-800 hover:bg-border dark:hover:bg-gray-700 rounded-lg font-semibold text-foreground dark:text-white transition-colors flex items-center justify-center gap-2 border border-border dark:border-orange-500/20">
              <Chrome size={20} />
              Google
            </button>
            {/* Facebook Button */}
            <button className="py-3 bg-muted dark:bg-gray-800 hover:bg-border dark:hover:bg-gray-700 rounded-lg font-semibold text-foreground dark:text-white transition-colors flex items-center justify-center gap-2 border border-border dark:border-orange-500/20">
              <Facebook size={20} />
              Facebook
            </button>
          </div>

          {/* Sign Up Link */}
          <p className="text-center text-sm text-foreground dark:text-gray-300 mt-8">
            Don't have an account?{" "}
            <Link
              href="/signup"
              className="font-bold text-primary dark:text-orange-400 hover:text-primary/80 dark:hover:text-orange-300"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
