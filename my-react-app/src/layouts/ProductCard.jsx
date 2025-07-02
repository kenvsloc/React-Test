// ProductCard.jsx
import { formatPrice } from '../utils/formatter';

function ProductCard({price , name}) {
  return (
    <div>
      <h3>{name}</h3>
      <p>Giá: {formatPrice(price)}</p>
    </div>
  );
}
export default ProductCard;