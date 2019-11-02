import * as ActionTypes from '../types';

// LOGIN actions
export function loginStartAction(username, password, history) {
    return {
        type: ActionTypes.AUTH_LOGIN,
        payload: {
            username,
            password,
            history
        }
    };
}

export function loginSuccessAction(data) {
    return {
        type: ActionTypes.AUTH_LOGIN_SUCCESS,
        payload: {
            ...data
        }
    };
}

export function loginFailedAction(error) {
    return {
        type: ActionTypes.AUTH_LOGIN_FAILURE,
        payload: {
            error
        }
    };
}

// SIGNUP actions
export function signUpStartAction(email, username, password, firstName, lastName, history) {
    return {
        type: ActionTypes.AUTH_SIGNUP,
        payload: {
            email,
            username,
            password,
            first_name: firstName,
            last_name: lastName,
            history
        }
    };
}

export function signUpSuccessAction(data) {
    return {
        type: ActionTypes.AUTH_SIGNUP_SUCCESS,
        payload: {
            ...data
        }
    };
}

export function signUpFailedAction(error) {
    return {
        type: ActionTypes.AUTH_SIGNUP_FAILURE,
        payload: {
            error
        }
    };
}

// LOGOUT action
export function logoutAction(history) {
    return {
        type: ActionTypes.AUTH_LOGOUT,
        payload: {
            history
        }
    };
}

// SET AUTH action
export function setAuth(token) {
    return {
        type: ActionTypes.SET_AUTH,
        payload: {
            token
        }
    }
}

