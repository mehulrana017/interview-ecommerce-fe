"use client";

import { useOrder } from "@/app/hooks/useOrder";
import { OrderSummary as OrderSummaryType } from "@/app/types";
import React, { useEffect, useState } from "react";
import OrderSummary from "./components/OrderSummary";
import DiscountCodesList from "./components/DiscountCodeList";

const OrdersPage = () => {
  const { getOrderSummary } = useOrder();
  const [orderSummary, setOrderSummary] = useState<OrderSummaryType | null>(
    null
  );

  const fetchOrderSummary = async () => {
    try {
      const response = await getOrderSummary();
      setOrderSummary(response);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchOrderSummary();
  }, []);

  if (!orderSummary) {
    return (
      <div className="container mx-auto px-4 py-8">
        No order data available.
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Orders</h1>

      <OrderSummary summary={orderSummary} />

      <DiscountCodesList discountCodes={orderSummary.discountCodesUsed} />
    </div>
  );
};

export default OrdersPage;
