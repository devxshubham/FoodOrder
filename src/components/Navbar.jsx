import { useNavigate } from "react-router-dom"
import { Button } from "./ui/button";


const Navbar = ()=>{
    const navigate = useNavigate()

    console.log("navbar");

    const handleClick = (path) => {
        navigate(path)
    }

    return <nav className="flex justify-between m-10 sticky top-0 left-0 right-0">
        <div>logo</div>
        <div className="flex gap-5">
            <Button variant={"order"} onClick={() => handleClick("about")}>About</Button>
            <Button variant={"order"} onClick={() => handleClick("grocery")}>Grocery</Button>
            <Button variant={"order"} onClick={() => handleClick("cart")}>Cart</Button>
        </div>
    </nav>
}

export default Navbar