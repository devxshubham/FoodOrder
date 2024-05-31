import { useEffect } from "react"
import { useState } from "react"
import axios from "axios"
import {Link, useNavigate, useSearchParams} from 'react-router-dom'
import { RestaurantCard, restaurantIsOpen } from "../components/RestaurantCard"

const Home = () => {
    const [restaurants, setRestaurants] = useState([])

    const navigate = useNavigate()

    useEffect( ()=> {
        axios.get("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.325951&lng=76.877496&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        .then( async(response) => {
            setRestaurants( response.data.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        })
    },[])


    function handleClick(restaurantId){
        navigate(`restaurant/${restaurantId}`);
    }

    const OpenRestaurant = restaurantIsOpen(RestaurantCard)
    return <main>
        <div className="absolute p-3 bg-green-500 font-bold text-white rounded-md top-5 right-5"> <Link to='/grocery'>Gorcery</Link></div>
        <div className="flex flex-wrap">
            {restaurants.map( res => {
                return res.info.isOpen ? <OpenRestaurant  res={res} handleClick={handleClick} />
                 : 
                 <RestaurantCard res={res} handleClick={handleClick} />
            })}
        </div>
    </main>

}

export default Home