const initialState = {
  isLoggedin: false,
  user: null
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'USER_LOGIN':
      // we need es6 rest to be able to use the rest operator
      // state = {...state, isLoggedin: action.payload}
      // es5:
      state = Object.assign({}, state, {
        isLoggedin: action.isLoggedin,
        user: action.user
      });
      break;
    case 'USER_LOGOUT':
      state = Object.assign({}, state, {
        isLoggedin: action.isLoggedin,
        user: action.user
      });
      break;
  }
  return state;
};

export default userReducer;
