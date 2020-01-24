const initialState = {
	isLoading: false,
	ticker: null,
	error: ''
};

// build reducer / arguments are state and action
const reducer = (state = initialState, action) => {
	//add switch to start building types
	switch(action.type) {
    case 'FETCHING_TICKER_START' :
      return {
        ...state,
        isLoading : true
      };
		case 'FETCHING_DATA_SUCCESS' :
			return {
				...state,
				isLoading : false,
				ticker: action.payload
			};
    default: 
      return state
  }
}

export { reducer }