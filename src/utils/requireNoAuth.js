import React, { useEffect } from 'react';
import { connect } from 'react-redux';

export default function (ComposedComponent) {

    const DoNotAuthenticate = ({isAuthenticated, history, ...rest}) => {
        useEffect(() => {
            if (!isAuthenticated) {
                history.push('/');
            }
        }, [isAuthenticated, history])
        return <ComposedComponent history={history} {...rest} />;
    }

    return connect((state) => ({
        isAuthenticated: !state.auth.isAuthenticated
    }))(DoNotAuthenticate);
}