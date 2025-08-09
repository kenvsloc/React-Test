import { SmoothieProps } from "../data/DtSmoothie";
import CardProduct from "../components/CardProduct";
import { Link } from "react-router-dom"
import { BeardCrumbTop } from "@/features/beardCrumb";


const SmoothieProduct = () => {
    return (
        <div>
            <BeardCrumbTop />
        <div className='flex flex-row flex-wrap justify-center gap-8 mx-[12%] mb-12'>
            {SmoothieProps.map(product =>(
                <Link to={`/Smoothie/${product.id}`} key={product.id}>
                    <CardProduct product={product} />
                </Link>
            ))}
        </div>
    </div>
    )
}

export default SmoothieProduct