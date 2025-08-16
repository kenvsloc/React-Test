import { menShirts } from '../../data/maleShirt';
import ProductCard from '../common/ProductCard';
import { Link } from 'react-router-dom'; // Thêm Link từ react-router-dom
// import CounterComponent from '../CounterComponent';


const PageMenShirt = () => {

  // let uuid = self.crypto.randomUUID();
  // console.log(uuid);

  return (
    <>

    <div className='flex flex-row flex-wrap justify-center gap-8 mx-[12%]'>
      {menShirts.map(product => (
        <Link to={`/men/${product.id}`} key={product.id}>
        <ProductCard  product={product} />
        </Link>
      ))}
    </div>
    </>
  );
};

export default PageMenShirt;