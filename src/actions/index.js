import { USER_AUTH } from "../constants"


export const authAC = (isSuccess) => {
    return {
        type: USER_AUTH,
        payload: isSuccess
    }
}