import { useEffect } from "react"
import { useState } from "react"
import axios from "axios"
import {Link, useNavigate, useSearchParams} from 'react-router-dom'

const Home = () => {
    const [restaurants, setRestaurants] = useState([])

    const navigate = useNavigate()

    const [searchParams, setSearchParams] = useSearchParams()

    useEffect( ()=> {
        axios.get("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.325951&lng=76.877496&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        .then( async(response) => {
            setRestaurants( response.data.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        })
    },[])


    function handleClick(restaurantId){
        navigate(`restaurant/${restaurantId}`);
    }


    return <main>
        <div className="absolute p-3 bg-green-500 font-bold text-white rounded-md top-5 right-5"> <Link to='/grocery'>Gorcery</Link></div>
        <div className="flex flex-wrap">
            {restaurants.map( res => {
                console.log(res)
                return <div onClick={()=>handleClick(res.info.id)} className="p-5">
                    <img className="w-[200px] h-[200px] contain-content" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${res?.info?.cloudinaryImageId}`} alt="" />
                    <h1 className="font-bold text-[20px]">{res?.info?.name}</h1>
                    <h5>{res?.info?.locality +", "+res?.info?.areaName}</h5>
                </div>
            })}
        </div>
    </main>

}

export default Home