"use client";

import { useState } from "react";
import { ChevronLeft, Minus, Plus, Trash2, Tag, MapPin, Clock, CreditCard, Wallet, Apple } from "lucide-react";
import Link from "next/link";

export default function CartPage() {
  const [items, setItems] = useState([
    { id: 1, name: "Classic Cheeseburger", price: 12.99, quantity: 2 },
    { id: 2, name: "French Fries", price: 4.99, quantity: 1 },
    { id: 3, name: "Chocolate Shake", price: 5.99, quantity: 1 },
  ]);

  const updateQuantity = (id: number, delta: number) => {
    setItems(items.map(item => {
      if (item.id === id) {
        const newQuantity = item.quantity + delta;
        return { ...item, quantity: Math.max(0, newQuantity) };
      }
      return item;
    }).filter(item => item.quantity > 0));
  };

  const removeItem = (id: number) => {
    setItems(items.filter(item => item.id !== id));
  };

  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const deliveryFee = subtotal >= 25 ? 0 : 3.99;
  const serviceFee = 2.99;
  const total = subtotal + deliveryFee + serviceFee;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pb-32">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 px-4 py-3">
        <div className="flex items-center gap-4">
          <Link href="/restaurant/1" className="p-2 -ml-2 hover:bg-gray-100 rounded-full transition-colors">
            <ChevronLeft className="w-5 h-5" />
          </Link>
          <h1 className="text-lg font-bold">Your Cart</h1>
        </div>
      </header>

      {items.length === 0 ? (
        <div className="flex flex-col items-center justify-center px-4 py-20">
          <div className="w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center mb-6">
            <span className="text-6xl">🛒</span>
          </div>
          <h2 className="text-xl font-bold mb-2">Your cart is empty</h2>
          <p className="text-muted-foreground text-center mb-6">Add items from a restaurant to get started</p>
          <Link href="/" className="px-6 py-3 bg-primary text-white rounded-full font-medium">
            Browse Restaurants
          </Link>
        </div>
      ) : (
        <>
          {/* Restaurant Info */}
          <div className="px-4 py-4">
            <div className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-gray-200">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-rose-500 rounded-xl" />
              <div className="flex-1">
                <h3 className="font-bold text-sm">Tasty Burgers & More</h3>
                <div className="flex items-center gap-3 text-xs text-muted-foreground mt-1">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    15-20 min
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    2.3 km
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Cart Items */}
          <div className="px-4 pb-4">
            <h2 className="text-lg font-bold mb-3">Items</h2>
            <div className="space-y-3">
              {items.map((item) => (
                <div key={item.id} className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-gray-200">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-300 to-orange-400 rounded-xl flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-sm mb-1">{item.name}</h3>
                    <p className="text-base font-bold text-primary">${item.price.toFixed(2)}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="text-sm font-bold w-6 text-center">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center hover:bg-primary/90 transition-colors"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="p-2 text-muted-foreground hover:text-destructive transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Promo Code */}
          <div className="px-4 pb-4">
            <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-primary/5 to-orange-50 rounded-2xl border border-primary/20">
              <Tag className="w-5 h-5 text-primary" />
              <input
                type="text"
                placeholder="Enter promo code"
                className="flex-1 bg-transparent text-sm font-medium placeholder:text-muted-foreground focus:outline-none"
              />
              <button className="px-4 py-2 bg-primary text-white rounded-full text-sm font-medium">
                Apply
              </button>
            </div>
          </div>

          {/* Delivery Details */}
          <div className="px-4 pb-4">
            <h2 className="text-lg font-bold mb-3">Delivery Details</h2>
            <div className="p-4 bg-white rounded-2xl border border-gray-200">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-bold">Home</p>
                  <p className="text-xs text-muted-foreground">123 Main St, Downtown</p>
                </div>
                <button className="text-sm text-primary font-medium">Change</button>
              </div>
              <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-bold">Deliver Now</p>
                  <p className="text-xs text-muted-foreground">Arrive in 15-20 min</p>
                </div>
                <button className="text-sm text-primary font-medium">Schedule</button>
              </div>
            </div>
          </div>

          {/* Bill Summary */}
          <div className="px-4 pb-4">
            <h2 className="text-lg font-bold mb-3">Bill Summary</h2>
            <div className="p-4 bg-white rounded-2xl border border-gray-200 space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="font-semibold">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Delivery Fee</span>
                <span className={`font-semibold ${deliveryFee === 0 ? 'text-green-600' : ''}`}>
                  {deliveryFee === 0 ? 'FREE' : `$${deliveryFee.toFixed(2)}`}
                </span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Service Fee</span>
                <span className="font-semibold">${serviceFee.toFixed(2)}</span>
              </div>
              {subtotal >= 25 && (
                <div className="p-2 bg-green-50 rounded-lg">
                  <p className="text-xs text-green-700 font-medium">🎉 You saved $3.99 on delivery!</p>
                </div>
              )}
              <div className="flex items-center justify-between text-base pt-3 border-t border-gray-200">
                <span className="font-bold">Total</span>
                <span className="font-bold text-primary text-lg">${total.toFixed(2)}</span>
              </div>
            </div>
          </div>

          {/* Payment Method */}
          <div className="px-4 pb-4">
            <h2 className="text-lg font-bold mb-3">Payment Method</h2>
            <div className="space-y-2">
              {[
                { icon: CreditCard, label: "Credit Card", detail: "•••• 4242" },
                { icon: Wallet, label: "Digital Wallet", detail: "Google Pay" },
                { icon: Apple, label: "Apple Pay", detail: "iPhone 15 Pro" },
              ].map((method, index) => (
                <button
                  key={index}
                  className={`w-full flex items-center gap-3 p-4 rounded-2xl border-2 transition-all ${
                    index === 0
                      ? "border-primary bg-primary/5"
                      : "border-gray-200 bg-white hover:border-gray-300"
                  }`}
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    index === 0 ? "bg-primary/10" : "bg-gray-100"
                  }`}>
                    <method.icon className={`w-5 h-5 ${index === 0 ? "text-primary" : "text-gray-600"}`} />
                  </div>
                  <div className="flex-1 text-left">
                    <p className="text-sm font-bold">{method.label}</p>
                    <p className="text-xs text-muted-foreground">{method.detail}</p>
                  </div>
                  <div className={`w-5 h-5 rounded-full border-2 ${
                    index === 0
                      ? "border-primary bg-primary"
                      : "border-gray-300"
                  }`}>
                    {index === 0 && <div className="w-full h-full rounded-full bg-white scale-50" />}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Checkout Button */}
          <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 safe-area-inset-bottom">
            <Link
              href="/order-confirmation"
              className="w-full flex items-center justify-between px-6 py-4 bg-primary text-white rounded-2xl font-bold shadow-lg shadow-primary/25 hover:shadow-xl transition-shadow"
            >
              <span>Place Order</span>
              <span className="text-lg">${total.toFixed(2)}</span>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
