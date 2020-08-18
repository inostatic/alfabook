import React, {useState} from "react"

export const Categories = ({categories, onClickItem}) => {
    const [activeItem, setActiveItem] = useState(null)

    const onSelectItem = (index) => {
        setActiveItem(index)
    }

    return (
        <div className="categories">
            <ul>
                <li className={activeItem === null ? 'target' : ''}
                    onClick={() => onSelectItem(null)}
                >Все
                </li>
                {
                     categories &&
                    categories.map((el, index) => <li className={activeItem === index ? 'target' : ''}
                                                      onClick={() => onSelectItem(index)}
                                                      key={`${index}_${el}`}>{el}</li>)
                }
            </ul>
        </div>
    )
}