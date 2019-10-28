import {
    SORT_INDEX,
    SORT_NAME,
    SORT_DATE,
    SORT_STATUS
} from "./sortActions";

const initialState = {
    sortIndexAsc: false,
    sortNameAsc: false,
    sortDateAsc: false,
    sortStatusAsc: false,
};

export default function sortReducer(state=initialState, action) {
    switch (action.type) {
        case SORT_INDEX:
            console.log('sort index')
            return {
                ...state,
                sortIndexAsc: !state.sortIndexAsc
            };
        case SORT_NAME:
            return {
                ...state,
                sortNameAsc: !state.sortNameAsc
            };
        case SORT_DATE:
            return {
                sortDateAsc: !state.sortDateAsc
            };
        case SORT_STATUS:
            return {
                sortStatusAsc: !state.sortStatusAsc
            };
        default:
            return state;
    }
}