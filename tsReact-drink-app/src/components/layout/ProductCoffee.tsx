import { CoffeeProps } from "../../data/DtCoffee";
import DrinkCard from "../common/CardDrink";
import { Link } from 'react-router-dom'; // Thêm Link từ react-router-dom


const CoffeeApp = () => {

    return (
    <>

    <div className='product-list'>
      {CoffeeProps.map(product => (
        <Link to={`/coffee/${product.id}`} key={product.id}>
        <DrinkCard  product={product} />
        </Link>
      ))}
    </div>
   </>
   )
}
export default CoffeeApp;