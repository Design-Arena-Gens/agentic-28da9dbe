"use client";

import { useState } from "react";
import { Home, Search, Heart, User, Clock, MapPin, Star, TrendingUp, Sparkles, ChevronRight, Filter } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pb-20">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-primary" />
            <div>
              <p className="text-xs text-muted-foreground">Deliver to</p>
              <p className="text-sm font-semibold">Downtown, 10 min</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Filter className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Search Bar */}
      <div className="px-4 py-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search restaurants, cuisines, dishes..."
            className="w-full pl-11 pr-4 py-3 bg-gray-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all"
          />
        </div>
      </div>

      {/* Quick Filters */}
      <div className="px-4 pb-4">
        <div className="flex gap-2 overflow-x-auto no-scrollbar">
          {["All", "Fast Food", "Pizza", "Asian", "Healthy", "Desserts", "Coffee"].map((filter) => (
            <button
              key={filter}
              className={`px-4 py-2 rounded-full whitespace-nowrap text-sm font-medium transition-all ${
                filter === "All"
                  ? "bg-primary text-white shadow-lg shadow-primary/25"
                  : "bg-white border border-gray-200 text-gray-700 hover:border-primary"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Featured Section */}
      <section className="px-4 pb-6">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-primary" />
            <h2 className="text-lg font-bold">Featured Today</h2>
          </div>
          <button className="text-sm text-primary font-medium">See all</button>
        </div>
        <div className="overflow-x-auto no-scrollbar">
          <div className="flex gap-4">
            {[1, 2].map((item) => (
              <Link href="/restaurant/1" key={item} className="flex-shrink-0 w-[280px]">
                <div className="relative h-[160px] bg-gradient-to-br from-orange-400 to-rose-500 rounded-2xl overflow-hidden mb-2">
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 bg-white/95 backdrop-blur-sm rounded-full text-xs font-bold text-gray-900">
                      ⚡ Fast Delivery
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <h3 className="text-white font-bold text-xl mb-1">Summer Specials</h3>
                    <p className="text-white/90 text-sm">Get 25% off on selected items</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Now */}
      <section className="px-4 pb-6">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-primary" />
            <h2 className="text-lg font-bold">Trending Now</h2>
          </div>
          <button className="text-sm text-primary font-medium">See all</button>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {[1, 2, 3, 4].map((item) => (
            <Link href="/restaurant/1" key={item} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="relative h-32 bg-gradient-to-br from-amber-200 to-orange-300">
                <div className="absolute top-2 right-2">
                  <button className="w-8 h-8 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-sm">
                    <Heart className="w-4 h-4 text-gray-600" />
                  </button>
                </div>
              </div>
              <div className="p-3">
                <h3 className="font-bold text-sm mb-1">Tasty Burgers</h3>
                <div className="flex items-center gap-1 mb-2">
                  <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                  <span className="text-xs font-semibold">4.8</span>
                  <span className="text-xs text-muted-foreground">(2.4k)</span>
                </div>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    15-20 min
                  </span>
                  <span className="font-semibold text-gray-900">$$$</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Popular Categories */}
      <section className="px-4 pb-6">
        <h2 className="text-lg font-bold mb-3">Popular Categories</h2>
        <div className="grid grid-cols-4 gap-3">
          {[
            { name: "Pizza", icon: "🍕" },
            { name: "Burger", icon: "🍔" },
            { name: "Sushi", icon: "🍱" },
            { name: "Dessert", icon: "🍰" },
            { name: "Coffee", icon: "☕" },
            { name: "Healthy", icon: "🥗" },
            { name: "Mexican", icon: "🌮" },
            { name: "More", icon: "➕" },
          ].map((category) => (
            <button
              key={category.name}
              className="flex flex-col items-center gap-2 p-3 bg-white rounded-2xl border border-gray-100 hover:border-primary transition-colors"
            >
              <span className="text-2xl">{category.icon}</span>
              <span className="text-xs font-medium text-center">{category.name}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Nearby Restaurants */}
      <section className="px-4 pb-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-bold">Nearby Restaurants</h2>
          <button className="text-sm text-primary font-medium">See all</button>
        </div>
        <div className="space-y-3">
          {[1, 2, 3].map((item) => (
            <Link href="/restaurant/1" key={item} className="flex gap-3 bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="relative w-24 h-24 flex-shrink-0 bg-gradient-to-br from-purple-300 to-pink-300" />
              <div className="flex-1 py-3 pr-3">
                <div className="flex items-start justify-between mb-1">
                  <h3 className="font-bold text-sm">Italian Kitchen</h3>
                  <button className="p-1">
                    <Heart className="w-4 h-4 text-gray-400" />
                  </button>
                </div>
                <div className="flex items-center gap-1 mb-2">
                  <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                  <span className="text-xs font-semibold">4.7</span>
                  <span className="text-xs text-muted-foreground">(1.2k)</span>
                </div>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>Italian • Pasta • Pizza</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    20 min
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-2 py-2 safe-area-inset-bottom">
        <div className="flex items-center justify-around max-w-md mx-auto">
          {[
            { id: "home", icon: Home, label: "Home" },
            { id: "search", icon: Search, label: "Search" },
            { id: "orders", icon: Clock, label: "Orders" },
            { id: "favorites", icon: Heart, label: "Favorites" },
            { id: "profile", icon: User, label: "Profile" },
          ].map(({ id, icon: Icon, label }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-all ${
                activeTab === id
                  ? "text-primary bg-primary/5"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="text-xs font-medium">{label}</span>
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
}
