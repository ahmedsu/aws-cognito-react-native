import * as actions from '../actions/userActions';

const initialState = {
  username: '',
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_USERNAME: {
      console.log('username', action.username);
      return {
        ...state,
        username: action.username,
      };
    }
    default:
      return {...state};
  }
};

export default userReducer;
