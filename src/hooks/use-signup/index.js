import axios from 'axios';
import { useState } from 'react';
import { TOKEN_KEY } from '../../constants/constants';

const useSignup = () => {
  const [isSigningUp, setIsSigningUp] = useState(false);

  const signup = async ({
    username,
    password,
    first_name,
    last_name,
    email,
    address_line_1,
    city,
    state,
    zipcode,
  }) => {
    setIsSigningUp(true);

    try {
      const response = await axios.post('/signup', {
        user_id: username,
        password: password,
        first_name: first_name,
        last_name: last_name,
        email: email,
        address: `${address_line_1}, ${city}, ${state} ${zipcode}`,
      });
      if (response.status === 200) {
        localStorage.setItem(TOKEN_KEY, response.data.token);
        return response.data.name;
        console.log("Successfully signed up!");
      }
    } catch (err) {
      console.log(err.message);
    } finally {
      setIsSigningUp(false);
    }
  };

  return { isSigningUp, signup };
};

export default useSignup;
