import React from "react";
import "./App.css";

// components
import Ticker from "./components/Ticker";
import Header from "./components/Header";

function App() {
	return (
		<div className="App">
			<Header />
			<Ticker />
		</div>
	);
}

export default App;
