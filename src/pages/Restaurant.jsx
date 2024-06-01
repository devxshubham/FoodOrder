import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios'
import { useState } from "react";

const Restaurant = () => {
    const {restaurantId} = useParams()
    // console.log(restaurantId)

    const [restData, setRestData] = useState([])

    useEffect( () => {
        axios.get("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.3610314&lng=76.8485468&restaurantId="+restaurantId)
        .then( (response) => {
            // setMenu(response.data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards            )
            setRestData(response.data?.data.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards)
        })
    },[])

    const category = restData.filter ( data => data?.card?.card?.["@type"] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory' )
    console.log(category)
    // return <div>hi</div>
    
    return <div className="mx-auto text-center">
            {category.map( men => {
                // console.log(men.card.card?.itemCards)
                return <div > 
                    <div className="font-bold">{men.card?.card?.title}</div>
                    <div>
                        {men.card.card?.itemCards?.map( item => {
                            return <h1>{item.card.info.name}</h1>
                        })}
                    </div>
                </div>
            })}
    </div>
    

}

export default Restaurant