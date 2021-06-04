import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

<<<<<<< HEAD
import HomePage from "./components/Home/Home";
import ItemList from "./components/ItemList/ItemList";
import MyListings from "./components/MyListings/MyListings";
import SavedListings from "./components/SavedListings/SavedListings";
import ListingDetail from "./components/ListingDetail/ListingDetail";

import "./App.css";
=======
import HomePage from './components/Home/Home';
import ItemList from './components/ItemList/ItemList';
import MyListings from './components/MyListings/MyListings';
import SavedListings from './components/SavedListings/SavedListings';
import './App.css';
>>>>>>> 6faec088950f662409bc0a50d0e459dbd2e033b5

// this component should be a root router file
function App() {
  return (
    <BrowserRouter>
      <Switch>
        {/* add your router here like this. */}
        <Route exact path="/" component={HomePage} />
        <Route path="/items" component={ItemList} />
<<<<<<< HEAD
        <Route path="/my-listings" component={MyListings} />
        <Route path="/saved-listings" component={SavedListings} />
        <Route path="/listing-detail" component={ListingDetail} />
=======
        <Route exact path="/my-listings-page" component={MyListings} />
        <Route exact path="/saved-listings-page" component={SavedListings} />
>>>>>>> 6faec088950f662409bc0a50d0e459dbd2e033b5
      </Switch>
    </BrowserRouter>
  );
}

export default App;
