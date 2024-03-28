import { ADD_PRODUCT_ERROR, ADD_PRODUCT_START, ADD_PRODUCT_SUCCESS, DELETE_PRODUCT_ERROR, DELETE_PRODUCT_START, DELETE_PRODUCT_SUCCESS, GET_PRODUCT_ERROR, GET_PRODUCT_START, GET_PRODUCT_SUCCESS, UPDATE_PRODUCT_ERROR, UPDATE_PRODUCT_START, UPDATE_PRODUCT_SUCCESS } from "../constants/product.constant"

// GET
export const getProductStart = () => ({
    type: GET_PRODUCT_START,
})
export const getProductSuccess = (categories) => ({
    type: GET_PRODUCT_SUCCESS,
    payload: categories
})

export const getProductError = (error) => ({
    type: GET_PRODUCT_ERROR,
    payload: error
})

// ADD
export const addProductStart = (Product) => ({
    type: ADD_PRODUCT_START,
    payload: Product
})
export const addProductSuccess = (Product) => ({
    type: ADD_PRODUCT_SUCCESS,
    payload: Product
})

export const addProductError = (error) => ({
    type: ADD_PRODUCT_ERROR,
    payload: error
})

// DELETE
export const deleteProductStart = (Product) => ({
    type: DELETE_PRODUCT_START,
    payload: Product
})
export const deleteProductSuccess = (Product) => ({
    type: DELETE_PRODUCT_SUCCESS,
    payload: Product
})

export const deleteProductError = (error) => ({
    type: DELETE_PRODUCT_ERROR,
    payload: error
})


// UPDATE
export const updateProductStart = (Product) => ({
    type: UPDATE_PRODUCT_START,
    payload: Product
})
export const updateProductSuccess = (Product) => ({
    type: UPDATE_PRODUCT_SUCCESS,
    payload: Product
})

export const updateProductError = (error) => ({
    type: UPDATE_PRODUCT_ERROR,
    payload: error
})
