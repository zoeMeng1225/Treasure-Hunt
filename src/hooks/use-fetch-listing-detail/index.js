import axios from 'axios';
import { useState } from 'react';
import { TOKEN_KEY } from '../../constants/constants';

const useFetchListingDetail = () => {
  const [isFetching, setIsFetching] = useState(false);

  const fetchListingDetail = async (productId) => {
    // define the request
    const url = `/listing?listing_id=${productId}`;
    console.log("Fetch listing detail url created: ", url);

    const returnObj = {};

    setIsFetching(true);
    try {
      const response = await axios.get(url);
      if (response.status === 200) {
        returnObj.fetchedListingDetail = response.data;
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
