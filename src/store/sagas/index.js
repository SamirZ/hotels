import { all, fork } from 'redux-saga/effects';

import * as authSagas from './auth';
import * as hotelsSagas from './hotels';

export default function* rootSaga() {
  yield all([
    ...Object.values(authSagas),
    ...Object.values(hotelsSagas)
  ].map(fork));
}
