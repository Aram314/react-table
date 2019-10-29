import {
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGIN_REQUEST
} from "./loginActions";

const initialState = {
    loggingIn: false,
    loggedIn: false,
    error: null,
};

export default function loginReducer(state=initialState, action) {
    switch(action.type) {
        case LOGIN_REQUEST:
            return {
                loggingIn: true,
                error: null,
            };
        case LOGIN_SUCCESS:
            return {
                loggedIn: true,
                error: null,
            };
        case LOGIN_FAILURE:
            return {
                loggedIn: false,
                loggingIn: false,
                error: 'User name or password is not correct!'
            };
        default:
            return state
    }
}