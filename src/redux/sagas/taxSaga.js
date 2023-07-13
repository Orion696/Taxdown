import { put, takeLatest, call } from 'redux-saga/effects';
import axios from 'axios';

function* fetchTaxesSaga() {
  try {
    const response = yield call(axios.get, 'http://localhost:3001/taxes');
    yield put({ type: 'FETCH_TAXES_SUCCESS', payload: response.data });
  } catch (error) {
    yield put({ type: 'FETCH_TAXES_FAILURE', error: error.message });
  }
}


export default function* watchFetchTaxesSaga() {
  yield takeLatest('FETCH_TAXES_REQUEST', fetchTaxesSaga);
}
