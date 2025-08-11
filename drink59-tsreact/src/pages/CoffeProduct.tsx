import { CoffeeProps } from "../data/DtCoffee"
import CardProduct from "../components/CardProduct"
import { Link } from "react-router-dom"
import { BeardCrumbTop } from "@/features/beardCrumb"
import CartMini from "@/components/Tests/MiniCart"

const CoffeProduct = () => {
    return (
        <div>
            <CartMini />
            <BeardCrumbTop />
        <div className='flex flex-row flex-wrap justify-center gap-8 mx-[12%] mb-12'>
            {CoffeeProps.map(product =>(
                <Link to={`/coffee/${product.id}`} key={product.id}>
                    <CardProduct product={product} />
                </Link>
            ))}
        </div>
    </div>
    )
}

export default CoffeProduct