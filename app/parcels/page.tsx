"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CategoryHeader } from "@/components/category-header"
import { CategoryFilters } from "@/components/category-filters"
import { SortDropdown } from "@/components/sort-dropdown"
import { ProductGrid } from "@/components/product-grid"

const products = [
  {
    id: "1",
    name: "Express Delivery",
    price: 4.99,
    image: "/images/express-delivery.jpg",
    rating: 4.8,
    reviews: 834,
    category: "Speed",
    icon: "⚡",
  },
  {
    id: "2",
    name: "Standard Delivery",
    price: 2.99,
    image: "/images/standard-delivery.jpg",
    rating: 4.7,
    reviews: 1245,
    category: "Standard",
    icon: "📦",
  },
  {
    id: "3",
    name: "Scheduled Delivery",
    price: 3.99,
    image: "/images/scheduled-delivery.jpg",
    rating: 4.6,
    reviews: 567,
    category: "Scheduled",
    icon: "📅",
  },
  {
    id: "4",
    name: "Fragile Package Service",
    price: 7.99,
    image: "/images/fragile-package.jpg",
    rating: 4.9,
    reviews: 423,
    category: "Special",
    icon: "⚠️",
  },
  {
    id: "5",
    name: "Same-Day Delivery",
    price: 9.99,
    image: "/images/same-day-delivery.jpg",
    rating: 4.8,
    reviews: 678,
    category: "Speed",
    icon: "🚀",
  },
  {
    id: "6",
    name: "Signature Required",
    price: 5.99,
    image: "/images/signature-required.jpg",
    rating: 4.7,
    reviews: 334,
    category: "Security",
    icon: "✍️",
  },
  {
    id: "7",
    name: "Insured Delivery",
    price: 12.99,
    image: "/images/insured-delivery.jpg",
    rating: 4.9,
    reviews: 445,
    category: "Security",
    icon: "🛡️",
  },
  {
    id: "8",
    name: "White Glove Service",
    price: 24.99,
    image: "/images/white-glove-service.jpg",
    rating: 4.9,
    reviews: 267,
    category: "Premium",
    icon: "👔",
  },
]

const filters = [
  { label: "Delivery Type", options: ["Speed", "Standard", "Scheduled", "Special", "Security", "Premium"] },
  { label: "Price Range", options: ["Under $5", "$5-$10", "$10-$20", "Over $20"] },
  { label: "Rating", options: ["4.8+", "4.5+", "4.0+", "All Ratings"] },
]

const sortOptions = [
  { label: "Recommended", value: "recommended" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Highest Rated", value: "rating" },
  { label: "Fastest Delivery", value: "fastest" },
]

export default function ParcelsPage() {
  const [filteredProducts, setFilteredProducts] = useState(products)
  const [sortBy, setSortBy] = useState("recommended")

  const handleAddToCart = (product: (typeof products)[0]) => {
    console.log("Added to cart:", product)
  }

  const handleFilterChange = () => {
    // Filter logic would go here
  }

  const handleSort = (value: string) => {
    setSortBy(value)
    const sorted = [...filteredProducts]

    if (value === "price-asc") {
      sorted.sort((a, b) => a.price - b.price)
    } else if (value === "price-desc") {
      sorted.sort((a, b) => b.price - a.price)
    } else if (value === "rating") {
      sorted.sort((a, b) => b.rating - a.rating)
    }

    setFilteredProducts(sorted)
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation isScrolled={true} />

      <div className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <CategoryHeader
            icon="📦"
            title="Parcel Delivery"
            description="Fast and reliable parcel services for all your shipping needs"
            color="from-purple-500 to-pink-600"
          />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <h3 className="font-bold text-lg">Refine Search</h3>
                <CategoryFilters filters={filters} onFilterChange={handleFilterChange} />
              </div>
            </div>

            {/* Products */}
            <div className="lg:col-span-3 space-y-6">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <p className="text-sm text-muted-foreground">{filteredProducts.length} services available</p>
                <SortDropdown options={sortOptions} onSort={handleSort} />
              </div>

              <ProductGrid products={filteredProducts} onAddToCart={handleAddToCart} />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
