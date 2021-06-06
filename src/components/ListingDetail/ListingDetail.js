import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Row, Col, Button, Layout, message } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import Pictures from './components/Pictures';
import TextualInfo from './components/TextualInfo';
import './ListingDetail.css';
import { useFetchListingDetail } from 'hooks';

const { Header, Content } = Layout;

const ListingDetail = (props) => {
  const productId = '1622754560957';
  const [listingDetail, setListingDetail] = useState({
    picture_urls: {},
  });

  const { isFetching, fetchListingDetail } = useFetchListingDetail();

  //TODO: product_id and userID is passed from pervious page
  const testMode = true; //use fake data when is true
 
  

  const fakeData = {
    listing_id: '1622787358818',
    title: "Chan's Computer",
    price: 1499.99,
    category: 'Electronics',
    seller_id: 'lichengrao3',
    seller_name: 'Chan Rao',
    seller_email: 'lichengrao@gmail.com',
    description: 'This is a Cannondale CAAD 10 from 2014 ',
    item_condition: 'Like New',
    brand: 'Apple',
    address: '2922 Northern Blvd #2104, Long Island City, NY 11101, USA',
    picture_urls: {
      '1622787358818Capture001.png':
        '1622787358818Capture001.png?generation=1622787359391920&alt=media',
      '1622787359406Capture001.png':
        '1622787359406Capture001.png?generation=1622787359764777&alt=media',
    },
    date: '2021-06-04T06:15:59.824Z',
    geo_location: {
      lat: 40.7493004,
      lon: -73.9364811,
    },
    city_and_state: 'Long Island City, NY',
  };

  const fetch = async () => {
    const { fetchedListingDetail, error } = await fetchListingDetail(productId);
    if (error !== undefined) {
      message.error('Fetch listing detail failed');
    } else {
      console.log(fetchedListingDetail);
      setListingDetail(fetchedListingDetail);
    }
  };

  useEffect(() => {
    fetch();
    if (testMode) {
      console.log('using fake date');
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
              <Col
                xs={{ span: 24 }}
                sm={{ span: 24 }}
                md={{ span: 24 }}
                lg={{ span: 24 }}
                xl={{ span: 24 }}
                xxl={{ span: 10, gutter: 2 }}
              >
                <Pictures pictureUrls={listingDetail.picture_urls} />
              </Col>
              <Col
                xs={{ span: 24 }}
                sm={{ span: 24 }}
                md={{ span: 24 }}
                lg={{ span: 24 }}
                xl={{ span: 24 }}
                xxl={{ offset: 2, span: 10 }}
              >
                <TextualInfo listingInfo={listingDetail} />
              </Col>
            </Row>
          </Col>
        </Content>
      </Layout>
    </div>
  );
};

export default ListingDetail;
