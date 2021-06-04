import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HomePage from './components/Home/Home';
import ItemList from './components/ItemList/ItemList';
import MyListings from './components/MyListings/MyListings';
import SavedListings from './components/SavedListings/SavedListings';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './views/Login';
import SignUp from './views/SignUp'

// this component should be a root router file
function App() {
  return (
    <BrowserRouter>
      <Switch>
        {/* add your router here like this. */}
        <Route exact path="/" component={HomePage} />
        <Route path="/items" component={ItemList} />
        <Route exact path="/my-listings-page" component={MyListings} />
        <Route exact path="/saved-listings-page" component={SavedListings} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
