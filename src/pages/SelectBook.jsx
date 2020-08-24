import React, {useEffect, useState} from "react"
import {getSelectedBook} from "../API/API";

export const SelectBook = (props) => {
    const [book, setBook] = useState(null)

    useEffect(() => {
        getSelectedBook(props.location.book_id).then(setBook)
    }, [props.location.book_id])


    return (
        book &&
        <div className='select__book'>
            <img src={book.src} alt="#"/>
            <div className='select__right'>
                <div className='select__name'>{book.name}</div>
                <div className='select__elem'>Автор: {book.author}</div>
                <div className='select__elem'>Количество страниц: {book.pagesCount}</div>
                <div className='select__elem'>Дата публикации: {book.publicationDate} год</div>
                <div className='select__elem'>Анотация: {book.description}</div>
                <div className='select__elem'>Цена: {book.price}руб.</div>
                <button>Купить</button>
            </div>
        </div>

    )


}