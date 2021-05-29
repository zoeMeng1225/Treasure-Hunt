import React from 'react';
import { BrowserRouter, 
         Route, 
         Router, 
         Switch, 
         Link } from "react-router-dom";

import ItemList from './components/ItemList/ItemList';
import HomePage from './components/Home/Home';
import './App.css';


// this component should be a root router file
function App() {
  return (
    <BrowserRouter>
      <Switch>
        {/* add your router here like this. */}
        <Route exact path = "/" component = {HomePage}/> 
        <Route path = '/items' component = {ItemList}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
