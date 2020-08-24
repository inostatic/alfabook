import React from "react"
import logo from "../assets/images/icon.svg"
import cart from "../assets/images/cart.svg"
import {NavLink} from "react-router-dom";

export const Header = () => {

    return (
        <div className="header">
            <div className="container">
                <NavLink to='/'>
                    <div className="header__logo">
                        <img src={logo} alt="#"/>
                        <div>
                            <h1>Alfabook</h1>
                            <p>Книжный интернет-магазин</p>
                        </div>
                    </div>
                </NavLink>
               <NavLink to='/cart'>
                   <div className="header__cart">
                       <span>520₽</span>
                       <div className="button__delimiter"></div>
                       <img src={cart} alt="#"/>
                       <span>5</span>
                   </div>
               </NavLink>
            </div>
        </div>
    )
}