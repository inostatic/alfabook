import React from "react"
import PropTypes from "prop-types"
import {Link} from "react-router-dom";

const Item = (props) => {

    return (
        <Link to={{
            pathname: 'book',
            book_id: props.token
        }}>
            <div className="item">
                <img src={props.src} alt="#"/>
                <div>{props.name}</div>
                <div className="item__bottom">
                    <div>{props.price}₽</div>
                    <div>Купить</div>
                </div>
            </div>
        </Link>
    )
}

Item.propTypes = {
    name : PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired
}

export default Item