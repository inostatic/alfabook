import React from "react"



export const Categories = React.memo(({categories, onClickItem, typeFilter}) => {

    const onSelectItem = (index) => {
        onClickItem(index)
    }

    return (
        <div className="categories">
            <ul>
                <li className={typeFilter === null ? 'target' : ''}
                    onClick={() => onSelectItem(null)}
                >Все
                </li>
                {
                    categories &&
                    categories.map((el, index) => <li className={typeFilter === index ? 'target' : ''}
                                                      onClick={() => onSelectItem(index)}
                                                      key={`${index}_${el}`}>{el}</li>)
                }
            </ul>
        </div>
    )
})