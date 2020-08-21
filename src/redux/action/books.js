import {SET_BOOKS} from '../reducers/booksReducer'
import {getBooks} from "../../API/API";
import {transformObjectToArray} from "../../utils";

export const fetchBooks = () => (dispatch) => {
    getBooks().then(r => {
        dispatch(setBooksAC(transformObjectToArray(r)))
    })
}

export const setBooksAC = (payload) => ({
    type: SET_BOOKS,
    payload
})
