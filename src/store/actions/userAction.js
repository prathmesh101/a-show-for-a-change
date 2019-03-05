import { USER_LOGIN } from './type.js';

const userLogin = ({ isLoggedIn, first_name, last_name, email, tokenId }) => {
  return {
    type: USER_LOGIN,
    payload: { isLoggedIn, first_name, last_name, email, tokenId }
  };
};

export { userLogin };