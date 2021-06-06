import axios from 'axios';
import { useState } from 'react';

// const parameters = {
//     category : undefined,
//     keyword : 'phone',
//     latitude : '70.01',
//     longititude : '-40.00',
//  }

// const parameters = {
//     category : 'Cars',
//     keyword : undefined,
//     latitude : undefined,
//     longititude : undefined,
//  }

const useSearch = () => {
  const [isSearching, setIsSearching] = useState(false);

  const search = async (parameters) => {
    // define the request
    const url = `/api/search`;

    // if (parameters.category == undefined) {
    //   const paramsNew = {
    //     category: parameters.category,
    //   };
    // } else if (parameters.latitude == undefined) {
    //   const paramsNew = {
    //     keyword: parameters.keyword,
    //   };
    // } else {
    //   const paramsNew = {
    //     keyword: parameters.keyword,
    //     latitude: parameters.latitude,
    //     longititude: parameters.longititude,
    //     radius: '10',
    //   };
    // }

    console.log(parameters);

    const returnObj = {};

    setIsSearching(true);
    try {
      const response = await axios.get(url, {
        params: parameters,
      });
      if (response.status === 200) {
        returnObj.searchResults = response.data;
      }
    } catch (err) {
      returnObj.error = err.response.status;
    } finally {
      setIsSearching(false);
      return returnObj;
    }
  };

  return { isSearching, search };
};

export default useSearch;
