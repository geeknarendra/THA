const initialState={
    products:[],
    currentProduct:"",
    cart:[]
}

export const productReducer=(state=initialState,action)=>{
    switch(action.type){
        case "LOAD_DATA":
            return {
                ...state,
                products:action.payload
            }
        case "CURRENT_DATA":
            return{
                ...state,
                currentProduct:action.payload
            }
        default : return state;
    }

}