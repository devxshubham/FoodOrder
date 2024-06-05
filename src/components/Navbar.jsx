import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux";


const Navbar = ()=>{
    const navigate = useNavigate()

    const cartItems = useSelector( store => store.cart.items)
    console.log(cartItems)

    const handleClick = (path) => {
        navigate(path)
    }

    return <nav className="flex bg-white z-10 p-5 justify-between m-10 sticky top-0 left-0 right-0">
        <div className="cursor-pointer" onClick={()=>handleClick("/")}>logo</div>
        <div className="flex gap-5">
            <button onClick={() => handleClick("about")}>About</button>
            <button onClick={() => handleClick("grocery")}>Grocery</button>
            <button onClick={() => handleClick("cart")}>Cart <span className="text-red-500">({cartItems.length})</span></button>
        </div>
    </nav>
}

export default Navbar