import React from 'react';
import { Field, reduxForm, SubmissionError } from 'redux-form'
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Input from '../../../components/Input';
import { required, minLength6 } from '../../../utils/validators';

const FormWrapper = styled(Form)`
    display:flex;
    flex-direction: column;
`;

const Title = styled.h2`
    margin: 2rem;
`;

const LoginForm = ({ handleSubmit, errors }) => {
    // TODO create submission errors
    console.log(errors);
    return (
        <React.Fragment>
            <Title>Sign In</Title>
            <FormWrapper onSubmit={handleSubmit}>
                <Field label="Username" name="username" component={Input} type="text" validate={[required, minLength6]}/>
                <Field label="Password" name="password" component={Input} type="password" validate={[required, minLength6]}/>
                <Link to="/signup">SingUp?</Link>
                <Button type="submit">Login</Button>
            </FormWrapper>
        </React.Fragment>
    )
}

export default reduxForm({
    form: 'signin'
})(LoginForm)
