import { useParams } from 'react-router-dom';
import { products } from '../../data/products';
import ProductImageOnly from '../common/ProductImageOnly';
import './ProductList.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import type { CartItem, CartState } from '../../types/typesData';
import type { ProductProps } from '../../types/typesData';

const ProductDetail = () => {

  
  const { id } = useParams(); // Lấy `id` từ URL
  const product = products.find(p => p.id === id);

  const [cart, setCart] = useState<CartItem[]>(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });


  // Tự động lưu vào localStorage mỗi khi cart thay đổi
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  //button +/-
  const incrementQuantity = (id: string) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQuantity = (id: string) => {
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

  const removeFromCart = (id: string) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

// Tính toán state
  const getCartState = (): CartState => {
    const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) =>
      sum + item.price * item.quantity, 0);

    return {
      cart,
      totalQuantity,
      totalPrice
    };
  };



  const cartState = getCartState();

  const addToCart = (product: ProductProps) => {
    if (!product.id) return;

    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);

      if (existingItem) {
        // Tăng số lượng nếu đã tồn tại
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // Thêm mới nếu chưa có
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  if (!product) {
    return <div>Sản phẩm không tồn tại</div>;
  }

  return (
    <>
      <div className="back-to-home">
        <Link to="/">
          <button>Quay lại Trang chủ</button>
        </Link>
      </div>

      <div className="product-detail">
        <ProductImageOnly product={product} />

        <div className="product-info">
          <h2>{product.title}</h2>
          <span>{product.category}</span>
          <div className="product-description">
            <h3>Giá: {product.price} VND</h3>
            <div className="area-text">
              <p>{product.description}</p>
            </div>
          </div>
          <div>
            <button
              className="add-to-cart"
              onClick={() => addToCart(product)}
            >
              Thêm vào giỏ hàng
            </button>
          </div>
        </div>
      </div>

      {/* Mini Cart Preview */}
      <div className="pay-cart">
        {cartState.cart.length === 0 ? (
          <p>Giỏ hàng trống</p>
        ) : (
          <ul>
            {cartState.cart.map(item => (
              <li key={item.id}>
                <span>{item.title}</span>
                <button onClick={() => decrementQuantity(item.id)}>-</button> x {item.quantity}
                <button onClick={() => incrementQuantity(item.id)}>+</button>
                {(item.price * item.quantity).toFixed(2)}VND
                <button className="remove-cart" onClick={() => removeFromCart(item.id)}>X</button>
              </li>
            ))}
            <div className="total-price">
            <h3  >Giỏ hàng ({cartState.totalPrice.toFixed(2)}VND)</h3>
            </div>
          </ul>
        )}
      </div>
    </>
  );
};

export default ProductDetail;