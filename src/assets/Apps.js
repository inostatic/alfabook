import logo from "./images/icon.svg";
import cart from "./images/cart.svg";
import arrow from "./images/arrow.svg";
import React from "react";
import './App.scss'

const App = () => {
    return (
        <div className='wrapper'>
            <div className="header">
                <div className="header__logo">
                    <img src={logo} alt="#"/>
                    <div>
                        <h1>Alfabook</h1>
                        <p>Книжный интернет-магазин</p>
                    </div>
                </div>
                <div className="header__cart">
                    <span>520₽</span>
                    <div className="button__delimiter"></div>
                    <img src={cart} alt="#"/>
                    <span>5</span>
                </div>
            </div>

            <div className="all-filters">
                <div className="categories">
                    <div className="all-filters__label">
                        <img src={arrow} alt="#"/>
                        <b>Категории:</b>
                        <span>Философия</span>
                    </div>
                    {/*<div className="all-filters__menu">*/}
                    {/*    <ul>*/}
                    {/*        <li className='active'>Все</li>*/}
                    {/*        <li>Философия</li>*/}
                    {/*        <li>Наука</li>*/}
                    {/*        <li>Художств</li>*/}
                    {/*    </ul>*/}
                    {/*</div>*/}
                </div>
                <div className="sort">
                    <div className="all-filters__label">
                        <img src={arrow} alt="#"/>
                        <b>Сортировка по:</b>
                        <span>Популярности</span>
                    </div>
                    {/*<div className="all-filters__menu position">*/}
                    {/*    <ul>*/}
                    {/*        <li className='active'>Популярности</li>*/}
                    {/*        <li>Алфавиту</li>*/}
                    {/*        <li>Цене</li>*/}
                    {/*    </ul>*/}
                    {/*</div>*/}
                </div>
            </div>
            <div className="content">
                <div className="content__title">Все книги</div>
                <div className="content__items">
                    <div className="item">
                        <img src="https://img-gorod.ru/25/868/2586843_detail.jpg" alt="#"/>
                        <div>Биология</div>
                        <div className="item__bottom">
                            <div>555₽</div>
                            <div>Купить</div>
                        </div>
                    </div>
                    <div className="item">
                        <img src="https://img-gorod.ru/25/868/2586843_detail.jpg" alt="#"/>
                        <div>Биология</div>
                        <div className="item__bottom">
                            <div>555₽</div>
                            <div>Купить</div>
                        </div>
                    </div>
                    <div className="item">
                        <img src="https://img-gorod.ru/25/868/2586843_detail.jpg" alt="#"/>
                        <div>Биология</div>
                        <div className="item__bottom">
                            <div>555₽</div>
                            <div>Купить</div>
                        </div>
                    </div>
                    <div className="item">
                        <img src="https://img-gorod.ru/25/868/2586843_detail.jpg" alt="#"/>
                        <div>Биология</div>
                        <div className="item__bottom">
                            <div>555₽</div>
                            <div>Купить</div>
                        </div>
                    </div>
                    <div className="item">
                        <img src="https://img-gorod.ru/25/868/2586843_detail.jpg" alt="#"/>
                        <div>Биология</div>
                        <div className="item__bottom">
                            <div>555₽</div>
                            <div>Купить</div>
                        </div>
                    </div>
                    <div className="item">
                        <img src="https://img-gorod.ru/25/868/2586843_detail.jpg" alt="#"/>
                        <div>Биология</div>
                        <div className="item__bottom">
                            <div>555₽</div>
                            <div>Купить</div>
                        </div>
                    </div>
                    <div className="item">
                        <img src="https://img-gorod.ru/25/868/2586843_detail.jpg" alt="#"/>
                        <div>Биология</div>
                        <div className="item__bottom">
                            <div>555₽</div>
                            <div>Купить</div>
                        </div>
                    </div>
                    <div className="item">
                        <img src="https://img-gorod.ru/25/868/2586843_detail.jpg" alt="#"/>
                        <div>Биология</div>
                        <div className="item__bottom">
                            <div>555₽</div>
                            <div>Купить</div>
                        </div>
                    </div>
                    <div className="item">
                        <img src="https://img-gorod.ru/25/868/2586843_detail.jpg" alt="#"/>
                        <div>Биология</div>
                        <div className="item__bottom">
                            <div>555₽</div>
                            <div>Купить</div>
                        </div>
                    </div>
                    <div className="item">
                        <img src="https://img-gorod.ru/25/868/2586843_detail.jpg" alt="#"/>
                        <div>Биология</div>
                        <div className="item__bottom">
                            <div>555₽</div>
                            <div>Купить</div>
                        </div>
                    </div>
                    <div className="item">
                        <img src="https://img-gorod.ru/25/868/2586843_detail.jpg" alt="#"/>
                        <div>Биология</div>
                        <div className="item__bottom">
                            <div>555₽</div>
                            <div>Купить</div>
                        </div>
                    </div>
                    <div className="item">
                        <img src="https://img-gorod.ru/25/868/2586843_detail.jpg" alt="#"/>
                        <div>Биология</div>
                        <div className="item__bottom">
                            <div>555₽</div>
                            <div>Купить</div>
                        </div>
                    </div>
                    <div className="item">
                        <img src="https://img-gorod.ru/25/868/2586843_detail.jpg" alt="#"/>
                        <div>Биология</div>
                        <div className="item__bottom">
                            <div>555₽</div>
                            <div>Купить</div>
                        </div>
                    </div>
                    <div className="item">
                        <img src="https://img-gorod.ru/25/868/2586843_detail.jpg" alt="#"/>
                        <div>Биология</div>
                        <div className="item__bottom">
                            <div>555₽</div>
                            <div>Купить</div>
                        </div>
                    </div>
                    <div className="item">
                        <img src="https://img-gorod.ru/25/868/2586843_detail.jpg" alt="#"/>
                        <div>Биология</div>
                        <div className="item__bottom">
                            <div>555₽</div>
                            <div>Купить</div>
                        </div>
                    </div>
                    <div className="item">
                        <img src="https://img-gorod.ru/25/868/2586843_detail.jpg" alt="#"/>
                        <div>Биология</div>
                        <div className="item__bottom">
                            <div>555₽</div>
                            <div>Купить</div>
                        </div>
                    </div>
                    <div className="item">
                        <img src="https://img-gorod.ru/25/868/2586843_detail.jpg" alt="#"/>
                        <div>Биология</div>
                        <div className="item__bottom">
                            <div>555₽</div>
                            <div>Купить</div>
                        </div>
                    </div>
                    <div className="item">
                        <img src="https://img-gorod.ru/25/868/2586843_detail.jpg" alt="#"/>
                        <div>Биология</div>
                        <div className="item__bottom">
                            <div>555₽</div>
                            <div>Купить</div>
                        </div>
                    </div>
                    <div className="item">
                        <img src="https://img-gorod.ru/25/868/2586843_detail.jpg" alt="#"/>
                        <div>Биология</div>
                        <div className="item__bottom">
                            <div>555₽</div>
                            <div>Купить</div>
                        </div>
                    </div>
                    <div className="item">
                        <img src="https://img-gorod.ru/25/868/2586843_detail.jpg" alt="#"/>
                        <div>Биология</div>
                        <div className="item__bottom">
                            <div>555₽</div>
                            <div>Купить</div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default App