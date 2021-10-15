export const SET_USERNAME = 'SET_USERNAME';
export const SET_USER_TOKEN = 'SET_USER_TOKEN';


export const setUsername = username => {
  return {
    type: SET_USERNAME,
    username,
  };
};

export const setUserToken = token => {
  return {
    type: SET_USER_TOKEN,
    token,
  };
};