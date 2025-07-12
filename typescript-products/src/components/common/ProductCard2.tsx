import type { ProductProps } from '../../types/typesData';
import './ProductCard.css';

interface ProductCardProps {
  maleShirts: ProductProps;
}


const ProductCard2 = ({ maleShirts }: ProductCardProps) => {


  const imageUrl = `/images/fashionMale/${maleShirts.image}`;


  return (
    <div className='products-container' >
     <img className='product-image' src={imageUrl} alt={maleShirts.title} loading="lazy" />
      <h2>{maleShirts.id}</h2>
        <div className='product-details'>
          <p className='product-catalog'>{maleShirts.category}</p>
          <p><strong>{maleShirts.price.toFixed(2)} VND</strong></p>
        </div>

    </div>
  );
};

export default ProductCard2;