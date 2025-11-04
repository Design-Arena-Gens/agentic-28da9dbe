"use client";

import { useState } from "react";
import { ChevronLeft, Heart, Share2, Star, Clock, MapPin, Info, Search, ShoppingBag, Minus, Plus } from "lucide-react";
import Link from "next/link";

export default function RestaurantPage() {
  const [favorites, setFavorites] = useState<Set<number>>(new Set());
  const [cart, setCart] = useState<Map<number, number>>(new Map());

  const toggleFavorite = (id: number) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(id)) {
      newFavorites.delete(id);
    } else {
      newFavorites.add(id);
    }
    setFavorites(newFavorites);
  };

  const updateCart = (id: number, delta: number) => {
    const newCart = new Map(cart);
    const current = newCart.get(id) || 0;
    const newValue = current + delta;
    if (newValue <= 0) {
      newCart.delete(id);
    } else {
      newCart.set(id, newValue);
    }
    setCart(newCart);
  };

  const cartCount = Array.from(cart.values()).reduce((sum, count) => sum + count, 0);

  return (
    <div className="min-h-screen bg-white pb-24">
      {/* Header Image */}
      <div className="relative h-56 bg-gradient-to-br from-orange-400 to-rose-500">
        <div className="absolute inset-0 bg-black/10" />
        <div className="absolute top-0 left-0 right-0 flex items-center justify-between p-4">
          <Link href="/" className="w-10 h-10 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
            <ChevronLeft className="w-5 h-5" />
          </Link>
          <div className="flex gap-2">
            <button className="w-10 h-10 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
              <Share2 className="w-4 h-4" />
            </button>
            <button className="w-10 h-10 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
              <Heart className="w-4 h-4 fill-rose-500 text-rose-500" />
            </button>
          </div>
        </div>
      </div>

      {/* Restaurant Info */}
      <div className="px-4 py-4 border-b border-gray-200">
        <h1 className="text-2xl font-bold mb-2">Tasty Burgers & More</h1>
        <p className="text-sm text-muted-foreground mb-3">American • Burgers • Fast Food</p>

        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            <span className="text-sm font-bold">4.8</span>
            <span className="text-sm text-muted-foreground">(2.4k+ ratings)</span>
          </div>
        </div>

        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center gap-1 text-muted-foreground">
            <Clock className="w-4 h-4" />
            <span>15-20 min</span>
          </div>
          <div className="flex items-center gap-1 text-muted-foreground">
            <MapPin className="w-4 h-4" />
            <span>2.3 km away</span>
          </div>
        </div>
      </div>

      {/* Promo Banner */}
      <div className="mx-4 my-4 p-4 bg-gradient-to-r from-primary/10 to-orange-100 rounded-2xl border border-primary/20">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-2xl">
            🎉
          </div>
          <div className="flex-1">
            <p className="text-sm font-bold text-gray-900">Free Delivery</p>
            <p className="text-xs text-muted-foreground">On orders above $25</p>
          </div>
          <Info className="w-5 h-5 text-muted-foreground" />
        </div>
      </div>

      {/* Search Menu */}
      <div className="px-4 pb-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search menu..."
            className="w-full pl-10 pr-4 py-2.5 bg-gray-50 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
        </div>
      </div>

      {/* Categories */}
      <div className="sticky top-0 z-40 bg-white border-b border-gray-200 px-4 py-3">
        <div className="flex gap-2 overflow-x-auto no-scrollbar">
          {["Popular", "Burgers", "Sides", "Drinks", "Desserts"].map((category, index) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full whitespace-nowrap text-sm font-medium transition-all ${
                index === 0
                  ? "bg-primary text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Menu Items */}
      <div className="px-4 py-4">
        <h2 className="text-lg font-bold mb-4">Popular Items</h2>
        <div className="space-y-4">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="flex gap-3 pb-4 border-b border-gray-100 last:border-0">
              <div className="flex-1">
                <div className="flex items-start justify-between mb-1">
                  <h3 className="font-bold text-base">Classic Cheeseburger</h3>
                  <button onClick={() => toggleFavorite(item)} className="p-1">
                    <Heart
                      className={`w-4 h-4 ${
                        favorites.has(item)
                          ? "fill-rose-500 text-rose-500"
                          : "text-gray-400"
                      }`}
                    />
                  </button>
                </div>
                <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                  Juicy beef patty with melted cheese, fresh lettuce, tomatoes, and special sauce
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-primary">$12.99</span>
                  {cart.has(item) ? (
                    <div className="flex items-center gap-3 bg-primary/5 rounded-full px-2 py-1">
                      <button
                        onClick={() => updateCart(item, -1)}
                        className="w-7 h-7 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow transition-shadow"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm font-bold w-6 text-center">{cart.get(item)}</span>
                      <button
                        onClick={() => updateCart(item, 1)}
                        className="w-7 h-7 bg-primary text-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-shadow"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => updateCart(item, 1)}
                      className="px-4 py-2 bg-primary text-white rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-shadow"
                    >
                      Add
                    </button>
                  )}
                </div>
              </div>
              <div className="w-24 h-24 flex-shrink-0 bg-gradient-to-br from-amber-300 to-orange-400 rounded-2xl" />
            </div>
          ))}
        </div>
      </div>

      {/* Floating Cart Button */}
      {cartCount > 0 && (
        <Link
          href="/cart"
          className="fixed bottom-6 left-4 right-4 bg-primary text-white rounded-2xl shadow-2xl shadow-primary/25 hover:shadow-3xl transition-shadow"
        >
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-medium opacity-90">{cartCount} {cartCount === 1 ? 'item' : 'items'}</p>
                <p className="text-xs opacity-75">View cart</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold">${(cartCount * 12.99).toFixed(2)}</span>
              <ChevronLeft className="w-5 h-5 rotate-180" />
            </div>
          </div>
        </Link>
      )}
    </div>
  );
}
