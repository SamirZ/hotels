import React from 'react';
import { connect, } from 'react-redux';
import { formValueSelector } from 'redux-form';
import { signUpStartAction } from '../../store/actions';

import { Wrapper } from '../../styles/Wrapper';

import Form from './form';

const selector = formValueSelector('signup');

function SignUp({ signUpStartAction, history, formPassword, errors }) {

    const onSubmit = ({ email, username, password, firstName, lastName }) => {
        signUpStartAction(email, username, password, firstName, lastName, history);
    }

    return (
        <Wrapper>
            <Form onSubmit={onSubmit} formPassword={formPassword} errors={errors}/>
        </Wrapper>
    )
}

export default connect(
    state => ({
        errors: state.auth.error,
        formPassword: selector(state, 'password')
    }),
    { signUpStartAction }
)(SignUp);