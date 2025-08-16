import ProductImageOnly from "./features/getImageOnly";
// import type { CartState, CartItem, CartAction } from "@/types/cartTypes";
import { Link,useParams } from "react-router-dom";
import { findProductById } from "@/utils/findProductById(id)";
import { Button } from "./ui/button";
import { BeardCrumbTop } from "@/features/beardCrumb";
import { AlignRight, Trash2 } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { useLocalCart } from "@/hooks/useLocalCart";


export default function ProductPage() {
  const { id } = useParams<{ id: string }>();
  const { cart, totalQuantity, totalPrice, addItem, removeItem, clearCart, decrementQuantity, incrementQuantity} = useLocalCart();

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

  return (
    <>
      <BeardCrumbTop />
      <div className="relative flex justify-center mt-[6%] border-2 border-solid border-indigo-600">
        <ProductImageOnly product={product} />
        <div className="ml-4">
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <p className="text-gray-600">{product.category}</p>
          <p className="mt-2">{product.description}</p>
          <p className="mt-4 text-2xl text-red-600 font-semibold">
            Giá: {product.price.toFixed(2)} ₫
          </p>
          <button
            onClick={() => addItem(product)}
            className="absolute w-[24%] bottom-0 mt-6 px-4 py-2 bg-red-600/60 text-white rounded cursor-pointer"
          >
            Thêm vào giỏ
          </button>
        </div>

        {/* Mini Cart */}
        <div className="absolute z-90 top-0 right-0 border rounded p-4 w-[512px] flex flex-col justify-center">
          <h3 className="font-medium text-lg">Giỏ hàng ({totalQuantity})</h3>
          {cart.length === 0 ? (
            <p>Trống</p>
          ) : (
            <ul className="space-y-2">
              {cart.map(item => (
                <li key={item.id} className="flex font-semibold text-xl gap-2 items-center my-2 ">
                  <h2 className="text-red-600 mr-[8%]">{item.title} x {item.quantity}</h2>
                  <Button variant="secondary" onClick={() => decrementQuantity(item.id)}>-</Button>
                  <Button variant="secondary" onClick={() => incrementQuantity(item.id)}>+</Button>
                  <Button variant="destructive" onClick={() => removeItem(item.id)}>×</Button>
                </li>
              ))}
            </ul>
          )}
          <p className="font-bold mt-2">Tổng: {totalPrice.toLocaleString()} ₫</p>
          <div className="inline-flex flex-row my-2">
            <Button className="w-[80%] hover:cursor-pointer" variant="default">Payment</Button>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <AlignRight className="ml-6 w-6 h-6 cursor-pointer hover:bg-gray-200" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <button
                    onClick={clearCart}
                    className="inline-flex flex-row gap-2 px-4 py-2 bg-red-500 text-white rounded hover:cursor-pointer hover:bg-red-700 active:bg-red-900"
                  >
                    <Trash2 className="w-4 h-4 mt-1" />
                    Xoá giỏ hàng
                  </button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </>
  );
}