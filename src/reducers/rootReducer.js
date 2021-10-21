import { combineReducers } from "redux";
import UserReducer from "./userReducer";



const rootReducer = combineReducers({
    userPage: UserReducer
})

export default rootReducer