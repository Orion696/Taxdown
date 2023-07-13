import { all } from 'redux-saga/effects';
import watchLoginSaga from './authSaga';
import watchFetchTaxesSaga from './taxSaga';

export default function* rootSaga() {
  yield all([
    watchLoginSaga(),
    watchFetchTaxesSaga()
  ]);
}
