import * as ActionTypes from '../types';

const initialState = { isLoading: false, token: "", isAuthenticated: false, error: undefined };

// Auth reducer for login and signup loader
export const auth = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.AUTH_LOGIN:
    case ActionTypes.AUTH_SIGNUP:
      return {
        ...state,
        isLoading: !state.isLoading
      };
    case ActionTypes.AUTH_LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        isAuthenticated: true,
        isLoading: !state.isLoading
      };
    case ActionTypes.AUTH_SIGNUP_SUCCESS:
      return {
        ...state,
        isLoading: !state.isLoading
      };
    case ActionTypes.AUTH_LOGIN_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        isAuthenticated: false,
        isLoading: !state.isLoading
      };
    case ActionTypes.AUTH_SIGNUP_FAILURE:
      return {
        ...state,
        error: action.error,
        isLoading: !state.isLoading
      };
    case ActionTypes.SET_AUTH:
      return {
        ...state,
        token: action.payload.token,
        isAuthenticated: true
      }
    default:
      return state;
  }
};
