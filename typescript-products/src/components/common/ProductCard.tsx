import type { ProductProps } from '../../types/typesData';
import {getImagePath, getFallbackImagePath , DEFAULT_IMAGE_URL
} from '../../features/productConfig';
import  { useState } from 'react';
import { Button } from '../ui/button';
import { Heart } from 'lucide-react';


interface ProductCardProps {
  product: ProductProps;
}


const ProductCard = ({ product }: ProductCardProps) => {


  // const imageUrl = `/images/fashionFemale/${product.image}`;
  const [currentImage, setCurrentImage] = useState(() => {
    return getImagePath(product.type, product.image);
  });

  const handleError = () => {
    const fallbackPaths = getFallbackImagePath(product.type, product.image);

    const tryNextImage = (paths: string[]) => {
      if (paths.length === 0) {
        setCurrentImage(DEFAULT_IMAGE_URL);
        return;
      }

      const [firstPath, ...restPaths] = paths;

      fetch(firstPath)
        .then(res => {
          if (res.ok) {
            setCurrentImage(firstPath);
          } else {
            throw new Error();
          }
        })
        .catch(() => {
          tryNextImage(restPaths); // Thử với đường dẫn tiếp theo
        });
    };

    tryNextImage(fallbackPaths);
  };



  return (
    <div className='mb-8' >
     <img
      className='product-image'
      width="250" height="250"
      src={currentImage} alt={product.title}
      onError={handleError}
      loading="lazy"
      />

      <h2 className='font-bold text-xl'>{product.id}</h2>
        <div className='product-details'>
          <p className='text-gray-900/70'>{product.category}</p>
        </div>
        <div className='relative mt-2'>
          <p className='absolute top-0 left-0 my-3 text-xl font-medium text-red-700'><strong>{product.price.toFixed(2)} VND</strong></p>
          <Button
          className='absolute top-0 right-2
          size-10 cursor-pointer
          hover:bg-red-500 active:bg-red-700'
          variant="secondary" size="icon">
            <Heart />
          </Button>
          </div>
    </div>

  );
};

export default ProductCard;