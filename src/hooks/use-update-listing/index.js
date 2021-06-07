import axios from 'axios';
import { useState } from 'react';

const useUpdateListing = () => {
  const [isUpdating, setIsUpdating] = useState(false);

  const updateListing = async (parameters) => { // todo

    const url = `/api/listing`;

    setIsUpdating(true);
    try {
      const response = await axios.post(url, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      if (response.status === 200) {
        returnObj.ListingId = response.data;
      }
    } catch (err) {
      returnObj.error = err;
    } finally {
      setIsUpdating(false);
      return returnObj;
    }
  };

  return { isUpdating, updateListing };
};

export default useUpdateListing;

