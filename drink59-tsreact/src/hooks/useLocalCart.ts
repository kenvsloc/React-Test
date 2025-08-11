// src/hooks/useLocalCart.ts
import { useState, useEffect } from 'react';
import type { CartItem } from '@/types/cartTypes';

const STORAGE_KEY = 'cart';

export const useLocalCart = () => {
  /* 1. Đọc từ localStorage khi mount (SSR-safe) */
  const [cart, setCart] = useState<CartItem[]>(() => {
    if (typeof window === 'undefined') return [];
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  });

  /* 2. Lưu vào localStorage mỗi khi cart thay đổi (CSR) */
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
    }
  }, [cart]);

  /* 3. Actions */
  const addItem = (item: Omit<CartItem, 'quantity'>, qty = 1) =>
    setCart(prev => {
      const exist = prev.find(i => i.id === item.id);
      return exist
        ? prev.map(i =>
            i.id === item.id ? { ...i, quantity: i.quantity + qty } : i
          )
        : [...prev, { ...item, quantity: qty }];
    });

  const removeItem = (id: string) => setCart(prev => prev.filter(i => i.id !== id));
  const clearCart = () => setCart([]);
  const totalQuantity = cart.reduce((s, i) => s + i.quantity, 0);
  const totalPrice = cart.reduce((s, i) => s + i.price * i.quantity, 0);

  return { cart, addItem, removeItem, clearCart, totalQuantity, totalPrice };
};