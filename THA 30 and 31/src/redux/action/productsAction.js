import axios from 'axios'
export const loadProduct= ()=>async(dispatch)=>{
    const response=await axios.get("https://fakestoreapi.com/products").catch((err)=> console.log(err))
    const data=response.data
    localStorage.setItem("items",JSON.stringify(data))
    dispatch({type:"LOAD_DATA",payload:data})
};


export const currentProduct=(id)=>async(dispatch)=>{
    const response=await axios.get(`https://fakestoreapi.com/products/${id}`).catch((err)=> console.log(err))
    const data=response.data
    
    dispatch({type:"CURRENT_DATA",payload:data})
}


