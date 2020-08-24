import React, {useCallback, useEffect} from "react"
import {Categories} from "../components/categories/Categories";
import {Sort} from "../components/sort/Sort";
import {Content} from "../components/content/content";
import {useDispatch, useSelector} from "react-redux";
import {changeFilterAC, sortByAC} from "../redux/action/filters";
import {fetchBooks, fetchCategoryBooks} from "../redux/action/books";
import MyLoader from "../assets/loader/MyLoader";



export const Home = () => {
    const dispatch = useDispatch()
    const categories = ['Художественные', 'История', 'Философия', 'Программирование', 'Наука']
    const sortItem = ['популярности', 'цене', 'алфавиту']
    const isLoaded = useSelector(({ booksReducer }) => booksReducer.isLoaded)
    const {typeFilter, sortBy} = useSelector(({ filtersReducer }) => filtersReducer)


    const onClickCategory = useCallback((index) => {
            dispatch(changeFilterAC(index))
        }, [])

    const onClickSetActiveItem = useCallback((index) => {
        dispatch(sortByAC(index))
    }, [])

    useEffect(() => {
        if(typeFilter === null) {
            dispatch(fetchBooks())
        } else {
            dispatch(fetchCategoryBooks(typeFilter))
        }
    }, [typeFilter])



    return (
        <>
            <div className="content__top">
                <Categories
                    onClickCategory={onClickCategory}
                    categories={categories}
                    typeFilter={typeFilter}
                />
                <Sort
                    sortItems={sortItem}
                    sortBy={sortBy}
                    onClickSetActiveItem={onClickSetActiveItem}
                />
            </div>
            {!isLoaded && <MyLoader/>}
            <Content/>
        </>
    )
}