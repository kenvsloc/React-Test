import { Button } from "./ui/button";
import { getImagePath, getFallbackImagePath, DEFAULT_IMAGE_URL } from "../features/DrinkProductConfig";
import { type ProductProps } from "../types/typesData";
import { useState } from "react";

interface ProductCardProps {
    product: ProductProps;
}

const CardProduct = ({ product }: ProductCardProps) => {

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
                    tryNextImage(restPaths);
                })
        };
        tryNextImage(fallbackPaths);

    }

    return (
        <div className='mb-8'>
            <img
                width="250" max-height="250"
                src={currentImage} alt={product.title}
                onError={handleError}
                loading="lazy"
            />

            <h2 className="font-bold text-lg">{product.id}</h2>
            <div className='text-gray-900/70'>{product.category}</div>
            <div className='text-red-600 text-[18px] font-medium'>
                {product.price.toFixed(2)} Vnd
            </div>

        </div>
    )
}

export default CardProduct;