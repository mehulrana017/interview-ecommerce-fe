export interface CartItem {
  id: string;
  name: string;
  quantity: number;
  price: number;
}

export interface DiscountData {
  discountCode: string;
  discountPercentage: number;
}

export interface OrderSummary {
  totalItems: number;
  totalPurchaseAmount: number;
  discountCodesUsed: string[];
  totalDiscountAmount: number;
}
