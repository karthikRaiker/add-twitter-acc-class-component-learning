import React from "react";
import withCounter from "./withCounterHigherOrderComp";

function CountHover({ incrementCount, count, name }) {
  return (
    <>
      <div className="white">{name}</div>
      <h2 onMouseOver={incrementCount}>{count} times Hovered</h2>
    </>
  );
}

export default withCounter(CountHover, 10);
