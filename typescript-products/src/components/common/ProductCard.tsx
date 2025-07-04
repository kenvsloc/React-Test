import type { ProductProps } from '../../types/typesData';
import './ProductCard.css';
import { useState } from 'react';

interface ProductCardProps {
  product: ProductProps;
}


const ProductCard = ({ product }: ProductCardProps) => {

  const [quantity, setQuantity] = useState(1);
  const add = () => { setQuantity(quantity + 1);}
  const subtract = () =>
  {
    if (quantity >= 1) {
      setQuantity(quantity - 1);
    }
  }


  const imageUrl = `/images/products/${product.image}`;


  return (
    <div className='products-container' >
     <img className='product-image' src={imageUrl} alt={product.title} loading="lazy" />
      <h2>{product.title}</h2>
      <div className='product-details'>
      <p>{product.description}</p>
      <p><strong>${product.price.toFixed(2)}</strong></p>
      <div>
        <button onClick={subtract}>-</button>
        <button >{quantity}</button>
        <button onClick={add}>+</button>
      </div>

      </div>
    </div>
  );
};

export default ProductCard;