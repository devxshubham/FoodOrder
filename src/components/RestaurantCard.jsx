export const RestaurantCard = ({res, handleClick}) => {

    return <div onClick={()=>handleClick(res.info.id)} className="bg-gray-200 hover:bg-slate-300 max-w-[250px] rounded-md p-8 m-5">
        <img className="w-[99%] h-[200px] contain-content" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${res?.info?.cloudinaryImageId}`} alt="" />
        <h1 className="font-bold text-[20px]">{res?.info?.name}</h1>
        <h5>{res?.info?.locality +", "+res?.info?.areaName}</h5>
        <h1>{res.info.avgRating} stars</h1>
        <h1>{res.info.costForTwo}</h1>
    </div>
}

export const restaurantIsOpen = (RestaurantCard) => {
    return ({res, handleClick}) => {
        return (
            <div key={res.info.restaurantId} className="relative" >
                <label className="absolute top-6 left-6 rounded p-[1.5px] bg-green-400 text-white">open</label>
                <RestaurantCard  res={res} handleClick={handleClick} />
            </div>
        )
    }
}