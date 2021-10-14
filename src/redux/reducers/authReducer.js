import * as actions from '../actions/authActions';

const initialState = {
  isLoading: true,
  isSignout: false,
  userToken: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SIGN_IN:
      return {
        ...state,
        isSignout: false,
        userToken: action.userToken,
      };
    case actions.SIGN_OUT:
      return {
        ...state,
        isSignout: true,
        userToken: null,
      };
    default:
      return {...state};
  }
};

export default authReducer;
