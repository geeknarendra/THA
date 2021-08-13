// const status=JSON.parse(localStorage.getItem("wishlist"))
const inititalState={
    wishlist:[],
    heartStatus:false
}

export const wishListReducer=(state=inititalState,action)=>{
    switch(action.type){
        case "LOAD_WISH_DATA":
            const item=JSON.parse(localStorage.getItem("wishlist"))
            const status=JSON.parse(localStorage.getItem("status"))
            return {
                ...state,
                wishlist:item,
                heartStatus:status
            }
        case "ADD_WISH_ITEM":
            console.log("wishlist -- ",action.payload)
            localStorage.setItem("wishlist",JSON.stringify([...state.wishlist,action.payload]))
            localStorage.setItem("status",true)
            return {
                ...state,
                wishlist:[...state.wishlist,action.payload],
                heartStatus:true
            }
        case "DELETE_ITEM":
            const list = state.wishlist.filter((item) => item.id !== action.payload)
            localStorage.setItem("wishlist", JSON.stringify(list))
            localStorage.setItem("status",false)
            console.log("wishlist remove -- ",list)
            return {
                ...state, wishlist:list,
                heartStatus:false
            }
        case "TOGGLE_HEART":
            return{
               ...state,
               heartStatus:!state.heartStatus
            }
        default : return state
    }
}