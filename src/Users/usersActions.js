export const FETCH_USERS_BEGIN = 'FETCH_USERS_BEGIN';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';
export const SORT = "SORT";
export const CHECK = "CHECK";
export const CHECK_ALL = "CHECK_ALL";
export const SET_STATUS = "SET_STATUS";
export const CHANGE_NAME = "CHANGE_NAME";
export const SAVE_NAME = "SAVE_NAME";

export const fetchUsersBegin = () => {
    return {
        type: FETCH_USERS_BEGIN
    }
};

export const fetchUsersSuccess = (users) => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: { users }
    }
};

export const fetchUsersFailure = (error) => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: { error }
    }
};

export function fetchUsers() {
    return (dispatch) => {
        dispatch(fetchUsersBegin());
        return fetch("users.json")
            .then(res => res.json())
            .then(json => {

                let data = json.data.map(user => {
                    return {
                        ...user,
                        checked: false,
                        changeable: false
                    }
                });
                let users = { data };

                dispatch(fetchUsersSuccess(users));
                return users;
            })
            .catch(error => dispatch(fetchUsersFailure(error)));
    };
}

export const sort = (field) => {
    return {
        type: SORT,
        payload: {
            field
        }
    }
};

export const check = (id) => {
    return {
        type: CHECK,
        payload: {
            id
        }
    }
};

export const checkAll = () => {
    return {
        type: CHECK_ALL
    }
};

export const setStatus = (status) => {
    return {
        type: SET_STATUS,
        payload: {
            status
        }
    }
};

export const changeName = (id) => {
    return {
        type: CHANGE_NAME,
        payload: { id }
    }
};

export const saveName = (name, id) => {
    return {
        type: SAVE_NAME,
        payload: {
            name,
            id
        }
    }
}