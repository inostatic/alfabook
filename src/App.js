import React, {useEffect} from 'react'
import './App.scss'
import {Header} from "./components/header/header"
import {Home} from "./pages/Home";
import {Cart} from "./pages/Cart";
import {Route} from "react-router-dom";
import {AddBook} from "./pages/AddBook";
import {SelectBook} from "./pages/SelectBook";
import {useDispatch} from "react-redux";
import {getBooks} from "./API/API";
import {setBooksAC} from "./redux/action/books";
import {transformObjectToArray} from "./utils";

const App = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        getBooks().then(r => dispatch(setBooksAC(transformObjectToArray(r))))
    }, [])

  return (
    <div className="wrapper">
        <Header/>
        <Route exact path='/' component={Home} />
        <Route exact path='/cart' component={Cart} />
        <Route exact path='/book' component={SelectBook} />
        <Route exact path='/add' component={AddBook} />
    </div>
  )
}

export default App
