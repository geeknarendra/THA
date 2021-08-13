import React from 'react'
import WishCard from './WishCard'
import "./WishList.css"
import {useDispatch,useSelector} from "react-redux"
function WishList() {
    const wishItems=useSelector(state=>state.wishListReducer.wishlist)
    return (
        <div className="wishlist">
        {wishItems.length >0 ?
          wishItems.map((item)=>(
               <WishCard key={item.id} id={item.id} image={item.image} title={item.title} price={item.price} />
          ))
          :
          <h1>Please Add your Favourite</h1>
        
        }
          
         
        </div>
    )
}

export default WishList
