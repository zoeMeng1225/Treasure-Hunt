import React, { Component } from "react";

import {Menu, Space, Input} from "antd";

import logo from "../../assets/images/logo.png";
import {NavLink} from 'react-router-dom'

const onSearch = value => console.log(value);



class LeftMenu extends Component {
    render() {
        return (
            <Menu mode="horizontal" className="Left-menu">
                <Menu.Item key="App-logo">
                    {/*TODO: direct to home when on other pages*/}
                    <a href="">
                        <img alt={"app-logo"} src={logo} />
                    </a>
                </Menu.Item>

                <Menu.Item key="/items">
                    <NavLink  to="/items" activeClassName="items-active-class" className="link">Shop</NavLink>
                </Menu.Item>

                <Menu.Item key="/sell">
                    <a href="">Sell</a>
                </Menu.Item>

                <Menu.Item key="/search">
                    {/*TODO: change search bar style*/}
                    <input placeholder="search" type="text" className="ant-input ds-input" onSearch={onSearch}></input>
                </Menu.Item>
            </Menu>
        );
    }
}
export default LeftMenu;
