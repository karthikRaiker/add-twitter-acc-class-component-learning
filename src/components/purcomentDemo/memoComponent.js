import React from "react";

function memoComponent({ name }) {
  console.log("************ memo functional component *******");
  return <div className="white">memoComponent name: {name}</div>;
}

export default React.memo(memoComponent);
