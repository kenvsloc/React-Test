import { useState } from 'react';
import order from '../data/order.json';

export default function Shopping() {
    const [cart, setCart] = useState([]);

    const products = [
        { id: 1, name: "Apple", price: 1.0 },
        { id: 2, name: "Banana", price: 0.5 },
        { id: 3, name: "Banana", price: 0.5 },
        { id: 4, name: "Banana", price: 0.5 },
        { id: 5, name: "Banana", price: 0.5 },
        { id: 6, name: "Orange", price: 0.75 }
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
        setCart([...cart, product]);
    };

    return (
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
                        {product.name} - ${product.price.toFixed(2)}
                        <button onClick={() => addToCart(product)}>Add to Cart</button>
                    </li>
                ))}
            </ul>

            <h2>Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul>
                    {cart.map((item, index) => (
                        <li key={index}>
                            {item.name} - ${item.price.toFixed(2)}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}