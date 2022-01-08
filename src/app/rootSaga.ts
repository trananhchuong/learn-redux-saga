import counterSage from 'features/counter/counterSaga';
import { all } from 'redux-saga/effects';

export default function* rootSaga() {
  yield all([counterSage()]);
}
