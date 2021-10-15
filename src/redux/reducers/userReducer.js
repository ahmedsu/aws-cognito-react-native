import * as actions from '../actions/userActions';

const initialState = {
  username: '',
  token: ''
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_USERNAME: {
      return {
        ...state,
        username: action.username,
      };
    }
    case actions.SET_USER_TOKEN: {
      return {
        ...state,
        token: action.token,
      };
    }
    default:
      return {...state};
  }
};

export default userReducer;
