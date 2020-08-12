import React from 'react';

const UserOutput = (props) => {
  
  return (
		<div>
			<p>This is the first {props.userName}</p>
  <p>this is the second {props.stateName}</p>
		</div>
	);
}

export default UserOutput;