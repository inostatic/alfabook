import React, {useState} from "react"
import {addBook, addBookInCategory} from "../API/API";
import {createToken} from "../utils";

export const AddBook = () => {
    const [name, setName] = useState('')
    const [author, setAuthor] = useState('')
    const [category, setCategory] = useState('')
    const [src, setSrc] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [cover, setCover] = useState('')
    const [pagesCount, setPagesCount] = useState('')
    const [publicationDate, setPublicationDate] = useState('')


    // const {books} = useSelector(({booksReducer}) => {
    //     return {
    //         books: booksReducer.books
    //     }
    // })
    const add = (e) => {
        e.preventDefault()
        if (name && author && category && src && price && description && cover && pagesCount && publicationDate) {
            const token = createToken()
            addBook(name, author, category, src, price, description, cover, pagesCount, publicationDate, token)
            addBookInCategory(name, author, category, src, price, description, cover, pagesCount, publicationDate, token)
            setName('')
            // setCategory('')
            setSrc('')
            setPrice('')
            setDescription('')
            setCover('')
            setPagesCount('')
            setPublicationDate('')
        }
            setAuthor('')
    }

    // const end = () => {
    //     for ( let i = 0; i < books.length; i++) {
    //         const token = createToken()
    //         addBookInCategory(books[i].name, books[i].author, books[i].category, books[i].src, books[i].price, books[i].description, books[i].cover, books[i].pagesCount, books[i].publicationDate, token)
    //         addBook(books[i].name, books[i].author, books[i].category, books[i].src, books[i].price, books[i].description, books[i].cover, books[i].pagesCount, books[i].publicationDate, token)
    //     }
    // }

    return (
        <div className="add">
            <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
            <input type="text" placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)}/>
            <input type="text" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)}/>
            <input type="text" placeholder="src" value={src} onChange={(e) => setSrc(e.target.value)}/>
            <input type="text" placeholder="price" value={price} onChange={(e) => setPrice(e.target.value)}/>
            <input type="text" placeholder="cover" value={cover} onChange={(e) => setCover(e.target.value)}/>
            <input type="text" placeholder="pagesCount" value={pagesCount} onChange={(e) => setPagesCount(e.target.value)}/>
            <input type="text" placeholder="publicationDate" value={publicationDate} onChange={(e) => setPublicationDate(e.target.value)}/>
            <textarea placeholder="description" value={description} onChange={(e) => setDescription(e.target.value)}/>
            <button onClick={add}>Добавить</button>
        </div>
    )
}