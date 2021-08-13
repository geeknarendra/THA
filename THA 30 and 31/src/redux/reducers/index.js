import {combineReducers} from "redux"
import { counterReducer } from "./counterReducer"
import { productReducer } from "./productReducers"
import {cartReducer} from "./cartReducer"
import {wishListReducer} from "./wishListReducer"

const reducers=combineReducers({
    counterReducer,productReducer,cartReducer,wishListReducer
})

export default reducers