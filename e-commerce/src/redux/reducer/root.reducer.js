import { combineReducers } from "@reduxjs/toolkit";
import { categoryReducer } from "./category.reducer";
import { productReducer } from "./products.reducer";
import { userReducer } from "./product.reducer";

export const rootReducer = combineReducers({
    category: categoryReducer,
    product: productReducer,
    user: userReducer
})