import axios from 'axios';
import { useState } from 'react';
import { TOKEN_KEY } from '../../constants/constants';

// SAVE and UNSAVE listing 
const useSaveListing = () => {
  const [isSaving, setIsSaving] = useState(false);

  const saveListing = async ({ save, userId, listingId }) => {
    const url = `/save`;
    const request = save == true ? 'POST' : 'DELETE';
    const opt = {
      method: request,
      url: url,
      headers: {
         Authorization: `Bearer ${localStorage.getItem(TOKEN_KEY)}`,
      },
      data: {
        user_id: userId,
        listing_id: listingId,
      },
    };

    const returnObj = {};
    setIsSaving(true);
    try {
      const response = await axios(opt);
      if (response.status === 200) {
        console.log('Save/Unsave listing successful');
      }
    } catch (err) {
      returnObj.error = err.response.status;
    } finally {
      setIsSaving(false);
      return returnObj;
    }
  };
  return { isSaving, saveListing };
};

export default useSaveListing;
