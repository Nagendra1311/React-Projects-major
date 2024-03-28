import { GET_USER_SUCCESS } from "../constants/user.constant";

const initialState = {
    users: localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : []
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER_SUCCESS:
            localStorage.setItem('users', JSON.stringify(action.payload))
            return {
                ...state,
                users: [...action.payload]
            }

        default:
            return state;
    }
}