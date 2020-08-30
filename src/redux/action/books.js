import {SET_BOOKS} from '../reducers/booksReducer'
import {getBooks, getCategoryBooks} from "../../API/API";
import {transformObjectToArray} from "../../utils";
import {setLoadedAc} from "./filters";

export const fetchBooks = () => (dispatch) => {
    dispatch(setLoadedAc())
    getBooks().then(r => {
        dispatch(setBooksAC(transformObjectToArray(r)))
    })
}
export const fetchCategoryBooks  = (category) => (dispatch) => {
    dispatch(setLoadedAc())
    getCategoryBooks(category).then(r => {
        dispatch(setBooksAC(transformObjectToArray(r)))
    })
}

export const setBooksAC = (payload) => ({
    type: SET_BOOKS,
    payload
})
