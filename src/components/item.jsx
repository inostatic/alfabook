import React from "react"
import PropTypes from "prop-types"
import {Link} from "react-router-dom";

const Item = ({item, sendBookToCart}) => {

    const sendBook = () => {
        sendBookToCart(item)
    }

    return (

        <div className="item">
            <Link to={{
                pathname: 'book',
                book_id: item.token
            }}>
                <img src={item.src} alt="#"/>
            </Link>
            <div>{item.name}</div>
            <div className="item__bottom">
                <div>{item.price}₽</div>
                <button onClick={sendBook}>Купить</button>
            </div>
        </div>

    )
}

/*Item.propTypes = {
    name: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired
}*/

export default Item