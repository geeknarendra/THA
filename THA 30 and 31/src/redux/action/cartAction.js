import axios from 'axios'
export const toggleCart=()=>{
   return {
       type:"TOGGLE_CART"
   }
}

export const addItem=(id)=>async(dispatch)=>{
   
    const response=await axios.get(`https://fakestoreapi.com/products/${id}`).catch((err)=> console.log(err))
    const data=response.data
    
    dispatch({type:"ADD_ITEM",payload:data})
}

export const removeElement=(id)=>{
    return {
        type:"REMOVE_ITEM",
        payload:id
    }
}