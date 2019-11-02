import { call, put, takeEvery } from 'redux-saga/effects';
import { GET_HOTELS, GET_HOTEL_REVIEWS, POST_FAVORITE, GET_ONE_HOTEL } from '../types';
import { 
  hotelsGetSuccessAction,
  hotelsGetFailedAction,
  hotelGetDetailsSuccessAction,
  hotelGetDetailsFailedAction,
  hotelGetReviewsSuccessAction,
  hotelGetReviewsFailedAction,
  addRemoveFromFavoritesSuccessAction,
  addRemoveFromFavoritesFailedAction
} from '../actions';
import {
  getHotelsCall,
  getHotelCall,
  getHotelReviewsCall,
  getFavoritesCall,
  postFavoriteCall
} from '../../api';

function* getHotels() {
  try {
    let hotels = yield call(getHotelsCall);
    const favorites = yield call(getFavoritesCall) ;

    // Add the isFavorite propery to hotels to determine if they are in the favories section
    hotels = hotels.map(hotel => ({...hotel, isFavorite: favorites.map(f=>f.id).indexOf(hotel.id) > -1}));

    yield put(hotelsGetSuccessAction(hotels));
  } catch (e) {
    yield put(hotelsGetFailedAction(e));
  }
}
export function* getHotelsSaga() {
  yield takeEvery(GET_HOTELS, getHotels);
}


function* getHotelDetails({payload: { id }}) {
  try {
    let hotel = yield call(getHotelCall, {id});

    console.log(hotel);

    yield put(hotelGetDetailsSuccessAction(hotel));
  } catch (e) {
    yield put(hotelGetDetailsFailedAction(e));
  }
}

export function* getHotelDetailsSaga() {
  yield takeEvery(GET_ONE_HOTEL, getHotelDetails);
}

function* getHotelReviews({ payload: { id } }) {
  try {
    const data = yield call(getHotelReviewsCall, { id });
    yield put(hotelGetReviewsSuccessAction([
      {
        id,
        data
      }
    ]));
  } catch (e) {
    yield put(hotelGetReviewsFailedAction(e));
  }
}

export function* getHotelReviewsSaga() {
  yield takeEvery(GET_HOTEL_REVIEWS, getHotelReviews);
}

function* postHotelFavorite({ payload: { data: { id, isFavorite }} }) {
  try {
    yield call(postFavoriteCall, { id, isFavorite });
    yield put(addRemoveFromFavoritesSuccessAction({ id, isFavorite }));
  } catch (e) {
    yield put(addRemoveFromFavoritesFailedAction(e));
  }
}

export function* postHotelFavoriteSaga() {
  yield takeEvery(POST_FAVORITE, postHotelFavorite);
}