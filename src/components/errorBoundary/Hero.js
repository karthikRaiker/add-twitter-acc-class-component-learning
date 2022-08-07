import React from "react";

function Hero(props) {
  if (props.heroNme === "joker") {
    throw new Error("Not a Hero");
  }
  return (
    <div className="white" style={{ textAlign: "center" }}>
      {props.heroNme}
    </div>
  );
}

export default Hero;
