import React from 'react'
import "./Card.css"
import Heart from "../Heart/Heart"
import {Link, NavLink} from  "react-router-dom"

import { useState } from "react"
import {useDispatch,useSelector} from "react-redux"
import {addWishListItem,removeWishItem,toggleHeart} from "../../redux/action/wishlistAction"
function Card({id,title,desc,price,img}) {
    // const heartStatus=
    // console.log("heart status-- ",heartStatus)
    // const [active,setActive]=useState(JSON.parse(localStorage.getItem("status")))
    const dispatch=useDispatch()
    // const status=useSelector(state=>state.wishListReducer.heartStatus)
    const active=useSelector(state=>state.wishListReducer.heartStatus)
    const handleSubmit=(e)=>{
        console.log("before-- ",active)
        if(active){
            // setActive(false)
            // localStorage.setItem("status",false)
            // dispatch(toggleHeart())
            dispatch(removeWishItem(id))
        }
        else{
            // setActive(true)
            // localStorage.setItem("status",true)
            // dispatch(toggleHeart())
            dispatch(addWishListItem(id))
        }
        console.log("after -- ",active)

    }
    return (
       
        <div className="card">
        <div className="stage">
             <div className={`heart ${active &&'is_active'}`} onClick={handleSubmit}></div>
        </div>
           <div className="image">
             <img src={img} alt={title} />
           </div>
           <div className="content">
                 <h3 className="title">{title}</h3>
                 <p className="desc">{desc.slice(0,140)} ...</p>
                 <h4>$ {price}</h4>
                 <div className="btnDiv">
                 <NavLink to={`/${id}`} className="moreDetailBtn">More Details</NavLink>
                 </div>
              
           </div>
           
        </div>
    
    )
}

export default Card
