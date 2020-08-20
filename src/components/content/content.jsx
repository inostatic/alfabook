import React from "react"
import "./content.scss"
import Item from "../item/item";
import { useSelector} from "react-redux";


export const Content = () => {
    const {books} = useSelector(({booksReducer}) => {
        return {
            books: booksReducer.books
        }
    })


    return (
        <div className="content">
            <div className="container">
                <div className="content__title">Все книги</div>
                <div className="content__items">
                    {books &&
                    books.map((item, index) => <Item key={index} {...item}/>)
                    }
                </div>
            </div>
        </div>
    )
}
