import {ADD_BOOK_TO_CART, CLEAR_CART, REMOVE_CART_ITEM} from "../reducers/cartReducer";


export const addBookAC = (payload) => ({type: ADD_BOOK_TO_CART, payload})
export const clearCartAC = () => ({type: CLEAR_CART})
export const removeCartItemAC = (payload) => ({type: REMOVE_CART_ITEM, payload})