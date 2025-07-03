import type { ProductProps } from '../types/typesData';

export const products: ProductProps[] = [
  {
    id: "1",
    title: "Wireless Headphones",
    description: "High-quality wireless headphones with noise cancellation.",
    price: 99.99,
    stock: 50,
    image: "product-1.jpg"
  },
  {
    id: "2",
    title: "Smartphone X",
    description: "Latest smartphone with advanced camera and fast processor.",
    price: 899.99,
    stock: 200,
    image: "product-2.png"

  },
  {
    id: "3",
    title: "Bluetooth Speaker",
    description: "Portable speaker with deep bass and long battery life.",
    price: 49.99,
    stock: 150,
    image: "product-3.png"

  },
  {
    id: "4",
    title: "Laptop Pro",
    description: "Powerful laptop for developers and designers.",
    price: 1499.99,
    stock: 80,
    image: "product-4.png"
  },
  {
    id: "5",
    title: "Digital Watch",
    description: "Stylish digital watch with multiple functions.",
    price: 199.99,
    stock: 300,
    image: "product-5.png"
  }
];