// import { menShirts } from '../../data/maleShirt';
import { kidsProducts } from '../../data/kidShirt';
import ProductCard from '../common/ProductCard';
import { Link } from 'react-router-dom'; // Thêm Link từ react-router-dom
// import CounterComponent from '../CounterComponent';


const PageKidShirt = () => {

  // let uuid = self.crypto.randomUUID();
  // console.log(uuid);

  return (
    <>

    <div className='flex flex-row flex-wrap justify-center gap-8 mx-[12%]'>
      {kidsProducts.map(product => (
        <Link to={`/kids/${product.id}`} key={product.id}>
        <ProductCard  product={product} />
        </Link>
      ))}
    </div>
    </>
  );
};

export default PageKidShirt;