import { useParams } from 'react-router-dom';
import { products } from '../../data/products';
import ProductImageOnly from '../common/ProductImageOnly';
import './ProductList.css';
import { Link } from 'react-router-dom';


const ProductDetail = () => {
  const { id } = useParams(); // Lấy `id` từ URL
  const product = products.find(p => p.id === id);

  if (!product) {
    return <div> Sản phẩm không tồn tại</div>;
  }

  return (
    <>
    <div className='back-to-home'>
        <Link to ={"/"}>
        <button>Go To Home Page</button>
        </Link>
    </div>
    <div className="product-detail">
      <ProductImageOnly product={product}  />
        <div className="product-info">
          <h2>{product.title}</h2>
          <span>{product.category}</span>
          <div className='product-description'>
          <h3>Giá: {product.price} VND</h3>
          <div className='area-text'><p >{product.description}</p></div>
          </div>
          <div>
            <button className='add-to-cart'>Thêm vào giỏ hàng</button>
          </div>
        </div>
    </div>
    </>
  );
};

export default ProductDetail;