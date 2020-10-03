import React from "react";

const validationComponent = (props) => {
  
  return props.length >= 5 ? "Text Long Enough" : "Text Too Short";
}

export default validationComponent