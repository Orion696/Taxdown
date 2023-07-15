export const FETCH_FORM_FIELDS_REQUEST = 'FETCH_FORM_FIELDS_REQUEST';
export const FETCH_FORM_FIELDS_SUCCESS = 'FETCH_FORM_FIELDS_SUCCESS';
export const FETCH_FORM_FIELDS_FAILURE = 'FETCH_FORM_FIELDS_FAILURE';

export const fetchFormFieldsRequest = (id) => {
  return {
    type: FETCH_FORM_FIELDS_REQUEST,
    payload: id
  }
}

export const fetchFormFieldsSuccess = fields => {
  return {
    type: FETCH_FORM_FIELDS_SUCCESS,
    payload: fields
  }
}

export const fetchFormFieldsFailure = error => {
  return {
    type: FETCH_FORM_FIELDS_FAILURE,
    payload: error
  }
}

export const SUBMIT_FORM_REQUEST = 'SUBMIT_FORM_REQUEST';
export const SUBMIT_FORM_SUCCESS = 'SUBMIT_FORM_SUCCESS';
export const SUBMIT_FORM_FAILURE = 'SUBMIT_FORM_FAILURE';

export const submitFormRequest = (formData) => {
  return {
    type: SUBMIT_FORM_REQUEST,
    payload: formData,
  }
}

export const submitFormSuccess = () => {
  return {
    type: SUBMIT_FORM_SUCCESS,
  }
}

export const submitFormFailure = error => {
  return {
    type: SUBMIT_FORM_FAILURE,
    payload: error,
  }
}

export const ADD_FORM_SUBMISSION = 'ADD_FORM_SUBMISSION';
export const DELETE_FORM_SUBMISSION = 'DELETE_FORM_SUBMISSION';

export const addFormSubmission = (taxId, formData) => {
  return {
    type: ADD_FORM_SUBMISSION,
    payload: {
      taxId,
      formData
    }
  }
}

export const deleteFormSubmission = (taxId, submissionId) => {
  return {
    type: DELETE_FORM_SUBMISSION,
    payload: {
      taxId,
      submissionId
    }
  }
}
