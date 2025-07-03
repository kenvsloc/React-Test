import { products } from "../../data/products";
import './PCard.css'


const ProductsCard = () => {

    return (
        <div className="products-container">
            {products.map(product => (
                <div key={product.id} className="product-card">
                    <h2>{product.Title}</h2>
                    <p>{product.description}</p>
                    <p>Price: ${product.price.toFixed(2)}</p>
                    <p>Stock: {product.stock > 0 ? product.stock : "Out of stock"}</p>
                </div>
            ))}
        </div>
    )
}

export default ProductsCard;