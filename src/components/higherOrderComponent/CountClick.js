import React from "react";
import withCounter from "./withCounterHigherOrderComp";

function CountClick(props) {
  let { count, incrementCount, name } = props;
  const style = {
    width: "200px",
    margin: "1rem auto",
    padding: "0.4rem 0.8rem",
    cursor: "pointer",
    backgroundColor: "green",
    color: "white",
    borderRadius: "5px",
  };
  return (
    <>
      <div className="white">{name}</div>
      <button style={style} onClick={incrementCount}>
        {count} times clicked
      </button>
    </>
  );
}

export default withCounter(CountClick, 5);
