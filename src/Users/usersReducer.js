import { FETCH_USERS_BEGIN, FETCH_USERS_FAILURE, FETCH_USERS_SUCCESS, SORT } from "./usersActions";

const initialState = {
    loading: false,
    error: null,
    items: []
};

export default function usersReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_USERS_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            };
        case FETCH_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                items: action.payload.users
            };
        case FETCH_USERS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                items: []
            };
        case SORT:
            return {
                ...state,
                items: action.payload.sortedUsers
            };
        default:
            return state;
    }
}