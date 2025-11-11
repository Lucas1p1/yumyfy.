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
    name: "Margherita Pizza",
    price: 14.99,
    image: "/images/margherita-pizza.jpg",
    rating: 4.8,
    reviews: 634,
    category: "Italian",
    icon: "🍕",
  },
  {
    id: "2",
    name: "Caesar Salad",
    price: 9.99,
    image: "/images/caesar-salad.jpg",
    rating: 4.6,
    reviews: 289,
    category: "Salads",
    icon: "🥗",
  },
  {
    id: "3",
    name: "Grilled Salmon",
    price: 19.99,
    image: "/images/grilled-salmon.jpg",
    rating: 4.9,
    reviews: 445,
    category: "Seafood",
    icon: "🐟",
  },
  {
    id: "4",
    name: "Chicken Biryani",
    price: 12.99,
    image: "/images/chicken-biryani.jpg",
    rating: 4.7,
    reviews: 512,
    category: "Indian",
    icon: "🍚",
  },
  {
    id: "5",
    name: "Sushi Platter",
    price: 24.99,
    image: "/images/sushi-platter.jpg",
    rating: 4.8,
    reviews: 678,
    category: "Japanese",
    icon: "🍣",
  },
  {
    id: "6",
    name: "Tacos Al Pastor",
    price: 11.99,
    image: "/images/tacos-al-pastor.jpg",
    rating: 4.7,
    reviews: 356,
    category: "Mexican",
    icon: "🌮",
  },
  {
    id: "7",
    name: "Pasta Carbonara",
    price: 13.99,
    image: "/images/pasta-carbonara.jpg",
    rating: 4.8,
    reviews: 423,
    category: "Italian",
    icon: "🍝",
  },
  {
    id: "8",
    name: "Burger Deluxe",
    price: 13.49,
    image: "/images/burger-deluxe.jpg",
    rating: 4.6,
    reviews: 534,
    category: "American",
    icon: "🍔",
  },
]

const filters = [
  { label: "Category", options: ["Italian", "Salads", "Seafood", "Indian", "Japanese", "Mexican", "American"] },
  { label: "Price Range", options: ["Under $10", "$10-$15", "$15-$25", "Over $25"] },
  { label: "Rating", options: ["4.8+", "4.5+", "4.0+", "All Ratings"] },
]

const sortOptions = [
  { label: "Recommended", value: "recommended" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Highest Rated", value: "rating" },
  { label: "Fastest Delivery", value: "fastest" },
]

export default function FoodPage() {
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
            icon="🍕"
            title="Food Delivery"
            description="Delicious meals from your favorite restaurants delivered hot"
            color="from-orange-500 to-red-600"
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
                <p className="text-sm text-muted-foreground">{filteredProducts.length} restaurants available</p>
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
