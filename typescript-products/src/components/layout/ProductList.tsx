import { products } from '../../data/products';
import ProductCard from '../common/ProductCard';
import { Link } from 'react-router-dom'; // Thêm Link từ react-router-dom
import './ProductList.css';


const ProductList = () => {
  return (
    <>

    <div className='product-list'>
      {products.map(product => (
        <Link to={`/products/${product.id}`} key={product.id}>
        <ProductCard  product={product} />
        </Link>
      ))}
    </div>
    </>
  );
};

export default ProductList;