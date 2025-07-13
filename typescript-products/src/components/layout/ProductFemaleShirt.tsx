import { womenShirts } from '../../data/femaleShirt';
import ProductCard from '../common/ProductCard';
import { Link } from 'react-router-dom'; // Thêm Link từ react-router-dom
import './ProductList.css';
// import CounterComponent from '../CounterComponent';


const ProductList = () => {

  // let uuid = self.crypto.randomUUID();
  // console.log(uuid);

  return (
    <>


    <div className='product-list'>
      {womenShirts.map(product => (
        <Link to={`/women/${product.id}`} key={product.id}>
        <ProductCard  product={product} />
        </Link>
      ))}
    </div>
    </>
  );
};

export default ProductList;