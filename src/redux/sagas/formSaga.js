import { put, takeLatest, call } from 'redux-saga/effects';
import axios from 'axios';

import {
  FETCH_FORM_FIELDS_REQUEST,
  FETCH_FORM_FIELDS_SUCCESS,
  FETCH_FORM_FIELDS_FAILURE,
  SUBMIT_FORM_REQUEST,
  SUBMIT_FORM_SUCCESS,
  SUBMIT_FORM_FAILURE
} from '../actions/formActions';

function* fetchFormFieldsSaga(action) {
  try {
    const response = yield call(axios.get, `http://localhost:3001/taxes/${action.payload}/form`);
    yield put({ type: FETCH_FORM_FIELDS_SUCCESS, payload: response.data.inputFields });
  } catch (error) {
    yield put({ type: FETCH_FORM_FIELDS_FAILURE, error: error.message });
  }
}

function* submitFormSaga(action) {
  try {
    yield call(axios.post, 'http://localhost:3001/forms', action.payload);
    yield put({ type: SUBMIT_FORM_SUCCESS, payload: action.payload });
  } catch (error) {
    yield put({ type: SUBMIT_FORM_FAILURE, error: error.message });
  }
}

export default function* watchFormSaga() {
  yield takeLatest(FETCH_FORM_FIELDS_REQUEST, fetchFormFieldsSaga);
  yield takeLatest(SUBMIT_FORM_REQUEST, submitFormSaga);
}
