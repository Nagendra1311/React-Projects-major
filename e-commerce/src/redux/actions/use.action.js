import { ADD_USER_ERROR, ADD_USER_START, ADD_USER_SUCCESS, DELETE_USER_ERROR, DELETE_USER_START, DELETE_USER_SUCCESS, GET_USER_ERROR, GET_USER_START, GET_USER_SUCCESS, UPDATE_USER_ERROR, UPDATE_USER_START, UPDATE_USER_SUCCESS } from "../constants/user.constant"

// GET
export const getUserStart = () => ({
    type: GET_USER_START,
})
export const getUserSuccess = (categories) => ({
    type: GET_USER_SUCCESS,
    payload: categories
})

export const getUserError = (error) => ({
    type: GET_USER_ERROR,
    payload: error
})

// ADD
export const addUserStart = (User) => ({
    type: ADD_USER_START,
    payload: User
})
export const addUserSuccess = (User) => ({
    type: ADD_USER_SUCCESS,
    payload: User
})

export const addUserError = (error) => ({
    type: ADD_USER_ERROR,
    payload: error
})

// DELETE
export const deleteUserStart = (User) => ({
    type: DELETE_USER_START,
    payload: User
})
export const deleteUserSuccess = (User) => ({
    type: DELETE_USER_SUCCESS,
    payload: User
})

export const deleteUserError = (error) => ({
    type: DELETE_USER_ERROR,
    payload: error
})


// UPDATE
export const updateUserStart = (User) => ({
    type: UPDATE_USER_START,
    payload: User
})
export const updateUserSuccess = (User) => ({
    type: UPDATE_USER_SUCCESS,
    payload: User
})

export const updateUserError = (error) => ({
    type: UPDATE_USER_ERROR,
    payload: error
})
