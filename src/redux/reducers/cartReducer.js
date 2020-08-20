let initialState = {}
function cartReducer(state = initialState, action) {
    if (action.type === 'ADD_BOOK') {
        return {
            ...state,
            cart: [...state.cart, action.cart]
        }
    }
    return state
}