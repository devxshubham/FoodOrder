import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios'
import { useState } from "react";

import RestaurantCategory from "../components/RestaurantCategory";

const Restaurant = () => {
    const {restaurantId} = useParams()

    const [restData, setRestData] = useState([])

    const [showItem, setShowItem] = useState();

    useEffect( () => {
        axios.get("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.3610314&lng=76.8485468&restaurantId="+restaurantId)
        .then( (response) => {
            // setMenu(response.data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards            )
            setRestData(response.data?.data.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards)
        })
    },[])

    const category = restData.filter ( data => data?.card?.card?.["@type"] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory' )
    
    return <div className="mx-auto max-w-[1000px] text-center">
        {category.map( ( data, index ) => {
            return <RestaurantCategory 
                onClick={()=> setShowItem(index)} 
                index={index}
                setShowItem={setShowItem} 
                showItem={showItem} 
                key={data.card?.card?.title} 
                data={data} 
            />
        })}
    </div>
    

}

export default Restaurant

