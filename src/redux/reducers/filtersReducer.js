export const SET_CATEGORY = 'SET_CATEGORY'
export const SET_SORT_BY = 'SET_SORT_BY'
export const SET_LOADED = 'SET_LOADED'

let initialState = {
    typeFilter: null,
    sortBy: 0
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