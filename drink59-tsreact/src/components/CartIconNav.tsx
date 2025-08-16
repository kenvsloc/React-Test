import { ShoppingCart } from "lucide-react"
import { Button } from "./ui/button"
import { Link } from "react-router-dom"


const CartIconNav = () => {
    return (
        <div className=''>
            <Link to="/payment">
           <Button
          size="icon"
          variant="ghost"
          className="size-8 rounded-full shadow-none cursor-pointer"
          aria-label="Open edit menu"
        >
          <ShoppingCart
            className="text-muted-foreground "
            size={16}
            aria-hidden="true"
          />
        </Button>
        </Link>
        </div>
    )
}

export default CartIconNav