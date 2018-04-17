import axios from 'axios'

// constants for login
export const AUTHENTICATED = 'authenticated_user';
export const UNAUTHENTICATED = 'unauthenticated_user';
export const AUTHENTICATION_ERROR = 'authentication_error';

const URL = 'http://localhost:8080';

/*
 * action creator for generating POST method
 * --> stores token from API + handling errors
 * --> redirects to protected homepage
 */

export function logInAction({
  username,
  password
}, history) {
  return async(dispatch) => {
    try {
      const res = await axios.post(`${URL}/token/generate-token`, {username, password});

      dispatch({type: AUTHENTICATED});
      localStorage.setItem('user', res.data.token);
      history.push('/books');
    } catch (error) {
      dispatch({type: AUTHENTICATION_ERROR, payload: 'Invalid username or password'});
    }
  };
}

// user logout
export function logOutAction(history) {
  localStorage.clear();
  return {type: UNAUTHENTICATED};

}
