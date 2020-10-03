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

	deleteLetterHandler = (letterIndex) => {
    const text = this.state.newText.split('');
    text.splice(letterIndex, 1)
    const updatedText = text.join('')
    this.setState({newText: updatedText})
	};

	render() {
		const textLength = this.state.newText.length;

		const charLetter = this.state.newText.split('').map((text, index) => {
					return (
						<CharComponent
							click={() => this.deleteLetterHandler(index)}
              letter={text}
              key={index}
						/>
          );
  })       
		return (
			<div>
				<input
					type='text'
					onChange={(event) => this.textUpdateHandler(event)}
					value={this.state.newText}
				/>
				<ValidationComponent length={textLength} />
				{charLetter}
			</div>
		);
	}
}

export default App;
