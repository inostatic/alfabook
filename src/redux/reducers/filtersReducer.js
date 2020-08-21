export const SET_CATEGORY = 'SET_CATEGORY'
export const SET_SORT_BY = 'SET_SORT_BY'

let initialState = {
    typeFilter: null,
    sortBy: 'popular'
}

export const filtersReducer = (state = initialState, action) => {
    if (action.type === SET_CATEGORY) {
        return {
            ...state,
            typeFilter: action.payload
        }
    } else if (action.type === SET_SORT_BY) {
        return {
            ...state,
            sortBy: action.payload
        }
    }
    return state
}