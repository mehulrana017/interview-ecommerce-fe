import ProductCard from "@/components/ProductCard";
import { Product, products } from "@/components/ProductCard/data/mockData";
import axios from "axios";
import React from "react";
import { toast } from "react-hot-toast";
import { v4 as uuidv4 } from "uuid"; // Import the uuid function

const ProductPage = () => {
  const handleAddToCart = async (product: Product) => {
    const cartData = {
      id: uuidv4(),
      name: product.name,
      quantity: 1,
      price: product.price,
    };

    try {
      const res = await axios.post(
        "http://localhost:5000/api/cart/add",
        cartData
      );
      if (res.status === 201 || res.data.success === true) {
        toast.success("Added to cart");
      }
    } catch (error) {
      console.error("Error adding product to cart:", error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Our Products</h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
