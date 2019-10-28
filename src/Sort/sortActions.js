export const SORT_INDEX = 'SORT_INDEX';
export const SORT_NAME = 'SORT_NAME';
export const SORT_DATE = 'SORT_DATE';
export const SORT_STATUS = 'SORT_STATUS';

export const sortIndex = () => {
    return {
        type: SORT_INDEX,
    }
};
export const sortName = () => {
    return {
        type: SORT_NAME,
        payload: { sortAsc: true }
    }
};
export const sortDate = () => {
    return {
        type: SORT_DATE,
        payload: { sortAsc: true }
    }
};
export const sortStatus = () => {
    return {
        type: SORT_STATUS,
        payload: { sortAsc: true }
    }
};