import React from 'react';
import moment from 'moment';
import styled, { css } from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons'

const Wrapper = styled.div`
    margin: 1rem 2rem .5rem;
    padding-bottom: .5rem;
    border-bottom: 1px solid black;
    display: flex;
`;

const Image = styled.img`
    height: 80px;
    margin-right: 1rem;
    border-radius: 50%;
`;

const TitleWrapper = styled.div`
    display: flex;
`;

const Title = styled.h5`
    width: max-content;
`;

const Date = styled.h6`
    color: rgba(0,0,0,.7);
`

const Feedback = styled.div`
    ${props => props.positive ? css`
        padding: 0px 10px 5px;
        color: green;
    ` : css`
        padding: 5px 10px 0px;
        color: red;
    `}
`;

export default function Review({
    author: { id: authorId, first_name, last_name },
    created_at,
    dislikes,
    hotelId,
    id,
    likes,
    message,
    positive
}) {
    return (
        <Wrapper>
            <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Missing_avatar.svg/425px-Missing_avatar.svg.png" />
            <div>
                <TitleWrapper>
                    <Title>{first_name} {last_name}</Title>
                    <Feedback positive={positive}>
                        {positive
                            ? <FontAwesomeIcon icon={faThumbsUp} />
                            : <FontAwesomeIcon icon={faThumbsDown} />
                        }
                    </Feedback>
                </TitleWrapper>
                <div>
                    {message}
                </div>
                <div>
                    <Date>
                        ({moment(created_at).format('LLL')})
                    </Date>
                </div>
            </div>
        </Wrapper>
    )
}
