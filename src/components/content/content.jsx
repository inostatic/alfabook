import React, {useEffect, useState} from "react"
import "./content.scss"
import Item from "../item/item";
import {getBooks} from "../../API/API";
import {transformObjectToArray} from "../../utils";

export const Content = () => {
    const [items, setItems] = useState(null)

    useEffect(() => {
        getBooks().then(r => setItems(transformObjectToArray(r)))
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