export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Wireless Headphones",
    description: "High-quality sound with noise cancellation",
    price: 199.99,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 2,
    name: "Smartphone",
    description: "Latest model with advanced camera features",
    price: 799.99,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 3,
    name: "Laptop",
    description: "Powerful and lightweight for work and play",
    price: 1299.99,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 4,
    name: "Smartwatch",
    description: "Track your fitness and stay connected",
    price: 249.99,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 5,
    name: "Wireless Earbuds",
    description: "True wireless freedom with great sound",
    price: 149.99,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 6,
    name: "Tablet",
    description: "Perfect for entertainment and productivity",
    price: 499.99,
    image: "/placeholder.svg?height=200&width=200",
  },
];
