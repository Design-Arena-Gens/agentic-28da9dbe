"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Clock, CheckCircle2, Package, XCircle } from "lucide-react";
import Link from "next/link";

export default function OrdersPage() {
  const [activeTab, setActiveTab] = useState<"active" | "history">("active");

  const activeOrders = [
    {
      id: 1,
      orderId: "TBM-1234",
      restaurant: "Tasty Burgers & More",
      items: ["2x Classic Cheeseburger", "1x French Fries"],
      total: 39.95,
      status: "preparing",
      statusLabel: "Preparing",
      time: "5-10 min",
      date: "Today, 2:15 PM",
    },
    {
      id: 2,
      orderId: "ITA-5678",
      restaurant: "Italian Kitchen",
      items: ["1x Margherita Pizza", "1x Caesar Salad"],
      total: 28.50,
      status: "on-way",
      statusLabel: "On the way",
      time: "10-15 min",
      date: "Today, 1:45 PM",
    },
  ];

  const historyOrders = [
    {
      id: 3,
      orderId: "SUS-9012",
      restaurant: "Sushi Master",
      items: ["1x Salmon Roll", "1x Tuna Sashimi"],
      total: 45.99,
      status: "delivered",
      statusLabel: "Delivered",
      date: "Yesterday, 7:30 PM",
    },
    {
      id: 4,
      orderId: "MEX-3456",
      restaurant: "Taco Fiesta",
      items: ["3x Chicken Tacos", "1x Guacamole"],
      total: 22.50,
      status: "delivered",
      statusLabel: "Delivered",
      date: "Nov 2, 6:15 PM",
    },
    {
      id: 5,
      orderId: "CAF-7890",
      restaurant: "Coffee House",
      items: ["1x Latte", "1x Croissant"],
      total: 12.99,
      status: "cancelled",
      statusLabel: "Cancelled",
      date: "Nov 1, 9:00 AM",
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "preparing":
        return <Clock className="w-5 h-5 text-primary" />;
      case "on-way":
        return <Package className="w-5 h-5 text-blue-600" />;
      case "delivered":
        return <CheckCircle2 className="w-5 h-5 text-green-600" />;
      case "cancelled":
        return <XCircle className="w-5 h-5 text-gray-400" />;
      default:
        return <Clock className="w-5 h-5 text-primary" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "preparing":
        return "bg-primary/10 text-primary";
      case "on-way":
        return "bg-blue-50 text-blue-600";
      case "delivered":
        return "bg-green-50 text-green-600";
      case "cancelled":
        return "bg-gray-100 text-gray-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pb-24">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 px-4 py-3">
        <div className="flex items-center gap-4">
          <Link href="/" className="p-2 -ml-2 hover:bg-gray-100 rounded-full transition-colors">
            <ChevronLeft className="w-5 h-5" />
          </Link>
          <h1 className="text-lg font-bold">My Orders</h1>
        </div>
      </header>

      {/* Tabs */}
      <div className="px-4 pt-4 pb-2">
        <div className="flex gap-2 p-1 bg-gray-100 rounded-2xl">
          <button
            onClick={() => setActiveTab("active")}
            className={`flex-1 px-4 py-3 rounded-xl font-medium text-sm transition-all ${
              activeTab === "active"
                ? "bg-white text-gray-900 shadow-sm"
                : "text-muted-foreground"
            }`}
          >
            Active ({activeOrders.length})
          </button>
          <button
            onClick={() => setActiveTab("history")}
            className={`flex-1 px-4 py-3 rounded-xl font-medium text-sm transition-all ${
              activeTab === "history"
                ? "bg-white text-gray-900 shadow-sm"
                : "text-muted-foreground"
            }`}
          >
            History ({historyOrders.length})
          </button>
        </div>
      </div>

      {/* Active Orders */}
      {activeTab === "active" && (
        <div className="px-4 pt-4">
          {activeOrders.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-5xl">📦</span>
              </div>
              <h2 className="text-xl font-bold mb-2">No active orders</h2>
              <p className="text-muted-foreground text-center mb-6">You don&apos;t have any ongoing orders</p>
              <Link href="/" className="px-6 py-3 bg-primary text-white rounded-full font-medium">
                Start Ordering
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {activeOrders.map((order) => (
                <Link
                  key={order.id}
                  href="/order-confirmation"
                  className="block p-4 bg-white rounded-2xl border-2 border-primary/20 hover:border-primary transition-colors"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Order #{order.orderId}</p>
                      <h3 className="font-bold text-base mb-1">{order.restaurant}</h3>
                      <p className="text-xs text-muted-foreground">{order.date}</p>
                    </div>
                    <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full ${getStatusColor(order.status)}`}>
                      {getStatusIcon(order.status)}
                      <span className="text-xs font-bold">{order.statusLabel}</span>
                    </div>
                  </div>

                  <div className="mb-3 py-3 border-y border-gray-100">
                    {order.items.map((item, index) => (
                      <p key={index} className="text-sm text-muted-foreground">
                        {item}
                      </p>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-muted-foreground mb-0.5">Total Amount</p>
                      <p className="text-lg font-bold text-primary">${order.total.toFixed(2)}</p>
                    </div>
                    {order.time && (
                      <div className="flex items-center gap-2 px-4 py-2 bg-primary/5 rounded-full">
                        <Clock className="w-4 h-4 text-primary" />
                        <span className="text-sm font-bold text-primary">{order.time}</span>
                      </div>
                    )}
                  </div>

                  <div className="mt-4 flex gap-2">
                    <button className="flex-1 py-2.5 bg-primary text-white rounded-xl text-sm font-medium">
                      Track Order
                    </button>
                    <button className="px-4 py-2.5 bg-gray-100 text-gray-900 rounded-xl text-sm font-medium hover:bg-gray-200 transition-colors">
                      Help
                    </button>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Order History */}
      {activeTab === "history" && (
        <div className="px-4 pt-4">
          <div className="space-y-3">
            {historyOrders.map((order) => (
              <div
                key={order.id}
                className="p-4 bg-white rounded-2xl border border-gray-200"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <p className="text-xs text-muted-foreground mb-1">Order #{order.orderId}</p>
                    <h3 className="font-bold text-sm mb-1">{order.restaurant}</h3>
                    <p className="text-xs text-muted-foreground">{order.date}</p>
                  </div>
                  <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full ${getStatusColor(order.status)}`}>
                    {getStatusIcon(order.status)}
                    <span className="text-xs font-bold">{order.statusLabel}</span>
                  </div>
                </div>

                <div className="mb-3 py-3 border-y border-gray-100">
                  {order.items.map((item, index) => (
                    <p key={index} className="text-sm text-muted-foreground">
                      {item}
                    </p>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-muted-foreground mb-0.5">Total Amount</p>
                    <p className="text-base font-bold">${order.total.toFixed(2)}</p>
                  </div>
                  <div className="flex gap-2">
                    {order.status === "delivered" && (
                      <>
                        <button className="px-4 py-2 bg-primary text-white rounded-xl text-sm font-medium">
                          Reorder
                        </button>
                        <button className="px-4 py-2 bg-gray-100 text-gray-900 rounded-xl text-sm font-medium hover:bg-gray-200 transition-colors">
                          Rate
                        </button>
                      </>
                    )}
                    {order.status === "cancelled" && (
                      <button className="px-4 py-2 bg-gray-100 text-gray-900 rounded-xl text-sm font-medium">
                        View Details
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
