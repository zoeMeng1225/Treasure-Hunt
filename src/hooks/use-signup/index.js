import axios from 'axios';
import { useState } from 'react';

const useSignup = () => {
  const [isSigningup, setIsSigningup] = useState(false);

  const signup = async ({}) => {
    setIsLoggingIn(true);

    try {
      const response = await axios.post('/api/login', {
        user_id: username,
        password: password,
      });

      if (response.status === 200) {
        localStorage.setItem(TOKEN_KEY, response.data.token);
        return response.data.name;
      }
    } catch (err) {
      console.log(err.message);
    } finally {
      setIsLoggingIn(false);
    }
  };

  return { isLoggingIn, login };
};

export default useLogin;
