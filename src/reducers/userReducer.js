import { USER_AUTH } from "../constants"


const initialState = {
    login: "developer21",
    password: "123456",
    success: false
}

const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_AUTH: {
            return { ...state, success: action.payload }
        }

        default: return state
    }
}

export default UserReducer