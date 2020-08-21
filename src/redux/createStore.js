import {combineReducers, compose, createStore, applyMiddleware} from "redux";
import {filtersReducer} from "./reducers/filtersReducer";
import {booksReducer} from "./reducers/booksReducer";
import thunk from "redux-thunk";


let rootReducer = combineReducers({
    filtersReducer,
    booksReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose



export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))

);
window.store = store