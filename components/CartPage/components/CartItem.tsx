import { CartItem as CartItemTypes } from "@/app/types";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Trash2 } from "lucide-react";

interface CartItemProps {
  item: CartItemTypes;
  updateQuantity: (id: string, newQuantity: number) => void;
  removeItem: (id: string) => void;
}

export const CartItem = ({
  item,
  updateQuantity,
  removeItem,
}: CartItemProps) => (
  <li className="bg-white shadow rounded-lg p-4">
    <div className="flex justify-between items-center">
      <h2 className="text-xl font-semibold">{item.name}</h2>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => removeItem(item.id)}
        aria-label={`Remove ${item.name} from cart`}
      >
        <Trash2 className="h-4 w-4" />
      </Button>
    </div>
    <p className="text-gray-600">Price: ${item.price.toFixed(2)}</p>
    <div className="flex items-center mt-2">
      <Button
        variant="outline"
        size="icon"
        onClick={() => updateQuantity(item.id, item.quantity - 1)}
        aria-label={`Decrease quantity of ${item.name}`}
      >
        <Minus className="h-4 w-4" />
      </Button>
      <span className="mx-2 font-semibold">{item.quantity}</span>
      <Button
        variant="outline"
        size="icon"
        onClick={() => updateQuantity(item.id, item.quantity + 1)}
        aria-label={`Increase quantity of ${item.name}`}
      >
        <Plus className="h-4 w-4" />
      </Button>
    </div>
  </li>
);
