import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Review from '../Review';

const Message = styled.h5`
    padding: 1.25rem;
    margin: 0 1rem;
`;

const HotelReviews = ({ id, reviews }) =>
    (<div>
        {reviews.length > 0
            ? reviews.map((review, i) => <Review key={i} {...review} />)
            : <Message>No reviews found!</Message>
        }
    </div>);

export default connect(
    ({hotelsReviews: { data }}, { id }) => {
        const hotelReviews = data.find(record => record.id === id);
        return {
            reviews: hotelReviews ? hotelReviews.data : []
        }
    }
)(HotelReviews);