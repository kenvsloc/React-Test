import type { ProductProps } from '../../types/typesData';
// import '.adminTable.css';
import './AdminTable.css';


interface ProductCardProps {
  product: ProductProps;
}


const ProductTable = ({ product }: ProductCardProps) => {


  const imageUrl = `/images/fashionFemale/${product.image}`;


  return (
    <>
    <div className='products-table flex_row' >
        <div className=' item-table '>
                      <p>{product.id}</p>
          <img className='item-image' src={imageUrl} alt={product.title} loading="lazy" />
        </div>
        <div className='flex_column item-table title'>
            <p>{product.title}</p>
        </div>
        <div className='flex_column item-table title'>
            <p>{product.category}</p>
        </div>
        <div className='flex_column item-table title'>
            <p>{product.buy.toFixed(2)}Vnd</p>
        </div>
        <div className='flex_column item-table title'>
            <p>{product.stock}</p>
        </div>

    </div>
    </>
  );
};

export default ProductTable;