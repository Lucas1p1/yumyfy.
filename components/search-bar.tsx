"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"

interface SearchResult {
  id: string
  name: string
  category: string
  price?: number
  icon: string
  type: "product" | "category"
}

interface SearchBarProps {
  onSearch?: (query: string) => void
  showSuggestions?: boolean
}

const allProducts = [
  // Groceries
  { id: "g1", name: "Organic Bananas", category: "Groceries", price: 3.99, icon: "🍌", type: "product" as const },
  { id: "g2", name: "Fresh Spinach", category: "Groceries", price: 2.49, icon: "🥬", type: "product" as const },
  { id: "g3", name: "Cherry Tomatoes", category: "Groceries", price: 3.49, icon: "🍅", type: "product" as const },
  // Pharmacy
  { id: "p1", name: "Vitamin C Tablets", category: "Pharmacy", price: 12.99, icon: "💊", type: "product" as const },
  { id: "p2", name: "Allergy Tablets", category: "Pharmacy", price: 10.99, icon: "💊", type: "product" as const },
  // Food
  { id: "f1", name: "Margherita Pizza", category: "Food", price: 14.99, icon: "🍕", type: "product" as const },
  { id: "f2", name: "Chicken Biryani", category: "Food", price: 12.99, icon: "🍚", type: "product" as const },
  // Parcels
  { id: "pr1", name: "Express Delivery", category: "Parcels", price: 4.99, icon: "⚡", type: "product" as const },
  // Categories
  { id: "cat-g", name: "Groceries & Food", category: "Categories", icon: "🛒", type: "category" as const },
  { id: "cat-p", name: "Pharmacy & Health", category: "Categories", icon: "💊", type: "category" as const },
  { id: "cat-f", name: "Food Delivery", category: "Categories", icon: "🍕", type: "category" as const },
  { id: "cat-pr", name: "Parcel Delivery", category: "Categories", icon: "📦", type: "category" as const },
]

export function SearchBar({ onSearch, showSuggestions = true }: SearchBarProps) {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<SearchResult[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setQuery(value)

    if (value.trim()) {
      const filtered = allProducts.filter(
        (p) =>
          p.name.toLowerCase().includes(value.toLowerCase()) || p.category.toLowerCase().includes(value.toLowerCase()),
      )
      setResults(filtered.slice(0, 6))
      setIsOpen(true)
    } else {
      setResults([])
      setIsOpen(false)
    }

    onSearch?.(value)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(query)}`
    }
  }

  return (
    <div ref={containerRef} className="relative w-full max-w-md">
      <form onSubmit={handleSubmit} className="relative">
        <input
          type="text"
          value={query}
          onChange={handleSearch}
          onFocus={() => query && setIsOpen(true)}
          placeholder="Search products, services..."
          className="w-full px-4 py-3 pr-10 bg-white/80 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition-all"
        />
        <button
          type="submit"
          className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary transition-colors"
        >
          🔍
        </button>
      </form>

      {/* Suggestions Dropdown */}
      {isOpen && results.length > 0 && showSuggestions && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-card border border-border rounded-xl shadow-lg overflow-hidden z-50">
          <div className="max-h-96 overflow-y-auto">
            {results.map((result) => (
              <Link
                key={result.id}
                href={
                  result.type === "category"
                    ? `/${result.id === "cat-g" ? "groceries" : result.id === "cat-p" ? "pharmacy" : result.id === "cat-f" ? "food" : "parcels"}`
                    : `/search?q=${encodeURIComponent(query)}`
                }
              >
                <div className="px-4 py-3 hover:bg-muted transition-colors flex items-center gap-3 cursor-pointer border-b border-border last:border-b-0">
                  <span className="text-xl">{result.icon}</span>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm truncate">{result.name}</p>
                    <p className="text-xs text-muted-foreground">{result.category}</p>
                  </div>
                  {result.price && <p className="font-semibold text-sm">${result.price.toFixed(2)}</p>}
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
