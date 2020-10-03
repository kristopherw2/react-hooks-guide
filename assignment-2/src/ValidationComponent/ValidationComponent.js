import React from "react";

const validationComponent = (props) => {
  
  return props.length >= 5 ? (
		<p>Text Long Enough</p>
	) : (
		<p>Text Too Short</p>
	);
}

export default validationComponent