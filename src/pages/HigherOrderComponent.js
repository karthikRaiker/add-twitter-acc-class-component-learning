import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import CountClick from "../components/higherOrderComponent/CountClick";
import CountHover from "../components/higherOrderComponent/CountHover";

function HigherOrderComponent() {
  let style = {
    margin: "1.5rem 0",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
  };
  return (
    <>
      <Link to="/" className="white">
        <FaArrowLeft />
      </Link>
      <div className="white" style={style}>
        <h1>Higher Order Component</h1>
        <CountClick name="When you click this button 5 times increment" />
        <CountHover name="When you hover this text 10 times increment" />
      </div>
    </>
  );
}

export default HigherOrderComponent;
