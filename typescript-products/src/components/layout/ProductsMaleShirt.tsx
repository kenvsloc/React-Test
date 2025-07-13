import { menShirts } from '../../data/maleShirt';
import ProductCard from '../common/ProductCard';
import { Link } from 'react-router-dom'; // Thêm Link từ react-router-dom
import './ProductList.css';
// import CounterComponent from '../CounterComponent';


const ProductList2 = () => {

  // let uuid = self.crypto.randomUUID();
  // console.log(uuid);

  return (
    <>

    <div className='product-list'>
      {menShirts.map(product => (
        <Link to={`/men/${product.id}`} key={product.id}>
        <ProductCard  product={product} />
        </Link>
      ))}
    </div>
    </>
  );
};

export default ProductList2;