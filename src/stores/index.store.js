import { configureStore } from "@reduxjs/toolkit";
import cartsReducer from './slices/cart.slice';
import productReducer from "./slices/product.slice"
import userLoginReducer from './slices/userLogin.slice'

const store = configureStore(
    {
        reducer: {
            productStore: productReducer,
            userLoginStore: userLoginReducer,
            cartsLocalStore: cartsReducer
        }
    }
)

export default store