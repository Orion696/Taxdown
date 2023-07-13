import { put, takeLatest, delay } from 'redux-saga/effects';
import { push } from 'connected-react-router'; 

function* loginSaga(action) {
  const { username, password } = action.payload;

  
  if (username === "admin" && password === "password") {
    yield delay(1000);
    yield put({ type: 'LOGIN_SUCCESS' });
    yield put(push('/dashboard'));
  } else {
    yield put({ type: 'LOGIN_FAILURE', error: 'Nombre de usuario o contraseña inválidos' });
  }
}

export default function* watchLoginSaga() {
  yield takeLatest('LOGIN_REQUEST', loginSaga);
}
