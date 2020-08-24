import React from 'react'
// import './scss/index.scss'
// import {Header} from "./components/header"
// import {Home} from "./pages/Home";
// import {Cart} from "./pages/Cart";
// import {Route} from "react-router-dom";
// import {AddBook} from "./pages/AddBook";
// import {SelectBook} from "./pages/SelectBook";


import './App.scss'
import logo from "./assets/images/icon.svg"
import cart from "./assets/images/cart.svg"
import arrow from "./assets/images/arrow.svg";





// const App = () => {
//
//   return (
//     <div className="wrapper">
//         <Header/>
//         <Route exact path='/' component={Home} />
//         <Route exact path='/cart' component={Cart} />
//         <Route exact path='/book' component={SelectBook} />
//         <Route exact path='/add' component={AddBook} />
//     </div>
//   )
// }
//
// export default App

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

            <div className="all_filters">
                <div className="categories">
                    <div className="categories__label">
                        <span>Все</span>
                        <img src={arrow} alt="#"/>
                    </div>
                    <div className="categories__menu">
                        <ul>
                            <li>Все</li>
                            <li>Философия</li>
                            <li>Наука</li>
                            <li>Художств</li>
                        </ul>
                    </div>
                </div>
                <div className="sort"></div>
            </div>
            <div className="content">
            </div>
        </div>
    )
}

export default App