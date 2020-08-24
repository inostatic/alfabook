export const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'
export const SET_TOTAL_PRICE = 'SET_TOTAL_PRICE'
export const ADD_BOOK_TO_CART = 'ADD_BOOK_TO_CART'


let initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0
}
export function cartReducer(state = initialState, action) {
    if (action.type === ADD_BOOK_TO_CART) {
        console.log(action)
        // debugger
        return {
            ...state,
            items: {
                [action.payload.token]: !state.items[action.payload.token]
                    ? [action.payload]
                    : [...state.items[action.payload.token], action.payload]
            }
        }
    } else if (action.type === SET_TOTAL_PRICE) {
        return {
            ...state,
            totalPrice: action.payload
        }
    }else if (action.type === SET_TOTAL_COUNT) {
        return {
            ...state,
            totalCount: action.payload
        }
    }

    return state
}