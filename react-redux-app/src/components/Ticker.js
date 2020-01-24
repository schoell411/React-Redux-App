import React from 'react'
import Loader from 'react-loader-spinner'

// "connect" component to the store by importing { connect }
import { connect } from 'react-redux';

// import action
import { fetchTicker } from '../actions';

const Ticker = props => {
  return (
    <div>
      <h1>Bitcoin Price on Gemini Exchange</h1>
      <button onClick={props.fetchTicker}>Fetch Current Bitcoin Price</button>
      {!props.ticker && (<h2>no price loaded</h2>)}
      {props.isLoading && (
	      <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000} //3 secs
        />
      )}
      {props.ticker && !props.isLoading && (
	      <div>
          <h2>Current Bitcoin asking price: ${props.ticker.ask}</h2>
          <p>Last bid: ${props.ticker.bid}</p>
        </div>
)}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    isLoading : state.isLoading,
    ticker: state.ticker,
    error: state.error}
}

export default connect(
  mapStateToProps,
  { fetchTicker }
  )(Ticker);