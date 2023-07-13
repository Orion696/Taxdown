const initialState = {
    taxes: [],
    isLoading: false,
    error: null,
  };
  
  const taxesReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_TAXES_REQUEST':
        return { ...state, isLoading: true, error: null };
      case 'FETCH_TAXES_SUCCESS':
        return { ...state, isLoading: false, taxes: action.payload };
      case 'FETCH_TAXES_FAILURE':
        return { ...state, isLoading: false, error: action.error };
      default:
        return state;
    }
  };
  
  export default taxesReducer;
  