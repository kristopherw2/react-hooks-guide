import React, { Component } from "react";
import ValidationComponent from "./ValidationComponent/ValidationComponent";
import CharComponent from "./CharComponent/CharComponent";

class App extends Component {
	state = {
		newText: "",
	};

	textUpdateHandler = (event) => {
		this.setState({ newText: event.target.value });
	};

	render() {
    const textLength = this.state.newText.length;
    
    
		let charLetter = null;
		charLetter = (
			<div>
				{this.state.newText.split("").map((text) => {
					return <CharComponent letter={text} />;
				})}
			</div>
		);
		return (
			<div>
				<input
					type='text'
					onChange={(event) => this.textUpdateHandler(event)}
				/>
				<ValidationComponent length={textLength} />
				{charLetter}
			</div>
		);
	}
}

export default App;
