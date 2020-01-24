import React from "react";
import Loader from "react-loader-spinner";
import { Container, Col, Button } from "reactstrap";

// "connect" component to the store by importing { connect }
import { connect } from "react-redux";

// import action
import { fetchTicker } from "../actions";

const Ticker = props => {
	const dailyVariation = () => {
		let x = (props.ticker.open - props.ticker.close).toFixed(2);
		return x;
	};

	return (
		<Container className="content">
			<Col>
				<Button onClick={props.fetchTicker}>
					Fetch Current Bitcoin Price
				</Button>
				{!props.ticker && <h3>No Price Loaded</h3>}
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
						<h3>Current Bitcoin asking price: ${props.ticker.ask}</h3>
						<p>Last bid: ${props.ticker.bid}</p>
						<p className={`${dailyVariation() < 0 ? "negative" : ""}`}>
							Daily Variation: ${dailyVariation()}
						</p>
					</div>
				)}
			</Col>
		</Container>
	);
};

const mapStateToProps = state => {
	return {
		isLoading: state.isLoading,
		ticker: state.ticker,
		error: state.error
	};
};

export default connect(mapStateToProps, { fetchTicker })(Ticker);
