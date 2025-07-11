import type { ProductProps } from '../../types/typesData';
// import '.adminTable.css';
import './AdminTable.css';


interface ProductCardProps {
  product: ProductProps;
}


const ProductTable = ({ product }: ProductCardProps) => {


  const imageUrl = `/images/products/${product.image}`;


  return (
    <div className='products-table flex_row' >
        <div className='flex_column item-table'>
            <p>{product.title}</p>
        </div>
        <div className='flex_column item-table'>
            <p>{product.category}</p>
        </div>
        <div className='flex_column item-table'>
            <p>{product.price}</p>
        </div>
        <div className='flex_column item-table'>
            <p>{product.stock}</p>
        </div>
        <div className='flex_column item-table'>
    <img className='item-image' src={imageUrl} alt={product.title} loading="lazy" />
        </div>

    </div>
  );
};

export default ProductTable;