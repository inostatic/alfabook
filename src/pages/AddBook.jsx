import React, {useState} from "react"
import {addBook} from "../API/API";

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

    const add = (e) => {
        e.preventDefault()
        if (name && author && category && src && price && description && cover && pagesCount && publicationDate) {
            addBook(name, author, category, src, price, description, cover, pagesCount, publicationDate)
            setName('')
            // setCategory('')
            setSrc('')
            setPrice('')
            setDescription('')
            setCover('')
            setPagesCount('')
            setPublicationDate('')
            setAuthor('')
        }
    }

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