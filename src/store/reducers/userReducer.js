const initialState = {
  isLoggedIn: false,
  first_name: '',
  last_name: '',
  email: '',
  tokenId: null
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'USER_LOGIN':
      // we need es6 rest to be able to use the rest operator
      // state = {...state, isLoggedIn: action.payload}
      // es5:
      state = Object.assign({}, state, {
        isLoggedIn: action.payload.isLoggedIn,
        first_name: action.payload.first_name,
        last_name: action.payload.last_name,
        email: action.payload.email,
        tokenId: action.payload.tokenId
      });
      break;
    case 'USER_LOGOUT':
      state = Object.assign({}, state, {
        isLoggedIn: action.payload.isLoggedIn,
        user: action.payload.user
      });
      break;
  }
  return state;
};

export default userReducer;
