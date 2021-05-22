import React, {Component} from "react";

import {Col, Row, Layout, Menu, Input, Space, Affix} from "antd";

import CarouselSlides from "./CarouselSlides";
import ShopCategory from "./ShopCategory";
import TopNavBar from "../Header/TopNavBar";
import SubNavBar from "../Header/SubNavBar";
import HomeFlaunt from "./HomeFlaunt";
import AppFooter from "../Footer/AppFooter";


const { Search } = Input;

const { Header, Content, Footer } = Layout;

const onSearch = value => console.log(value);

class Home extends Component {
    render() {
        return (
            <Layout className="Homelayout">

                <Affix offsetTop={0} className="app__affix-header">
                    <TopNavBar/>
                    <SubNavBar/>
                </Affix>

                <Content style={{ padding: '0 50px'}}>
                    <CarouselSlides/>
                    <ShopCategory/>
                    <HomeFlaunt/>
                </Content>

                <Footer>
                    <AppFooter/>
                </Footer>

            </Layout>
        );
    }
}

export default Home;
