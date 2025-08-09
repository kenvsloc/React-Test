import ProductImageOnly from "./features/getImageOnly";
// import type { CartState, CartItem, CartAction } from "@/types/cartTypes";
import { Link,useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { findProductById } from "@/utils/findProductById(id)";
import { useCartReducer } from "@/features/cart/hooks/useCartReducer";
import { Button } from "./ui/button";
import { BeardCrumbTop } from "@/features/beardCrumb";


export default function ProductPage() {
  const { id } = useParams(); // id có thể là string | undefined

  const [state, dispatch] = useCartReducer();
  const { cart, totalQuantity, totalPrice } = state;

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const product = id ? findProductById(id) : null;
  if (!product) {
    return (
      <div className="p-8 text-center">
        <h2>Không tìm thấy sản phẩm!</h2>
        <Link to="/products">
          <Button variant="default">Quay lại danh sách</Button>
        </Link>
      </div>
    );
  }

  const addToCart = () =>
    dispatch({
      type: 'ADD_ITEM',
      payload: { ...product, quantity: 1 },
    });

    const incrementQuantity = (id: string) =>
    dispatch({ type: 'INCREASE_ITEM_QUANTITY', payload: { id }
    });

    const decrementQuantity = (id: string) =>
        dispatch({ type: 'DECREASE_ITEM_QUANTITY', payload: { id }
    });

    const removeProduct = (id: string  ) =>
        dispatch({ type: 'REMOVE_ITEM', payload: { id }
    });

    const clear = () => dispatch({ type: 'CLEAR_CART'
    });

    return (
      <>
        <BeardCrumbTop />
        <div
        className='relative flex justify-center mt-[6%] border-2 border-solid border-indigo-600'>
            <ProductImageOnly product={product} />

            <div className="ml-4">
            <h1 className="text-3xl font-bold">{product.title}</h1>
        <p className="text-gray-600">{product.category}</p>
        <p className="mt-2">{product.description}</p>
        <p className="mt-4 text-2xl text-red-600 font-semibold">
          Giá: {product.price.toFixed(2)} ₫
        </p>
        <button
          onClick={addToCart}
          className="absolute w-[24%] bottom-0  mt-6 px-4 py-2 bg-red-600/60 text-white rounded"
        >
          Thêm vào giỏ
        </button>
            </div>
            {/* Mini cart */}
        </div>
        <div className="absolute z-90 top-0 right-0 mt-8 border rounded p-4">
          <h3>Giỏ hàng ({totalQuantity})</h3>
          {cart.length === 0 ? (
            <p>Trống</p>
          ) : (
            <ul className="space-y-2">
              {cart.map(item => (
                <li key={item.id} className="flex gap-2 items-center">
                  <h2>{item.title} x {item.quantity}</h2>
                  <button onClick={() => decrementQuantity(item.id)}>-</button>
                  <button onClick={() => incrementQuantity(item.id)}>+</button>
                  <button onClick={() => removeProduct(item.id)}>×</button>
                </li>
              ))}
            </ul>
          )}
          <p className="font-bold mt-2">Tổng: {totalPrice.toLocaleString()} ₫</p>
          <button
            onClick={clear}
            className="mt-2 px-4 py-2 bg-red-500 text-white rounded"
          >
            Xoá hết
          </button>
        </div>


      </>
    )
}