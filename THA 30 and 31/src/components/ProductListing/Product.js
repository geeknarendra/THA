import React, { useState,useEffect} from 'react'
import "./Product.css"
import axios from 'axios'
import Card from '../ProductCard/Card'
import {useDispatch,useSelector} from "react-redux"
import {loadProduct} from "../../redux/action/productsAction"
import { CircularProgress } from '@material-ui/core'
import {NavLink} from "react-router-dom"
function Product() {
    // const [products,setProduct]=useState([])
    // const productsIems=useSelector(state=>state.productReducer.products)


    const products=JSON.parse(localStorage.getItem("items"))
    // console.log("all items -- ",items)
   
    console.log(products)
    return (
        <div className="product">
            {(products && products.length>0) ? products.map((product)=>(
           
                     <Card  title={product.title} key={product.id} id={product.id} desc={product.description} price={product.price} img={product.image}/>
               
            )) : <CircularProgress /> }
        </div>
    )
}

export default Product
