import React from "react";

function CountHoverRenderProps({ incrementCount, count }) {
  return (
    <>
      <h2 onMouseOver={incrementCount}>{count} times Hovered</h2>
    </>
  );
}

export default CountHoverRenderProps;
