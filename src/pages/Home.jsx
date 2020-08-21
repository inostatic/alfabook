import React, {useCallback} from "react"
import {Categories} from "../components/categories/Categories";
import {Sort} from "../components/sort/Sort";
import {Content} from "../components/content/content";
import {useDispatch} from "react-redux";
import {changeFilterAC} from "../redux/action/filters";


export const Home = () => {
    const dispatch = useDispatch()
    const categories = ['Художественные', 'История', 'Философия', 'Программирование', 'Наука']
    const sortItem = ['популярности', 'цене', 'алфавиту']

    const onClickItem = useCallback((index) => {
            dispatch(changeFilterAC(index))
        }, [])

    return (
        <>
            <div className="content__top">
                <Categories
                    onClickItem={onClickItem}
                    categories={categories}
                />
                <Sort
                    sortItems={sortItem}
                />
            </div>
            <Content/>
        </>
    )
}