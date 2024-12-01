import Image from "next/image";
import { Product } from "./data/mockData";
import { Button } from "../ui/button";

interface ProductCardProps {
  product: Product;
  handleAddToCart: (product: Product) => void;
}

export function ProductCard({ product, handleAddToCart }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <Image
        src={product.image}
        alt={product.name}
        width={200}
        height={200}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold">
            ${product.price.toFixed(2)}
          </span>
          <Button
            onClick={() => handleAddToCart(product)}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
}
