export const FETCH_USERS_BEGIN = 'FETCH_USERS_BEGIN';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';
export const SORT = "SORT";

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
                dispatch(fetchUsersSuccess(json));
                return json;
            })
            .catch(error => dispatch(fetchUsersFailure(error)));
    };
}

export const sort = (sortedUsers) => {
    return {
        type: SORT,
        payload: { sortedUsers }
    }
};

export const sort1 = (sortedUsers) => {
    return {
        type: SORT,
        payload: { sortedUsers }
    }
}