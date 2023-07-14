import {
  FETCH_FORM_FIELDS_REQUEST,
  FETCH_FORM_FIELDS_SUCCESS,
  FETCH_FORM_FIELDS_FAILURE,
  SUBMIT_FORM_REQUEST,
  SUBMIT_FORM_SUCCESS,
  SUBMIT_FORM_FAILURE
} from '../actions/formActions';

const initialState = {
  fields: [],
  isLoading: false,
  error: null,
  formSubmitSuccess: false,
};

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FORM_FIELDS_REQUEST:
      return { ...state, isLoading: true, error: null };
    case FETCH_FORM_FIELDS_SUCCESS:
      return { ...state, isLoading: false, fields: action.payload };
    case FETCH_FORM_FIELDS_FAILURE:
      return { ...state, isLoading: false, error: action.payload };
    case SUBMIT_FORM_REQUEST:
      return { ...state, isLoading: true, error: null };
    case SUBMIT_FORM_SUCCESS:
      return { ...state, isLoading: false, formSubmitSuccess: true };
    case SUBMIT_FORM_FAILURE:
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
};

export default formReducer;
  