export const SET_BOOKS = 'SET_BOOKS'

let initialState = {
    books: [],
    isLoaded: false
}

export const booksReducer = (state = initialState, action) => {
    if (action.type === SET_BOOKS) {
        return {
            ...state,
            books: action.payload,
            isLoaded: true
        }
    }
    return state
}