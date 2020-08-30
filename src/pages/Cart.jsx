import React from "react"
import {CartItem} from "../components/CartItem";
import {useDispatch, useSelector} from "react-redux";
import {clearCartAC, removeCartItemAC} from "../redux/action/cart";
import {Link} from "react-router-dom";

export const Cart = () => {

    const dispatch = useDispatch()

    const {totalPrice, totalCount, items} = useSelector(({cartReducer}) => cartReducer)
    const addedBooks = Object.keys(items).map(key => {
        return items[key].items[0]
    })

    const clearCart = () => {
        if (window.confirm('Вы действительно хотите очистить корзину?')) {
            dispatch(clearCartAC())
        }
    }

    const removeCartItems = (token) => {
        if (window.confirm('Вы действительно хотите удалить книгу?')) {
            dispatch(removeCartItemAC(token))
        }
    }

    return (
        <div className="cart">
            <div className="cart__title">
                <div>Корзина</div>
                <div onClick={clearCart}>Очистить корзниу</div>
            </div>
            {
                addedBooks.map(item => <CartItem
                    key={item.token}
                    token={item.token}
                    src={item.src}
                    name={item.name}
                    author={item.author}
                    totalPrice={items[item.token].totalPrice}
                    totalCount={items[item.token].items.length}
                    removeCartItems={removeCartItems}
                />)
            }

            <div className="cart__sum">
                <div>Всего книг: <b>{totalCount}</b></div>
                <div>Сумма заказа: <b>{totalPrice}руб</b></div>
            </div>
            <div className="cart__footer">
                <Link to="/">
                    <div className="left">Вернуться назад</div>
                </Link>
                <div className='right'>Оплатить сейчас</div>
            </div>
        </div>

    )
}