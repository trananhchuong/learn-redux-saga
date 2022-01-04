import { takeEvery, takeLatest, delay, put } from '@redux-saga/core/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { increment, incrementSaga, incrementSagaSuccess } from './counterSlice';

function* handleIncrementSaga(action: PayloadAction<number>) {
  // console.log('status loading....');
  yield delay(1000);


  yield put(incrementSagaSuccess(action.payload));
}

export default function* counterSage() {
  // yield takeEvery(increment().type, log);
  // console.log("🚀 ~ file: counterSaga.ts ~ line 12 ~ function*counterSage ~ incrementSaga", incrementSaga.toString())
  // yield takeEvery(incrementSaga.toString(), handleIncrementSaga);
  yield takeLatest(incrementSaga.toString(), handleIncrementSaga);
}
