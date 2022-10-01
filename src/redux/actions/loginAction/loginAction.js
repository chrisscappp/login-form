import { SET_IS_ERROR, LOGIN_USER } from "../../constants/types"

export const loginUserAction = (payload) => {
    return {
        type: LOGIN_USER,
        payload
    }
    console.log(payload)
}