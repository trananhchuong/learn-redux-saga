import authSaga from 'features/auth/authSaga';
import counterSage from 'features/counter/counterSaga';
import { all } from 'redux-saga/effects';

export default function* rootSaga() {
  yield all([counterSage(), authSaga()]);
}
