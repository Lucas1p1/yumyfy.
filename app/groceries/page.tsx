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
    name: "Organic Bananas",
    price: 3.99,
    image: "/images/organic-bananas.jpg",
    rating: 4.8,
    reviews: 245,
    category: "Fruits",
    icon: "🍌",
  },
  {
    id: "2",
    name: "Fresh Spinach",
    price: 2.49,
    image: "/images/fresh-spinach.jpg",
    rating: 4.6,
    reviews: 189,
    category: "Vegetables",
    icon: "🥬",
  },
  {
    id: "3",
    name: "Whole Wheat Bread",
    price: 4.99,
    image: "/images/whole-wheat-bread.jpg",
    rating: 4.7,
    reviews: 312,
    category: "Bakery",
    icon: "🍞",
  },
  {
    id: "4",
    name: "Almond Milk",
    price: 5.49,
    image: "/images/almond-milk.jpg",
    rating: 4.5,
    reviews: 156,
    category: "Dairy",
    icon: "🥛",
  },
  {
    id: "5",
    name: "Cherry Tomatoes",
    price: 3.49,
    image: "/images/cherry-tomatoes.jpg",
    rating: 4.9,
    reviews: 423,
    category: "Vegetables",
    icon: "🍅",
  },
  {
    id: "6",
    name: "Greek Yogurt",
    price: 6.99,
    image: "/images/greek-yogurt.jpg",
    rating: 4.7,
    reviews: 278,
    category: "Dairy",
    icon: "🥣",
  },
  {
    id: "7",
    name: "Wild Blueberries",
    price: 7.99,
    image: "/images/wild-blueberries.jpg",
    rating: 4.8,
    reviews: 334,
    category: "Fruits",
    icon: "🫐",
  },
  {
    id: "8",
    name: "Olive Oil",
    price: 12.99,
    image: "/images/olive-oil.jpg",
    rating: 4.9,
    reviews: 567,
    category: "Oils",
    icon: "🫒",
  },
]

const filters = [
  { label: "Category", options: ["Fruits", "Vegetables", "Bakery", "Dairy", "Oils"] },
  { label: "Price Range", options: ["Under $5", "$5-$10", "$10-$15", "Over $15"] },
  { label: "Rating", options: ["4.8+", "4.5+", "4.0+", "All Ratings"] },
]

const sortOptions = [
  { label: "Recommended", value: "recommended" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Highest Rated", value: "rating" },
  { label: "Most Popular", value: "popular" },
]

export default function GroceriesPage() {
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
            icon="🛒"
            title="Groceries & Fresh Produce"
            description="Premium quality groceries delivered fresh to your door"
            color="from-emerald-500 to-green-600"
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
