import { menShirts } from '../../data/maleShirt';
import ProductCard2 from '../common/ProductCard2';
import { Link } from 'react-router-dom'; // Thêm Link từ react-router-dom
import './ProductList.css';
// import CounterComponent from '../CounterComponent';


const ProductList2 = () => {

  // let uuid = self.crypto.randomUUID();
  // console.log(uuid);

  return (
    <>

    <div className='product-list'>
      {menShirts.map(maleShirts => (
        <Link to={`/products/${maleShirts.id}`} key={maleShirts.id}>
        <ProductCard2  maleShirts={maleShirts} />
        </Link>
      ))}
    </div>
    </>
  );
};

export default ProductList2;