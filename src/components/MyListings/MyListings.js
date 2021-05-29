import React, { useEffect, useState } from "react";
import { Layout, List, Space, message } from "antd";
import axios from "axios";

import { BASE_URL, TOKEN_KEY } from "../../constants/constants";
import "./MyListings.style.css";

const { Header, Content } = Layout;

const MyListings = () => {
  // listings stores listings data stored in db
  const [myListings, setMyListings] = useState([]);

  // fetchListings
  const fetchListings = async () => {
    const url = `${BASE_URL}/my-listings`;

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
        setMyListings(response.data);
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
        "https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png",
      ],
      created_date: "5/29/2021",
      price: 49.99,
    });
  }

  // fetchListings on start, for now, use testData
  useEffect(() => {
    fetchListings();
    setMyListings(testData);
  }, []);

  const ListingInfo = ({ item, value }) => (
    <Space>
      {item}
      {value}
    </Space>
  );

  return (
    <div className="my-listings-page">
      <Layout>
        <Header>Header</Header>
        <Content className="my-listings-content">
          <List
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
            itemLayout="vertical"
            size="large"
            pagination={{
              onChange: (page) => {
                console.log(page);
              },
              pageSize: 5,
            }}
            dataSource={myListings}
            footer={
              <div>
                <b>Treasure Hunt</b> footer part
              </div>
            }
            renderItem={(item) => (
              <List.Item
                className="list-item"
                key={item.listing_id}
                actions={[
                  <ListingInfo
                    item="Price : "
                    value={item.price}
                    key="listing_price"
                  />,
                  <ListingInfo
                    item="Created At : "
                    value={item.created_date}
                    key="listing_date"
                  />,
                ]}
                extra={<img width={272} alt="logo" src={item.picture_url[0]} />}
              >
                <List.Item.Meta
                  title={item.title}
                  description={item.description}
                />
              </List.Item>
            )}
          />
        </Content>
      </Layout>
    </div>
  );
};

export default MyListings;
