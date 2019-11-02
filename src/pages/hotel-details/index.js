import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
    hotelGetDetailsAction,
    hotelGetReviewsAction,
    addRemoveFromFavoritesAction
} from '../../store/actions';
import HotelCard from '../../components/HotelCard';

const HotelDetails = ({
    hotelId,
    hotel,
    hotelGetDetailsAction,
    hotelGetReviewsAction,
    addRemoveFromFavoritesAction
}) => {
    useEffect(() => {
        hotelGetDetailsAction(hotelId)
    }, []);
    return (
        <div>
            {hotel && 
                <HotelCard
                    noLink
                    {...hotel}
                    hotelGetReviewsAction={hotelGetReviewsAction}
                    addRemoveFromFavoritesAction={addRemoveFromFavoritesAction}
                    />}
        </div>
    )
}

export default connect(
    (state, props) => ({
        hotel: state.hotels.data.find(hotel => `${hotel.id}` === props.match.params.id),
        hotelId: props.match.params.id
    }),
    {
        hotelGetDetailsAction,
        hotelGetReviewsAction,
        addRemoveFromFavoritesAction
    }
)(HotelDetails);