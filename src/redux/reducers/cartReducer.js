export const CLEAR_CART = 'CLEAR_CART'
export const ADD_BOOK_TO_CART = 'ADD_BOOK_TO_CART'
export const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM'


let initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0
}

const getTotalPrice = arr => arr.reduce((sum, obj) => +obj.price + sum, 0)

export function cartReducer(state = initialState, action) {
    if (action.type === ADD_BOOK_TO_CART) {
        const currentBooksItem = !state.items[action.payload.token]
            ? [action.payload]
            : [...state.items[action.payload.token].items, action.payload]
        const newItems =  {
            ...state.items,
            [action.payload.token]: {
                items: currentBooksItem,
                totalPrice: getTotalPrice(currentBooksItem)
            }
        }
        const items = Object.values(newItems).map(obj => obj.items)
        const allBooks = [].concat.apply([], items)
        const totalPrice = getTotalPrice(allBooks)

        return {
            ...state,
            items: newItems,
            totalCount: allBooks.length,
            totalPrice
        }
    } else if (action.type === CLEAR_CART) {
        return initialState

    } else if (action.type === REMOVE_CART_ITEM) {
        const newItems = {
            ...state.items
        }
        const currentTotalPrice = newItems[action.payload].totalPrice
        const currentTotalCount = newItems[action.payload].items.length
        delete newItems[action.payload]
        return {
            ...state,
            items: newItems,
            totalPrice: state.totalPrice - currentTotalPrice,
            totalCount: state.totalCount - currentTotalCount
        }
    }

    return state
}