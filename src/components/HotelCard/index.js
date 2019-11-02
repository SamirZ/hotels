import React from 'react';
import moment from 'moment';
import { Col, Card, Button, Accordion } from 'react-bootstrap';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarOutline } from '@fortawesome/free-regular-svg-icons';
import HotelReviews from '../HotelReviews';
import Favorite from '../Favorite';

const StyledAccordion = styled(Accordion)`
    ${props => props.noLink
        ? css`border: none !important;` 
        : css`border-bottom: 1px solid rgba(0,0,0,.125) !important;`}
`;

const StyledCard = styled(Card)`
    ${props => props.noLink
        ? css`border: none !important;` 
        : css``}
`;

const CardContent = styled.div`
    display: flex;
    height: 100%;
    border: none !important;
    @media (max-width: 992px) {
        flex-direction: column;
    }
`;

const Star = styled(FontAwesomeIcon)`
    color: #FFE650;
`;

const StyledCardImage = styled(Card.Img)`
    max-width: 400px;
    object-fit: cover;
`;

const StyledCardText = styled(Card.Text)`
    font-size: 14px;
    margin: .5rem 0;
`;

const CardTitle = styled(Card.Title)`
    display: inline-flex;
    justify-content: space-between;
    width: 100%;
`;

const CardSubtitle = styled(Card.Subtitle)`
    color: #6A6A6A;
`;

const PriceWrapper = styled.div`
    display: inline-flex;
    justify-content: flex-end;
    width: 100%;
`

const DateButtonWrapper = styled.div`
    display: inline-flex;
    justify-content: space-between;
    width: 100%;
`;

const Name = styled.span`
    border-bottom: 2px solid transparent;
    transition: border 0.25s ease-in-out;
    cursor: pointer;
    pointer-events: ${props => props.noLink ? 'none' : 'all'};
    &:hover {
        border-bottom: 2px solid rgba(0,0,0,.7);
    }
`;

export default function HotelCard(
    {
        city,
        country,
        date,
        description,
        dislikes,
        id,
        image,
        likes,
        location,
        name,
        price,
        stars,
        user,
        isFavorite,
        addRemoveFromFavoritesAction,
        hotelGetReviewsAction,
        noLink
    }
) {
    const openInNewWindow = (id) => {
        window.open(`http://localhost:3000/hotel/${id}`, "hoteldetails", "menubar=1,resizable=1,width=500,height=600")
    }
    return (
        <Col xs={12}>
            <StyledAccordion noLink={noLink} defaultActiveKey="1">
                <StyledCard noLink={noLink}>
                    <CardContent>
                        <StyledCardImage src={image} />
                        <Card.Body>
                            <CardTitle>
                                <span>
                                    <Name noLink={noLink} onClick={() => openInNewWindow(id)}>{name}</Name>
                                    <Favorite isFavorite={isFavorite} id={id} addRemoveFromFavoritesAction={addRemoveFromFavoritesAction} />
                                </span>
                                <span>
                                    {[...Array(stars).keys()].map((key) => <Star key={key} icon={faStar} />)}
                                    {[...Array(5 - stars).keys()].map((key) => <Star key={key} icon={faStarOutline} />)}
                                </span>
                            </CardTitle>
                            <CardSubtitle>{city} - {country}</CardSubtitle>
                            <StyledCardText>
                                {description}
                            </StyledCardText>
                            <PriceWrapper>
                                <h3>{price}&euro;</h3>
                            </PriceWrapper>
                            <DateButtonWrapper>
                                ({moment(date).format('L')})
                                <Accordion.Toggle as={Button} onClick={() => {
                                    hotelGetReviewsAction(id);
                                }} eventKey="0">
                                    Show Reviews
                                </Accordion.Toggle>
                            </DateButtonWrapper>
                        </Card.Body>
                    </CardContent>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <HotelReviews id={id} />
                        </Card.Body>
                    </Accordion.Collapse>
                </StyledCard>
            </StyledAccordion>
        </Col>
    )
}
