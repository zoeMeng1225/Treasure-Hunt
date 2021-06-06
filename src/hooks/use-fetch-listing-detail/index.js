import axios from 'axios';
import { useState } from 'react';

const useFetchListingDetail = () => {
  const [isFetching, setIsFetching] = useState(true);

  const fetchListingDetail = async (productId) => {
    // define the request
    const url = '/api/listing';
    console.log('Fetch listing detail url created: ', url);

    const returnObj = {};

    try {
      const response = await axios.get(url, {
        params: {
          listing_id: productId,
        },
      });
      if (response.status === 200) {
        returnObj.fetchedListingDetail = response.data;
        console.log(`Successfully fetched listing detail`);
      }
    } catch (err) {
      returnObj.error = err.response.status;
    } finally {
      setIsFetching(false);
      return returnObj;
    }
  };

  return { isFetching, fetchListingDetail };
};

export default useFetchListingDetail;
