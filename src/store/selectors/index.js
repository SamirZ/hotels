import { createSelector } from 'reselect';

const hotelsStore = store => store.hotels;

export const hotelsSelector = createSelector(
    hotelsStore,
    hotels => hotels.data
)

export const favoriteHotelsSelector = createSelector(
    hotelsStore,
    hotels => hotels.data.filter(hotel => hotel.isFavorite)
)

export const hotelsLoadingSelector = createSelector(
    hotelsStore,
    hotels => hotels.isLoading
)