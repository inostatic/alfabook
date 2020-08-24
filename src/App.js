import React from 'react'
import './scss/index.scss'
import {Header} from "./components/header"
import {Home} from "./pages/Home";
import {Cart} from "./pages/Cart";
import {Route} from "react-router-dom";
import {AddBook} from "./pages/AddBook";
import {SelectBook} from "./pages/SelectBook";



const App = () => {

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
