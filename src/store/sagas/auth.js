import { call, put, takeEvery, take } from 'redux-saga/effects';
import { } from 'react-router-dom';
import { AUTH_LOGIN, AUTH_SIGNUP, AUTH_LOGOUT } from '../types';
import { loginSuccessAction, loginFailedAction, signUpSuccessAction, signUpFailedAction } from '../actions';
import { login as loginCall, signUp as signUpCall } from '../../api';
import setAuthorizationToken from '../../utils/setAuthorizationToken';

// LOGIN sagas
function* login({ payload: { username, password, history } }) {
  try {
    const data = yield call(loginCall, { username, password });
    setAuthorizationToken(data.token);
    history.push('/');
    yield put(loginSuccessAction(data));
  } catch (e) {
    yield put(loginFailedAction(e.non_field_errors));
  }
}

export function* loginSaga() {
  yield takeEvery(AUTH_LOGIN, login);
}

// SIGNUP sagas
function* signUp({ payload: { email, last_name, first_name, username, password, history } }) {
  try {
    const data = yield call(signUpCall, { email, last_name, first_name, username, password });
    history.push('/signIn');
    yield put(signUpSuccessAction(data));
  } catch (e) {
    yield put(signUpFailedAction(e.non_field_errors));
  }
}

export function* signUpSaga() {
  yield takeEvery(AUTH_SIGNUP, signUp);
}

// Logout saga
function* logout({payload: { history}}) {
  localStorage.removeItem('Token');
  history.push('/')
  window.location.reload();
  setAuthorizationToken();
  yield take(AUTH_LOGOUT);
}

export function* logOutSaga() {
  yield takeEvery(AUTH_LOGOUT, logout);
}
