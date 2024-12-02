"use client";

import { FC } from "react";
import Link from "next/link";
import { Search, Bell, ShoppingBag } from "lucide-react";
import { Button } from "../ui/button";
const Header: FC = () => {
  return (
    <header className="bg-[#121924] px-4 py-3 shadow">
      <div className="flex items-center justify-between gap-4 max-w-[1600px] mx-auto">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <h5 className="text-white text-xl font-semibold">E-Commerce</h5>
        </Link>

        {/* Search Bar */}
        <div className="flex-1 max-w-2xl">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search Products..."
              className="w-full bg-[#1e2633] text-white placeholder-gray-400 pl-10 pr-4 py-2 rounded-md border border-gray-700 focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          {/* Quick Actions Button */}
          <Button
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-md transition-colors"
            onClick={() => {
              window.location.href = "/cart";
            }}
          >
            <ShoppingBag className="h-4 w-4" />
            <span>My Cart</span>
          </Button>

          {/* Notification & Help */}
          <Button
            variant="outline"
            className=""
            onClick={() => (window.location.href = "/orders")}
          >
            <Bell className="h-5 w-5" />
            <span>My Orders</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
