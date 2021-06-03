import React, { Component } from "react";
import {NavLink} from "react-router-dom";

import {Menu} from "antd";

import logo from "../../assets/images/logo.png";


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
                    <NavLink  to="/sell" activeClassName="Sell-active-class" className="link">Sell</NavLink>
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
