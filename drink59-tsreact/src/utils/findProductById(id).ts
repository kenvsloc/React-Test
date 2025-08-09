import type { ProductProps } from '../types/typesData';
import { CoffeeProps } from '../data/DtCoffee';
import { TeaProps } from '../data/DtTea';
import { SmoothieProps } from '../data/DtSmoothie';

export const findProductById = (id: string): ProductProps | null => {
  return (
    CoffeeProps.find(p => p.id === id) ||
    SmoothieProps.find(p => p.id === id) ||
    TeaProps.find(p => p.id === id) ||
    null
  );
};