"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

export default function HomePage() {
  const [location, setLocation] = useState("")
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0)

  const services = [
    {
      id: "food",
      title: "Food Delivery",
      description: "Order from thousands of Nigerian restaurants",
      image: "/images/nigerian-food-delivery.jpg",
      href: "/food",
    },
    {
      id: "groceries",
      title: "Groceries",
      description: "Fresh produce from top Nigerian retailers",
      image: "/images/nigerian-groceries.jpg",
      href: "/groceries",
    },
    {
      id: "pharmacy",
      title: "Pharmacy",
      description: "Medicine delivered to your door",
      image: "/images/nigerian-pharmacy.jpg",
      href: "/pharmacy",
    },
    {
      id: "parcel",
      title: "Parcels",
      description: "Send packages across Lagos fast",
      image: "/images/nigerian-parcel.jpg",
      href: "/parcels",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentServiceIndex((prev) => (prev + 2) % services.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [services.length])

  const nextService = () => {
    setCurrentServiceIndex((prev) => (prev + 2) % services.length)
  }

  const prevService = () => {
    setCurrentServiceIndex((prev) => (prev - 2 + services.length) % services.length)
  }

  const reasons = [
    {
      title: "Lightning Fast",
      description: "15-30 minute delivery across Lagos, Abuja & Port Harcourt",
      image: "/images/nigerian-delivery-speed.jpg",
    },
    {
      title: "Real Partners",
      description: "Order from Shoprite, Jumia, Dominos, POS, & more",
      image: "/images/nigerian-partners.jpg",
    },
    {
      title: "Trusted Delivery",
      description: "Professional partners ensuring safe, on-time delivery",
      image: "/images/nigerian-delivery-partner.jpg",
    },
  ]

  return (
    <div className="min-h-screen bg-background dark:bg-black">
      <Navigation />

      <section className="relative pt-16 pb-12 px-4 bg-gradient-to-br from-purple-50 to-orange-50 dark:from-slate-900 dark:to-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              {/* Badge */}
              <div className="inline-block">
                <span className="text-xs font-semibold px-3 py-1.5 bg-primary/10 text-primary dark:bg-orange-500/20 dark:text-orange-400 rounded-full border border-primary/20 dark:border-orange-500/30">
                  🌍 Lagos' Fastest Same-Day Delivery
                </span>
              </div>

              {/* Main Headline */}
              <div className="space-y-2">
                <h1 className="text-4xl md:text-5xl font-black text-balance leading-tight text-primary dark:text-orange-400">
                  Your e-Commerce!
                </h1>
                <p className="text-2xl md:text-3xl font-bold text-foreground dark:text-white">Venture Starts Here</p>
              </div>

              {/* Subheading */}
              <p className="text-sm md:text-base text-foreground/70 dark:text-gray-400 max-w-xl">
                More than just a reliable eCommerce platform. Order food, groceries, medicine, and parcels all in one
                app.
              </p>

              {/* Location Search */}
              <div className="flex gap-2 max-w-md pt-2">
                <div className="flex-1 flex items-center gap-2 px-4 py-2.5 border-2 border-border dark:border-orange-500/30 rounded-lg bg-white dark:bg-slate-800 focus-within:border-primary dark:focus-within:border-orange-400 transition-colors">
                  <span className="text-orange-500 dark:text-orange-400">📍</span>
                  <input
                    type="text"
                    placeholder="Search location here..."
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="flex-1 text-sm bg-transparent focus:outline-none text-foreground dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                  />
                </div>
                <button className="px-4 py-2.5 bg-primary dark:bg-orange-500 text-white dark:text-black rounded-lg font-semibold hover:bg-primary/90 dark:hover:bg-orange-600 transition-colors text-sm">
                  Explore
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-2">
                <div>
                  <p className="text-xl md:text-2xl font-bold text-primary dark:text-orange-400">50K+</p>
                  <p className="text-xs text-foreground/60 dark:text-gray-400 mt-1">Nigerian Stores</p>
                </div>
                <div>
                  <p className="text-xl md:text-2xl font-bold text-primary dark:text-orange-400">100K+</p>
                  <p className="text-xs text-foreground/60 dark:text-gray-400 mt-1">Daily Deliveries</p>
                </div>
                <div>
                  <p className="text-xl md:text-2xl font-bold text-primary dark:text-orange-400">4.9★</p>
                  <p className="text-xs text-foreground/60 dark:text-gray-400 mt-1">User Rating</p>
                </div>
              </div>
            </div>

            <div className="relative h-80 lg:h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-200/30 to-orange-200/30 dark:from-orange-500/10 dark:to-purple-500/10 rounded-3xl blur-2xl"></div>
              <Image
                src="/images/nigerian-hero-app.jpg"
                alt="Yumyfy Mobile App"
                fill
                priority
                className="relative object-contain rounded-3xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 px-4 bg-background dark:bg-black border-b border-border dark:border-orange-500/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className="space-y-3 order-2 lg:order-1">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground dark:text-white">
                Yumyfy <br />
                <span className="text-base md:text-lg font-semibold text-foreground/70 dark:text-gray-400">
                  is Best Delivery Service Near You
                </span>
              </h2>

              <p className="text-sm text-foreground/70 dark:text-gray-400">
                Yumyfy is a one-stop shop for all your daily necessities. You can shop for groceries, food, medicine,
                and parcels from verified sellers on our platform.
              </p>

              <Link href="/groceries">
                <button className="px-4 py-2 bg-primary dark:bg-orange-500 text-white dark:text-black rounded-full font-semibold hover:bg-primary/90 dark:hover:bg-orange-600 transition-colors flex items-center gap-2 text-sm">
                  Order Now →
                </button>
              </Link>
            </div>

            <div className="relative rounded-2xl overflow-hidden h-60 lg:h-72 order-1 lg:order-2">
              <Image
                src="/images/nigerian-delivery-professional.jpg"
                alt="Delivery Service"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Compact Carousel */}
      <section id="services" className="py-10 px-4 bg-background dark:bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-2 mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground dark:text-white">Everything You Need</h2>
            <p className="text-xs md:text-sm text-foreground/60 dark:text-gray-400">
              Order food, groceries, medicine, and packages all in one app
            </p>
          </div>

          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${(currentServiceIndex / 2) * 100}%)` }}
              >
                {services.map((service) => (
                  <div key={service.id} className="min-w-1/2 px-2">
                    <Link href={service.href}>
                      <div className="group cursor-pointer overflow-hidden rounded-lg">
                        <div className="relative overflow-hidden h-32">
                          <Image
                            src={service.image || "/placeholder.svg"}
                            alt={service.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="pt-2 pb-1">
                          <h3 className="text-xs font-bold text-foreground dark:text-white">{service.title}</h3>
                          <p className="text-xs text-foreground/60 dark:text-gray-400 mt-0.5 line-clamp-1">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevService}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 p-1.5 rounded-full bg-primary dark:bg-orange-500 text-white dark:text-black hover:shadow-lg transition-all duration-300 z-10"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={nextService}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 p-1.5 rounded-full bg-primary dark:bg-orange-500 text-white dark:text-black hover:shadow-lg transition-all duration-300 z-10"
            >
              <ChevronRight size={16} />
            </button>

            {/* Carousel Indicators */}
            <div className="flex justify-center gap-1.5 mt-3">
              {[0, 1].map((idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentServiceIndex(idx * 2)}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    idx * 2 === currentServiceIndex
                      ? "bg-primary dark:bg-orange-500 w-5"
                      : "bg-muted dark:bg-orange-500/30 w-1"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Yumyfy - Compact */}
      <section className="py-10 px-4 bg-background dark:bg-black border-t border-border dark:border-orange-500/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-2 mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground dark:text-white">Why Choose Yumyfy?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {reasons.map((reason, idx) => (
              <div key={idx} className="space-y-2">
                <div className="relative rounded-lg overflow-hidden h-40">
                  <Image src={reason.image || "/placeholder.svg"} alt={reason.title} fill className="object-cover" />
                </div>
                <h3 className="text-sm font-bold text-foreground dark:text-white">{reason.title}</h3>
                <p className="text-xs text-foreground/60 dark:text-gray-400">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Solutions & Newsletter Section - Compact */}
      <section className="py-10 px-4 bg-background dark:bg-black border-t border-border dark:border-orange-500/20">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Complete Multipurpose eBusiness Solution */}
          <div className="bg-gradient-to-r from-purple-100 to-orange-50 dark:from-slate-800 dark:to-black rounded-lg p-5 grid grid-cols-1 lg:grid-cols-2 gap-5 items-center border border-purple-200 dark:border-orange-500/20">
            <div className="relative rounded-lg overflow-hidden order-2 lg:order-1 h-56">
              <Image
                src="/images/nigerian-business-solution.jpg"
                alt="eBusiness Solution"
                fill
                className="object-cover"
              />
            </div>

            {/* Right Content */}
            <div className="space-y-2 order-1 lg:order-2">
              <h2 className="text-xl md:text-2xl font-bold text-foreground dark:text-white">
                Complete Multipurpose eBusiness Solution
              </h2>

              <p className="text-xs md:text-sm text-foreground/70 dark:text-gray-300">
                Yumyfy is a Laravel and Flutter Framework-based multi-vendor food, grocery, eCommerce, parcel, and
                pharmacy delivery system with six modules covering all business functions.
              </p>

              {/* App Store Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
    href="https://play.google.com/store/apps/details?id=YOUR_ANDROID_APP_ID"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
      alt="Get it on Google Play"
      className="w-40 md:w-48"
    />
  </a>
                <a
                  href="#"
                  className="px-4 py-2.5 bg-black dark:bg-black text-white rounded-lg hover:bg-gray-900 transition-colors flex items-center justify-center gap-2 text-sm font-semibold border border-gray-800"
                >
                  <svg className="w-40 h-48" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.3-3.14-2.53C4.25 17 2.94 12.46 4.7 9.12c.9-1.56 2.64-2.58 4.48-2.64 1.33-.07 2.57.72 3.38.72.81 0 2.26-.88 3.81-.74.64.1 2.45.31 3.62 2.31-.94.64-1.8 1.91-1.64 3.15.13 1.37 1.04 2.14 2.01 2.59-.27.75-.67 1.41-1.09 1.91zM12.03 6.71c-.09-1.16.93-2.3 2.02-2.48.06.84-.27 1.93-1.02 2.05-.12 0-.24 0-.37 0-.63-.01-1.59-.52-1.63-1.57z" />
                  </svg>
                  <div className="flex flex-col leading-none">
                    <span className="text-xs opacity-80">Download ON</span>
                    <span className="text-sm font-bold">App Store</span>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Let's Start Earning Section */}
          <div>
            <div className="text-center space-y-1 mb-6">
              <h2 className="text-xl md:text-2xl font-bold text-foreground dark:text-white">
                Let's Start Earning with <span className="text-primary dark:text-orange-400">Yumyfy</span>
              </h2>
              <p className="text-xs md:text-sm text-foreground/60 dark:text-gray-300">
                Join our online marketplace revolution and boost your income.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Become a Seller */}
              <div className="bg-white dark:bg-slate-800 rounded-lg p-3 flex flex-col items-center text-center space-y-2 border border-purple-100 dark:border-orange-500/20">
                <div className="relative w-full rounded-lg overflow-hidden h-40">
                  <Image src="/images/nigerian-seller.jpg" alt="Become a Seller" fill className="object-cover" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm font-bold text-foreground dark:text-white">Become a Seller</h3>
                  <p className="text-xs text-foreground/60 dark:text-gray-400">
                    Register as seller & open shop to start your business
                  </p>
                </div>
                <Link href="/signup">
                  <button className="px-3 py-1 bg-primary dark:bg-orange-500 text-white dark:text-black font-semibold rounded-lg hover:bg-primary/90 dark:hover:bg-orange-600 transition-colors text-xs">
                    Register
                  </button>
                </Link>
              </div>

              {/* Become a Delivery Man */}
              <div className="bg-white dark:bg-slate-800 rounded-lg p-3 flex flex-col items-center text-center space-y-2 border border-purple-100 dark:border-orange-500/20">
                <div className="relative w-full rounded-lg overflow-hidden h-40">
                  <Image
                    src="/images/nigerian-delivery-rider.jpg"
                    alt="Become a Delivery Man"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm font-bold text-foreground dark:text-white">Become a Delivery Man</h3>
                  <p className="text-xs text-foreground/60 dark:text-gray-400">
                    Register as delivery man and earn money
                  </p>
                </div>
                <Link href="/signup">
                  <button className="px-3 py-1 bg-primary dark:bg-orange-500 text-white dark:text-black font-semibold rounded-lg hover:bg-primary/90 dark:hover:bg-orange-600 transition-colors text-xs">
                    Register
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Business Solutions with App Dropdowns */}
          <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center">
              {/* Left Content */}
              <div className="space-y-2.5">
                <h2 className="text-xl md:text-2xl font-bold text-foreground dark:text-white">
                  <span className="text-primary dark:text-orange-400">$Let$</span> Manage your business{" "}
                  <span className="text-primary dark:text-orange-400">Smartly</span>
                </h2>

                <p className="text-xs md:text-sm text-foreground/70 dark:text-gray-300">
                  Join thousands of sellers and delivery partners earning with Yumyfy
                </p>

                {/* App Download Dropdowns */}
                <div className="flex flex-col sm:flex-row gap-1.5 pt-1.5">
                  <div className="relative group">
                    <button className="px-2.5 py-1 bg-primary dark:bg-orange-500 text-white dark:text-black font-semibold rounded-lg hover:bg-primary/90 dark:hover:bg-orange-600 transition-colors flex items-center gap-1.5 text-xs">
                      Seller App
                      <span className="text-xs">▼</span>
                    </button>
                    <div className="absolute left-0 mt-1 w-36 bg-white dark:bg-slate-800 rounded-lg shadow-lg hidden group-hover:block z-20 border border-purple-100 dark:border-orange-500/30">
                      <a
                        href="#"
                        className="flex items-center gap-2 px-2.5 py-1 hover:bg-purple-50 dark:hover:bg-slate-700 transition-colors border-b border-purple-100 dark:border-orange-500/20 text-foreground dark:text-white text-xs"
                      >
                        <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M3 13.5v8.236q0 .849.628 1.456.628.607 1.534.607h13.676q.906 0 1.534-.607.628-.607.628-1.456V13.5M12 1l-5.387 6.234h10.774z" />
                        </svg>
                        <span className="font-medium">Google Play</span>
                      </a>
                      <a
                        href="#"
                        className="flex items-center gap-2 px-2.5 py-1 hover:bg-purple-50 dark:hover:bg-slate-700 transition-colors text-foreground dark:text-white text-xs"
                      >
                        <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.3-3.14-2.53C4.25 17 2.94 12.46 4.7 9.12c.9-1.56 2.64-2.58 4.48-2.64 1.33-.07 2.57.72 3.38.72.81 0 2.26-.88 3.81-.74.64.1 2.45.31 3.62 2.31-.94.64-1.8 1.91-1.64 3.15.13 1.37 1.04 2.14 2.01 2.59-.27.75-.67 1.41-1.09 1.91zM12.03 6.71c-.09-1.16.93-2.3 2.02-2.48.06.84-.27 1.93-1.02 2.05-.12 0-.24 0-.37 0-.63-.01-1.59-.52-1.63-1.57z" />
                        </svg>
                        <span className="font-medium">App Store</span>
                      </a>
                    </div>
                  </div>

                  <div className="relative group">
                    <button className="px-2.5 py-1 bg-primary dark:bg-orange-500 text-white dark:text-black font-semibold rounded-lg hover:bg-primary/90 dark:hover:bg-orange-600 transition-colors flex items-center gap-1.5 text-xs">
                      Deliveryman App
                      <span className="text-xs">▼</span>
                    </button>
                    <div className="absolute left-0 mt-1 w-36 bg-white dark:bg-slate-800 rounded-lg shadow-lg hidden group-hover:block z-20 border border-purple-100 dark:border-orange-500/30">
                      <a
                        href="#"
                        className="flex items-center gap-2 px-2.5 py-1 hover:bg-purple-50 dark:hover:bg-slate-700 transition-colors border-b border-purple-100 dark:border-orange-500/20 text-foreground dark:text-white text-xs"
                      >
                        <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M3 13.5v8.236q0 .849.628 1.456.628.607 1.534.607h13.676q.906 0 1.534-.607.628-.607.628-1.456V13.5M12 1l-5.387 6.234h10.774z" />
                        </svg>
                        <span className="font-medium">Google Play</span>
                      </a>
                      <a
                        href="#"
                        className="flex items-center gap-2 px-2.5 py-1 hover:bg-purple-50 dark:hover:bg-slate-700 transition-colors text-foreground dark:text-white text-xs"
                      >
                        <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.3-3.14-2.53C4.25 17 2.94 12.46 4.7 9.12c.9-1.56 2.64-2.58 4.48-2.64 1.33-.07 2.57.72 3.38.72.81 0 2.26-.88 3.81-.74.64.1 2.45.31 3.62 2.31-.94.64-1.8 1.91-1.64 3.15.13 1.37 1.04 2.14 2.01 2.59-.27.75-.67 1.41-1.09 1.91zM12.03 6.71c-.09-1.16.93-2.3 2.02-2.48.06.84-.27 1.93-1.02 2.05-.12 0-.24 0-.37 0-.63-.01-1.59-.52-1.63-1.57z" />
                        </svg>
                        <span className="font-medium">App Store</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Image */}
              <div className="relative bg-white dark:bg-slate-700 rounded-lg overflow-hidden h-56">
                <Image
                  src="/images/nigerian-business-dashboard.jpg"
                  alt="Business Dashboard"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="bg-gradient-to-r from-purple-50 to-orange-50 dark:from-slate-800 dark:to-black rounded-lg p-3.5 border border-purple-200 dark:border-orange-500/20 relative overflow-hidden">
            <div className="absolute left-0 bottom-0 opacity-10 text-primary dark:text-orange-500 text-5xl font-bold">
              ✉
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 items-center relative z-10">
              <div className="space-y-1.5">
                <h3 className="text-lg md:text-xl font-bold text-foreground dark:text-white">Join Us!</h3>
                <p className="text-xs md:text-sm text-foreground/70 dark:text-gray-300">
                  Subscribe to our weekly newsletter and be a part of our journey.
                </p>
              </div>

              {/* Email Input */}
              <div className="flex gap-1">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="flex-1 px-2.5 py-1 rounded-lg bg-white dark:bg-slate-700 text-foreground dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-orange-500 transition-all border border-purple-200 dark:border-orange-500/30 text-xs"
                />
                <button className="px-3 py-1 bg-primary dark:bg-orange-500 text-white dark:text-black font-semibold rounded-lg hover:bg-primary/90 dark:hover:bg-orange-600 transition-colors whitespace-nowrap text-xs">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
