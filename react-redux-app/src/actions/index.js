export const fetchTicker = () => {
  return dispatch => {
		dispatch({ type: 'FETCHING_TICKER_START'});
  }
}