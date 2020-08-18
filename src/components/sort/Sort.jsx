import React, {useEffect, useRef, useState} from "react"
import arrow from "../../assets/images/arrow.svg"

export const Sort = ({sortItems}) => {
    const [visibleMenu, setVisibleMenu] = useState(false)
    const [activeItem, setActiveItem] = useState(0)
    const sortRef = useRef()

    const toggleVisibleMenu = () => {
        setVisibleMenu(!visibleMenu)
    }

    const onSelectItem = (index) => {
        setActiveItem(index)
        setVisibleMenu(false)
    }

    const handleOutsideClick = (e) => {
        if (!e.path.includes(sortRef.current)) {
            setVisibleMenu(false)
        }
    }

    useEffect(() => {
        document.body.addEventListener('click', handleOutsideClick)
    }, [])

    return (
        <div ref={sortRef} className="sort">
            <div className="sort__label" onClick={() => toggleVisibleMenu()}>
                <img src={arrow} alt="#" className={visibleMenu ? 'rotated' : ''}/>
                <b>Сортировка по:</b>
                <span>{sortItems[activeItem]}</span>
            </div>
            {visibleMenu &&
                <div className="sort__menu">
                <ul>
                    {
                        sortItems &&
                        sortItems.map((el, index) => <li className={activeItem === index ? 'active' : ''}
                                                          onClick={() => onSelectItem(index)}
                                                          key={`${index}_${el}`}>{el}</li>)
                    }
                </ul>
            </div>
            }
        </div>
    )
}