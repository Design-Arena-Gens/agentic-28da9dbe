"use client";

import { CheckCircle2, MapPin, Clock, Phone, MessageSquare } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function OrderConfirmationPage() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 2 : prev));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Success Animation */}
      <div className="flex flex-col items-center justify-center px-4 pt-20 pb-10">
        <div className="relative mb-6">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center animate-pulse">
            <CheckCircle2 className="w-14 h-14 text-green-600" />
          </div>
          <div className="absolute inset-0 w-24 h-24 bg-green-200 rounded-full animate-ping opacity-20" />
        </div>
        <h1 className="text-2xl font-bold mb-2">Order Confirmed!</h1>
        <p className="text-muted-foreground text-center">Your order has been placed successfully</p>
        <div className="mt-4 px-4 py-2 bg-white rounded-full border border-gray-200">
          <p className="text-sm">
            Order ID: <span className="font-bold text-primary">#TBM-1234</span>
          </p>
        </div>
      </div>

      {/* Order Status */}
      <div className="px-4 pb-6">
        <div className="p-6 bg-white rounded-3xl border border-gray-200 shadow-sm">
          <h2 className="text-lg font-bold mb-6">Order Status</h2>

          {/* Progress Steps */}
          <div className="space-y-6">
            {[
              { icon: "📝", label: "Order Placed", time: "Now", active: true, complete: true },
              { icon: "👨‍🍳", label: "Preparing", time: "5-10 min", active: true, complete: false },
              { icon: "🚗", label: "Out for Delivery", time: "10-15 min", active: false, complete: false },
              { icon: "✅", label: "Delivered", time: "15-20 min", active: false, complete: false },
            ].map((step, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl ${
                  step.complete
                    ? "bg-green-100"
                    : step.active
                    ? "bg-primary/10 animate-pulse"
                    : "bg-gray-100"
                }`}>
                  {step.icon}
                </div>
                <div className="flex-1">
                  <p className={`text-sm font-bold ${
                    step.active ? "text-gray-900" : "text-muted-foreground"
                  }`}>
                    {step.label}
                  </p>
                  <p className="text-xs text-muted-foreground">{step.time}</p>
                </div>
                {step.complete && (
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                )}
                {step.active && !step.complete && (
                  <div className="w-5 h-5 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                )}
              </div>
            ))}
          </div>

          {/* Progress Bar */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-medium text-muted-foreground">Estimated Time</span>
              <span className="text-xs font-bold text-primary">15-20 min</span>
            </div>
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-primary to-orange-500 rounded-full transition-all duration-300"
                style={{ width: `${Math.min(progress, 25)}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Delivery Info */}
      <div className="px-4 pb-6">
        <h2 className="text-lg font-bold mb-3">Delivery Information</h2>
        <div className="p-4 bg-white rounded-2xl border border-gray-200 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
              <MapPin className="w-5 h-5 text-primary" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-bold">Delivery Address</p>
              <p className="text-xs text-muted-foreground">123 Main St, Downtown</p>
            </div>
          </div>
          <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
              <Clock className="w-5 h-5 text-primary" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-bold">Delivery Time</p>
              <p className="text-xs text-muted-foreground">Today, 2:30 PM - 2:50 PM</p>
            </div>
          </div>
        </div>
      </div>

      {/* Order Summary */}
      <div className="px-4 pb-6">
        <h2 className="text-lg font-bold mb-3">Order Summary</h2>
        <div className="p-4 bg-white rounded-2xl border border-gray-200">
          <div className="flex items-center gap-3 mb-4 pb-4 border-b border-gray-100">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-rose-500 rounded-xl" />
            <div className="flex-1">
              <h3 className="font-bold text-sm">Tasty Burgers & More</h3>
              <p className="text-xs text-muted-foreground">3 items</p>
            </div>
          </div>
          <div className="space-y-2 mb-4">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">2x Classic Cheeseburger</span>
              <span className="font-medium">$25.98</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">1x French Fries</span>
              <span className="font-medium">$4.99</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">1x Chocolate Shake</span>
              <span className="font-medium">$5.99</span>
            </div>
          </div>
          <div className="flex justify-between text-base pt-4 border-t border-gray-200">
            <span className="font-bold">Total Paid</span>
            <span className="font-bold text-primary">$39.95</span>
          </div>
        </div>
      </div>

      {/* Contact Actions */}
      <div className="px-4 pb-6">
        <div className="grid grid-cols-2 gap-3">
          <button className="flex items-center justify-center gap-2 p-4 bg-white rounded-2xl border border-gray-200 hover:border-primary transition-colors">
            <Phone className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium">Call Restaurant</span>
          </button>
          <button className="flex items-center justify-center gap-2 p-4 bg-white rounded-2xl border border-gray-200 hover:border-primary transition-colors">
            <MessageSquare className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium">Chat Support</span>
          </button>
        </div>
      </div>

      {/* Bottom Actions */}
      <div className="px-4 pb-8">
        <Link
          href="/"
          className="w-full flex items-center justify-center px-6 py-4 bg-primary text-white rounded-2xl font-bold shadow-lg shadow-primary/25"
        >
          Back to Home
        </Link>
        <Link
          href="/orders"
          className="w-full flex items-center justify-center px-6 py-4 mt-3 bg-white text-gray-900 rounded-2xl font-bold border border-gray-200"
        >
          Track Order
        </Link>
      </div>
    </div>
  );
}
