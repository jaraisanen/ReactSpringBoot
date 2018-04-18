import {AUTHENTICATED, UNAUTHENTICATED, AUTHENTICATION_ERROR} from '../actions/ActionTypes';

// states for handling if user is authenticated or not

const defaultState = {
  authenticated: false,
  error: null
};

export default function (state = defaultState, action) {
  switch (action.type) {
    case AUTHENTICATED:
      return {
        ...state,
        authenticated: true
      };
    case UNAUTHENTICATED:
      return {
        ...state,
        authenticated: false
      };
    case AUTHENTICATION_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
}