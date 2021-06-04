import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Row, Col, Button, Layout, message } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { BASE_URL, TOKEN_KEY } from "../../constants/constants";
import Pictures from "./components/Pictures";
import TextualInfo from "./components/TextualInfo";
import "./ListingDetail.css";

const ListingDetail = (props) => {
  const testMode = true;
  const [listingDetail, setListingDetail] = useState({
    picture_urls: {}
  });
  const { Header, Content } = Layout;
  //TODO: product_id and userID is passed from pervious page
  const product_id = "1622614549717";
  const userID = "lichengrao3";
  const createUrl = () => {};
  const fakeData = {
    listing_id: "1622614549717",
    title: "Frankie's Bicycle",
    price: 149.99,
    category: "Bicycle",
    seller_id: "lichengrao3",
    seller_name: "Chan Rao",
    description: "This is a Cannondale CAAD 10 from 2031",
    item_condition: "Like New",
    brand: "Cannondale",
    address: "2922 Northern Blvd #2104, Long Island City, NY 11101, USA",
    picture_urls: {
      a: "https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png",
      b: "https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png",
      c: "https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png",
    },
    date: "2021-06-02T17:01:14.421Z",
    geo_location: {
      lat: 40.7493004,
      lon: -73.9364811,
    },
    city_and_state: "Long Island City, NY",
  };

  const fetchListingDetail = async () => {
    const url = `/listing?listing_id=${product_id}`;
    console.log("Listing detail url created: ", url);

    const opt = {
      method: "GET",
      url: url,
    };

    try {
      console.log("Fetching listing detail");
      const response = await axios(opt);
      if (response.status === 200) {
        console.log(response);
        setListingDetail(response.data);
      }
    } catch (err) {
      message.error("Fetch listing detail failed");
      console.log("Fetch listing detail failed: ", err.message);
    }
  };
 
  useEffect(() => {
    createUrl();

    fetchListingDetail();
    if (testMode) {
      setListingDetail(fakeData);
    }
  }, []);

  const history = useHistory();
  return (
    <div>
      <Layout>
        <Header>Header</Header>
        <Content>
          <Col span={20} offset={2}>
            <Row
              span={24}
              onClick={() => {
                history.goBack();
              }}
            >
              <Button className="back-btn" icon={<ArrowLeftOutlined />}>
                Back
              </Button>
            </Row>
            <Row className="content">
              <Col xs={{ span: 24 }} lg={{ span: 10, gutter: 2 }}>
                <Pictures pictureUrls={listingDetail.picture_urls} />
              </Col>
              <Col xs={{ span: 24 }} lg={{ offset: 2, span: 10 }}>
                <TextualInfo listingInfo={listingDetail} userID={userID} />
              </Col>
            </Row>
          </Col>
        </Content>
      </Layout>
    </div>
  );
};

export default ListingDetail;
