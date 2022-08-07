import React from "react";

function conditionalStyle({ item }) {
  console.log(item);
  return (
    <div className="cardStyle">
      <div
        className="cardStyle-value"
        style={item.value > 20 ? { color: "red" } : { color: "green" }}
      >
        Value
      </div>
    </div>
  );
}

export default conditionalStyle;
