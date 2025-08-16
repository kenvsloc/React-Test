import type { ProductProps } from "../../types/typesData";
import { useState, useEffect } from "react";
import { PRODUCT_TYPE_TO_FOLDER, FALLBACK_FOLDERS, DEFAULT_IMAGE_URL } from "../../features/DrinkProductConfig";

interface ProductImageOnlyProps {
  product: ProductProps;
}

const ProductImageOnly = ({ product }: ProductImageOnlyProps) => {
  const [currentImage, setCurrentImage] = useState<string>('');
  const [fallbackPaths, setFallbackPaths] = useState<string[]>([]);

  // Lấy loại sản phẩm, mặc định là 'kids'
  const productType = product.type || 'coffee';

  // Hàm lấy đường dẫn ảnh chính và danh sách ảnh dự phòng
  useEffect(() => {
    const folder = PRODUCT_TYPE_TO_FOLDER[productType];
    const primaryPath = `/images/${folder}/${product.image}`;
    const fallbacks = FALLBACK_FOLDERS[productType].map(f => `/images/${f}/${product.image}`);

    setCurrentImage(primaryPath);
    setFallbackPaths(fallbacks);
  }, [productType, product.image]);

  // Hàm kiểm tra tải ảnh
  const handleImageError = () => {
    if (fallbackPaths.length === 0) {
      setCurrentImage(DEFAULT_IMAGE_URL);
      return;
    }

    const [firstFallback, ...restFallbacks] = fallbackPaths;

    fetch(firstFallback)
      .then(res => {
        if (res.ok) {
          setCurrentImage(firstFallback);
          setFallbackPaths(restFallbacks);
        } else {
          throw new Error('Image not found');
        }
      })
      .catch(() => {
        setFallbackPaths(restFallbacks);
      });
  };

  return (
    <div className="">
      <img
        className=""
        width="350"
        max-height="350"
        src={currentImage}
        alt={product.title}
        onError={handleImageError}
        loading="lazy"
      />
    </div>
  );
};

export default ProductImageOnly;