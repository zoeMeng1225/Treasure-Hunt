import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HomePage from './components/Home/Home';
import ItemList from './components/ItemList/ItemList';
import MyListings from './components/MyListings/MyListings';
import SavedListings from './components/SavedListings/SavedListings';

import Login from 'components/Authentication/Login/Login';
import SignUp from 'components/Authentication/SignUp/SignUp';
import ListingDetail from './components/ListingDetail/ListingDetail';

import './App.css';
// this component should be a root router file
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/items" component={ItemList} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route exact path="/my-listings/" component={MyListings} />
        <Route exact path="/saved-listings" component={SavedListings} />
        <Route path="/listing-detail/:listing_id" component={ListingDetail} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
