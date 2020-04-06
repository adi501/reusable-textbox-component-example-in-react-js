import React from "react";

import "./style.css";

const Textbox = props => {
  return (
    <input
      id={props.id}
      name={props.name}
      type={props.type}
      placeholder={props.placeholder}
      className={props.className}
      onChange={props.onChangeHandler}
      readOnly={props.isreadOnly}
      value={props.value}
    />
  );
};

Textbox.defaultProps = {
  type: "text",

  className: "txtStyle1",

  isreadOnly: false
};

export default Textbox;
