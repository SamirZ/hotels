import styled from 'styled-components';

export const SpinnerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-height: 100%;
    height: 500px;
    border: ${props => props.border ? '1px solid rgba(0,0,0,.125)' : undefined};
`;

export const Wrapper = styled.div`
    margin: 1rem 2rem;
`;