import React from 'react'

// "connect" component to the store by importing { connect }
import { connect } from 'react-redux';

const Ticker = () => {
  return (
    <div>
      <h1>Bitcoin Price on Gemini Exchange</h1>
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
  {}
  )(Ticker);