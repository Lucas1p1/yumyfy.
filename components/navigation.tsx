"use client"

import Link from "next/link"
import { useState } from "react"
import { Logo } from "./logo"
import { ThemeToggle } from "./theme-toggle"

export function Navigation({ isScrolled }: { isScrolled: boolean }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-lg dark:bg-black/95" : "bg-background dark:bg-black"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between gap-4">
        <Link href="/" className="flex-shrink-0">
          <Logo />
        </Link>

        {/* Search Bar */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="#services" className="hover:text-primary transition-colors">
            Services
          </Link>
          <Link href="#" className="hover:text-primary transition-colors">
            About
          </Link>
          <Link href="#" className="hover:text-primary transition-colors">
            Support
          </Link>
          <Link href="/signin">
            <button className="px-6 py-2 text-primary font-semibold hover:bg-primary/10 rounded-lg transition-colors">
              Sign In
            </button>
          </Link>
          <Link href="/signup">
            <button className="px-6 py-2 bg-gradient-blend text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/30 transition-all transform hover:scale-105">
              Sign Up
            </button>
          </Link>
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          <button onClick={() => setIsOpen(!isOpen)} className="text-2xl">
            {isOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md dark:bg-black/95 p-4 space-y-4 md:hidden animate-slide-up">
            {/* Mobile Search Bar */}
            <Link href="#services" className="block hover:text-primary transition-colors">
              Services
            </Link>
            <Link href="#" className="block hover:text-primary transition-colors">
              About
            </Link>
            <Link href="#" className="block hover:text-primary transition-colors">
              Support
            </Link>
            <Link href="/signin">
              <button className="w-full px-6 py-2 text-primary font-semibold hover:bg-primary/10 rounded-lg transition-colors">
                Sign In
              </button>
            </Link>
            <Link href="/signup">
              <button className="w-full px-6 py-2 bg-gradient-blend text-white font-semibold rounded-lg">
                Sign Up
              </button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
