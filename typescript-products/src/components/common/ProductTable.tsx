import type { ProductProps } from '../../types/typesData';
import { useState } from 'react';

// import '.adminTable.css';
import './AdminTable.css';


interface ProductCardProps {
  product: ProductProps;
}


const ProductTable = ({ product }: ProductCardProps) => {
  const [currentImage, setCurrentImage] = useState(() => {
    // Mặc định là female nếu không có type
    const folder = product.type === 'male' ? 'fashionMale'
                     : product.type === 'kids' ? 'fashionKid'
                     : product.type === 'accessory' ? 'fashionAccessory'
                     : 'fashionFemale';

    return `/images/${folder}/${product.image}`;
  });

  const defaultImage = '/images/default-product.jpg';

  const handleImageError = () => {
    setCurrentImage(defaultImage);
  };

  return (
    <div className='products-table flex_row'>
      <div className='item-table'>
        <p>{product.id}</p>
        <img
          className='item-image'
          src={currentImage}
          alt={product.title}
          loading="lazy"
          onError={handleImageError}
        />
      </div>

      <div className='flex_column item-table title'>
        <p>{product.title}</p>
      </div>
      <div className='flex_column item-table title'>
        <p>{product.category}</p>
      </div>
      <div className='flex_column item-table title'>
        <p>{product.buy.toFixed(2)} VND</p>
      </div>
      <div className='flex_column item-table title'>
        <p>{product.stock}</p>
      </div>
    </div>
  );
};

export default ProductTable;