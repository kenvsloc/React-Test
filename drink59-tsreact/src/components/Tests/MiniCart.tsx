import { useLocalCart } from '@/hooks/useLocalCart';

export default function CartMini() {
  const { cart, addItem, totalPrice } = useLocalCart();

  return (
    <div className="p-4 border rounded">
      <button
        onClick={() => addItem({ id: '1', title: 'Tee', price: 150000 })}
      >
        Add
      </button>
      <ul>
        {cart.map(i => (
          <li key={i.id}>{i.title} x {i.quantity}</li>
        ))}
      </ul>

      <p>Tổng: {totalPrice.toLocaleString()} ₫</p>
    </div>
  );
}