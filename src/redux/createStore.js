import {combineReducers, createStore} from "redux";
import {filtersReducer} from "./reducers/filtersReducer";
import {booksReducer} from "./reducers/booksReducers";


let rootReducer = combineReducers({
    filtersReducer,
    booksReducer
})

export const store = createStore(
    rootReducer, /* preloadedState, */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
window.store = store