import {ADD_BOOK_TO_CART, SET_TOTAL_COUNT, SET_TOTAL_PRICE} from "../reducers/cartReducer";

export const setTotalPriceAC = (payload) => ({type: SET_TOTAL_PRICE, payload})
export const setTotalCountAC = (payload) => ({type: SET_TOTAL_COUNT, payload})
export const addBookAC = (payload) => ({type: ADD_BOOK_TO_CART, payload})
