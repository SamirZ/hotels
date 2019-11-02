import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartOutline } from '@fortawesome/free-regular-svg-icons';

const Heart = styled(FontAwesomeIcon)`
    color: red;
    margin: 0 10px;
    cursor: pointer;
    transition: all 0.25s ease-in-out;
    &:hover {
        transform: scale(1.3);
    }
`;

const Favorite = ({id, isFavorite, addRemoveFromFavoritesAction}) => {
    const icon = isFavorite ? faHeart : faHeartOutline;
    return <Heart onClick={()=>addRemoveFromFavoritesAction({
        id,
        isFavorite: !isFavorite
    })} icon={icon} />
}

export default Favorite;