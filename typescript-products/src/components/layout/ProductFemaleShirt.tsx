import { womenShirts } from '../../data/femaleShirt';
import ProductCard from '../common/ProductCard';
import { Link } from 'react-router-dom'; // Thêm Link từ react-router-dom
// import CounterComponent from '../CounterComponent';

const PageWomenShirt = () => {

  // let uuid = self.crypto.randomUUID();
  // console.log(uuid);

  return (
    <>
    <div className='flex flex-row flex-wrap justify-center gap-8 mx-[12%]'>
      {womenShirts.map(product => (
        <Link to={`/women/${product.id}`} key={product.id}>
        <ProductCard  product={product} />
        </Link>
      ))}
    </div>
    </>
  );
};

export default PageWomenShirt;