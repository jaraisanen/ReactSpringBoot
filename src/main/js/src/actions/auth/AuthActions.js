import axios from 'axios'
import {AUTHENTICATED, UNAUTHENTICATED, AUTHENTICATION_ERROR, URL} from '../ActionTypes';

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
      history.go('/books');
    } catch (error) {
      dispatch({
        type: AUTHENTICATION_ERROR,
        payload: 'Problem with: ' + error
      });
    }
  };
}

// user logout
export function logOutAction() {
  localStorage.clear();
  return {type: UNAUTHENTICATED};

}
