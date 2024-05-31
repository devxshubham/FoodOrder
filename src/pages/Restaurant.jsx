import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios'
import { useState } from "react";

const Restaurant = () => {
    const {restaurantId} = useParams()
    console.log(restaurantId)

    const [menu, setMenu] = useState([])
    console.log(menu);

    useEffect( () => {
        axios.get("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.3610314&lng=76.8485468&restaurantId="+restaurantId)
        .then( (response) => {
            setMenu(response.data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.            )
        })
    },[])
    
    return <div>restaurant menu</div>
    

}

export default Restaurant