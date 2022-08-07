import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

function CounterPage(props) {
  let [count, setCount] = useState(0);
  const increment = () => {
    setCount((previouState) => previouState + 1);
  };
  const decrement = () => {
    setCount((previouState) => previouState - 1);
  };
  return (
    <div className="Counter">
      {!props.initialCount && (
        <Link to="/" className="white">
          <FaArrowLeft />
        </Link>
      )}
      <div style={{ color: "white", marginTop: "2rem" }}>
        count value : {count}
      </div>
      <button className=" Submit" onClick={increment}>
        increment
      </button>
      <button className=" Submit" onClick={decrement}>
        decrement
      </button>
    </div>
  );
}

export default CounterPage;
