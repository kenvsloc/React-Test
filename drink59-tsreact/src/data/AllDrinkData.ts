import { CoffeeProps } from "./DtCoffee"
import { TeaProps } from "./DtTea"
import { SmoothieProps } from "./DtSmoothie"
import { type ProductProps } from "@/types/typesData"


export const AllDrinkData: ProductProps[] = [
    ...CoffeeProps,
    ...TeaProps,
    ...SmoothieProps
]


