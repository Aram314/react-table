import { combineReducers } from "redux";
import users from "./Users/usersReducer";
import login from "./Login/loginReducer";

export default combineReducers({
    users,
    login
})