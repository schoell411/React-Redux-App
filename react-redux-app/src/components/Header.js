import React from "react";
import { Jumbotron } from "reactstrap";
import Bitcoin from "../images/bitcoin-icon.png";
import Gemini from "../images/gemini-logo.png";

const Header = () => {
	return (
		<Jumbotron>
			<img src={Gemini} alt="gemini-logo" />
			<h1>Gemini Cryptocurrency Exchange</h1>
			<img src={Bitcoin} alt="bitcoin-logo" />
		</Jumbotron>
	);
};

export default Header;
