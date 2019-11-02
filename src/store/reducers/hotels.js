import * as ActionTypes from '../types';

const initialState = { isLoading: false, data: [], error: undefined };

// HOTELS reducer
export const hotels = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_HOTELS:
    case ActionTypes.GET_ONE_HOTEL:
      return {
        ...state,
        isLoading: !state.isLoading
      };
    case ActionTypes.GET_HOTELS_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isLoading: !state.isLoading
      };
    case ActionTypes.GET_ONE_HOTEL_SUCCESS:
      return {
        ...state,
        data: [...state.data, action.payload],
        isLoading: !state.isLoading
      };
    case ActionTypes.GET_HOTELS_FAILURE:
    case ActionTypes.GET_ONE_HOTEL_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        isLoading: !state.isLoading
      };
    case ActionTypes.POST_FAVORITE_SUCCESS:
      return {
        ...state,
        data: state.data.map(record =>
          ({
            ...record,
            isFavorite:
              record.id === action.payload.data.id
                ? action.payload.data.isFavorite
                : record.isFavorite
          })
        )

      }
    default:
      return state;
  }
};

export const hotelsReviews = (state = { data: [], error: undefined }, action) => {
  switch (action.type) {
    case ActionTypes.GET_HOTEL_REVIEWS:
      return {
        ...state
      };
    case ActionTypes.GET_HOTEL_REVIEWS_SUCCESS:
      return {
        ...state,
        data: [...state.data, ...action.payload]
      };
    case ActionTypes.GET_HOTEL_REVIEWS_FAILURE:
      return {
        ...state,
        error: action.payload.error
      };
    default:
      return state;
  }
};
