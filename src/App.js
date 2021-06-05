import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HomePage from './components/Home/Home';
import ItemList from './components/ItemList/ItemList';
import MyListings from './components/MyListings/MyListings';
import SavedListings from './components/SavedListings/SavedListings';
import './App.css';
import Login from './components/Authentication/Login/Login';
import SignUp from './components/Authentication/SignUp/SignUp'

// this component should be a root router file
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/items" component={ItemList} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route exact path="/my-listings-page" component={MyListings} />
        <Route exact path="/saved-listings-page" component={SavedListings} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
