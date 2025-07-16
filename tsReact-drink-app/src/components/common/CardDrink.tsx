import type { ProductProps } from "../../types/typesData";
import { getImagePath, getFallbackImagePath,DEFAULT_IMAGE_URL
    } from "../../features/ImageConfigDrink";
import { useState } from "react";

interface DrinkCardProps {
    product: ProductProps;
}

const DrinkCard = ({ product }: DrinkCardProps) => {
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
        <div className="products-container">
            <img
            className="product-image"
            src={currentImage}
            alt={product.title}
            onError={handleError}
            loading="lazy"
            />
            <h2>{product.id}</h2>
            <div className="product-details">
                <p className="product-catalog">{product.category}</p>
                <p><strong>{product.price.toFixed(2)} VND</strong></p>
            </div>
        </div>
    );
};

export default DrinkCard;