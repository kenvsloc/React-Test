import type { ProductProps } from '../../types/typesData';
import './ProductCard.css';

interface ProductCardProps {
  product: ProductProps;
}


const ProductCard = ({ product }: ProductCardProps) => {


  const imageUrl = `/images/products/${product.image}`;


  return (
    <div className='products-container' >
     <img className='product-image' src={imageUrl} alt={product.title} loading="lazy" />
      <h2>{product.title}</h2>
        <div className='product-details'>
          <p className='product-catalog'>{product.category}</p>
          <p><strong>{product.price.toFixed(2)} VND</strong></p>
        </div>

    </div>
  );
};

export default ProductCard;