export interface ProductProps {
  id: string;
  title: string;
  description: string;
  price: number;
  stock: number;
  image?: string; // Optional image property
}