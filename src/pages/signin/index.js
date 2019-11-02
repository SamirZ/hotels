import React from 'react';
import { connect } from 'react-redux';
import { loginStartAction } from '../../store/actions';

import { Wrapper } from '../../styles/Wrapper';

import Form from './form';

function SignIn({ loginStartAction, history, errors }) {

    const onSubmit = ({username, password}) => {
        loginStartAction(username, password, history);
    }

    return (
        <Wrapper>
            <Form onSubmit={onSubmit} errors={errors}/>
        </Wrapper>
    )
}

export default connect(
    state => ({
        errors: state.auth.error
    }),
    { loginStartAction }
)(SignIn);