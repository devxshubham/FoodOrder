import { Button } from "@/components/ui/button"
import { clearCart } from "@/lib/cartSlice"
import { useDispatch, useSelector } from "react-redux"

const Cart = () => {
    const cartItems = useSelector(store => store.cart.items)

    const dispatch = useDispatch()

    const handleClearCart = ( ) => {
        dispatch( clearCart() ``)
    }

    return <div >
        <ul className="m-auto w-6/12">
            {cartItems.map( item => {
                return <li>{item}</li>
            })}
        </ul>
        <Button variant={"destructive"} onClick={handleClearCart}>Clear Cart</Button>
    </div>
}

export default Cart