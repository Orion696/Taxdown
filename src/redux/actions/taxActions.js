export const FETCH_TAXES_REQUEST = 'FETCH_TAXES_REQUEST';
export const FETCH_TAXES_SUCCESS = 'FETCH_TAXES_SUCCESS';
export const FETCH_TAXES_FAILURE = 'FETCH_TAXES_FAILURE';

export const fetchTaxesRequest = () => {
  return {
    type: FETCH_TAXES_REQUEST
  }
}

export const fetchTaxesSuccess = taxes => {
  return {
    type: FETCH_TAXES_SUCCESS,
    payload: taxes
  }
}

export const fetchTaxesFailure = error => {
  return {
    type: FETCH_TAXES_FAILURE,
    payload: error
  }
}

export const fetchTaxes = () => {
  return {
    type: FETCH_TAXES_REQUEST
  }
}
