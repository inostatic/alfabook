import React from "react"


export const CartItem = ({src, author, name, totalPrice, totalCount, token, removeCartItems}) => {

    const removeCartElem = () => {
        removeCartItems(token)
    }

    return (
        <div className="cart__elem">
            <img src={src} alt="#"/>
            <div className="cart__info">
                <div className="cart__name">{name}</div>
                <div className="cart__author">{author}</div>
            </div>
            <div className="cart__count">
                <div className="cart__button">-</div>
                <div className="cart__counter">{totalCount}</div>
                <div className="cart__button">+</div>
            </div>
            <div className="cart__price">{totalPrice}руб</div>
            <div className="cart__delete" onClick={removeCartElem}>&#10006;</div>

        </div>
    )
}