import { SET_IS_ERROR, LOGIN_USER } from "../constants/types"

const defaultState = {
    logUser: {},
    isError: false
}

export const loginReducer = (state = defaultState, action) => {
    switch (action.type) {
        case LOGIN_USER :
            return {
                ...state,
                logUser: action.payload
            }
        case SET_IS_ERROR :
            return {
                ...state,
                logUser: action.payload
            }
        default :
            return state
    }
}