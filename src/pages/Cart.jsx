import React from "react"
import {Link} from "react-router-dom";

export const Cart = () => {

    return (
        <div className="cart">
            <div className="cart__title">
                <div>Корзина</div>
                <div>Очистить корзниу</div>
            </div>

            <div className="cart__elem">
                <img src="https://img-gorod.ru/25/868/2586843_detail.jpg" alt="#"/>
                <div className="cart__info">
                    <div className="cart__name">Биология: сборник задач</div>
                    <div className="cart__author">Богданов С О</div>
                </div>
                <div className="cart__count">
                    <div className="cart__button">-</div>
                    <div className="cart__counter">5</div>
                    <div className="cart__button">+</div>
                </div>
                <div className="cart__price">724руб</div>
                <div className="cart__delete">&#10006;</div>

            </div>
            <div className="cart__sum">
                <div>Всего книг: <b>3шт</b></div>
                <div>Сумма заказа: <b>900руб</b></div>
            </div>
            <div className="cart__footer">
                <div>Вернуться назад</div>
                <div className='right'>Оплатить сейчас</div>
            </div>
        </div>

    )
}