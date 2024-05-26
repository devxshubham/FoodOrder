import { useEffect } from "react"
import { useState } from "react"
import axios from "axios"

export const Home = () => {
    const [restaurants, setRestaurants] = useState([])

    useEffect( ()=> {
        axios.get("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.325951&lng=76.877496&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        .then( async(response) => {
            // setRes( response.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
            setRestaurants( response.data.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        })
    },[])

    return <main>
        <div className="flex flex-wrap">
            {restaurants.map( res => {
                return <div className="p-5">
                    <img className="w-[200px] h-[200px] contain-content" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${res?.info?.cloudinaryImageId}`} alt="" />
                    <h1 className="font-bold text-[20px]">{res?.info?.name}</h1>
                    <h5>{res?.info?.locality +", "+res?.info?.areaName}</h5>
                </div>
            })}
        </div>
    </main>

}