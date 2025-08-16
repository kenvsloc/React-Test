import { useLocalCart } from '@/hooks/useLocalCart';
import { Button } from '../ui/button';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { calculateServiceTax } from "@/utils/taxUtils"; // Điều chỉnh đường dẫn
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../ui/dropdown-menu';
import { AlignRight, Trash2 } from 'lucide-react';
import CartEmpty from '@/pages/CartEmpty';



export default function CartMini2() {
  const { cart, totalQuantity, totalPrice, addItem, removeItem, clearCart, decrementQuantity, incrementQuantity} = useLocalCart();

  const { subtotal, taxAmount, total } = calculateServiceTax(totalPrice, 8);


  const discountRate = 0.08;

  const discountAmount = totalPrice * discountRate; // Số tiền được giảm





  return (
    <div className='w-full flex items-center justify-center bg-gray-100'>

    <div className="grid min-w-[60%] w-[80&] [&>div]:max-h-[300px] [&>div]:border [&>div]:rounded">
            <Table>
                <TableHeader>
                    <TableRow className="[&>*]:whitespace-nowrap">
                        <TableHead className="pl-4">Price (USD)</TableHead>
                        <TableHead>Product Name</TableHead>
                        <TableHead>Category</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
  {cart.length === 0 ? (
    <TableRow>
      <TableCell colSpan={4} className="text-center py-8">
        <CartEmpty />
      </TableCell>
    </TableRow>
  ) : (
    cart.map((product) => (
      <TableRow key={product.id} className="odd:bg-muted/50 text-xl">
        <TableCell className="pl-4">
          {product.price * product.quantity}
        </TableCell>
        <TableCell className="font-medium">{product.title}</TableCell>
        <TableCell>{product.price}</TableCell>
        <TableCell className="flex gap-2 items-center">
          <Button variant="secondary" onClick={() => decrementQuantity(product.id)}>-</Button>
          <span className="text-red-600 font-semibold">{product.quantity}</span>
          <Button variant="secondary" onClick={() => incrementQuantity(product.id)}>+</Button>
          <Button variant="destructive" onClick={() => removeItem(product.id)}>×</Button>
        </TableCell>
      </TableRow>
    ))
  )}
  <div className='relative flex flex-col my-2'>
            <div className='my-2 font-medium text-gray-600 text-2md'>
        <p>SubTotal: {subtotal.toLocaleString()} ₫</p>
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
</TableBody>
            </Table>
        </div>
    </div>
  );
}