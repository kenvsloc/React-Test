import type { ProductProps } from '../../types/typesData';
import { useState } from 'react';


// import '.adminTable.css';


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
        <img
          className='item-image'
          width="80"
          height="80"
          src={currentImage}
          alt={product.title}
          loading="lazy"
          onError={handleImageError}
        />
      </div>
    </div>
  );
};

export default ProductTable;