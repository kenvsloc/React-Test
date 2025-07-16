import type { ProductProps } from '../types/typesData';

//import Data TS
import { womenShirts } from '../data/femaleShirt';
import { menShirts } from '../data/maleShirt';
import { kidsProducts } from '../data/kidShirt';

export const findProductById = (id: string): ProductProps | null => {
  return (
    womenShirts.find(p => p.id === id) ||
    menShirts.find(p => p.id === id) ||
    kidsProducts.find(p => p.id === id) ||
    null
  );
};