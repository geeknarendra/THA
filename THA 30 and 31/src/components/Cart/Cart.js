import React from 'react'
import "./Cart.css"
import { increment, decrement } from "../../redux/action/counterAction"
import { useDispatch, useSelector } from "react-redux"
import DeleteIcon from '@material-ui/icons/Delete';

import {removeElement} from "../../redux/action/cartAction"
function Cart({image,title,price,id}) {
    const dispatch = useDispatch()
    const value = useSelector(state => state.counterReducer.value)
    return (
        <div className="cart">
            <div className="imgDiv">
                <img src={image} alt={title} />
            </div>
            <div className="cartContent">
                <h2>{title}</h2>
                <p>Price : $ {price}</p>
                <div className="add_delete">
                        <DeleteIcon className="deleteIcon" onClick={()=>dispatch(removeElement(id))}/>
                </div>

            </div>
        </div>
    )
}

export default Cart
