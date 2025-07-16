import { useState } from 'react';
import order from '../data/order.json';
import './Shopping.css'


export default function Shopping() {
    const [cart, setCart] = useState([]);


    const totalPrice = cart.reduce((sum, item) =>
       sum + item.price * item.quantity, 0);


    const incrementQuantity = (id) => {
  setCart(prevCart =>
    prevCart.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    )
  );
};

const decrementQuantity = (id) => {
  setCart(prevCart =>
    prevCart
      .map(item =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter(item => item.quantity > 0)
  );
};

const removeFromCart = (id) => {
  setCart(prevCart => prevCart.filter(item => item.id !== id));
};

    const products = [
        { id: 1, name: "Apple", price: 11 ,quantity: 1},
        { id: 2, name: "kiwi", price: 15 ,quantity: 1},
        { id: 3, name: "watermelon", price: 25 ,quantity: 1},
        { id: 4, name: "Coconut", price: 27 ,quantity: 1},
        { id: 5, name: "Banana", price: 36 ,quantity: 1},
        { id: 6, name: "Orange", price: 12 ,quantity: 1}
    ];

    const orders = order;

        const customers = orders.map(order => ({
            id: order.id,
            customer: order.customer,
            total: order.total,
            date: new Date(order.createdAt).toLocaleDateString('en-US',{
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            }),
            status: order.status
        }));
        console.log(customers); // ["Alice Smitch", "Bob Johnson", "Charlie Brown
    const numbers = [1, 2, 3, 4, 5,];

    const doubled = numbers.map((n) => n * 2);

    const tripled = numbers.map((props) => props * 3);

    const tened = numbers.map((numbers) => numbers * 10);

    const addToCart = (product) => {
  setCart((prevCart) => {
    const existingItem = prevCart.find(item => item.id === product.id);

    if (existingItem) {
      return prevCart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      return [...prevCart, { ...product, quantity: 1 }];
    }
  });
};

    return (
        <>
        <div className="shopping">
            <h1>Shopping Page</h1>
            <h2>List Oreder</h2>
            <p> this is double : {doubled}</p>
            <p> this is tripled : {tripled}</p>
            <p> this is tened : {tened}</p>

            <h2>Products</h2>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        {product.name} - {product.price.toFixed(2)}VND
                        <button onClick={() => addToCart(product)}>Add to Cart</button>
                    </li>
                ))}
            </ul>

            <h2>Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul>

                    {cart.map((item) => (
                        <li key={item.id}>
                           <span>{item.name} </span>
                            ----<span>
                                Count:{item.quantity}
      <button onClick={() => decrementQuantity(item.id)}>-</button>
                                {item.price.toFixed(2) * item.quantity}VND

      <button onClick={() => incrementQuantity(item.id)}>+</button>

                            </span>

                            <button
      className="remove-cart"
      onClick={() => removeFromCart(item.id)}
    >
      X
    </button>
                        </li>
                    ))}

                    <li className='total'>Total: {totalPrice.toFixed(2)}VND</li>
                </ul>
            )}
        </div>
        </>
    );
}