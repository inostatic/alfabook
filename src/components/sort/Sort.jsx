import React from "react"
import arrow from "../../assets/images/arrow.svg"
import PropTypes from "prop-types";


export const Sort = React.memo(({sortItems, sortBy, onClickSetActiveItem}) => {
    const [visibleMenu, setVisibleMenu] = React.useState(false)
    const sortRef = React.useRef()

    const toggleVisibleMenu = () => {
        setVisibleMenu(!visibleMenu)
    }

    const onSelectItem = (index) => {
        onClickSetActiveItem(index)
        setVisibleMenu(false)
    }

    const handleOutsideClick = (e) => {
        if (!e.path.includes(sortRef.current)) {
            setVisibleMenu(false)
        }
    }

    React.useEffect(() => {
        document.body.addEventListener('click', handleOutsideClick)
    }, [])

    return (
        <div ref={sortRef} className="sort">
            <div className="sort__label" onClick={() => toggleVisibleMenu()}>
                <img src={arrow} alt="#" className={visibleMenu ? 'rotated' : ''}/>
                <b>Сортировка по:</b>
                <span>{sortItems[sortBy]}</span>
            </div>
            {visibleMenu &&
            <div className="sort__menu">
                <ul>
                    {
                        sortItems &&
                        sortItems.map((el, index) => <li className={sortBy === index ? 'active' : ''}
                                                         onClick={() => onSelectItem(index)}
                                                         key={`${index}_${el}`}>{el}</li>)
                    }
                </ul>
            </div>
            }
        </div>
    )
})

Sort.defaultProps = {
    sortItems: [],
    sortBy: 0
}

Sort.propTypes = {
    sortItems: PropTypes.array.isRequired,
    sortBy: PropTypes.number.isRequired,
    onClickSetActiveItem: PropTypes.func.isRequired
}