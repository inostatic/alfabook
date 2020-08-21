import React from "react"



export const Categories = React.memo(({categories, onClickItem}) => {
    const [activeItem, setActiveItem] = React.useState(null)

    const onSelectItem = (index) => {
        setActiveItem(index)
        onClickItem(index)
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
})