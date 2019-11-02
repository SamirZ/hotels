import React from 'react';
import { Field, reduxForm } from 'redux-form'
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Input from '../../../components/Input';
import { required, isEmail, minLength2, minLength6, matchPasswords } from '../../../utils/validators';

const FormWrapper = styled(Form)`
    display:flex;
    flex-direction: column;
`;

const Title = styled.h2`
    margin: 2rem;
`;

const SignupForm = ({ handleSubmit, formPassword, errors }) => {
    // TODO create submission errors
    console.log(errors);
    return (
        <React.Fragment>
            <Title>Sign Up</Title>
            <FormWrapper onSubmit={handleSubmit}>
                <Field label="First Name" name="firstName" component={Input} type="text" validate={[required, minLength2]}/>
                <Field label="Last Name" name="lastName" component={Input} type="text" validate={[required, minLength2]} />
                <Field label="Email" name="email" component={Input} type="email" validate={[required, isEmail]}/>
                <Field label="Username" name="username" component={Input} type="text" validate={[required, minLength6]}/>
                <Field label="Password" name="password" component={Input} type="password" validate={[required, minLength6]}/>
                <Field label="Confirm Password" name="confirmPassword" component={Input} type="password" validate={[required, minLength6, matchPasswords(formPassword)]}/>
                <Link to="/signin">Have a account? Login</Link>
                <Button type="submit">Sign Up</Button>
            </FormWrapper>
        </React.Fragment>
    )
}

export default reduxForm({
    form: 'signup'
})(SignupForm)
