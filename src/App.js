import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HomePage from './components/Home/Home';
import ItemList from './components/ItemList/ItemList';
import MyListings from './components/MyListings/MyListings';
import SavedListings from './components/SavedListings/SavedListings';
import './App.css';

// this component should be a root router file
function App() {
  return (
    <BrowserRouter>
      <Switch>
        {/* add your router here like this. */}
        <Route exact path="/" component={HomePage} />
        <Route path="/items" component={ItemList} />
        <Route path="/my-listings" component={MyListings} />
        <Route path="/saved-listings" component={SavedListings} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
