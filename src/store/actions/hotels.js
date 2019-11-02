import * as ActionTypes from '../types';

// GET HOTEL LIST actions
export function hotelsGetAction() {
    return {
        type: ActionTypes.GET_HOTELS,
    };
}

export function hotelsGetSuccessAction(data) {
    return {
        type: ActionTypes.GET_HOTELS_SUCCESS,
        payload: [
            ...data
        ]
    };
}

export function hotelsGetFailedAction(error) {
    return {
        type: ActionTypes.GET_HOTELS_FAILURE,
        payload: {
            error
        }
    };
}

// GET HOTEL DETAILS actions
export function hotelGetDetailsAction(id) {
    return {
        type: ActionTypes.GET_ONE_HOTEL,
        payload: {
            id
        }
    };
}

export function hotelGetDetailsSuccessAction(data) {
    return {
        type: ActionTypes.GET_ONE_HOTEL_SUCCESS,
        payload: {
            ...data
        }
    };
}

export function hotelGetDetailsFailedAction(error) {
    return {
        type: ActionTypes.GET_ONE_HOTEL_FAILURE,
        payload: {
            error
        }
    };
}

// GET HOTEL REVIEWS
export function hotelGetReviewsAction(id) {
    return {
        type: ActionTypes.GET_HOTEL_REVIEWS,
        payload: {
            id
        }
    };
}

export function hotelGetReviewsSuccessAction(data) {
    return {
        type: ActionTypes.GET_HOTEL_REVIEWS_SUCCESS,
        payload: [
            ...data
        ]
    };
}

export function hotelGetReviewsFailedAction(error) {
    return {
        type: ActionTypes.GET_HOTEL_REVIEWS_FAILURE,
        payload: {
            error
        }
    };
}

// AddRemoveFromFavorites
export function addRemoveFromFavoritesAction(data) {
    return {
        type: ActionTypes.POST_FAVORITE,
        payload: {
            data
        }
    };
}

export function addRemoveFromFavoritesSuccessAction(data) {
    return {
        type: ActionTypes.POST_FAVORITE_SUCCESS,
        payload: {
            data
        }
    };
}

export function addRemoveFromFavoritesFailedAction(error) {
    return {
        type: ActionTypes.POST_FAVORITE_FAILURE,
        payload: {
            error
        }
    };
}
