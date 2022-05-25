import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import AddStock from './components/AddStock';
import EditStock from './components/EditStock';
import StockHome from './components/StockHome';
import NavBar from './components/NavBar';
import StockDetails from './components/StockDetails';
import Footer from './components/Footer';

import List from "./components/inventory-list"
import Update from "./components/modify-list"
import CreateItems from "./components/create-item"
import Remove from "./components/remove-item"

export default class App extends Component {
  render() {
    return (

      
    <BrowserRouter>
      
       <div className="container">
         <NavBar/>
         <Route path="/" exact component={StockHome}></Route>
         <Route path="/add" component={AddStock}></Route>
         <Route path="/edit/:id" component={EditStock}></Route>
         <Route path="/stock/:id" component={StockDetails}></Route>

         <Route path="/list" exact component={List} />
         <Route path="/update/" component={Update} />
         <Route path="/create/" component={CreateItems} />
         <Route path="/remove/" component={Remove} />
        
       </div>
       <Footer />
      </BrowserRouter>


)
}
}