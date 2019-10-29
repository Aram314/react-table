import {
    FETCH_USERS_BEGIN,
    FETCH_USERS_FAILURE,
    FETCH_USERS_SUCCESS,
    SORT,
    CHECK,
    CHECK_ALL,
    SET_STATUS,
    CHANGE_NAME,
    SAVE_NAME
} from "./usersActions";

const initialState = {
    loading: false,
    error: null,
    items: [],
    sortAsc: true,
    checkAll: false,
    sortIdAsc: false,
    sortNameAsc: false,
    sortDateAsc: false,
    sortStatusAsc: false,
    status: '',
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
            let fieldName = `sort${action.payload.field.charAt(0).toUpperCase() + action.payload.field.slice(1)}Asc`;
            return {
                ...state,
                items: {data: state[fieldName] ?
                        state.items.data.sort((a,b) => {
                            if(a[action.payload.field] > b[action.payload.field]) return -1
                        })
                        :
                        state.items.data.sort((a,b) => {
                            if(a[action.payload.field] > b[action.payload.field]) return -1
                        }).reverse()
                },
                [fieldName]: !state[fieldName]
            };
        case CHECK:
            return {
                ...state,
                items: {data: state.items.data.map(item => {
                        if(item.id === action.payload.id) {
                            return {
                                ...item,
                                checked: !item.checked,
                            }
                        }
                        return item
                    })}
            };
        case CHECK_ALL:
            return {
                ...state,
                checkAll: !state.checkAll,
                items: {data: state.items.data.map(item => {
                    return {
                        ...item,
                        checked: !state.checkAll
                    }
                    })}
            };
        case SET_STATUS:
            return {
                ...state,
                status: '',
                items: {data: state.items.data.map(item => {
                    if(item.checked) {
                        return {
                            ...item,
                            status: action.payload.status,
                        }
                    } else {
                        return item;
                    }
                    })}
            };
        case CHANGE_NAME:
            return {
                ...state,
                items: {data: state.items.data.map(item => {
                    if(item.id === action.payload.id) {
                        return {
                            ...item,
                            changeable: true,
                        }
                    } else {
                        return item
                    }
                    })}
            };
        case SAVE_NAME:
            return {
                ...state,
                items: {data: state.items.data.map(item => {
                        if(item.id === action.payload.id) {
                            return {
                                ...item,
                                name: action.payload.name,
                                changeable: false,
                            }
                        } else {
                            return item;
                        }
                    })}
            };
        default:
            return state;
    }
}