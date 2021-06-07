import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { Row, Col, Button, message } from 'antd';
import {
  StarOutlined,
  StarFilled,
  EditFilled,
  DeleteFilled,
} from '@ant-design/icons';
import {
  useSaveListing,
  useUnsaveListing,
  useFetchSavedListings,
  useDeleteListing,
} from 'hooks';
import '../styles/Overview.css';
import { useHistory } from 'react-router';
import { checkValidToken } from 'utils';

import { TOKEN_KEY } from 'constants/constants';
import { Loading } from 'components';

const Overview = (props) => {
  const pageName = 'Listing Detail Page: Overview: ';
  const { listingInfo } = props;

  const history = useHistory();

  const listingId = listingInfo.listing_id;
  const sellerId = listingInfo.seller_id;

  const { isSaving, saveListing } = useSaveListing();
  const { isUnsaving, unsaveListing } = useUnsaveListing();
  const { isFetching, fetchSavedListings } = useFetchSavedListings();
  const { isDeleting, deleteListing } = useDeleteListing();

  const [isSave, setIsSave] = useState(false);
  const [isLogIn, setIsLogIn] = useState(false);
  const [isSeller, setIsSeller] = useState(false);
  const [userId, setUserId] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setUserId(checkValidToken());
    if (userId !== null) {
      setIsLogIn(true);
    } else {
      setIsLogIn(false);
      setIsSeller(false);
    }
  });

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1500);
  }, []);

  useEffect(() => {
    checkIsSeller();
  }, [isLogIn]);

  const checkIsSeller = () => {
    if (userId !== null) {
      console.log(userId);
      if (userId === sellerId) {
        console.log('Seller Listing Detail Page');
        setIsSeller(true);
      } else {
        console.log('Buyer Listing Detail Page');
        setIsSeller(false);
      }
    }
  };

  useEffect(() => {
    checkInSaveListing();
  }, [isLogIn]);

  // fetch save listings and check if current listing/item is in fetched listings
  const checkInSaveListing = async () => {
    const userId = checkValidToken();
    if (userId === null) {
      return;
    }
    console.log(`${pageName}Fetching My Listings`);
    const { listings, error } = await fetchSavedListings();
    if (error !== undefined) {
      console.log(`${pageName}Failed to get user saved listings`);
      message.error(`${pageName}Failed to get user saved listings`);
    } else {
      for (const item in listings) {
        if (listingId === item.listing_id) {
          setIsSave(true);
        }
      }
    }
  };

  //TODO: link to login page
  const onSaveClick = async () => {
    // check if token is still valid
    if (!isLogIn) {
      localStorage.removeItem(TOKEN_KEY);
      history.push('/login');
    } else if (isSave) {
      await unsave();
    } else {
      await save();
    }
  };

  const save = async () => {
    const { error } = await saveListing({
      userId: checkValidToken(),
      listingId,
    });
    if (error !== undefined) {
      message.error(`Save listing failed`);
    } else {
      setIsSave(!isSave);
    }
  };
  const unsave = async () => {
    const { error } = await unsaveListing(checkValidToken(), listingId);
    if (error !== undefined) {
      message.error(`Unsave listing failed`);
    } else {
      setIsSave(!isSave);
    }
  };

  // TODO: route to edit listing page
  const onEditClick = () => {
    console.log(`${pageName}Edit btn clicked`);
    console.log(`${pageName}Go to edit listing page`);
    history.push(`/edit/${listingId}`);
  };

  const onDeleteClick = async () => {
    //TODO: delete listing and route to previous page
    console.log(`${pageName}Delete btn clicked`);
    const { error } = await deleteListing(userId, listingId);
    if (error !== undefined) {
      message.error(`Delete listing failed`);
    } else {
      message.success(`Delete successful`);
      history.replace('/my-listings');
    }
  };

  const priceFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  return (
    <div>
      <Row>
        <Row className="catergries">Category : {listingInfo.category}</Row>
        <Col xs={24} sm={24} md={24} lg={24} xl={24} xl={24} xxl={16}>
          <Row className="product-name">{listingInfo.title}</Row>
          <Row className="date-location">
            <div>
              Listed {moment(listingInfo.date, 'YYYYMMDD').fromNow()} in{' '}
              {listingInfo.city_and_state}
            </div>
          </Row>
        </Col>
        <Col
          xs={24}
          sm={24}
          md={24}
          lg={24}
          xl={24}
          xxl={8}
          className="btn"
          align="right"
        >
          {isSeller ? (
            <div>
              <Button
                size="large"
                className="edit"
                onClick={onEditClick}
                icon={<EditFilled />}
              />

              <Button
                size="large"
                className="delete"
                onClick={onDeleteClick}
                icon={<DeleteFilled />}
              />
            </div>
          ) : isLoading || isFetching ? (
            <Loading />
          ) : (
            <Button
              size="large"
              className="star"
              icon={
                isSave === true ? ( //isSave for testing
                  <StarFilled style={{ color: 'black' }} />
                ) : (
                  <StarOutlined style={{ color: 'black' }} />
                )
              }
              onClick={onSaveClick}
            />
          )}
        </Col>
      </Row>
      <Row className="price">
        <div>{priceFormatter.format(listingInfo.price)}</div>
      </Row>
    </div>
  );
};

export default Overview;
