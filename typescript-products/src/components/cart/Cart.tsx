// import React from "react";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import { addItem } from "../../features/cart/cartSlice";


const Cart = () => {
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart.cart);
  const totalQuantity = useAppSelector((state) => state.cart.totalQuantity);
  const totalPrice = useAppSelector((state) => state.cart.totalPrice);

  const handleAddItem = () => {
    const newItem = {
      id: 'p1',
      name: 'Áo thun',
      price: 150000,
    };
    dispatch(addItem(newItem));
  };

  return (
    <div>
      <h2>🛒 Giỏ hàng</h2>
      <button onClick={handleAddItem}>Thêm sản phẩm</button>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} - {item.price}₫ x {item.quantity}
          </li>
        ))}
      </ul>
      <p>Tổng số lượng: {totalQuantity}</p>
      <p>Tổng tiền: {totalPrice.toLocaleString()}₫</p>
    </div>
  );
};

export default Cart;
