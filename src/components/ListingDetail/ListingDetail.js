import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Affix, Row, Col, Button, Layout, message, Spin } from 'antd';
import { ArrowLeftOutlined, LoadingOutlined } from '@ant-design/icons';
import Pictures from './components/Pictures';
import TextualInfo from './components/TextualInfo';
import './ListingDetail.css';
import { useFetchListingDetail } from 'hooks';
import TopNavBar from 'components/Header/TopNavBar';

const { Header, Content } = Layout;

const ListingDetail = () => {
  const { listing_id } = useParams();
  const [listingDetail, setListingDetail] = useState({
    picture_urls: {},
  });

  const { isFetching, fetchListingDetail } = useFetchListingDetail();

  const fetch = async () => {
    const { fetchedListingDetail, error } = await fetchListingDetail(
      listing_id
    );
    if (error !== undefined) {
      message.error('Fetch listing detail failed');
    } else {
      setListingDetail(fetchedListingDetail);
    }
  };

  data = {
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
  useEffect(() => {
    //fetch();
    setListingDetail(data);
  }, []);

  const history = useHistory();
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

  return (
    <div>
      <Layout>
        <Affix offsetTop={0} className="app__affix-header">
          <TopNavBar />
        </Affix>
        <Content>
          {isFetching ? (
            <Spin
              style={{
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
              }}
              indicator={antIcon}
            />
          ) : (
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
          )}
        </Content>
      </Layout>
    </div>
  );
};

export default ListingDetail;
