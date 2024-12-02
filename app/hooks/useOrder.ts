import axios from "axios";
import { CartItem } from "../types";

export const useOrder = () => {
  const placeOrder = async (
    cart: CartItem[],
    subtotal: number,
    discountedAmount: number,
    discountCode: string | null
  ) => {
    try {
      // Prepare order data
      const orderData = {
        items: cart,
        subtotal,
        discountedAmount,
        discountCode,
      };

      // API request to place the order
      const response = await axios.post(
        "http://localhost:5000/api/order/place",
        orderData
      );

      if (response.status === 201 || response.data.success) {
        alert("Order placed successfully!");
        // Clear cart or redirect to a success page
      } else {
        alert("Failed to place the order. Please try again.");
      }
    } catch (error) {
      console.error("Error placing the order:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  const getOrderSummary = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/admin/summary"
      );
      return response.data.data;
    } catch (err) {
      console.error(err);
    }
  };

  return { placeOrder, getOrderSummary };
};
