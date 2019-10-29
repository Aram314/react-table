export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const loginRequest = () => {
    return {
        type: LOGIN_REQUEST
    }
};

export const loginSuccess = () => {
    return {
        type: LOGIN_SUCCESS
    }
};

export const loginFailure = () => {
    return {
        type: LOGIN_FAILURE
    }
};

export const login = (username, password, history) => {
    return dispatch => {
        dispatch(loginRequest());
        return fetch("login.json")
            .then(res=>res.json())
            .then(json => {
                if(username === json.username && password === json.password) {
                    dispatch(loginSuccess());
                     history.push('/users')
                } else {
                    dispatch(loginFailure())
                }
            })
            .catch(error => dispatch(loginFailure(error)));
    }
};