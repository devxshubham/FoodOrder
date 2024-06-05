import { useDispatch } from "react-redux"
import { addItem } from "@/lib/cartSlice"

  
const RestaurantCategory = ({data,showItem,setShowItem,index}) => {
    
    const handleClick = (index)=>{
        if( showItem == index ) setShowItem(undefined)
        else setShowItem(index)
    }
    const dispatch = useDispatch()
    const handleAddItem = (item)=>{
        dispatch(addItem(item))
    }

    return <div className="flex flex-col max-w-[800px] mx-auto py-2 cursor-pointer">
        <div onClick={()=>handleClick(index)} className="flex justify-between py-3 border-b-2">
            <div className="text-[20px] font-bold ">{data.card.card.title}</div>
            <div>+</div>
        </div>
        {data.card.card?.itemCards?.map( item => {
            return <div  key={item?.card?.info?.name}>
                { showItem == index ? <div className="flex justify-between m-2 border-b-2 p-5" >
                    <div className="flex flex-col items-start">
                        <h1 className="font-bold text-[14px]">{item?.card?.info?.name}</h1>
                        <h5> <span>&#8377;</span>  {item?.card?.info?.price ? item?.card?.info?.price / 100 : item?.card?.info?.defaultPrice / 100}</h5>
                        <div className="flex text-left text-[13px]">{item?.card?.info?.description}</div>
                    </div>
                    <div className="relative min-w-[200px] p-3 flex flex-col items-center">
                        {item?.card?.info?.imageId ? <img className="contain-content w-[200px] h-[200px] rounded-lg" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${item?.card?.info?.imageId}`} alt="" /> : <div></div> }
                        <button className=" bottom-0  absolute" onClick={() => handleAddItem(item?.card?.info?.name)}>ADD</button>
                    </div>
                </div> : <div></div> }  
            </div>
        })}
    </div>
}

export default RestaurantCategory