import { GET_USERS, ADD_USER, SET_IS_ERROR, LOGIN_USER } from "../constants/types";

const defaultState = {
    users: [],
    logUser: {},
    isError: false
}

export const usersReducer = (state = defaultState, action) => {
    switch (action.type) {
        case GET_USERS :
            return {
                ...state,
                users: action.payload
            }
        case ADD_USER :
            return {
                ...state,
                users: [...state.users, action.payload],
            }
        case LOGIN_USER : 
            return {
                ...state,
                logUser: action.payload
            }
        case SET_IS_ERROR :
            return {
                ...state,
                isError: !state.isError
            }
        default :
            return state
    }
}