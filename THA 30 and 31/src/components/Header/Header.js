import React from 'react'
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import "./Header.css"
import {useDispatch,useSelector} from "react-redux"
import {toggleCart} from "../../redux/action/cartAction"
import {NavLink} from "react-router-dom"
function Header() {
   const dispatch=useDispatch()

    return (
        <div className="header">
            <h1>fakeStore Cart</h1>
            <div className="icons">

           <NavLink to="/wishlist" className="wishIcon"> <FavoriteIcon className="icon"/></NavLink>  
              <ShoppingCartIcon className="icon2" onClick={()=>dispatch(toggleCart())}/>
            </div>
           
        </div>
    )
}

export default Header
