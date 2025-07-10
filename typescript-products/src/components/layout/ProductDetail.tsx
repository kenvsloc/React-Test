import { useParams } from 'react-router-dom';
import { products } from '../../data/products';
import ProductImageOnly from '../common/ProductImageOnly';
import './ProductList.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import type { CartItem, CartState } from '../../types/typesData';
import type { ProductProps } from '../../types/typesData';

const ProductDetail = () => {
  const { id } = useParams(); // Lấy `id` từ URL
  const product = products.find(p => p.id === id);

  const [cart, setCart] = useState<CartItem[]>([]);

  const getCartState = (): CartState => {
    const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

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
      <div className="mini-cart">
        <h3>Giỏ hàng ({cartState.totalQuantity})</h3>
        {cartState.cart.length === 0 ? (
          <p>Giỏ hàng trống</p>
        ) : (
          <ul>
            {cartState.cart.map(item => (
              <li key={item.id}>
                {item.title} x{item.quantity} = ${(item.price * item.quantity).toFixed(2)}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default ProductDetail;