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
    name: "Vitamin C Tablets",
    price: 12.99,
    image: "/images/vitamin-c-tablets.jpg",
    rating: 4.8,
    reviews: 534,
    category: "Vitamins",
    icon: "💊",
  },
  {
    id: "2",
    name: "Pain Relief Gel",
    price: 8.99,
    image: "/images/pain-relief-gel.jpg",
    rating: 4.7,
    reviews: 289,
    category: "Pain Relief",
    icon: "🧴",
  },
  {
    id: "3",
    name: "Face Sunscreen SPF 50",
    price: 15.99,
    image: "/images/sunscreen-spf50.jpg",
    rating: 4.9,
    reviews: 445,
    category: "Skincare",
    icon: "🧴",
  },
  {
    id: "4",
    name: "Allergy Tablets",
    price: 10.99,
    image: "/images/allergy-tablets.jpg",
    rating: 4.6,
    reviews: 198,
    category: "Cold & Flu",
    icon: "💊",
  },
  {
    id: "5",
    name: "Multivitamin Gummies",
    price: 14.99,
    image: "/images/multivitamin-gummies.jpg",
    rating: 4.8,
    reviews: 612,
    category: "Vitamins",
    icon: "🍬",
  },
  {
    id: "6",
    name: "Moisturizing Lotion",
    price: 9.99,
    image: "/images/moisturizing-lotion.jpg",
    rating: 4.7,
    reviews: 356,
    category: "Skincare",
    icon: "🧴",
  },
  {
    id: "7",
    name: "First Aid Kit",
    price: 24.99,
    image: "/images/first-aid-kit.jpg",
    rating: 4.9,
    reviews: 234,
    category: "First Aid",
    icon: "🏥",
  },
  {
    id: "8",
    name: "Blood Pressure Monitor",
    price: 45.99,
    image: "/images/blood-pressure-monitor.jpg",
    rating: 4.8,
    reviews: 287,
    category: "Devices",
    icon: "📊",
  },
]

const filters = [
  { label: "Category", options: ["Vitamins", "Pain Relief", "Skincare", "Cold & Flu", "First Aid", "Devices"] },
  { label: "Price Range", options: ["Under $10", "$10-$20", "$20-$50", "Over $50"] },
  { label: "Rating", options: ["4.8+", "4.5+", "4.0+", "All Ratings"] },
]

const sortOptions = [
  { label: "Recommended", value: "recommended" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Highest Rated", value: "rating" },
  { label: "Most Popular", value: "popular" },
]

export default function PharmacyPage() {
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
            icon="💊"
            title="Pharmacy & Health"
            description="Quality medicines and wellness products at your fingertips"
            color="from-blue-500 to-cyan-600"
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
                <p className="text-sm text-muted-foreground">{filteredProducts.length} products available</p>
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
