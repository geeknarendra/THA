import React, { useEffect } from 'react'
import "./ProductDetails.css"
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {useParams} from "react-router-dom"
import {useDispatch,useSelector} from "react-redux"
import {currentProduct} from "../../redux/action/productsAction"
import {increment,decrement} from "../../redux/action/counterAction"
import {toggleCart,addItem} from "../../redux/action/cartAction"
function ProductDetail() {
    const {id}=useParams()
    const product=useSelector(state=>state.productReducer.currentProduct)
    const dispatch=useDispatch()
    const value=useSelector(state=>state.counterReducer.value)

    // console.log(id)
    useEffect(async()=>{
        if(id && id!==""){
          dispatch(currentProduct(id))
        }
    },[id])

    // console.log(product)
    const addCartItems=()=>{
        dispatch(toggleCart())
        dispatch(addItem(id))
    }

    return (
        <div className="detailCard">
         {Object.keys(product).length!== 0 &&
           <>
           <div className="detailImg">
                <img src={product.image} alt={product.title} />
            </div>
            <div className="detailContent">
                <h1>{product.title}</h1>
                <p>{product.description}</p>
                <h2>$ {product.price}</h2>
                <div className="counterDiv">
                     <div className="plus" onClick={()=>dispatch(increment())}>
                     <AddIcon style={{fontSize:"3rem",cursor:"pointer"}}/>
                     </div>
                     <div className="value">
                        {value}
                     </div>
                     <div className="minus" onClick={()=>{
                         if(value<=0){

                         }else{
                            dispatch(decrement())
                         }
                         }}>
                     <RemoveIcon style={{fontSize:"3rem",cursor:"pointer"}}/>
                     </div>
                </div>
                <div className="btn" onClick={addCartItems}>
                    <ShoppingCartIcon  className="cartIcon" />
                    <span>Add to Cart</span>
                </div>
            </div>
           </>
          }
        
        </div>
    )
}

export default ProductDetail
