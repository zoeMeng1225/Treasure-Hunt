import React, { useEffect, useState } from "react";
import { Card, Col, Layout, List, Row, Space, message } from "antd";
import axios from "axios";

import {
  BASE_URL,
  PICTURE_URL_PREFIX,
  TEST_TOKEN,
  TOKEN_KEY,
} from "../../constants/constants";
import "./SavedListings.style.css";

const { Header, Content } = Layout;
const { Meta } = Card;

const SavedListings = () => {
  // listings stores listings data stored in db
  const [savedListings, setSavedListings] = useState([]);

  // fetchListings
  const fetchListings = async () => {
    const url = `/saved-listings`;

    // define request
    const opt = {
      method: "GET",
      url: url,
      headers: {
        Authorization: `Bearer ${TEST_TOKEN}`,
      },
    };

    try {
      const response = await axios(opt);
      console.log(response);

      if (response.status === 200) {
        setSavedListings(response.data);
      }
    } catch (err) {
      message.error("Fetch listings failed");
      console.log("Fetch listings failed: ", err.message);
    }
  };

  // test
  const fetchListingDetail = async () => {
    const product_id = "1622614549717";
    const newURL = `/listing?listing_id=${product_id}`;

    const opt = {
      method: "GET",
      url: newURL,
      // headers: {
      //   Authorization: `Bearer ${TOKEN_KEY}`//localStorage.getItem()
      // }
    };

    try {
      console.log("Trying to fetch");
      const response = await axios(opt);
      console.log(response);
      if (response.status === 200) {
        console.log(response.data);
        // setListingDetail(response.data);
      }
    } catch (err) {
      message.error("Fetch listing detail failed");
      console.log("Fetch listing detail failed: ", err.message);
    }
  };

  // fetchListings on start, for now, use testData
  useEffect(() => {
    fetchListingDetail();
    fetchListings();
  }, []);

  const ListingInfo = ({ item, value }) => (
    <Space>
      {item}
      {value}
    </Space>
  );

  const getPictureUrl = (picture_urls) => {
    return `${PICTURE_URL_PREFIX}${Object.values(picture_urls)[0]}`;
  };

  return (
    <div className="saved-listings-page">
      <Layout>
        <Header>Header</Header>
        <Content className="saved-listings-content">
          <List
            grid={{
              gutter: 48,
              xs: 1,
              sm: 2,
              md: 3,
              lg: 3,
              xl: 4,
              xxl: 5,
            }}
            dataSource={savedListings}
            renderItem={(item) => (
              <List.Item key={item.listing_id}>
                <Card
                  hoverable
                  style={{ width: "100%" }}
                  cover={
                    <img alt="pic" src={getPictureUrl(item.picture_urls)} />
                  }
                >
                  <Meta title={item.title} className="listing-info" />
                  <Row gutter={[16, 24]} className="listing-info">
                    <Col>{item.description}</Col>
                  </Row>
                  <Row
                    gutter={[16, 24]}
                    justify="space-between"
                    className="listing-info"
                  >
                    <Col>{"$" + item.price}</Col>
                    <Col>{item.location}</Col>
                  </Row>
                </Card>
              </List.Item>
            )}
          />
        </Content>
      </Layout>
    </div>
  );
};

export default SavedListings;
