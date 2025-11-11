"use client"

import { Suspense, useState, useMemo } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { SortDropdown } from "@/components/sort-dropdown"

// Comprehensive product database
const allProducts = [
  // Groceries
  {
    id: "g1",
    name: "Organic Bananas",
    price: 3.99,
    rating: 4.8,
    reviews: 245,
    category: "Groceries",
    icon: "🍌",
    service: "groceries",
  },
  {
    id: "g2",
    name: "Fresh Spinach",
    price: 2.49,
    rating: 4.6,
    reviews: 189,
    category: "Groceries",
    icon: "🥬",
    service: "groceries",
  },
  {
    id: "g3",
    name: "Whole Wheat Bread",
    price: 4.99,
    rating: 4.7,
    reviews: 312,
    category: "Groceries",
    icon: "🍞",
    service: "groceries",
  },
  {
    id: "g4",
    name: "Almond Milk",
    price: 5.49,
    rating: 4.5,
    reviews: 156,
    category: "Groceries",
    icon: "🥛",
    service: "groceries",
  },
  {
    id: "g5",
    name: "Cherry Tomatoes",
    price: 3.49,
    rating: 4.9,
    reviews: 423,
    category: "Groceries",
    icon: "🍅",
    service: "groceries",
  },
  // Pharmacy
  {
    id: "p1",
    name: "Vitamin C Tablets",
    price: 12.99,
    rating: 4.8,
    reviews: 534,
    category: "Pharmacy",
    icon: "💊",
    service: "pharmacy",
  },
  {
    id: "p2",
    name: "Pain Relief Gel",
    price: 8.99,
    rating: 4.7,
    reviews: 289,
    category: "Pharmacy",
    icon: "🧴",
    service: "pharmacy",
  },
  {
    id: "p3",
    name: "Face Sunscreen SPF 50",
    price: 15.99,
    rating: 4.9,
    reviews: 445,
    category: "Pharmacy",
    icon: "🧴",
    service: "pharmacy",
  },
  {
    id: "p4",
    name: "Allergy Tablets",
    price: 10.99,
    rating: 4.6,
    reviews: 198,
    category: "Pharmacy",
    icon: "💊",
    service: "pharmacy",
  },
  // Food
  {
    id: "f1",
    name: "Margherita Pizza",
    price: 14.99,
    rating: 4.8,
    reviews: 634,
    category: "Food",
    icon: "🍕",
    service: "food",
  },
  {
    id: "f2",
    name: "Caesar Salad",
    price: 9.99,
    rating: 4.6,
    reviews: 289,
    category: "Food",
    icon: "🥗",
    service: "food",
  },
  {
    id: "f3",
    name: "Grilled Salmon",
    price: 19.99,
    rating: 4.9,
    reviews: 445,
    category: "Food",
    icon: "🐟",
    service: "food",
  },
  {
    id: "f4",
    name: "Chicken Biryani",
    price: 12.99,
    rating: 4.7,
    reviews: 512,
    category: "Food",
    icon: "🍚",
    service: "food",
  },
  // Parcels
  {
    id: "pr1",
    name: "Express Delivery",
    price: 4.99,
    rating: 4.8,
    reviews: 834,
    category: "Parcels",
    icon: "⚡",
    service: "parcels",
  },
  {
    id: "pr2",
    name: "Standard Delivery",
    price: 2.99,
    rating: 4.7,
    reviews: 1245,
    category: "Parcels",
    icon: "📦",
    service: "parcels",
  },
]

function SearchContent() {
  const searchParams = useSearchParams()
  const query = searchParams.get("q") || ""
  const [sortBy, setSortBy] = useState("relevant")

  const sortOptions = [
    { label: "Most Relevant", value: "relevant" },
    { label: "Price: Low to High", value: "price-asc" },
    { label: "Price: High to Low", value: "price-desc" },
    { label: "Highest Rated", value: "rating" },
    { label: "Most Popular", value: "popular" },
  ]

  const filteredProducts = useMemo(() => {
    if (!query.trim()) return allProducts

    const results = allProducts.filter(
      (p) =>
        p.name.toLowerCase().includes(query.toLowerCase()) || p.category.toLowerCase().includes(query.toLowerCase()),
    )

    // Sort results
    if (sortBy === "price-asc") {
      results.sort((a, b) => a.price - b.price)
    } else if (sortBy === "price-desc") {
      results.sort((a, b) => b.price - a.price)
    } else if (sortBy === "rating") {
      results.sort((a, b) => b.rating - a.rating)
    } else if (sortBy === "popular") {
      results.sort((a, b) => b.reviews - a.reviews)
    }

    return results
  }, [query, sortBy])

  return (
    <div className="min-h-screen bg-background">
      <Navigation isScrolled={true} />

      <div className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-black mb-2">Search Results</h1>
            <p className="text-lg text-muted-foreground">
              Found <span className="font-bold text-primary">{filteredProducts.length}</span> result
              {filteredProducts.length !== 1 ? "s" : ""} for "<span className="font-semibold">{query}</span>"
            </p>
          </div>

          {filteredProducts.length > 0 ? (
            <>
              {/* Sort Controls */}
              <div className="mb-8 flex justify-between items-center flex-wrap gap-4">
                <p className="text-sm text-muted-foreground">Showing {filteredProducts.length} products</p>
                <SortDropdown options={sortOptions} onSort={setSortBy} />
              </div>

              {/* Results Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredProducts.map((product) => (
                  <Link key={product.id} href={`/${product.service}`}>
                    <div className="group relative bg-card rounded-xl border border-border overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg h-full">
                      {/* Image */}
                      <div className="w-full h-40 bg-muted flex items-center justify-center">
                        <span className="text-6xl">{product.icon}</span>
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
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h2 className="text-2xl font-bold mb-2">No results found</h2>
              <p className="text-muted-foreground mb-8">
                Try searching for different keywords or browse our categories
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Link href="/groceries">
                  <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg transition-all">
                    Browse Groceries
                  </button>
                </Link>
                <Link href="/pharmacy">
                  <button className="px-6 py-2 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:shadow-lg transition-all">
                    Browse Pharmacy
                  </button>
                </Link>
                <Link href="/food">
                  <button className="px-6 py-2 bg-accent text-accent-foreground rounded-lg font-semibold hover:shadow-lg transition-all">
                    Browse Food
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

export default function SearchPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-background flex items-center justify-center">
          <div className="text-center">
            <div className="text-4xl mb-4">Loading...</div>
          </div>
        </div>
      }
    >
      <SearchContent />
    </Suspense>
  )
}
