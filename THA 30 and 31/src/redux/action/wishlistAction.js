import axios from 'axios'
export const addWishListItem=(id)=>async(dispatch)=>{
    const response=await axios.get(`https://fakestoreapi.com/products/${id}`).catch((err)=> console.log(err))
    const data=response.data
    console.log(data)
    dispatch({type:"ADD_WISH_ITEM",payload:data})
}

export const loadWishItem=()=>{
    return {
        type:"LOAD_WISH_DATA"
    }
}

export const removeWishItem=(id)=>{
    return {
        type:"DELETE_ITEM",
        payload:id
    }
}

export const toggleHeart=()=>{
    return {
        type:"TOGGLE_HEART"
    }
}

