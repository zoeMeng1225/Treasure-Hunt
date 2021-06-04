import React, { Component } from "react";
import {NavLink} from "react-router-dom";

import {Menu, Button} from "antd";

const { Item } = Menu;

const navBarSignUpButtonStyle={
    background: '#00a9cd',
    borderColor: '#00a9cd',
}


class RightMenu extends Component {
    render() {
        return (

            <Menu mode="horizontal" className="Right-menu">
                {/*TODO: if isLoggedIn false, direct to Sign Up page*/}
                <Item key="/saved-listings">
                    <NavLink  to="/saved-listings" activeClassName="saved-listings-active-class" className="saved-listings-class">Saved Items</NavLink>
                </Item>

                {/*TODO: if isLoggedIn false, direct to Sign Up page*/}
                <Item key="/my-listings">
                    <NavLink  to="/my-listings" activeClassName="my-listings-active-class" className="my-listings-class">My Listings</NavLink>
                </Item>

                {/*/!*TODO: Where do I put the isLoggedIn logic? If isLoggedIn is true, do not show Sign In button & Sign Up button, show Log Out button. Else, show Sign In & Sign Up button*!/*/}
                {/*{*/}
                {/*    isLoggedIn ?*/}
                {/*        <LogoutOutlined className='logout' onClick={handleLogout}/>*/}
                {/*        :*/}
                {/*        <Item key="/signIn">*/}
                {/*            <NavLink  to="/signIn" activeClassName="signIn-active-class" className="signIn-class">*/}
                {/*                <Button>Sign In</Button>*/}
                {/*            </NavLink>*/}
                {/*        </Item>*/}
                {/*        <Item key="/signUp">*/}
                {/*            <NavLink  to="/signUp" activeClassName="signUp-active-class" className="signUp-class">*/}
                {/*                <Button type="primary" style={navBarSignUpButtonStyle}>Sign Up</Button>*/}
                {/*            </NavLink>*/}
                {/*        </Item>*/}
                {/*}*/}

                {/*TODO: Remove border bottom?*/}
                {/*TODO: Distinguish style between sign in & the other 2 tabs (saved items & my listings)*/}
                <Item key="/signIn">
                    <NavLink  to="/signIn" activeClassName="signIn-active-class" className="signIn-class">
                        <Button>Sign In</Button>
                    </NavLink>
                </Item>

                {/*TODO: Remove border bottom?*/}
                <Item key="/signUp">
                    <NavLink  to="/signUp" activeClassName="signUp-active-class" className="signUp-class">
                        <Button type="primary" style={navBarSignUpButtonStyle}>Sign Up</Button>
                    </NavLink>
                </Item>
            </Menu>
        );
    }
}
export default RightMenu;
