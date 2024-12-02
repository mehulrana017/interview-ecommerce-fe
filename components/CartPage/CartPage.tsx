"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Toaster } from "react-hot-toast";
import { CartItem } from "./components/CartItem";
import { useCart } from "@/app/hooks/useCart";
import { useDiscount } from "@/app/hooks/useDiscount";
import { useOrder } from "@/app/hooks/useOrder";

const CartPage = () => {
  const { cart, loading, updateQuantity, removeItem } = useCart();
  const {
    discountCode,
    setDiscountCode,
    appliedDiscount,
    generatedDiscount,
    applyDiscount,
    requestDiscountCode,
  } = useDiscount();

  const { placeOrder } = useOrder();

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const discountAmount = appliedDiscount
    ? (subtotal * appliedDiscount.discountPercentage) / 100
    : 0;
  const total = subtotal - discountAmount;

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );

  return (
    <div className="container mx-auto px-4 py-8">
      <Toaster position="top-right" />
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
      {cart.length > 0 ? (
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <ul className="space-y-4">
              {cart.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  updateQuantity={updateQuantity}
                  removeItem={removeItem}
                />
              ))}
            </ul>
          </div>
          <div>
            <div className="bg-white shadow rounded-lg p-4">
              <h2 className="text-2xl font-bold mb-4">Checkout</h2>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Discount:</span>
                  <span>-${discountAmount.toFixed(2)}</span>
                </div>
                <Separator />
                <div className="flex justify-between font-bold">
                  <span>Total:</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
              <div className="mt-4">
                <Label htmlFor="discountCode">Discount Code</Label>
                <div className="flex mt-1">
                  <Input
                    id="discountCode"
                    value={discountCode}
                    onChange={(e) => setDiscountCode(e.target.value)}
                    className="flex-grow"
                  />
                  <Button onClick={applyDiscount} className="ml-2">
                    Apply
                  </Button>
                </div>
              </div>
              <div className="mt-4">
                <Button onClick={requestDiscountCode}>
                  Request Discount Code
                </Button>
                {generatedDiscount && (
                  <div className="mt-2 text-gray-600">
                    <span>Use this code: </span>
                    <strong>{generatedDiscount.discountCode}</strong>
                    <span> ({generatedDiscount.discountPercentage}% off)</span>
                  </div>
                )}
              </div>
              <Button
                onClick={() =>
                  placeOrder(
                    cart,
                    subtotal,
                    discountAmount,
                    appliedDiscount?.discountCode || null
                  )
                }
                className="w-full mt-4"
              >
                Proceed to Checkout
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-600">Your cart is empty.</p>
      )}
    </div>
  );
};

export default CartPage;
