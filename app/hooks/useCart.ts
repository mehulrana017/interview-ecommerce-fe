import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { CartItem } from "../types";

export const useCart = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchCart = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/cart");
      setCart(response.data);
    } catch (err) {
      console.error(err);
      toast.error("Failed to fetch cart data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const updateQuantity = (id: string, newQuantity: number) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(0, newQuantity) } : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return { cart, loading, updateQuantity, removeItem };
};
