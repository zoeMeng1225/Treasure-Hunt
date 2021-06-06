import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import { Menu, Button } from 'antd';

const { Item } = Menu;

const navBarSignUpButtonStyle = {
  background: '#00a9cd',
  borderColor: '#00a9cd',
};

class RightMenu extends Component {
  render() {
    return (
      <Menu
        mode="horizontal"
        className="Right-menu"
        style={{ display: 'flex', flexDirection: 'row-reverse' }}
      >
        <Item key="/signup">
          <NavLink
            to="/signup"
            activeClassName="signUp-active-class"
            className="signUp-class"
          >
            <Button type="primary" style={navBarSignUpButtonStyle}>
              Sign Up
            </Button>
          </NavLink>
        </Item>

        <Item key="/login">
          <NavLink
            to="/login"
            activeClassName="signIn-active-class"
            className="signIn-class"
          >
            <Button>Login</Button>
          </NavLink>
        </Item>

        <Item key="/my-listings">
          <NavLink
            to="/my-listings"
            activeClassName="my-listings-active-class"
            className="my-listings-class"
          >
            My Listings
          </NavLink>
        </Item>

        <Item key="/saved-listings">
          <NavLink
            to="/saved-listings"
            activeClassName="saved-listings-active-class"
            className="saved-listings-class"
          >
            Saved Items
          </NavLink>
        </Item>
      </Menu>
    );
  }
}
export default RightMenu;
