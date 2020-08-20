import {SET_CATEGORY, SET_SORT_BY} from "../reducers/filtersReducer";

export const sortByAC = (payload) => ({
    type: SET_SORT_BY,
    payload
})

export  const changeFilterAC = (payload) => ({
    type: SET_CATEGORY,
    payload
})