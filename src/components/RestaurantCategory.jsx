import { Button } from "./ui/button"
import { useState } from "react"

  
const RestaurantCategory = ({data}) => {
    const [open, setOpen] = useState(false)
    
    function handleClick(){
        setOpen(prev=> !prev);
    }

    return <div onClick={handleClick} className="flex flex-col max-w-[800px] mx-auto py-2 cursor-pointer">
        <div className="flex justify-between py-3 border-b-2">
            <div className="text-[20px] font-bold ">{data.card.card.title}</div>
            <div>+</div>
        </div>
        {data.card.card?.itemCards?.map( item => {
            return <div  key={item?.card?.info?.name}>
                { open ? <div className="flex justify-between m-2 border-b-2 p-5" >
                    <div className="flex flex-col items-start">
                        <h1 className="font-bold text-[14px]">{item?.card?.info?.name}</h1>
                        <h5> <span>&#8377;</span>  {item?.card?.info?.price ? item?.card?.info?.price / 100 : item?.card?.info?.defaultPrice / 100}</h5>
                        <div className="flex text-left text-[13px]">{item?.card?.info?.description}</div>
                    </div>
                    <div className="relative min-w-[200px] p-3 flex flex-col items-center">
                        {item?.card?.info?.imageId ? <img className="contain-content w-[200px] h-[200px] rounded-lg" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${item?.card?.info?.imageId}`} alt="" /> : <div></div> }
                        <Button className=" bottom-0  absolute" variant={"order"}>ADD</Button>
                    </div>
                </div> : <div></div> }  
            </div>
        })}
    </div>
}

export default RestaurantCategory