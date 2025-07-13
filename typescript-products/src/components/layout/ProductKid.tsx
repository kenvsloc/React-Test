// import { menShirts } from '../../data/maleShirt';
import { kidsProducts } from '../../data/kidShirt';
import ProductCard from '../common/ProductCard';
import { Link } from 'react-router-dom'; // Thêm Link từ react-router-dom
import './ProductList.css';
// import CounterComponent from '../CounterComponent';


const ProductList3 = () => {

  // let uuid = self.crypto.randomUUID();
  // console.log(uuid);

  return (
    <>

    <div className='product-list'>
      {kidsProducts.map(product => (
        <Link to={`/kids/${product.id}`} key={product.id}>
        <ProductCard  product={product} />
        </Link>
      ))}
    </div>
    </>
  );
};

export default ProductList3;