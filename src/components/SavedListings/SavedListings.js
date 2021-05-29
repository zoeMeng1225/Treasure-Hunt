import React, { useEffect, useState } from "react";
import { Card, Col, Layout, List, Row, Space, message } from "antd";
import axios from "axios";

import { BASE_URL, TOKEN_KEY } from "../../constants/constants";
import "./SavedListings.style.css";

const { Header, Content } = Layout;
const { Meta } = Card;

const SavedListings = () => {
  // listings stores listings data stored in db
  const [savedListings, setSavedListings] = useState([]);

  // fetchListings
  const fetchListings = async () => {
    const url = `${BASE_URL}/saved-listings`;

    // define request
    const opt = {
      method: "GET",
      url: url,
      headers: {
        Authorization: `Bearer ${localStorage.getItem(TOKEN_KEY)}`,
      },
    };

    try {
      const response = await axios(opt);
      if (response.status === 200) {
        setSavedListings(response.data);
      }
    } catch (err) {
      message.error("Fetch listings failed");
      console.log("Fetch listings failed: ", err.message);
    }
  };

  const testData = [];
  for (let i = 0; i < 23; i++) {
    testData.push({
      title: `My Listing ${i}`,
      avatar:
        "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
      description: `Description for my listing ${i}`,
      picture_url: [
        "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
      ],
      location: "New York, NY",
      price: 49.99,
    });
  }

  // fetchListings on start, for now, use testData
  useEffect(() => {
    fetchListings();
    setSavedListings(testData);
  }, []);

  const ListingInfo = ({ item, value }) => (
    <Space>
      {item}
      {value}
    </Space>
  );

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
                  cover={<img alt="pic" src={item.picture_url} />}
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
