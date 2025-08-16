import { Link,useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ProductImageOnly from './ProductImageOnly';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

// Types
import type { ProductProps, CartItem, CartState } from '../../types/typesData';

// Components

// Utils
import { findProductById } from '../../utils/findProductById(id)';
import { Button } from '../ui/button';

const ProductDetail = () => {
  const { id } = useParams(); // id có thể là string | undefined

  const [cart, setCart] = useState<CartItem[]>(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Lưu giỏ hàng vào localStorage mỗi khi cart thay đổi
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  // Hàm xử lý tăng/giảm số lượng
  const incrementQuantity = (productId: string) => {
    setCart(prev =>
      prev.map(item =>
        item.id === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decrementQuantity = (productId: string) => {
    setCart(prev =>
      prev
        .map(item =>
          item.id === productId && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter(item => item.quantity > 0)
    );
  };

  const removeFromCart = (productId: string) => {
    setCart(prev => prev.filter(item => item.id !== productId));
  };

  // Tính tổng số lượng và giá trị giỏ hàng
  const getCartState = (): CartState => {
    const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    return { cart, totalQuantity, totalPrice };
  };

  const cartState = getCartState();

  // Thêm sản phẩm vào giỏ hàng
  const addToCart = (product: ProductProps) => {
    if (!product.id) return;

    setCart(prev => {
      const existingItem = prev.find(item => item.id === product.id);

      if (existingItem) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  // Kiểm tra nếu id không tồn tại
  if (!id) {
    return <div>Mã sản phẩm không hợp lệ</div>;
  }

  // Tìm sản phẩm theo ID
  const product = findProductById(id);

  // Nếu không tìm thấy sản phẩm
  if (!product) {
    return (
      <div>
        <h2>Không tìm thấy sản phẩm!</h2>
        <Link to="/products">
          <Button variant="default">Quay lại danh sách sản phẩm</Button>
        </Link>
      </div>
    );
  }

  return (
    <>
      <div className="ml-[6%] font-medium texl-xl mb-8">
      <Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/women">Women</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>{product.category}</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>
      </div>

      <div className="flex justify-center ">
        <ProductImageOnly product={product} />

        <div className="ml-8">
          <h2 className='font-bold text-xl'>{product.title}</h2>
          <span className="text-gray-900/70 mb-8">{product.category}</span>
          <div className="product-description">
          <div className="area-text">
              <p>{product.description}</p>
            </div>
            <h3 className='text-2xl font-medium text-red-700 mt-[40%]'>Giá: {product.price.toFixed(2)} VND</h3>
            <Button
            onClick={() => addToCart(product)}
             className='mt-[28%] w-full text-xl'
             variant='default'>Add to cart</Button>
          </div>

        </div>
      </div>

      {/* Mini Cart Preview */}
      <div className="w-full z-40 relative right-0 bg-zinc-500/50 border-amber-200 border-2">
        {cartState.cart.length === 0 ? (
          <p>Giỏ hàng trống</p>
        ) : (
          <ul>
            {cartState.cart.map(item => (
              <li key={item.id}>
                <span>{item.title}</span> -{' '}
                <button onClick={() => decrementQuantity(item.id)}>-</button>
                {' x ' + item.quantity}
                <button onClick={() => incrementQuantity(item.id)}>+</button>{' '}
                {(item.price * item.quantity).toFixed(2)} VND
                <button
                  className="remove-cart"
                  onClick={() => removeFromCart(item.id)}
                >
                  X
                </button>
              </li>
            ))}
            <div className="total-price">
              <h3>Tổng cộng: {cartState.totalPrice.toFixed(2)} VND</h3>
              <h3>Gio hang: {cartState.cart.length}</h3>
            </div>
          </ul>
        )}
      </div>
    </>
  );
};

export default ProductDetail;