import React, {useEffect, useState} from "react"
import "./content.scss"
import Item from "../item/item";
import {getBooks} from "../../API/API";
import {transformObjectToArray} from "../../utils";
import {store} from "../../redux/createStore";
import {setBooksAC} from "../../redux/action/books";
import {connect} from "react-redux";
import {booksReducer} from "../../redux/reducers/booksReducers";


export const Content = (props) => {
    const [items, setItems] = useState(null)
    console.log(props)
    useEffect(() => {
        getBooks().then(r => setItems(transformObjectToArray(r)))
        // getBooks().then(r => store.dispatch(setBooksAC(transformObjectToArray(r))))
    }, [])

    return (
    <div className="content">
        <div className="container">
            <div className="content__title">Все книги</div>
            <div className="content__items">
                { items &&
                    items.map( (item, index) => <Item key={index} {...item}/> )
                }
            </div>
        </div>
    </div>
    )
}

const mapStateToProps = (state) => {
     return {
         books: state.booksReducer.books
     }

}

export default connect(mapStateToProps)(Content)