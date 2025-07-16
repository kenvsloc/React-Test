import { useSelector } from "react-redux";
import type { RootState } from "../app/store";

export const useCartSelector = () => {
  return useSelector((state: RootState) => state.cart);
};

// Lấy mảng sản phẩm trong giỏ
export const useCartItems = () => {
  return useSelector((state: RootState) => state.cart.cart);
};

// Lấy tổng số lượng
export const useCartTotalQuantity = () => {
  return useSelector((state: RootState) => state.cart.totalQuantity);
};

// Lấy tổng giá trị
export const useCartTotalPrice = () => {
  return useSelector((state: RootState) => state.cart.totalPrice);
};

// Kiểm tra giỏ hàng có trống không
export const useIsCartEmpty = () => {
  return useSelector((state: RootState) => state.cart.totalQuantity === 0);
};