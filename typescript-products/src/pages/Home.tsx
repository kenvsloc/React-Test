import { womenShirts } from '@/data/femaleShirt';
import { menShirts } from '@/data/maleShirt';
import { kidsProducts } from '@/data/kidShirt';
import ProductCard from '@/components/common/ProductCard';
import { Link } from 'react-router-dom'; // Thêm Link từ react-router-dom
// import CounterComponent from '../CounterComponent';

const Home = () => {

  // let uuid = self.crypto.randomUUID();
  // console.log(uuid);

  return (
    <>
    <h1 className='text-2xl font-bold ml-[12%] mb-4'>Hot news</h1>
    <div className='flex flex-row flex-wrap justify-center gap-8 mx-[12%] mb-12'>
      {womenShirts.map(product => (
        <Link to={`/women/${product.id}`} key={product.id}>
        <ProductCard  product={product} />
        </Link>
      ))}
    </div>
    <h1 className='text-2xl font-bold ml-[12%] mb-4'>On sale</h1>
    <div className='flex flex-row flex-wrap justify-center gap-8 mx-[12%] mb-12'>
      {menShirts.map(product => (
        <Link to={`/men/${product.id}`} key={product.id}>
        <ProductCard  product={product} />
        </Link>
      ))}
    </div>
    <h1 className='text-2xl font-bold ml-[12%] '>Collection</h1>
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

export default Home;