import React from "react"
import {Categories} from "../components/categories/Categories";
import {Sort} from "../components/sort/Sort";
import {Content} from "../components/content/content";


export const Home = () => {

    let categories = ['Художественные', 'История', 'Философия', 'Программирование', 'Наука']
    let sortItem = ['популярности', 'цене', 'алфавиту']

    return (
        <>
            <div className="content__top">
                <Categories
                    onClickItem={(el) => console.log(el)}
                    categories={categories}/>
                <Sort sortItems={sortItem}/>
            </div>
            <Content/>
        </>
    )
}