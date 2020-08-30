import React from "react"
import Item from "./item";
import { useSelector} from "react-redux";


export const Content = ({sendBookToCart}) => {
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
                    books.map((item, index) => <Item key={index} item={item} sendBookToCart={sendBookToCart}/>)
                    }
                </div>
            </div>
        </div>
    )
}
