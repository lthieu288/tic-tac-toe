import React from "react";

function Cell(props) {
  const className = "cell" + (props.highlight ? " highlight" : "");
  return (
    <button className={className} onClick={props.onClick}>
      {props.value}
    </button>
  );
}

export default Cell;
