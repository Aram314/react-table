export const FETCH_USERS_BEGIN = 'FETCH_USERS_BEGIN';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';

export const fetchUsersBegin = () => {
    return {
        type: FETCH_USERS_BEGIN
    }
};

export const fetchUsersSuccess = (users) => {
    return {
        type: FETCH_USERS_BEGIN,
        payload: { users }
    }
};

export const fetchUsersFailure = (error) => {
    return {
        type: FETCH_USERS_BEGIN,
        payload: { error }
    }
};