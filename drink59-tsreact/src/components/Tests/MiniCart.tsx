import { useLocalCart } from '@/hooks/useLocalCart';
import { Button } from '../ui/button';


export default function CartMini() {
  const { cart, totalQuantity, totalPrice, addItem, removeItem, clearCart, decrementQuantity, incrementQuantity} = useLocalCart();

  return (

    <div className="p-4 border rounded ">
      {cart.length === 0 ? (
            <p>Trống</p>
          ) : (

            <ul className="space-y-2 flex flex-col">
              <>
              {cart.map(item => (
                <li key={item.id} className="flex font-semibold text-xl gap-2 items-center my-2 ">
                  <h2 className="text-red-600 mr-[8%]">({item.title}*{item.quantity}) x {item.quantity}</h2>
                  <h2 className="text-red-600 mr-[8%]">{item.price}</h2>
                  <Button variant="secondary" onClick={() => decrementQuantity(item.id)}>-</Button>
                  <Button variant="secondary" onClick={() => incrementQuantity(item.id)}>+</Button>
                  <Button variant="destructive" onClick={() => removeItem(item.id)}>×</Button>

                </li>

              ))}
              <p className="font-bold mt-2 text-xl">Tổng: {totalPrice.toLocaleString()} ₫</p>
              </>
            </ul>
            <div className='relative flex flex-col my-2'>
            <div className='my-2 font-medium text-gray-600 text-2md'>
        <p>SubTotal: {totalPrice.toLocaleString()} ₫</p>
        <p>Shipping:  <span className="underline">Freeship</span> 0 ₫</p>
        <p>Discount Your (8%):{discountAmount.toLocaleString()} ₫</p>
        </div>
        <p className="z-99 font-bold mt-2 text-xl">Tổng: {total.toFixed(2)} ₫</p>
        <div className="w-[80%] inline-flex flex-row items-center relative">
        <Button className="w-full hover:cursor-pointer mt-4" variant="default">Payment</Button>
        <DropdownMenu>
      <DropdownMenuTrigger>
        <AlignRight className="ml-16 w-6 h-6 cursor-pointer hover:bg-gray-200" />
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

          )}
    </div>

  );
}