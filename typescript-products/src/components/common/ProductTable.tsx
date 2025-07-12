import type { ProductProps } from '../../types/typesData';
import { useState } from 'react';

// import '.adminTable.css';
import './AdminTable.css';


interface ProductCardProps {
  product: ProductProps;
}


const ProductTable = ({ product }: ProductCardProps) => {


  const imageUrlFemale = `/images/fashionFemale/${product.image}`;
  const imageUrlMale = `/images/fashionMale/${product.image}`;

   // Ref để tham chiếu đến ảnh chính đang hiển thị
  const [currentImage, setCurrentImage] = useState(imageUrlFemale);

  // Hàm xử lý khi ảnh đầu tiên không load được
  const handleImageError = () => {
    setCurrentImage(imageUrlMale); // Chuyển sang ảnh male nếu ảnh female lỗi
  };


  return (
    <>
    <div className='products-table flex_row' >
        <div className=' item-table '>
                      <p>{product.id}</p>
          <img className='item-image' src={currentImage} alt={product.title} loading="lazy"
          onError={handleImageError} />
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