import type { ProductProps } from "../../types/typesData";

interface ProductImageOnlyProps {
    product: ProductProps;
}

const ProductImageOnly = ({ product }: ProductImageOnlyProps) => {
    const imageUrl = `/images/products/${product.image}`;

    return (

        <div className="image-only">
            <img
            className="product-image"
            src={imageUrl}
            alt={product.title} />
        </div>
    );
};

export default ProductImageOnly;