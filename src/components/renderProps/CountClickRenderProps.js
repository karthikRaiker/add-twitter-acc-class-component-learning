import React from "react";

function CountClickRenderProps(props) {
  let { count, incrementCount } = props;
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
      <button style={style} onClick={incrementCount}>
        {count} times clicked
      </button>
    </>
  );
}

export default CountClickRenderProps;
