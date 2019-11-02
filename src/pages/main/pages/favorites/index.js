import React from 'react';
import { connect } from 'react-redux';
import { Spinner, Button } from 'react-bootstrap';
import styled from 'styled-components';
import { hotelsGetAction, hotelGetReviewsAction, addRemoveFromFavoritesAction } from '../../../../store/actions';
import { favoriteHotelsSelector, hotelsLoadingSelector } from '../../../../store/selectors';

import List from '../../../../components/List';
import HotelCard from '../../../../components/HotelCard';
import { SpinnerWrapper, Wrapper } from '../../styles';

const Favorites = ({ 
    history,
    isLoading,
    hotels,
    hotelsGetAction,
    hotelGetReviewsAction,
    addRemoveFromFavoritesAction
}) => {
    if (isLoading) {
        return (
            <SpinnerWrapper>
                <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>
            </SpinnerWrapper>
        );
    }

    if (hotels.length === 0) {
        return (
            <SpinnerWrapper border>
                <h5>
                    No Results Found!
                </h5>
            </SpinnerWrapper>
        )
    }

    return (
        <div>
            <Wrapper>
                <Button onClick={() => hotelsGetAction()}>Load Hotels</Button>
            </Wrapper>
            <List>
                {hotels.map((hotel, i) => 
                    <HotelCard
                        key={i}
                        history={history}
                        {...hotel}
                        addRemoveFromFavoritesAction={addRemoveFromFavoritesAction}
                        hotelGetReviewsAction={hotelGetReviewsAction} />)}
            </List>
        </div>
    )
}

export default connect(
    state => ({
        hotels: favoriteHotelsSelector(state),
        isLoading: hotelsLoadingSelector(state)
    }),
    {
        hotelsGetAction,
        hotelGetReviewsAction,
        addRemoveFromFavoritesAction
    }
)(Favorites);
