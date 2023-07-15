import {
  FETCH_FORM_FIELDS_REQUEST,
  FETCH_FORM_FIELDS_SUCCESS,
  FETCH_FORM_FIELDS_FAILURE,
  SUBMIT_FORM_REQUEST,
  SUBMIT_FORM_SUCCESS,
  SUBMIT_FORM_FAILURE,
  ADD_FORM_SUBMISSION,
  DELETE_FORM_SUBMISSION,
  EDIT_FORM_SUBMISSION
} from '../actions/formActions';

const initialState = {
  fields: [],
  isLoading: false,
  error: null,
  formSubmitSuccess: false,
  submissions: {}
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
    case ADD_FORM_SUBMISSION:
      return {
        ...state,
        submissions: {
          ...state.submissions,
          [action.payload.taxId]: [
            ...(state.submissions[action.payload.taxId] || []),
            action.payload.formData
          ]
        }
      };
      case DELETE_FORM_SUBMISSION:
        return {
          ...state,
          submissions: {
            ...state.submissions,
            [action.payload.taxId]: state.submissions[action.payload.taxId].filter(
              submission => submission.id !== action.payload.submissionId
            )
          }
        };
  
      case EDIT_FORM_SUBMISSION:
        return {
          ...state,
          submissions: {
            ...state.submissions,
            [action.payload.taxId]: state.submissions[action.payload.taxId].map(
              submission => submission.id === action.payload.submissionId ? {...submission, ...action.payload.updatedData} : submission
            )
          }
        };
  
      default:
        return state;
    }
  };
  
  export default formReducer;