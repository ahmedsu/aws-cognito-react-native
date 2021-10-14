export const SIGN_IN = 'SIGN_IN';
export const SIGN_OUT = 'SIGN_OUT';

export const signIn = userToken => ({
  type: SIGN_IN,
  userToken,
});

export const signOut = () => ({
  type: RESTORE_TOKEN,
});
