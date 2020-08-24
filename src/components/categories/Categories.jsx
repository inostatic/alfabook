import React from "react"
import PropTypes from "prop-types"



export const Categories = React.memo(({categories, onClickCategory, typeFilter}) => {


    return (
        <div className="categories">
            <ul>
                <li className={typeFilter === null ? 'target' : ''}
                    onClick={() => onClickCategory(null)}
                >Все
                </li>
                {
                    categories &&
                    categories.map((el, index) => <li className={typeFilter === index ? 'target' : ''}
                                                      onClick={() => onClickCategory(index)}
                                                      key={`${index}_${el}`}>{el}</li>)
                }
            </ul>
        </div>
    )
})


Categories.defaultProps = {
    typeFilter: null,
    categories: []
}

Categories.propTypes = {
    typeFilter: PropTypes.number,
    categories: PropTypes.arrayOf(PropTypes.string).isRequired,
    onClickCategory: PropTypes.func.isRequired
}