import axios from 'axios';

export const fetchTicker = () => {
  return dispatch => {
    dispatch({ type: 'FETCHING_TICKER_START'});
    axios
      .get('https://api.gemini.com/v2/ticker/btcusd')
      .then(response => {
        console.log(response)
        dispatch({ type: 'FETCHING_DATA_SUCCESS', payload: response.data})
      })
      .catch(error => console.log(error))
  }
}