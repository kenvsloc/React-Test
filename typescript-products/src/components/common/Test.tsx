import { useState } from "react"

import type { Product } from "../../types/productTypes";


function Test() {

    const [cart, setCart] = useState<Product[]>([]);

    const addToCart = (product: Product) => {
        setCart(p => [...p, product]);
    };

    const total = cart.reduce((sum, total) => sum + total.price, 0);

    const products = [
        { id: 1, name: "Apple", price: 1.0 },
        { id: 2, name: "Banana", price: 0.5 },
        { id: 3, name: "Banana", price: 0.5 },
        { id: 4, name: "Banana", price: 0.5 },
        { id: 5, name: "Banana", price: 0.5 },
        { id: 6, name: "Orange", price: 0.75 }
    ];




    return (
    <div>
        <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        {product.name} - ${product.price.toFixed(2)}
                        <button onClick={() => addToCart(product)}>Add to Cart</button>
                    </li>
                ))}
            </ul>
        <h1>Test</h1>

        <h1>Test</h1>
        <h2>Giỏ hàng ({cart.length})</h2>
        {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price.toFixed(2)}
            </li>
          ))}
          <h3>Tổng cộng: ${total}</h3>
        </ul>
            )}
    </div>
)

}

export default Test