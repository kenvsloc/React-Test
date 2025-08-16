import { TeaProps } from "../data/DtTea";
import CardProduct from "../components/CardProduct";
import { Link } from "react-router-dom"
import { BeardCrumbTop } from "@/features/beardCrumb";


const TeaProduct = () => {
    return (
        <div className=''>
            <BeardCrumbTop  />
        <div className='flex flex-row flex-wrap justify-center gap-8 mx-[12%] mb-12'>
            {TeaProps.map(product =>(
                <Link to={`/tea/${product.id}`} key={product.id}>
                    <CardProduct product={product} />
                </Link>
            ))}
        </div>
    </div>
    )
}

export default TeaProduct