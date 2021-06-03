import React, { Component } from "react";
import {NavLink} from "react-router-dom";

import {Menu, Button} from "antd";

import ItemList from '../ItemList/ItemList'
import MyListings from '../MyListings/MyListings'
import SavedListings from '../SavedListings/SavedListings'

const { Item } = Menu;

const navBarSignUpButtonStyle={
    background: '#00a9cd',
    borderColor: '#00a9cd',
}
class RightMenu extends Component {
    render() {
        return (
            <Menu mode="horizontal" className="Right-menu">
                <Item key="/saved-listings">
                    {/*TODO: cannot change text color (unlike for sub nav bar). Would <Link to="/savedItems"> vs. <NavLink vs. <a href make a difference in customizing the menu item theme? */}
                    <NavLink  to="/saved-listings" activeClassName="saved-listings-active-class" className="link">Saved Items</NavLink>

                </Item>
                <Item key="/my-listings">
                    <NavLink  to="/my-listings" activeClassName="my-listings-active-class" className="link">My Listings</NavLink>
                </Item>

                <Item key="/signIn">
                    <NavLink  to="/signIn" activeClassName="signIn-active-class" className="link">Sign In</NavLink>
                    {/*<a href="">Sign In</a>*/}
                </Item>
                <Item key="/signUp">
                    <NavLink  to="/signUp" activeClassName="signUp-active-class" className="link">
                        <Button type="primary" style={navBarSignUpButtonStyle}>Sign Up</Button>
                    </NavLink>
                </Item>
            </Menu>
        );
    }
}
export default RightMenu;
